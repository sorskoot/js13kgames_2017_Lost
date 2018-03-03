/*global AFRAME, GM, THREE, size, TWEEN, rnd*/

AFRAME.registerComponent('player', {
    schema: {
        health: { value: 'int', default: 25 }
    },
    init: function () {
        this.foundPieces = 0;
        this.attack = 1;
        this.defense = 0;
        this.sprite = document.querySelector('#player-sprite');
    },
    move: function (data) {
        let rotations = [[45, 0, 315], [90, 0, 270], [135, 180, 225]];
        var s = this;
        if (GM.data.state != 0) return;
        var coords = s.el.components.position.data;
        var a = new THREE.Vector3(data.x, data.y, 0);                      // 0,0
        var b = new THREE.Vector3(coords.x, coords.z, 0);                  // 1,0
        
        GM.camera.rot = rotations[Math.abs(~(a.y - b.y))][Math.abs(~(a.x - b.x))];

        coords.r = GM.camera.rot;
        if (a.distanceTo(b) > 1.9 || a.distanceTo(b) < .2)
            return;
        var c = GM.map.getPix(data.x + size / 2, data.y + size / 2);
        if (c.data[2] > 0) { // mob in next position
            // code for attacking the mob.
            let mob = document.querySelector(`#e${data.x + size / 2}-${data.y + size / 2}`).components.mob;
            let sprcoord = { x: 0, z: 0 };
            new TWEEN.Tween(sprcoord) // Create a new tween that modifies 'coords'.
                .to({ x: a.x - b.x, z: a.y - b.y }, 500) // Move to (300, 200) in 1 second.
                .yoyo(true)
                .repeat(1)
                .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
                .onUpdate(() => { // Called after tween.js updates 'coords'.
                    this.sprite.setAttribute('position', `${sprcoord.x} 0 ${sprcoord.z}`);
                })
                .onComplete(() => {
                    mob.hit(this.attack + rnd(2));
                    setTimeout(() => {
                        if (GM.data.state > 2) return;
                        GM.data.state = 1;
                        GM.update();
                    }, 1000);
                })
                .start(); // Start the tween immediately.            
        } else {
            if (c.data[1] > 0) { // item in next position
                document.querySelector(`#b${data.x + size / 2}-${data.y + size / 2}`).components.item.get()
                    .then(p => {
                        let msg = `Found ${p.n}`;
                        switch (p.t) {
                            case 1: // heart
                                s.data.health = Math.min(s.data.health += 5, 25);
                                msg += `\nHealth = ${s.data.health}/25`;
                                break;
                            case 2: // sword
                                if (p.d > this.attack) this.attack = p.d;
                                break;
                            case 3: // shield
                                this.defense = Math.max(this.defense, p.b);
                                break;
                            case 8: // plane piece
                                this.foundPieces++;
                                if (this.foundPieces < 5) {
                                    msg += `\nOnly ${5 - this.foundPieces} pieces left`;
                                } else {
                                    GM.data.state = 3;
                                    GM.message.write(`You found all pieces\nand escaped the planet!`, 1);
                                    return;
                                }
                                break;
                        }
                        GM.message.write(msg);
                    });
            }
            // move the player
            new TWEEN.Tween(coords)
                .to({ x: data.x, z: data.y }, 1000)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    s.el.setAttribute('position', `${coords.x} .25 ${coords.z}`);
                })
                .onComplete(() => {
                    // TODO: Tweening
                    let newCameraPos = { x: Math.sin(degToRad(GM.camera.rot)) * 2, y: Math.cos(degToRad(GM.camera.rot)) * 2 };
                    GM.camera.setAttribute('rotation', `-27 ${GM.camera.rot} 0`);
                    GM.camera.setAttribute('position', `${newCameraPos.x} 0.8 ${newCameraPos.y}`);

                    if (GM.data.state > 2) return;
                    GM.data.state = 1;
                    GM.update();
                })
                .start(); // Start the tween immediately.
        }
    },
    hit: function (amount) {

        let damage = amount * (rnd(100) < this.defense ? 0 : 1);

        let ent = document.createElement('a-entity');

        ent.setAttribute('billboard-texture', { index: 14, lookup: damage > 0 ? 5 : 1 });

        ent.setAttribute('mixin', 'spr');
        ent.setAttribute('auto-destroy', '');
        this.el.appendChild(ent);
        if (damage > 0) {
            this.data.health -= damage;

            if (this.data.health <= 0) {
                this.sprite.setAttribute('billboard-texture', { index: 15 });
                GM.data.state = 3;
                GM.message.write(`Game Over`, 1);
            }
            else {
                GM.message.write(`Ouch!\nHealth = ${this.data.health}/25`);
            }
        }
    }
});