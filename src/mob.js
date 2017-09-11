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
        } while (c.data[0] == 0)
        
        let old = GM.map.getPix(s.data.x, s.data.y);
        old.data[2] = 0;
        GM.map.putPix(old, s.data.x, s.data.y);
        c.data[2] = 0x88;
        s.data.x += tx;
        s.data.y += ty;
        GM.map.putPix(c, s.data.x, s.data.y);
        let coords = { x: s.pos.data.x, z: s.pos.data.z };
        var tween = new TWEEN.Tween(coords)
            .to({ x: s.pos.data.x + tx, z: s.pos.data.z + ty }, 400 + rnd(400))
            .delay(rnd(250))
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                s.el.setAttribute('position', `${coords.x} .25 ${coords.z}`);
            })
            .start(); // Start the tween immediately.       
    }
});