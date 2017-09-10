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
        let tx = this.data.x, ty = this.data.y;
        let pix = GM.map.getPix(tx, ty);
        pix.data[1] = 0;
        GM.map.putPix(pix, tx, ty);
        // let pix = GM.map.getPix(s.data.props.map.x, s.data.props.map.y);
        // pix.data[1] = 0xFF;
        // GM.map.putPix(pix, s.data.props.map.x, s.data.props.map.y, 0, 0, size, size);

        var p = new Promise(r => {
            var t1 = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({ y: coords.y + 1, t: 0 }, 350) // Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    s.el.setAttribute('position', { x: coords.x, y: coords.y, z: coords.z });
                })
            var t2 = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
                .to({ y: coords.y - .5, t: 0 }, 350) // Move to (300, 200) in 1 second.
                .easing(TWEEN.Easing.Quadratic.In) // Use an easing function to make the animation smooth.
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    s.el.setAttribute('position', { x: coords.x, y: coords.y, z: coords.z });
                })
                .onComplete(function () {
                    s.el.parentNode.removeChild(s.el);
                    r(s.data.props);
                })
            t1.chain(t2).start(); // Start the tween immediately.
        });
        return p;
    }


});