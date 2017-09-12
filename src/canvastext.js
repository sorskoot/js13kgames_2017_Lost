AFRAME.registerComponent('canvas-text', {
    schema: {
        text: { value: 'string' }
    },
    init: function () {
        this.update();
    },
    update: function () {
        var bitmap = document.createElement('canvas');
        var g = bitmap.getContext('2d');
        bitmap.width = 1024;
        bitmap.height = 1024;
        bitmap.style.imageRendering = 'pixelated';
        g.font = 'bold 40px Arial';
        g.textBaseline = 'middle';
        g.textAlign = 'center';
        this.multiline(g, this.data.text, 512, 512);
        var texture = new THREE.Texture(bitmap)
        texture.needsUpdate = true;
        this.el.setAttribute('material', { src: texture, transparent: true, opacity:0.8 });
    },
    multiline: function (ctx, text, x, y) {
        let lh = ctx.measureText("M").width * 1.2,
            t = text.split("\n");
        for (var i = 0; i < t.length; ++i) {
            ctx.fillStyle = '#be2633';
            ctx.fillText(t[i], x, y);
            ctx.strokeStyle = '#000';
            ctx.strokeText(t[i], x, y);
            y += lh;
        }
    },
    write: function (text, dontFade) {
        this.data.text = text;
        this.update();
        var d = { o: 0.8 };
        if (!dontFade) {
            this.t = new TWEEN.Tween(d)
                .to({ o: 0 }, 250)
                .delay(2000)
                .onUpdate(() => {
                    this.el.setAttribute('material', { opacity: d.o });
                })
                .start();
        }
    }
});