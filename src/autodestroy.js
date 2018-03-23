AFRAME.registerComponent('auto-destroy', {
    init: function () {
        let mesh = this.el.getObject3D('mesh');
        if (mesh){
            mesh.material.depthTest = false;
        }
        let oldCoords = {
                x: this.el.components.position.data.x || 0,
                y: this.el.components.position.data.y || 0,
                z: this.el.components.position.data.z || 0},
            newCoords = { y: oldCoords.y };

        let tween = new TWEEN.Tween(newCoords)
            .to({ y: oldCoords.y  - .25 }, 500) 
            .easing(TWEEN.Easing.Quadratic.In) 
            .onUpdate(() => { 
                this.el.setAttribute('position', { x: oldCoords.x, y: newCoords.y, z: oldCoords.z  });
            })
            .onComplete(() => {
                this.el.parentNode.removeChild(this.el);
            })
            .start(); 
    }
});
