AFRAME.registerComponent('player', {
    schema: {
        health: { value: 'int', default: 10 }
    },
    init: function () {
        this.foundPieces = 0;
    },
    move: function (data) {
        var s = this;
        if (GM.data.state != 0) return;
        var coords = s.el.components.position.data;
        var a = new THREE.Vector3(data.x, data.y, 0);                      // 0,0
        var b = new THREE.Vector3(coords.x, coords.z, 0);                  // 1,0
        coords.r = GM.camera.rot;
        if (a.distanceTo(b) > 1.9 || a.distanceTo(b) < .2)
            return;
        c = GM.map.getPix(data.x + size / 2, data.y + size / 2);

        if (c.data[1] > 0) { // item in next position
            document.querySelector(`#b${data.x + size / 2}-${data.y + size / 2}`).components.item.get()
                .then(p => {
                    let msg = `Found ${p.n}`;
                    switch (p.t) {
                        case 1: // heart
                            s.data.health = Math.max(s.data.health++, 10);
                            msg += `\nHealth = ${s.data.health}/10`;
                            break;
                        case 2: // sword
                            break;
                        case 3: // shield
                            break;
                        case 8: // plane piece
                            this.foundPieces++;
                            msg += `\nOnly ${5 - this.foundPieces} pieces left`;
                            break;
                    }
                    GM.message.write(msg);
                });
        }

        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ x: data.x, z: data.y }, 1000) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
            .onUpdate(function () { // Called after tween.js updates 'coords'.
                s.el.setAttribute('position', `${coords.x} .25 ${coords.z}`);
            })
            .onComplete(function () {
                GM.data.state = 1;
                GM.update();
            })
            .start(); // Start the tween immediately.
    }
});