AFRAME.registerComponent('canvas-text', {
    schema: {
        text: { value: 'string' }
    },
    init: function () {
        this.update();
    },
    update: function () {
        let bitmap = document.createElement('canvas');
        let context = bitmap.getContext('2d');
        bitmap.width = 1024;
        bitmap.height = 1024;
        bitmap.style.imageRendering = 'pixelated';
        context.font = 'bold 40px Arial';
        context.textBaseline = 'middle';
        context.textAlign = 'center';
        this.multiline(context, this.data.text, 512, 512);
        let texture = new THREE.Texture(bitmap)
        texture.needsUpdate = true;
        this.el.setAttribute('material', { src: texture, transparent: true, opacity:0.8 });
    },

    multiline: function (ctx, text, x, y) {
        let lineheight = ctx.measureText("M").width * 1.2,
            linesOftext = text.split("\n");
        for (let i = 0; i < linesOftext.length; ++i) {
            ctx.fillStyle = '#be2633';
            ctx.fillText(linesOftext[i], x, y);
            ctx.strokeStyle = '#000';
            ctx.strokeText(linesOftext[i], x, y);
            y += lineheight;
        }
    },

    write: function (text, dontFade) {
        this.data.text = text;
        this.update();
        let materialProperties = { opacity: 0.8 };
        if (!dontFade) {
            this.tween = new TWEEN.Tween(materialProperties)
                .to({ opacity: 0 }, 250)
                .delay(2000)
                .onUpdate(() => {
                    this.el.setAttribute('material', { opacity: materialProperties.opacity });
                })
                .start();
        }
    }
});