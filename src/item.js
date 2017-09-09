AFRAME.registerComponent('item', {
    schema: {
        x: { value: 'float' },
        y: { value: 'float' },
        props: { value: 'object' }
    },
    init: function () {
        this.pos = this.el.components.position;
    },
    get: function () {
        //maybe  return promise?
        let s = this;
        s.el.setAttribute("billboard-texture", { index: s.data.props.s, lookup: s.data.props.i });
        let coords = s.el.components.position.data;
        coords.t = 1;
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ y: coords.y + 1, t: 0 }, 1000) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
            .onUpdate(function () { // Called after tween.js updates 'coords'.
                s.el.setAttribute('position', { x: coords.x, y: coords.y, z: coords.z });
            })
            .onComplete(function () {
                s.el.parentNode.removeChild(s.el);
                // remove from world 
                // remove from map                
            })
            .start(); // Start the tween immediately.
        return this.data.props;
    }


});