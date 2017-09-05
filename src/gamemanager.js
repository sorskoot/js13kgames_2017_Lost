AFRAME.registerComponent('gamemanager', {
    schema: {
        state: { value: 'int', default: 0 }
        // 0 == player
        // 1 == enemy
    },
    init: function () {
        this.player = document.getElementById('player');
    },
    update: function () {
        switch (this.data.state) {
            case 0:
                console.log('player');
                break;
            case 1:
                console.log('enemy');
                break;
        }
    },
    movePlayer: function (data) {
        var s = this;
        if (s.data.state != 0) return;
        var coords = s.player.components.position.data;
        var a = new THREE.Vector2(data.x, data.y);
        var b = new THREE.Vector2(coords.x, coords.z);
        if (a.distanceTo(b) > 1)
            return;
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ x: data.x, z: data.y }, 1000) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
            .onUpdate(function () { // Called after tween.js updates 'coords'.
                // Move 'box' to the position described by 'coords' with a CSS translation.
                //box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
                s.player.setAttribute('position', `${coords.x} .25 ${coords.z}`);
            })
            .onComplete(function(){
                //s.data.state=1;
                s.update();
            })
            .start(); // Start the tween immediately.

    }
});

