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
        if (GM.data.state != 0){
            return;
        }

        let rotations = [[45, 0, 315], [90, 0, 270], [135, 180, 225]],
            self = this,
            coords = self.el.components.position.data,
            newCoords = new THREE.Vector3(data.x, data.y, 0),                      // 0,0
            oldCoords = new THREE.Vector3(coords.x, coords.z, 0),                  // 1,0
            color = GM.map.getPix(newCoords.x + size / 2, newCoords.y + size / 2);

        if (color.data[2] > 0) { // mob in next position
            // code for attacking the mob.
            let mob = document.querySelector(`#e${newCoords.x + size / 2}-${newCoords.y + size / 2}`).components.mob;
            let sprcoord = { x: 0, z: 0 };
            new TWEEN.Tween(sprcoord)
                .to({ x: newCoords.x - oldCoords.x, z: newCoords.y - oldCoords.y }, 500)
                .yoyo(true)
                .repeat(1)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(() => {
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
                .start();
        } else {
            if (color.data[1] > 0) { // item in next position
                document.querySelector(`#b${newCoords.x + size / 2}-${newCoords.y + size / 2}`).components.item.get()
                    .then(item => {
                        let msg = `Found ${item.n}`;
                        switch (item.t) {
                            case 1: // heart
                                self.data.health = Math.min(self.data.health += 5, 25);
                                msg += `\nHealth = ${self.data.health}/25`;
                                break;
                            case 2: // sword
                                if (item.d > this.attack) this.attack = item.d;
                                break;
                            case 3: // shield
                                this.defense = Math.max(this.defense, item.b);
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

            let currentCameraRotation = GM.camera.getAttribute('rotation'),
                oldCameraRotation = currentCameraRotation.y,
                newCameraRotation = rotations[Math.abs(~(newCoords.y - oldCoords.y))][Math.abs(~(newCoords.x - oldCoords.x))],
               
                cw = Math.abs(oldCameraRotation - newCameraRotation),
                ccw = Math.abs(oldCameraRotation - (newCameraRotation - 360));

            if (ccw < cw) {
                newCameraRotation -= 360;
            }

            let targetCameraRotation = { x: -27, y: newCameraRotation },
                currentCameraPosition = GM.camera.getAttribute('position'),
                targetCameraPosition = { x: Math.sin(degToRad(newCameraRotation)) * 2, z: Math.cos(degToRad(newCameraRotation)) * 2 };

            // move the player
            new TWEEN.Tween({
                x: coords.x, z: coords.z,
                camposx: currentCameraPosition.x,
                camposz: currentCameraPosition.z,
                camrotx: currentCameraRotation.x,
                camroty: currentCameraRotation.y
            })
                .to({
                    x: newCoords.x, z: newCoords.y,
                    camposx: targetCameraPosition.x,
                    camposz: targetCameraPosition.z,
                    camrotx: targetCameraRotation.x,
                    camroty: targetCameraRotation.y
                }, 1000)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .onUpdate(function () {
                    self.el.setAttribute('position', `${this.x} .25 ${this.z}`);
                    GM.camera.setAttribute('position', `${this.camposx} 0.8 ${this.camposz}`);
                    GM.camera.setAttribute('rotation', `${this.camrotx} ${this.camroty} 0`);
                })
                .onComplete(() => {
                    GM.updateTileWithPlayer(newCoords);
                    GM.camera.rot = (newCameraRotation + 360) % 360;
                    GM.camera.setAttribute('rotation', `${targetCameraRotation.x} ${GM.camera.rot} 0`);
                    if (GM.data.state > 2){
                        return;
                    }
                    GM.data.state = 1;
                    GM.update();
                })
                .start();
        }
    },
    hit: function (amount) {
        let damage = amount * (rnd(100) < this.defense ? 0 : 1),
            ent = document.createElement('a-entity');

        ent.setAttribute('billboard-shader', { index: 14, lookup: damage > 0 ? 5 : 1 });

        ent.setAttribute('mixin', 'spr');
        ent.setAttribute('auto-destroy', '');
        this.el.appendChild(ent);
        if (damage > 0) {
            this.data.health -= damage;
            if (this.data.health <= 0) {
                this.sprite.setAttribute('billboard-shader', { index: 15 });
                GM.data.state = 3;
                GM.message.write(`Game Over`, 1);
            }
            else {
                GM.message.write(`Ouch!\nHealth = ${this.data.health}/25`);
            }
        }
    }
});