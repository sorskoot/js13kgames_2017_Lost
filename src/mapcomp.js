const mapGen = require("./mapgen");

AFRAME.registerComponent('map', {
    init: function () {
        let size = 32;
        let depth = 4;
        this.mapContext = mapGen.go(size, depth);
        let world = document.createElement("a-entity")
        let worldData = this.mapContext.getImageData(0, 0, size, size);
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (worldData.data[(i + size * j) * 4] != 0) {

                    let plane = document.createElement("a-entity")
                    plane.classList.add("floor");

                    plane.setAttribute("mytexture", "src: #my-texture;index:0;lookup:" + rnd(6));
                    let x = i - (size / 2);
                    let y = j - (size / 2);
                    plane.addEventListener('click', function () {
                        //plane.setAttribute("mytexture", "src: #my-texture;index:4");
                        this.sceneEl.components.gamemanager.movePlayer({ x, y });
                    });

                    plane.setAttribute('position', `${x} 0 ${y}`);
                    plane.setAttribute('mixin', 'voxel');
                    world.appendChild(plane);
                }
            }
        }
        this.el.appendChild(world);
    }
});
