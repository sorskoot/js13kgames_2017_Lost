AFRAME.registerComponent('gamemanager', {
    init:function(){
        this.player = document.getElementById('player');
    },
    movePlayer:function(data){
        var s = this;
        var coords = s.player.components.position.data;        
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
        .to({ x: data.x, z: data.y }, 1000) // Move to (300, 200) in 1 second.
        .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
        .onUpdate(function() { // Called after tween.js updates 'coords'.
            // Move 'box' to the position described by 'coords' with a CSS translation.
            //box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
            s.player.setAttribute('position',`${coords.x} .25 ${coords.z}`);
        })
        .start(); // Start the tween immediately.

    }
});

