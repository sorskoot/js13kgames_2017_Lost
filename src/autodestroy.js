AFRAME.registerComponent('auto-destroy', {
    init: function () {
        // tween and destroy
        var m = this.el.getObject3D('mesh');
        if (m) m.material.depthTest = false;
        let oldx = this.el.components.position.data.x || 0,
            oldy = this.el.components.position.data.y || 0,
            oldz = this.el.components.position.data.z || 0,
            coords = { y: oldy }
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ y: oldy - .25 }, 500) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.In) // Use an easing function to make the animation smooth.
            .onUpdate(() => { // Called after tween.js updates 'coords'.
                this.el.setAttribute('position', { x: oldx, y: coords.y, z: oldz });
            })
            .onComplete(() => {
                this.el.parentNode.removeChild(this.el);
            })
            .start(); // Start the tween immediately.
    }
});
