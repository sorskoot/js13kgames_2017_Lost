const mapGen = require("./mapgen");

AFRAME.registerComponent('map', {
    init: function () {
        let size = 128;
        let depth = 7;
        this.mapContext = mapGen.go(size, depth);
        let world = document.createElement("a-entity")
        let worldData = this.mapContext.getImageData(0, 0, size, size);
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                let wdp = (i + size * j) * 4;
                if (worldData.data[wdp] != 0) {

                    let plane = document.createElement("a-entity")
                    plane.classList.add("floor");
                    if (worldData.data[wdp] == 102) plane.setAttribute("mytexture", "index:11;lookup:11");
                    else if (worldData.data[wdp] == 170) plane.setAttribute("mytexture", "index:12;lookup:10");
                    else if (worldData.data[wdp] == 238) plane.setAttribute("mytexture", "index:12;lookup:9");
                    //if (worldData.data[wdp]==102) plane.setAttribute("mytexture", "index:11;lookup:8");
                    else {
                        plane.setAttribute("mytexture", "index:0;lookup:" + ~~((i*5)/(j*2)*3) % 5);
                    }// + rnd(6));
                    let x = i - (size / 2);
                    let y = j - (size / 2);

                    plane.addEventListener('click', function () {
                        //plane.setAttribute("mytexture", "src: #my-texture;index:4");
                        GM.movePlayer({ x, y });
                        //this.sceneEl.components.gamemanager.movePlayer({ x, y });
                    });

                    plane.setAttribute('position', `${x} 0 ${y}`);
                    plane.setAttribute('mixin', 'voxel');
                    world.appendChild(plane);
                }
            }
        }
        for (let i = 0; i < 25; i++) {
            let bag = document.createElement("a-entity");
            bag.setAttribute("billboard-texture", "index:3;lookup:-1");
            bag.setAttribute('position', `${window.rnd(32) - 16} .25 ${window.rnd(32) - 16}`);
            bag.setAttribute('mixin', 'spr');
            world.appendChild(bag);
        }

        this.el.appendChild(world);
    }
});
