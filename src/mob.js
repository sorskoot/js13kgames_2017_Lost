AFRAME.registerComponent('mob', {
    schema: {
        x: { value: 'float' },
        y: { value: 'float' },
        health: { value: 'int' }
    },
    init: function () {
        this.pos = this.el.components.position;
    },
    move: function () {
        // A* would be nice... for now, just move random...
        let tx, ty, c, s = this;
        do {
            tx = rnd(3) - 1;
            ty = rnd(3) - 1;
            c = GM.map.getPix(s.data.x + tx, s.data.y + ty);
        } while (c.data.every(d => d == 0))
        s.data.x += tx;
        s.data.y += ty;
        let coords = { x: s.pos.data.x, z: s.pos.data.z };
        var tween = new TWEEN.Tween(coords)
            .to({ x: s.pos.data.x + tx, z: s.pos.data.z + ty }, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(function () {
                s.el.setAttribute('position', `${coords.x} .25 ${coords.z}`);
            })
            .start(); // Start the tween immediately.       
    }
});