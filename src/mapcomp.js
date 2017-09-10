const mapGen = require("./mapgen");

window.size = 128;
const depth = 7;

AFRAME.registerComponent('map', {
    init: function () {
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
                        GM.player.components.player.move({ x, y });
                        //this.sceneEl.components.gamemanager.movePlayer({ x, y });
                    });

                    plane.setAttribute('position', `${x} 0 ${y}`);
                    plane.setAttribute('mixin', 'voxel');
                    world.appendChild(plane);
                }
            }
        }

        this.el.appendChild(world);
        this.el.appendChild(this.addItems());
        this.el.appendChild(this.addMobs());
    },
    getPix: function (x, y) {
        return this.mapContext.getImageData(x, y, 1, 1);
    },
    putPix: function (c, x, y) {
        return this.mapContext.putImageData(c, x, y);
    },
    randomPlace: function (minDistance = 0) {
        let x, y, c;
        do {
            x = window.rnd(size);
            y = window.rnd(size);
            c = this.getPix(x, y);
        } while (c.data.every(p => p == 0));
        return { x, y, c };
    },
    getWeighted: function (list) {
        let f = false, item;
        do {
            item = list[rnd(list.length)];
            f = rnd(100) < item.c;
        } while (!f)
        return item;
    },
    addItems: function () {
        let items = document.createElement("a-entity");
        for (let i = 0; i < 150; i++) {
            let b = document.createElement("a-entity"), tx, ty;
            let p = this.randomPlace();
            let item = this.getWeighted(D.items);
            item.map = p;
            // 0x4X are bags
            //     0x41 = heart                         
            //     0x42 = sword iron
            //     0x43 = sword gold
            //     0x44 = sword diamond                         
            //     0x45 = shield iron                           
            //     0x46 = shield gold
            //     0x47 = shield diamond                        
            if (p.c.data[1] != 0) continue;
            p.c.data[1] = 0x41;
            this.mapContext.putImageData(p.c, p.x, p.y);

            tx = p.x - size / 2;
            ty = p.y - size / 2;
            var d = (new THREE.Vector2(0, 0)).distanceTo(new THREE.Vector2(tx, ty));

            b.setAttribute("billboard-texture", { index: 3 });// { index: item.s, lookup: item.i });
            b.setAttribute('position', `${tx} .25 ${ty}`);
            b.setAttribute('mixin', 'spr');
            b.setAttribute('item', { x: p.x, y: p.y, props: item });
            b.id = `b${p.x}-${p.y}`;
            b.data = item;
            items.appendChild(b);
        }
        return items;
    },
    addMobs: function () {
        let items = document.createElement("a-entity");
        for (let i = 0; i < 150; i++) {
            let b = document.createElement("a-entity"), tx, ty;
            let mob = this.getWeighted(D.mobs), p, d;
            do {
                p = this.randomPlace();
                tx = p.x - size / 2;
                ty = p.y - size / 2;
                d = (new THREE.Vector2(0, 0)).distanceTo(new THREE.Vector2(tx, ty));
            } while (mob.m >= d);
            this.mapContext.putImageData(p.c, p.x, p.y);

            b.setAttribute("billboard-texture", { index: 2, lookup: mob.i });
            b.setAttribute('position', `${tx} .25 ${ty}`);
            b.setAttribute('mixin', 'spr');
            b.setAttribute('mob', { x: p.x, y: p.y, health: rnd(mob.h[1]) + mob.h[0] });
            b.id = `e${p.x}-${p.y}`;
            items.appendChild(b);
        }
        return items;
    }
});
