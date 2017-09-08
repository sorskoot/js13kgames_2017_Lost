const mapGen = require("./mapgen");

AFRAME.registerComponent('map', {
    init: function () {
        const size = 128;
        const depth = 7;
        this.mapContext = mapGen.go(size, depth);
        let world = document.createElement("a-entity");
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
                        plane.setAttribute("mytexture", "index:0;lookup:" + ~~((i * 5) / (j * 2) * 3) % 5);
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

        let items = document.createElement("a-entity");
        for (let i = 0; i < 25; i++) {
            let b = document.createElement("a-entity"), x, y, c, tx, ty;
            do {
                x = window.rnd(size);
                y = window.rnd(size);
                c = this.mapContext.getImageData(x, y, 1, 1);
            } while (c.data.every(p => p == 0));
      
            c.data[1] = 0x44;
            c.data[3] = 255;
            this.mapContext.putImageData(c, x, y);

            tx = x - size / 2;
            ty = y - size / 2;
            var d = (new THREE.Vector2(0, 0)).distanceTo(new THREE.Vector2(tx, ty));

            b.setAttribute("billboard-texture", "index:3;lookup:-1");
            b.setAttribute('position', `${tx} .25 ${ty}`);
            b.setAttribute('mixin', 'spr');
            b.data = { dist: d };
            items.appendChild(b);
        }

        this.el.appendChild(world);
        this.el.appendChild(items);
    }
});
