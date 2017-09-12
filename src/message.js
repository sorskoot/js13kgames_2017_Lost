/*global AFRAME, TWEEN */
AFRAME.registerComponent('message', {
    init: function() {
        this.text = this.el.components.text;
    },
    write: function(message, dontFade) {
        if (this.t) this.t.stop();

        this.el.setAttribute('text', { value: message, opacity: 0.8 });
        var d = { o: 0.8 };
        if (!dontFade) {
            this.t = new TWEEN.Tween(d)
                .to({ o: 0 }, 250)
                .delay(2000)
                .onUpdate(() => {
                    this.el.setAttribute('text', { opacity: d.o });
                })
                .start();
        }
    }
});
