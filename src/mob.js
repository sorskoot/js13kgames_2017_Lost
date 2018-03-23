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
        if (this.data.health <= 0) {
            return;
        }
        let tx, ty, color, self = this,
            playerPosition = new THREE.Vector3(GM.player.components.position.data.x, GM.player.components.position.data.z, 0),
            mobPosition = new THREE.Vector3(this.pos.data.x, this.pos.data.z, 0);

        if (playerPosition.distanceTo(mobPosition) < 1.9) {// player is next to the mob attack
            tx = playerPosition.x - mobPosition.x;
            ty = playerPosition.y - mobPosition.y;

            let coords = { x: self.pos.data.x, z: self.pos.data.z };

            var tween = new TWEEN.Tween(coords)
                .to({ x: self.pos.data.x + tx, z: self.pos.data.z + ty }, 500)
                .yoyo(true).repeat(1)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    self.el.setAttribute('position', `${coords.x} .25 ${coords.z}`);
                })
                .onComplete(() => {
                    //show splat
                    GM.player.components.player.hit(this.data.damage);
                })
                .start(); // Start the tween immediately.    

        }
        else { //move
            let tries = 10;
            do {
                tx = rnd(3) - 1;
                ty = rnd(3) - 1;
                color = GM.map.getPix(self.data.x + tx, self.data.y + ty);
                tries--;
                if (tries === 0) {
                    return;
                }
            } while (color.data[0] === 0 || color.data[2] !== 0)

            let old = GM.map.getPix(self.data.x, self.data.y);
            old.data[2] = 0;
            GM.map.putPix(old, self.data.x, self.data.y);
            color.data[2] = 0x88;
            self.data.x += tx;
            self.data.y += ty;
            GM.map.putPix(color, self.data.x, self.data.y);
            let coords = { x: self.pos.data.x, z: self.pos.data.z };
            var tween = new TWEEN.Tween(coords)
                .to({ x: self.pos.data.x + tx, z: self.pos.data.z + ty }, 400 + rnd(400))
                .delay(rnd(250))
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    self.el.setAttribute('position', `${coords.x} .25 ${coords.z}`);
                    self.el.id = `e${coords.x + size / 2}-${coords.z + size / 2}`;
                })
                .start();
        }
    },
    hit: function (amount) {

        this.data.health -= amount;
        let ent = document.createElement('a-entity');
        ent.setAttribute('billboard-shader', { index: 14, lookup: 12 });
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