AFRAME.registerComponent('gamemanager', {
    schema: {
        state: { value: 'int', default: 0 }
        // 0 == player
        // 1 == enemy
    },
    init: function () {
        this.player = document.getElementById('player');
        this.camera = document.getElementById('camera');
        this.map = document.getElementById('mapgeo').components.map;
        this.camera.rot = 0;
        window.GM = this;
    },
    update: function () {
        switch (this.data.state) {
            case 0:
                console.log('player');
                break;
            case 1:
                console.log('enemy');
                let mobs = document.querySelectorAll('[mob]');
                mobs.forEach(d => d.components.mob.move());
                this.data.state = 0;
                break;
        }
    },
    movePlayer: function (data) {
        var s = this;
        if (s.data.state != 0) return;
        var coords = s.player.components.position.data;
        var a = new THREE.Vector3(data.x, data.y, 0);                      // 0,0
        var b = new THREE.Vector3(coords.x, coords.z, 0);                  // 1,0
        coords.r = GM.camera.rot;
        if (a.distanceTo(b) > 1.5)
            return;
        // let pi = Math.PI;
        // let crots =
        //     [[135, 180, 225],
        //     [90, undefined, 270],
        //     [45, 360, 315]];
        // let startRot = GM.camera.rot || 0,
        //     targetRot = crots[b.y - a.y + 1][b.x - a.x + 1],
        //     deltaRot = 0;
        // //   if (targetRot > pi) targetRot = targetRot % (2 * pi);
        // // modify targetrot based on left or right turn with respect to 2PI == 0
        //         var direction = targetRot;//Math.atan2(b.y - a.y, b.x - a.x) * 180 / Math.PI;
        // coords.dir = direction;
        // if (targetRot != undefined) {
        //     deltaRot = startRot < targetRot ? .45 : -.45;
        // }
        // console.log(b.y - a.y, b.x - a.x, direction);
        // coords.dir = GM.camera.components.rotation.data.y;
        // var cp = GM.camera.components.position.data;
        // var cv = new THREE.Vector3(cp.x, cp.y, cp.z);
        // GM.camera.rot += deltaRot;
        // cv.applyAxisAngle(new THREE.Vector3(0, 1, 0), direction / 180.0 * pi);
        // GM.camera.setAttribute('position', `${cv.x} 1.2 ${cv.z}`);
        // GM.camera.components.rotation.data.y = direction;
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ x: data.x, z: data.y }, 1000) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
            .onUpdate(function () { // Called after tween.js updates 'coords'.
                // Move 'box' to the position described by 'coords' with a CSS translation.
                //box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
                s.player.setAttribute('position', `${coords.x} .25 ${coords.z}`);
                // rotation is relative;
                //  if (GM.camera.rot < targetRot) {

                //GM.camera.components.rotation.data.y = coords.dir;
                // }
            })
            .onComplete(function () {
                s.data.state = 1;
                s.update();
            })
            .start(); // Start the tween immediately.
    }
});





