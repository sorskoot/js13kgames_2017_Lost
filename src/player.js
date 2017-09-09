AFRAME.registerComponent('player', {
    move: function (data) {
        var s = this;
        if (GM.data.state != 0) return;
        var coords = s.el.components.position.data;
        var a = new THREE.Vector3(data.x, data.y, 0);                      // 0,0
        var b = new THREE.Vector3(coords.x, coords.z, 0);                  // 1,0
        coords.r = GM.camera.rot;
        if (a.distanceTo(b) > 1.5 || a.distanceTo(b) < .2)
            return;
        c = GM.map.getPix(data.x + size / 2, data.y + size / 2);
        
        if(c.data[1]>0){ // item in next position
            var item = document.querySelector(`#b${data.x + size / 2}-${data.y + size / 2}`).components.item.get();
        }

        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ x: data.x, z: data.y }, 1000) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
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