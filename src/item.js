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
        let s = this;
        s.el.setAttribute("billboard-shader", { index: s.data.props.s, lookup: s.data.props.i });
        let coords = s.el.components.position.data;
        coords.t = 1;
        let tx = this.data.x, ty = this.data.y;
        let pix = GM.map.getPix(tx, ty);
        pix.data[1] = 0;
        GM.map.putPix(pix, tx, ty);
         var p = new Promise(r => {
            var t1 = new TWEEN.Tween(coords) 
                .to({ y: coords.y + 1, t: 0 }, 350)
                .easing(TWEEN.Easing.Quadratic.Out)
                .onUpdate(function () { 
                    s.el.setAttribute('position', { x: coords.x, y: coords.y, z: coords.z });
                })
            var t2 = new TWEEN.Tween(coords)
                .to({ y: coords.y - .5, t: 0 }, 350)
                .easing(TWEEN.Easing.Quadratic.In) 
                .onUpdate(function () { 
                    s.el.setAttribute('position', { x: coords.x, y: coords.y, z: coords.z });
                })
                .onComplete(function () {
                    s.el.parentNode.removeChild(s.el);
                    GM.map.addItems(1);
                    r(s.data.props);
                })
            t1.chain(t2).start(); // Start the tween immediately.
        });
        return p;
    }


});