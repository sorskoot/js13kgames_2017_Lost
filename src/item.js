AFRAME.registerComponent('item', {
    schema: {
        x: { value: 'float' },
        y: { value: 'float' },
        props: { value: 'object' } 
    },
    init: function () {
        this.pos = this.el.components.position;
    }
});