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
                    if (worldData.data[wdp] == 102) plane.setAttribute("pixel-shader", "index:11;lookup:8");
                    else if (worldData.data[wdp] == 170) plane.setAttribute("pixel-shader", "index:12;lookup:10");
                    else if (worldData.data[wdp] == 238) plane.setAttribute("pixel-shader", "index:12;lookup:9");
                    else {
                        plane.setAttribute("pixel-shader", "index:0;lookup:" + ~~((i * 5) / (j * 2) * 3) % 5);
                    }
                    let x = i - (size / 2);
                    let y = j - (size / 2);
                    plane.addEventListener('mouseenter', function (e) {
                     //   console.log("mouseenter:",e)
                        e.srcElement.setAttribute('scale', { x: .96, y: .96 });
                    });
                    plane.addEventListener('mouseleave', function (e) {
                       // console.log("mouseleave:",e);
                        e.srcElement.setAttribute('scale', { x: 1, y: 1 });
                    });
                    plane.addEventListener('click', function () {
                        if (GM.data.state === 0)
                            GM.player.components.player.move({ x, y });
                    });
                    plane.setAttribute("cursor-listener");
                    plane.setAttribute('position', `${x} 0 ${y}`);
                    plane.setAttribute('mixin', 'voxel');
                    world.appendChild(plane);
                }
            }
        }

        this.el.appendChild(world);
        this.el.appendChild(this.addObjs());
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
            let b = document.createElement("a-entity"), tx, ty, p, item;

            do {
                p = this.randomPlace();
                item = this.getWeighted(D.items);
                item.map = p;

                d = (new THREE.Vector2(0, 0)).distanceTo(new THREE.Vector2(p.x, p.y));
            } while (item.m >= d);

            if (p.c.data[1] != 0) continue;
            p.c.data[1] = 0x41;
            this.putPix(p.c, p.x, p.y);

            tx = p.x - size / 2;
            ty = p.y - size / 2;
            var d = (new THREE.Vector2(0, 0)).distanceTo(new THREE.Vector2(tx, ty));

            b.setAttribute("billboard-shader", { index: 3 });// { index: item.s, lookup: item.i });
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
        const numberOfMobs = 150;
        let items = document.createElement("a-entity");
        for (let i = 0; i < numberOfMobs; i++) {
            let b = document.createElement("a-entity"), tx, ty;
            let mob = this.getWeighted(D.mobs), p, d;
            do {
                p = this.randomPlace();
                tx = p.x - size / 2;
                ty = p.y - size / 2;
                d = (new THREE.Vector2(0, 0)).distanceTo(new THREE.Vector2(tx, ty));
            } while (mob.m >= d);
            p.c.data[2] = 0x88;
            this.putPix(p.c, p.x, p.y);

            b.setAttribute("billboard-shader", { index: 2, lookup: mob.i });
            b.setAttribute('position', `${tx} .25 ${ty}`);
            b.setAttribute('mixin', 'spr');
            b.setAttribute('mob', {
                x: p.x, y: p.y,
                health: rnd(mob.h[1]) + mob.h[0],
                damage: rnd(mob.d[1]) + mob.d[0]
            });
            b.id = `e${p.x}-${p.y}`;
            items.appendChild(b);
        }
        return items;
    },
    addObjs: function () {
        let objs = document.createElement("a-entity");
        for (let i = 0; i < 5; i++) {
            let b = document.createElement("a-entity"), tx, ty, p, d;
            do {
                p = this.randomPlace();
                tx = p.x - size / 2;
                ty = p.y - size / 2;
                d = (new THREE.Vector2(0, 0)).distanceTo(new THREE.Vector2(tx, ty));
            } while (25 >= d); 

            p.c.data[1] = 0xEE;
            this.putPix(p.c, p.x, p.y);

            b.setAttribute("billboard-shader", { index: D.objs[i].s });
            b.setAttribute('position', `${tx} .25 ${ty}`);
            b.setAttribute('mixin', 'spr');
            b.setAttribute('item', { x: p.x, y: p.y, props: D.objs[i] });
            b.id = `b${p.x}-${p.y}`;
            objs.appendChild(b);
        }
        return objs;
    }
});

AFRAME.registerComponent('cursor-listener', {
    init: function () {
      var lastIndex = -1;
      var COLORS = ['red', 'green', 'blue'];
      this.el.addEventListener('click', function (evt) {
        lastIndex = (lastIndex + 1) % COLORS.length;
        this.setAttribute('material', 'color', COLORS[lastIndex]);
        console.log('I was clicked at: ', evt.detail.intersection.point);
      });
    }
  });