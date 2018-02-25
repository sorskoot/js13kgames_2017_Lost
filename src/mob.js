AFRAME.registerComponent('mob', {
    schema: {
        x: { value: 'float' },
        y: { value: 'float' },
        health: { value: 'int' },
        damage: { value: 'int' }
    },
    init: function () {
        this.pos = this.el.components.position;
    },
    move: function () {
        // A* would be nice... for now, just move random...
        if (this.data.health <= 0) return;
        let tx, ty, c, s = this,
            playerPosition = GM.player.components.position.data;
        var a = new THREE.Vector3(playerPosition.x, playerPosition.z, 0);                      // 0,0
        var b = new THREE.Vector3(this.pos.data.x, this.pos.data.z, 0);
        if (a.distanceTo(b) < 1.9) {// player is next to the mob attack
            tx = a.x - b.x;
            ty = a.y - b.y;
            let coords = { x: s.pos.data.x, z: s.pos.data.z };
            var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({ x: s.pos.data.x + tx, z: s.pos.data.z + ty }, 500) // Move to (300, 200) in 1 second.
                .yoyo(true).repeat(1)
                .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    s.el.setAttribute('position', `${coords.x} .25 ${coords.z}`);
                })
                .onComplete(() => {
                    //show splat
                    GM.player.components.player.hit(this.data.damage);
                })
                .start(); // Start the tween immediately.    

        }
        else { //move
            do {
                tx = rnd(3) - 1;
                ty = rnd(3) - 1;
                c = GM.map.getPix(s.data.x + tx, s.data.y + ty);
            } while (c.data[0] == 0 || c.data[2] != 0)

            let old = GM.map.getPix(s.data.x, s.data.y);
            old.data[2] = 0;
            GM.map.putPix(old, s.data.x, s.data.y);
            c.data[2] = 0x88;
            s.data.x += tx;
            s.data.y += ty;
            GM.map.putPix(c, s.data.x, s.data.y);
            let coords = { x: s.pos.data.x, z: s.pos.data.z };
            var tween = new TWEEN.Tween(coords)
                .to({ x: s.pos.data.x + tx, z: s.pos.data.z + ty }, 400 + rnd(400))
                .delay(rnd(250))
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    s.el.setAttribute('position', `${coords.x} .25 ${coords.z}`);
                    s.el.id = `e${coords.x + size / 2}-${coords.z + size / 2}`;
                })
                .start();
        }
    },
    hit: function (amount) {

        this.data.health -= amount;
        let ent = document.createElement('a-entity');
        ent.setAttribute('billboard-texture', { index: 14, lookup: 12 });
        ent.setAttribute('mixin', 'spr');
        ent.setAttribute('auto-destroy', '');
        this.el.appendChild(ent);
        if (this.data.health <= 0) {
            this.el.id = '';
            let pix = GM.map.getPix(this.data.x, this.data.y);
            pix.data[2] = 0;
            GM.map.putPix(pix, this.data.x, this.data.y);
            setTimeout(() => {
                this.el.setAttribute('auto-destroy', '');
            }, 500);
        }
    }
});