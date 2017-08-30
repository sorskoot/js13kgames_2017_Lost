require('./myShader.js');
require('./comp-map');
const mapGen = require("./map2");

AFRAME.registerComponent('game', {
    init: function () {


        let size = 64;
        let depth = 8;
        this.mapContext = mapGen.go(size, depth);


        let world = document.createElement("a-entity")
        let worldData = this.mapContext.getImageData(0, 0, size, size);
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (worldData.data[(i + size * j) * 4] != 0) {

                    let plane = document.createElement("a-entity")
                    if (Math.random() > .5) {
                        plane.setAttribute("material-texture", "src: #my-texture;index:0");
                    }
                    plane.setAttribute('position', `${i - (size / 2)} 0 ${j - (size / 2)}`);
                    plane.setAttribute('mixin', 'voxel');
                    world.appendChild(plane);
                }
            }
        }
        this.el.sceneEl.appendChild(world);
        let sky = document.createElement('a-sky')
        sky.setAttribute("src", "#sky");
        this.el.sceneEl.appendChild(sky);
    }
});
