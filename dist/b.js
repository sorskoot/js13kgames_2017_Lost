/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	window.rnd = m => ~~(Math.random() * m);
	window.degToRad = d => d / 180 * Math.PI;
	window.t = new THREE.ImageUtils.loadTexture('./lost.png');
	window.t.minFilter = window.t.magFilter = 1003;
	window.pal = new THREE.ImageUtils.loadTexture('./palettes.png');
	window.pal.minFilter = window.pal.magFilter = 1003;
	


/***/ }),
/* 2 */
/***/ (function(module, exports) {

	window.D = {
	    player: {
	        t: 1,  // type : player
	        s: 2,  // sprite: 2    
	        h: 10, // start health
	    }, mobs: [{
	        h: [3, 2], // health: between 2 and 5
	        d: [1, 1], //damage between 1 and 2
	        i: 6,  // color index 8
	        m: 0, // minimal distance from start
	        c: 70 // change=70%
	    },
	    {
	        h: [4, 4], // health: between 4 and 8
	        d: [3, 2], //damage between 2 and 5
	        i: 7, // color index 8
	        m: 10, // minimal distance from start
	        c: 20 //change 30%        
	    },
	    {
	        h: [6, 6], // health: between 6 and 12
	        d: [5, 4], //damage between 4 and 9
	        i: 9,  // color index 8
	        m: 30, // minimal distance from start
	        c: 10 // change 10%
	    }],
	    floors: [{
	        t: 3, // type: floor
	        b: 1, // biome: 1
	        s: [1],
	        i: [2, 5]
	    }],
	    items: [
	        {
	            t: 1,
	            n: "a heart", //name
	            s: 13, //sprite
	            i: -1, // palette index
	            m: 0, // minimal distance from start
	            c: 70, // change of the item spawning
	        }, {
	            t: 2, // subtype : sword",
	            n: "an iron sword", //name
	            d: 3, // damage
	            s: 5, //sprite
	            i: 1, // palette index
	            m: 0, // minimal distance from start
	            c: 20, // change of the item spawning
	
	        }, {
	            t: 2, // subtype : sword",
	            n: "a golden sword", //name
	            d: 6, // damage
	            s: 5, //sprite
	            i: 23, // palette index
	            m:6, // minimal distance from start
	            c: 10, // change of the item spawning
	        }, {
	            t: 2, // subtype : sword",
	            n: "a diamond sword", //name
	            d: 10, // damage
	            s: 5, //sprite
	            i: 24, // palette index
	            m: 12, // minimal distance from start
	            c: 2, // change of the item spawning
	        }, {
	            t: 3, // subtype : shield",
	            n: "an iron shield", //name
	            b: 40, // block value 40%
	            s: 4, //sprite
	            i: 0, // palette index
	            m: 0, // minimal distance from start
	            c: 20, // change of the item spawning
	        }, {
	            t: 3, // subtype : shield",
	            n: "a golden shield", //name
	            b: 70, // block value 70%
	            s: 4, //sprite
	            i: 23, // palette index
	            m: 6, // minimal distance from start
	            c: 10, // change of the item spawning
	        }, {
	            t: 3, // subtype : shield",
	            n: "a diamond shield", //name
	            b: 85, // block value 85%
	            s: 4, //sprite
	            i: 24, // palette index
	            m: 12, // minimal distance from start
	            c: 5, // change of the item spawning
	        }],
	    objs: [{ //objectives
	        t: 8, // item type = 8
	        p: 1, // piece =1
	        n: "your plane's cabin",
	        s: 6
	    },
	    {
	        t: 8, // item type = 8
	        p: 2,
	        n: "your plane's left wing",
	        s: 7
	    },{
	        t: 8, // item type = 8
	        p: 3,
	        n: "your plane's body",
	        s: 8
	    },{
	        t: 8, // item type = 8
	        p: 4,
	        n: "your plane's right wing",
	        s: 9
	    },{
	        t: 8, // item type = 8
	        p: 5,
	        n: "your plane's thruster",
	        s: 10
	    }]
	}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/* global THREE, AFRAME */
	AFRAME.registerComponent('pixel-shader', {
	  schema: {
	    color:
	      {
	        type: 'color'
	      },
	    index: { type: 'int' },
	    lookup: { type: 'int', default: 0 }
	  },
	
	  init: function () {
	    const data = this.data;
	    let fragmentShader = document.getElementById('fragment').textContent,
	      vertexShader = document.getElementById('vertex').textContent;
	
	    this.material = new THREE.ShaderMaterial({
	      uniforms: {
	        time: { value: 0.0 },
	        index: { value: this.data.index },
	        DiffuseTexture: { value: window.t },
	        Lookup: { value: window.pal },
	        color: { value: new THREE.Color(data.color) },
	        spriteDimensions: { value: { x: 16.0, y: 1.0 } },
	        repeat: { value: { x: 1.0, y: 1.0 } },
	        fogStart: { value: 5 },
	        fogEnd: { value: 15 },
	        lookupIndex: { value: data.lookup },
	        fogColor: { value: new THREE.Color(0, 0, 0) },
	        tint: { value: new THREE.Color(255, 255, 255) },
	        tintAmount: { value: 0 }
	      },
	      vertexShader,
	      fragmentShader
	    });
	    this.applyToMesh();
	    this.el.addEventListener('model-loaded', () => this.applyToMesh());
	  },
	
	  update: function () {
	    this.material.uniforms.index.value = this.data.index;
	    this.material.uniforms.lookupIndex.value = this.data.lookup;
	  },
	
	  applyToMesh: function () {
	    const mesh = this.el.getObject3D('mesh');
	    if (mesh) {
	      this.material.uniforms.repeat.value.x = +this.el.getAttribute("width") || 1;
	      this.material.uniforms.repeat.value.y = +this.el.getAttribute("height") || 1;
	      mesh.material = this.material;
	    }
	  }
	})

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/* global THREE, AFRAME */
	AFRAME.registerComponent('billboard-shader', {
	  schema: {
	    index: { type: 'int' },
	    lookup: { type: 'int', default: -1 }
	  },
	  
	  init: function () {
	    const data = this.data;
	    let fragmentShader = document.getElementById('fragment').textContent;
	    let vertexShader = document.getElementById('vertex-billboard').textContent;
	
	    this.material = new THREE.ShaderMaterial({
	      uniforms: {
	        time: { value: 0.0 },
	        index: { value: this.data.index },
	        DiffuseTexture: { value: window.t },
	        color: { value: new THREE.Color(data.color) },
	        spriteDimensions: { value: { x: 16.0, y: 1.0 } },
	        repeat: { value: { x: 1.0, y: 1.0 } },
	        Lookup: { value: window.pal },
	        lookupIndex: { value: data.lookup },
	        fogStart: { value: 5 },
	        fogEnd: { value: 15 },
	        alphatest: { value: 0.95 },
	        fogColor: { value: new THREE.Color(0, 0, 0) }
	      },
	      vertexShader,
	      fragmentShader
	    });
	    this.material.blending = THREE.MultiplyBlending;
	    this.applyToMesh();
	    this.el.addEventListener('model-loaded', () => this.applyToMesh());
	  },
	
	  /**
	   * Update the ShaderMaterial when component data changes.
	   */
	  update: function () {
	    this.material.uniforms.index.value = this.data.index;
	    this.material.uniforms.lookupIndex.value = this.data.lookup;
	  },
	
	  /**
	   * Apply the material to the current entity.
	   */
	  applyToMesh: function () {
	    const mesh = this.el.getObject3D('mesh');
	    if (mesh) {
	      this.material.uniforms.repeat.value.x = +this.el.getAttribute("width") || 1;
	      this.material.uniforms.repeat.value.y = +this.el.getAttribute("height") || 1;
	      mesh.material = this.material;
	    }
	  }
	})

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	const mapGen = __webpack_require__(6);
	
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
	                    plane.id = `floor-${i}-${j}`;
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

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	
	var generator = {
	    go: (mapWidth, depth) => {
	        var pieces = [
	            [
	                [0, 0, 2, 0, 0],
	                [2, 1, 1, 1, 0],
	                [0, 1, 1, 1, 0],
	                [0, 1, 0, 1, 2],
	                [0, 0, 0, 2, 0]
	            ],
	            [
	                [0, 0, 2, 0, 0],
	                [0, 1, 1, 1, 0],
	                [0, 1, 0, 1, 0],
	                [2, 1, 0, 1, 2],
	                [0, 1, 1, 1, 0],
	                [0, 1, 1, 1, 0],
	                [0, 0, 2, 0, 0]
	            ],
	            [
	                [0, 0, 2, 0, 0],
	                [0, 1, 1, 1, 1],
	                [0, 1, 1, 1, 0],
	                [2, 1, 1, 1, 2],
	                [0, 1, 1, 1, 0],
	                [1, 1, 1, 1, 0],
	                [1, 0, 2, 0, 0]
	            ],
	            [
	                [0, 1, 1, 1, 0],
	                [2, 1, 1, 1, 0],
	                [0, 1, 0, 1, 0],
	                [0, 1, 0, 1, 2],
	                [0, 1, 1, 1, 0]
	            ],
	            [
	                [0, 0, 0, 0],
	                [2, 1, 1, 2],
	                [0, 0, 0, 0],
	            ],
	            [
	                [0, 2, 0],
	                [0, 1, 0],
	                [0, 1, 0],
	                [0, 2, 0],
	            ],
	            [
	                [0, 0, 0, 0, 0, 0, 0, 0],
	                [2, 1, 1, 1, 1, 1, 1, 2],
	                [0, 0, 0, 0, 0, 0, 0, 0],
	            ],
	            [
	                [0, 2, 0],
	                [0, 1, 0],
	                [0, 1, 0],
	                [0, 1, 0],
	                [0, 1, 0],
	                [0, 1, 0],
	                [0, 1, 0],
	                [0, 2, 0],
	            ],
	            [
	                [0, 0, 0, 0, 2, 0],
	                [0, 0, 0, 1, 1, 0],
	                [2, 1, 1, 1, 1, 0],
	                [0, 1, 1, 0, 1, 1],
	                [0, 1, 0, 0, 1, 1],
	                [0, 0, 1, 1, 1, 2],
	                [0, 1, 1, 0, 1, 0],
	                [0, 0, 0, 0, 2, 0],
	            ],
	            [
	                [0, 0, 0, 2, 0, 0],
	                [0, 0, 0, 1, 0, 0],
	                [0, 0, 0, 1, 0, 0],
	                [2, 1, 1, 1, 1, 2],
	                [0, 0, 0, 1, 0, 0],
	                [0, 0, 0, 1, 0, 0],
	                [0, 0, 0, 1, 0, 0],
	                [0, 0, 0, 2, 0, 0],
	            ],
	            [
	                [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
	                [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
	                [2, 1, 1, 1, 1, 0, 1, 1, 2, 0, 0],
	                [0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0],
	                [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
	                [0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0],
	                [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0],
	                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	                [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
	                [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
	                [0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0],
	                [0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0],
	            ],
	            [
	                [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
	                [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
	                [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
	                [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
	                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	                [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
	                [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
	                [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
	                [1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0],
	                [0, 0, 2, 0, 0, 0, 0, 1, 1, 0, 0],
	            ]
	        ];
	        let numberOfPieces = pieces.length;
	        for (let i = 0; i < numberOfPieces; i++) {
	            let clone = pieces[i].slice();
	            for (let j = 0; j < clone.length; j++)
	                clone[j] = clone[j].slice().reverse();
	            pieces.push(clone);
	            let clone2 = pieces[i].slice();
	            clone2 = clone2.reverse();
	            pieces.push(clone2);
	            let clone3 = clone.slice();
	            clone3 = clone3.reverse();
	            pieces.push(clone3);
	        }
	        for (let i = 0; i < pieces.length; i++) {
	            pieces[i].size = { w: pieces[i][0].length, h: pieces[i].length };
	            pieces[i].exits = [];
	            for (let j = 0; j < pieces[i].size.h; j++) {
	                for (let h = 0; h < pieces[i].size.w; h++) {
	                    if (pieces[i][j][h] === 2) {
	                        pieces[i].exits.push({ x: h, y: j });
	                    }
	                }
	            }
	        }
	
	        let mapCanvas = document.createElement('canvas');
	        mapCanvas.width = mapWidth;
	        mapCanvas.height = mapWidth;
	
	        // Temp during development
	        mapCanvas.style.width = '1024px';
	        mapCanvas.style.height = '1024px';
	        mapCanvas.style.imageRendering = 'pixelated';
	        document.body.appendChild(mapCanvas);
	        // END
	
	        var mapContext = mapCanvas.getContext('2d');
	        mapContext.fillStyle = "rgba(0, 0, 0, 0)";
	        mapContext.fillRect(0, 0, mapWidth, mapWidth);
	
	        let first = true;
	        var addRoom = (exit, special) => {
	            let piece;
	            let exits = [];
	            let clear = false;
	            let targetX;
	            let targetY;
	            let tries = 25;
	            do {
	                piece = pieces[rnd(pieces.length)];
	                for (var q = 0; q < piece.exits.length; q++) {
	                    targetX = exit.x - piece.exits[q].x;
	                    targetY = exit.y - piece.exits[q].y;
	                    var imgData = mapContext.getImageData(targetX, targetY, piece.size.w, piece.size.h);
	                    clear = imgData.data.every(d => d === 0)
	                    if (clear) {
	                        break;
	                    }
	                }
	
	                tries--;
	            } while (tries > 0 && !clear);
	            if (!clear) {
	                piece = [[1]];
	                piece.exits = [{}];
	                targetX = exit.x;
	                targetY = exit.y;
	                q = 0;
	                // return [];
	            }
	            mapContext.fillStyle = !first ? "#400" : "#600";
	            if (!first) mapContext.fillRect(targetX + piece.exits[q].x || 0, targetY + piece.exits[q].y || 0, 1, 1);
	         
	            if (special === 1) {
	                mapContext.fillStyle = "#E00";
	            }
	            if (special === 2) {
	                mapContext.fillStyle = "#A00";
	            }
	            first = false;
	            piece.forEach((i, py) => {
	                i.forEach((j, px) => {
	                    if (j === 1) {
	                        mapContext.fillRect(targetX + px, targetY + py, 1, 1);
	                    }
	                    if (j === 2) {
	                        exits.push({ x: targetX + px, y: targetY + py });
	                    }
	                })
	            });
	            return exits;
	        }
	        let loops = depth;
	        let exits = [{ x: mapWidth / 2, y: mapWidth / 2 }];
	        for (let i = 0; i < loops; i++) {
	            let newExits = [];
	            let special;
	            exits.forEach((exit, ind) => {
	                if (i == loops - 1 && ind == exits.length - ~~(exits.length / 3)) {
	                    special = 1;
	                }
	                if (i == loops - 1 && ind == ~~(exits.length / 3)) {
	                    special = 2;
	                }
	                let room = addRoom(exit, special);
	                newExits = newExits.concat(room);
	                special = 0;
	            });
	            exits = newExits;
	        }
	
	        return mapContext;
	    }
	
	}
	module.exports = generator;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	AFRAME.registerComponent('gamemanager', {
	    schema: {
	        state: { value: 'int', default: 0 }
	        // 0 == player
	        // 1 == enemy
	    },
	    init: function () {
	        this.player = document.getElementById('player');
	        this.camera = document.getElementById('camera');
	        this.camera.deltaRot = 0;
	        this.map = document.getElementById('mapgeo').components.map;
	        this.message = document.querySelector('[canvas-text]').components['canvas-text'];
	        this.cursor = document.querySelector('[cursor]');
	        this.raycaster = AFRAME.scenes[0].querySelector('[raycaster]').components.raycaster;
	        this.updateTileWithPlayer({x:0,y:0});
	        window.GM = this;
	    },
	    update: function (coords) {
	        if (this.data.state > 1) return;
	        switch (this.data.state) {
	            case 0:
	                this.player.components.player.move(coords);
	                break;
	            case 1:
	                this.cursor.setAttribute('cursor', { fuse: false });
	                let mobs = document.querySelectorAll('[mob]');
	                mobs.forEach(m => m.components.mob.move());
	                setTimeout(() => {
	                    this.cursor.setAttribute('cursor', { fuse: true });
	                    this.data.state = 0;
	                }, 500);
	                break;
	        }
	    },
	
	    updateTileWithPlayer: function (coords) {
	        let oldposition = document.querySelector(`.player-position`);
	        if (!!oldposition) {
	            oldposition.classList.remove('player-position');
	        }
	
	        let newposition = document.querySelector(`#floor-${coords.x + (size / 2)}-${coords.y + (size / 2)}`);
	        newposition.classList.add('player-position');
	
	        this.updateSelectableTiles();
	    },
	
	    updateSelectableTiles:function (coords)
	    {
	        let oldselectables = document.querySelectorAll(`.selectable`);
	        for (let i = 0; i < oldselectables.length; i++) {
	            oldselectables[i].classList.remove('selectable');
	        }
	
	        let playerposition = document.querySelector(`.player-position`);
	        let px = playerposition.id.split('-')[1];
	        let py = playerposition.id.split('-')[2];
	
	        for (let i = -1; i <= 1; i++) {
	            for (let j = -1; j <= 1; j++) {
	                let newtile = document.getElementById(`floor-${+px+i}-${+py+j}`);
	                if(!!newtile && !newtile.classList.contains('player-position')){
	                    newtile.classList.add('selectable');
	                }
	            }
	        }
	
	        this.raycaster.refreshObjects();
	    }
	});
	
	
	
	
	


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	AFRAME.registerComponent('mob', {
	    schema: {
	        x: { value: 'float' },
	        y: { value: 'float' },
	        health: { value: 'int' },
	        damage: { value: 'int' }
	    },
	    init: function () {
	        this.pos = this.el.components.position;
	    },
	    move: function () {
	        // A* would be nice... for now, just move random...
	        if (this.data.health <= 0) return;
	        let tx, ty, c, s = this,
	            playerPosition = GM.player.components.position.data;
	        var a = new THREE.Vector3(playerPosition.x, playerPosition.z, 0);                      // 0,0
	        var b = new THREE.Vector3(this.pos.data.x, this.pos.data.z, 0);
	        if (a.distanceTo(b) < 1.9) {// player is next to the mob attack
	            tx = a.x - b.x;
	            ty = a.y - b.y;
	            let coords = { x: s.pos.data.x, z: s.pos.data.z };
	            var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
	                .to({ x: s.pos.data.x + tx, z: s.pos.data.z + ty }, 500) // Move to (300, 200) in 1 second.
	                .yoyo(true).repeat(1)
	                .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
	                .onUpdate(function () { // Called after tween.js updates 'coords'.
	                    s.el.setAttribute('position', `${coords.x} .25 ${coords.z}`);
	                })
	                .onComplete(() => {
	                    //show splat
	                    GM.player.components.player.hit(this.data.damage);
	                })
	                .start(); // Start the tween immediately.    
	
	        }
	        else { //move
	            let tries = 10;
	            do {
	                tx = rnd(3) - 1;
	                ty = rnd(3) - 1;
	                c = GM.map.getPix(s.data.x + tx, s.data.y + ty);
	                tries--;
	                if(tries === 0){
	                    return;
	                }
	            } while (c.data[0] === 0 || c.data[2] !== 0)
	
	            let old = GM.map.getPix(s.data.x, s.data.y);
	            old.data[2] = 0;
	            GM.map.putPix(old, s.data.x, s.data.y);
	            c.data[2] = 0x88;
	            s.data.x += tx;
	            s.data.y += ty;
	            GM.map.putPix(c, s.data.x, s.data.y);
	            let coords = { x: s.pos.data.x, z: s.pos.data.z };
	            var tween = new TWEEN.Tween(coords)
	                .to({ x: s.pos.data.x + tx, z: s.pos.data.z + ty }, 400 + rnd(400))
	                .delay(rnd(250))
	                .easing(TWEEN.Easing.Quadratic.InOut)
	                .onUpdate(function () {
	                    s.el.setAttribute('position', `${coords.x} .25 ${coords.z}`);
	                    s.el.id = `e${coords.x + size / 2}-${coords.z + size / 2}`;
	                })
	                .start();
	        }
	    },
	    hit: function (amount) {
	
	        this.data.health -= amount;
	        let ent = document.createElement('a-entity');
	        ent.setAttribute('billboard-shader', { index: 14, lookup: 12 });
	        ent.setAttribute('mixin', 'spr');
	        ent.setAttribute('auto-destroy', '');
	        this.el.appendChild(ent);
	        if (this.data.health <= 0) {
	            this.el.id = '';
	            let pix = GM.map.getPix(this.data.x, this.data.y);
	            pix.data[2] = 0;
	            GM.map.putPix(pix, this.data.x, this.data.y);
	            setTimeout(() => {
	                this.el.setAttribute('auto-destroy', '');
	            }, 500);
	        }
	    }
	});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/*global AFRAME, GM, THREE, size, TWEEN, rnd*/
	
	AFRAME.registerComponent('player', {
	    schema: {
	        health: { value: 'int', default: 25 }
	    },
	    init: function () {
	        this.foundPieces = 0;
	        this.attack = 1;
	        this.defense = 0;
	        this.sprite = document.querySelector('#player-sprite');
	    },
	    move: function (data) {
	        if (GM.data.state != 0){
	            return;
	        }
	
	        let rotations = [[45, 0, 315], [90, 0, 270], [135, 180, 225]],
	            self = this,
	            coords = self.el.components.position.data,
	            newCoords = new THREE.Vector3(data.x, data.y, 0),                      // 0,0
	            oldCoords = new THREE.Vector3(coords.x, coords.z, 0),                  // 1,0
	            color = GM.map.getPix(newCoords.x + size / 2, newCoords.y + size / 2);
	
	        if (color.data[2] > 0) { // mob in next position
	            // code for attacking the mob.
	            let mob = document.querySelector(`#e${newCoords.x + size / 2}-${newCoords.y + size / 2}`).components.mob;
	            let sprcoord = { x: 0, z: 0 };
	            new TWEEN.Tween(sprcoord)
	                .to({ x: newCoords.x - oldCoords.x, z: newCoords.y - oldCoords.y }, 500)
	                .yoyo(true)
	                .repeat(1)
	                .easing(TWEEN.Easing.Quadratic.InOut)
	                .onUpdate(() => {
	                    this.sprite.setAttribute('position', `${sprcoord.x} 0 ${sprcoord.z}`);
	                })
	                .onComplete(() => {
	                    mob.hit(this.attack + rnd(2));
	                    setTimeout(() => {
	                        if (GM.data.state > 2) return;
	                        GM.data.state = 1;
	                        GM.update();
	                    }, 1000);
	                })
	                .start();
	        } else {
	            if (color.data[1] > 0) { // item in next position
	                document.querySelector(`#b${newCoords.x + size / 2}-${newCoords.y + size / 2}`).components.item.get()
	                    .then(item => {
	                        let msg = `Found ${item.n}`;
	                        switch (item.t) {
	                            case 1: // heart
	                                self.data.health = Math.min(self.data.health += 5, 25);
	                                msg += `\nHealth = ${self.data.health}/25`;
	                                break;
	                            case 2: // sword
	                                if (item.d > this.attack) this.attack = item.d;
	                                break;
	                            case 3: // shield
	                                this.defense = Math.max(this.defense, item.b);
	                                break;
	                            case 8: // plane piece
	                                this.foundPieces++;
	                                if (this.foundPieces < 5) {
	                                    msg += `\nOnly ${5 - this.foundPieces} pieces left`;
	                                } else {
	                                    GM.data.state = 3;
	                                    GM.message.write(`You found all pieces\nand escaped the planet!`, 1);
	                                    return;
	                                }
	                                break;
	                        }
	                        GM.message.write(msg);
	                    });
	            }
	
	            let currentCameraRotation = GM.camera.getAttribute('rotation'),
	                oldCameraRotation = currentCameraRotation.y,
	                newCameraRotation = rotations[Math.abs(~(newCoords.y - oldCoords.y))][Math.abs(~(newCoords.x - oldCoords.x))],
	               
	                cw = Math.abs(oldCameraRotation - newCameraRotation),
	                ccw = Math.abs(oldCameraRotation - (newCameraRotation - 360));
	
	            if (ccw < cw) {
	                newCameraRotation -= 360;
	            }
	
	            let targetCameraRotation = { x: -27, y: newCameraRotation },
	                currentCameraPosition = GM.camera.getAttribute('position'),
	                targetCameraPosition = { x: Math.sin(degToRad(newCameraRotation)) * 2, z: Math.cos(degToRad(newCameraRotation)) * 2 };
	
	            // move the player
	            new TWEEN.Tween({
	                x: coords.x, z: coords.z,
	                camposx: currentCameraPosition.x,
	                camposz: currentCameraPosition.z,
	                camrotx: currentCameraRotation.x,
	                camroty: currentCameraRotation.y
	            })
	                .to({
	                    x: newCoords.x, z: newCoords.y,
	                    camposx: targetCameraPosition.x,
	                    camposz: targetCameraPosition.z,
	                    camrotx: targetCameraRotation.x,
	                    camroty: targetCameraRotation.y
	                }, 1000)
	                .easing(TWEEN.Easing.Quadratic.InOut)
	                .onUpdate(function () {
	                    self.el.setAttribute('position', `${this.x} .25 ${this.z}`);
	                    GM.camera.setAttribute('position', `${this.camposx} 0.8 ${this.camposz}`);
	                    GM.camera.setAttribute('rotation', `${this.camrotx} ${this.camroty} 0`);
	                })
	                .onComplete(() => {
	                    GM.updateTileWithPlayer(newCoords);
	                    GM.camera.rot = (newCameraRotation + 360) % 360;
	                    GM.camera.setAttribute('rotation', `${targetCameraRotation.x} ${GM.camera.rot} 0`);
	                    if (GM.data.state > 2){
	                        return;
	                    }
	                    GM.data.state = 1;
	                    GM.update();
	                })
	                .start();
	        }
	    },
	    hit: function (amount) {
	        let damage = amount * (rnd(100) < this.defense ? 0 : 1),
	            ent = document.createElement('a-entity');
	
	        ent.setAttribute('billboard-shader', { index: 14, lookup: damage > 0 ? 5 : 1 });
	
	        ent.setAttribute('mixin', 'spr');
	        ent.setAttribute('auto-destroy', '');
	        this.el.appendChild(ent);
	        if (damage > 0) {
	            this.data.health -= damage;
	            if (this.data.health <= 0) {
	                this.sprite.setAttribute('billboard-shader', { index: 15 });
	                GM.data.state = 3;
	                GM.message.write(`Game Over`, 1);
	            }
	            else {
	                GM.message.write(`Ouch!\nHealth = ${this.data.health}/25`);
	            }
	        }
	    }
	});

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	AFRAME.registerComponent('item', {
	    schema: {
	        x: { value: 'float' },
	        y: { value: 'float' },
	        props: { value: 'object' }
	    },
	    init: function () {
	        this.pos = this.el.components.position;
	    },
	    get: function () {
	        let s = this;
	        s.el.setAttribute("billboard-shader", { index: s.data.props.s, lookup: s.data.props.i });
	        let coords = s.el.components.position.data;
	        coords.t = 1;
	        let tx = this.data.x, ty = this.data.y;
	        let pix = GM.map.getPix(tx, ty);
	        pix.data[1] = 0;
	        GM.map.putPix(pix, tx, ty);
	         var p = new Promise(r => {
	            var t1 = new TWEEN.Tween(coords) 
	                .to({ y: coords.y + 1, t: 0 }, 350)
	                .easing(TWEEN.Easing.Quadratic.Out)
	                .onUpdate(function () { 
	                    s.el.setAttribute('position', { x: coords.x, y: coords.y, z: coords.z });
	                })
	            var t2 = new TWEEN.Tween(coords)
	                .to({ y: coords.y - .5, t: 0 }, 350)
	                .easing(TWEEN.Easing.Quadratic.In) 
	                .onUpdate(function () { 
	                    s.el.setAttribute('position', { x: coords.x, y: coords.y, z: coords.z });
	                })
	                .onComplete(function () {
	                    s.el.parentNode.removeChild(s.el);
	                    r(s.data.props);
	                })
	            t1.chain(t2).start(); // Start the tween immediately.
	        });
	        return p;
	    }
	
	
	});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

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


/***/ }),
/* 12 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmViYjE4ZDAzY2JkODI5MWU1NTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpeGVsU2hhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9iaWxsYm9hcmRTaGFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwZ2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9iLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1dG9kZXN0cm95LmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXN0ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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ekYsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsd0JBQXdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxzQkFBcUIsYUFBYTtBQUNsQztBQUNBO0FBQ0EsdURBQXNELHNDQUFzQztBQUM1RixrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFIiwiZmlsZSI6ImIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZWJiMThkMDNjYmQ4MjkxZTU1MSIsInJlcXVpcmUoJy4vZ2xvYmFsJyk7XHJcbnJlcXVpcmUoJy4vZGF0YScpO1xyXG5yZXF1aXJlKCcuL3BpeGVsU2hhZGVyJyk7XHJcbnJlcXVpcmUoJy4vYmlsbGJvYXJkU2hhZGVyJyk7XHJcbnJlcXVpcmUoJy4vbWFwJyk7XHJcbnJlcXVpcmUoJy4vZ2FtZW1hbmFnZXInKTtcclxucmVxdWlyZSgnLi9tb2InKTtcclxucmVxdWlyZSgnLi9wbGF5ZXInKTtcclxucmVxdWlyZSgnLi9pdGVtJyk7XHJcbnJlcXVpcmUoJy4vYXV0b2Rlc3Ryb3knKTtcclxucmVxdWlyZSgnLi9jYW52YXN0ZXh0Jyk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIndpbmRvdy5ybmQgPSBtID0+IH5+KE1hdGgucmFuZG9tKCkgKiBtKTtcclxud2luZG93LmRlZ1RvUmFkID0gZCA9PiBkIC8gMTgwICogTWF0aC5QSTtcclxud2luZG93LnQgPSBuZXcgVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSgnLi9sb3N0LnBuZycpO1xyXG53aW5kb3cudC5taW5GaWx0ZXIgPSB3aW5kb3cudC5tYWdGaWx0ZXIgPSAxMDAzO1xyXG53aW5kb3cucGFsID0gbmV3IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoJy4vcGFsZXR0ZXMucG5nJyk7XHJcbndpbmRvdy5wYWwubWluRmlsdGVyID0gd2luZG93LnBhbC5tYWdGaWx0ZXIgPSAxMDAzO1xyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIndpbmRvdy5EID0ge1xyXG4gICAgcGxheWVyOiB7XHJcbiAgICAgICAgdDogMSwgIC8vIHR5cGUgOiBwbGF5ZXJcclxuICAgICAgICBzOiAyLCAgLy8gc3ByaXRlOiAyICAgIFxyXG4gICAgICAgIGg6IDEwLCAvLyBzdGFydCBoZWFsdGhcclxuICAgIH0sIG1vYnM6IFt7XHJcbiAgICAgICAgaDogWzMsIDJdLCAvLyBoZWFsdGg6IGJldHdlZW4gMiBhbmQgNVxyXG4gICAgICAgIGQ6IFsxLCAxXSwgLy9kYW1hZ2UgYmV0d2VlbiAxIGFuZCAyXHJcbiAgICAgICAgaTogNiwgIC8vIGNvbG9yIGluZGV4IDhcclxuICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICBjOiA3MCAvLyBjaGFuZ2U9NzAlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGg6IFs0LCA0XSwgLy8gaGVhbHRoOiBiZXR3ZWVuIDQgYW5kIDhcclxuICAgICAgICBkOiBbMywgMl0sIC8vZGFtYWdlIGJldHdlZW4gMiBhbmQgNVxyXG4gICAgICAgIGk6IDcsIC8vIGNvbG9yIGluZGV4IDhcclxuICAgICAgICBtOiAxMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgYzogMjAgLy9jaGFuZ2UgMzAlICAgICAgICBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaDogWzYsIDZdLCAvLyBoZWFsdGg6IGJldHdlZW4gNiBhbmQgMTJcclxuICAgICAgICBkOiBbNSwgNF0sIC8vZGFtYWdlIGJldHdlZW4gNCBhbmQgOVxyXG4gICAgICAgIGk6IDksICAvLyBjb2xvciBpbmRleCA4XHJcbiAgICAgICAgbTogMzAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgIGM6IDEwIC8vIGNoYW5nZSAxMCVcclxuICAgIH1dLFxyXG4gICAgZmxvb3JzOiBbe1xyXG4gICAgICAgIHQ6IDMsIC8vIHR5cGU6IGZsb29yXHJcbiAgICAgICAgYjogMSwgLy8gYmlvbWU6IDFcclxuICAgICAgICBzOiBbMV0sXHJcbiAgICAgICAgaTogWzIsIDVdXHJcbiAgICB9XSxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0OiAxLFxyXG4gICAgICAgICAgICBuOiBcImEgaGVhcnRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIHM6IDEzLCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAtMSwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogNzAsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMiwgLy8gc3VidHlwZSA6IHN3b3JkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYW4gaXJvbiBzd29yZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgZDogMywgLy8gZGFtYWdlXHJcbiAgICAgICAgICAgIHM6IDUsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDEsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDIwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAyLCAvLyBzdWJ0eXBlIDogc3dvcmRcIixcclxuICAgICAgICAgICAgbjogXCJhIGdvbGRlbiBzd29yZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgZDogNiwgLy8gZGFtYWdlXHJcbiAgICAgICAgICAgIHM6IDUsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDIzLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06NiwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDEwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDIsIC8vIHN1YnR5cGUgOiBzd29yZFwiLFxyXG4gICAgICAgICAgICBuOiBcImEgZGlhbW9uZCBzd29yZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgZDogMTAsIC8vIGRhbWFnZVxyXG4gICAgICAgICAgICBzOiA1LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAyNCwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAxMiwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDIsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMywgLy8gc3VidHlwZSA6IHNoaWVsZFwiLFxyXG4gICAgICAgICAgICBuOiBcImFuIGlyb24gc2hpZWxkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBiOiA0MCwgLy8gYmxvY2sgdmFsdWUgNDAlXHJcbiAgICAgICAgICAgIHM6IDQsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDAsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDIwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDMsIC8vIHN1YnR5cGUgOiBzaGllbGRcIixcclxuICAgICAgICAgICAgbjogXCJhIGdvbGRlbiBzaGllbGRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGI6IDcwLCAvLyBibG9jayB2YWx1ZSA3MCVcclxuICAgICAgICAgICAgczogNCwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMjMsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogNiwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDEwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDMsIC8vIHN1YnR5cGUgOiBzaGllbGRcIixcclxuICAgICAgICAgICAgbjogXCJhIGRpYW1vbmQgc2hpZWxkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBiOiA4NSwgLy8gYmxvY2sgdmFsdWUgODUlXHJcbiAgICAgICAgICAgIHM6IDQsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDI0LCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDEyLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogNSwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfV0sXHJcbiAgICBvYmpzOiBbeyAvL29iamVjdGl2ZXNcclxuICAgICAgICB0OiA4LCAvLyBpdGVtIHR5cGUgPSA4XHJcbiAgICAgICAgcDogMSwgLy8gcGllY2UgPTFcclxuICAgICAgICBuOiBcInlvdXIgcGxhbmUncyBjYWJpblwiLFxyXG4gICAgICAgIHM6IDZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDIsXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgbGVmdCB3aW5nXCIsXHJcbiAgICAgICAgczogN1xyXG4gICAgfSx7XHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDMsXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgYm9keVwiLFxyXG4gICAgICAgIHM6IDhcclxuICAgIH0se1xyXG4gICAgICAgIHQ6IDgsIC8vIGl0ZW0gdHlwZSA9IDhcclxuICAgICAgICBwOiA0LFxyXG4gICAgICAgIG46IFwieW91ciBwbGFuZSdzIHJpZ2h0IHdpbmdcIixcclxuICAgICAgICBzOiA5XHJcbiAgICB9LHtcclxuICAgICAgICB0OiA4LCAvLyBpdGVtIHR5cGUgPSA4XHJcbiAgICAgICAgcDogNSxcclxuICAgICAgICBuOiBcInlvdXIgcGxhbmUncyB0aHJ1c3RlclwiLFxyXG4gICAgICAgIHM6IDEwXHJcbiAgICB9XVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWwgVEhSRUUsIEFGUkFNRSAqL1xyXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ3BpeGVsLXNoYWRlcicsIHtcclxuICBzY2hlbWE6IHtcclxuICAgIGNvbG9yOlxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogJ2NvbG9yJ1xyXG4gICAgICB9LFxyXG4gICAgaW5kZXg6IHsgdHlwZTogJ2ludCcgfSxcclxuICAgIGxvb2t1cDogeyB0eXBlOiAnaW50JywgZGVmYXVsdDogMCB9XHJcbiAgfSxcclxuXHJcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgIGxldCBmcmFnbWVudFNoYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFnbWVudCcpLnRleHRDb250ZW50LFxyXG4gICAgICB2ZXJ0ZXhTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVydGV4JykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgaW5kZXg6IHsgdmFsdWU6IHRoaXMuZGF0YS5pbmRleCB9LFxyXG4gICAgICAgIERpZmZ1c2VUZXh0dXJlOiB7IHZhbHVlOiB3aW5kb3cudCB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LFxyXG4gICAgICAgIGNvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoZGF0YS5jb2xvcikgfSxcclxuICAgICAgICBzcHJpdGVEaW1lbnNpb25zOiB7IHZhbHVlOiB7IHg6IDE2LjAsIHk6IDEuMCB9IH0sXHJcbiAgICAgICAgcmVwZWF0OiB7IHZhbHVlOiB7IHg6IDEuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICBmb2dTdGFydDogeyB2YWx1ZTogNSB9LFxyXG4gICAgICAgIGZvZ0VuZDogeyB2YWx1ZTogMTUgfSxcclxuICAgICAgICBsb29rdXBJbmRleDogeyB2YWx1ZTogZGF0YS5sb29rdXAgfSxcclxuICAgICAgICBmb2dDb2xvcjogeyB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKDAsIDAsIDApIH0sXHJcbiAgICAgICAgdGludDogeyB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKDI1NSwgMjU1LCAyNTUpIH0sXHJcbiAgICAgICAgdGludEFtb3VudDogeyB2YWx1ZTogMCB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHZlcnRleFNoYWRlcixcclxuICAgICAgZnJhZ21lbnRTaGFkZXJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hcHBseVRvTWVzaCgpO1xyXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb2RlbC1sb2FkZWQnLCAoKSA9PiB0aGlzLmFwcGx5VG9NZXNoKCkpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5pbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5pbmRleDtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMubG9va3VwSW5kZXgudmFsdWUgPSB0aGlzLmRhdGEubG9va3VwO1xyXG4gIH0sXHJcblxyXG4gIGFwcGx5VG9NZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZXNoID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgaWYgKG1lc2gpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueCA9ICt0aGlzLmVsLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpIHx8IDE7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnkgPSArdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIikgfHwgMTtcclxuICAgICAgbWVzaC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfVxyXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BpeGVsU2hhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGdsb2JhbCBUSFJFRSwgQUZSQU1FICovXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnYmlsbGJvYXJkLXNoYWRlcicsIHtcclxuICBzY2hlbWE6IHtcclxuICAgIGluZGV4OiB7IHR5cGU6ICdpbnQnIH0sXHJcbiAgICBsb29rdXA6IHsgdHlwZTogJ2ludCcsIGRlZmF1bHQ6IC0xIH1cclxuICB9LFxyXG4gIFxyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICBsZXQgZnJhZ21lbnRTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhZ21lbnQnKS50ZXh0Q29udGVudDtcclxuICAgIGxldCB2ZXJ0ZXhTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVydGV4LWJpbGxib2FyZCcpLnRleHRDb250ZW50O1xyXG5cclxuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgIHRpbWU6IHsgdmFsdWU6IDAuMCB9LFxyXG4gICAgICAgIGluZGV4OiB7IHZhbHVlOiB0aGlzLmRhdGEuaW5kZXggfSxcclxuICAgICAgICBEaWZmdXNlVGV4dHVyZTogeyB2YWx1ZTogd2luZG93LnQgfSxcclxuICAgICAgICBjb2xvcjogeyB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKGRhdGEuY29sb3IpIH0sXHJcbiAgICAgICAgc3ByaXRlRGltZW5zaW9uczogeyB2YWx1ZTogeyB4OiAxNi4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIHJlcGVhdDogeyB2YWx1ZTogeyB4OiAxLjAsIHk6IDEuMCB9IH0sXHJcbiAgICAgICAgTG9va3VwOiB7IHZhbHVlOiB3aW5kb3cucGFsIH0sXHJcbiAgICAgICAgbG9va3VwSW5kZXg6IHsgdmFsdWU6IGRhdGEubG9va3VwIH0sXHJcbiAgICAgICAgZm9nU3RhcnQ6IHsgdmFsdWU6IDUgfSxcclxuICAgICAgICBmb2dFbmQ6IHsgdmFsdWU6IDE1IH0sXHJcbiAgICAgICAgYWxwaGF0ZXN0OiB7IHZhbHVlOiAwLjk1IH0sXHJcbiAgICAgICAgZm9nQ29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigwLCAwLCAwKSB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHZlcnRleFNoYWRlcixcclxuICAgICAgZnJhZ21lbnRTaGFkZXJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLk11bHRpcGx5QmxlbmRpbmc7XHJcbiAgICB0aGlzLmFwcGx5VG9NZXNoKCk7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGVsLWxvYWRlZCcsICgpID0+IHRoaXMuYXBwbHlUb01lc2goKSk7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRoZSBTaGFkZXJNYXRlcmlhbCB3aGVuIGNvbXBvbmVudCBkYXRhIGNoYW5nZXMuXHJcbiAgICovXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLmluZGV4LnZhbHVlID0gdGhpcy5kYXRhLmluZGV4O1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5sb29rdXBJbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5sb29rdXA7XHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICogQXBwbHkgdGhlIG1hdGVyaWFsIHRvIHRoZSBjdXJyZW50IGVudGl0eS5cclxuICAgKi9cclxuICBhcHBseVRvTWVzaDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWVzaCA9IHRoaXMuZWwuZ2V0T2JqZWN0M0QoJ21lc2gnKTtcclxuICAgIGlmIChtZXNoKSB7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnggPSArdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKSB8fCAxO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlcGVhdC52YWx1ZS55ID0gK3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpIHx8IDE7XHJcbiAgICAgIG1lc2gubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xyXG4gICAgfVxyXG4gIH1cclxufSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iaWxsYm9hcmRTaGFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbWFwR2VuID0gcmVxdWlyZShcIi4vbWFwZ2VuXCIpO1xyXG5cclxud2luZG93LnNpemUgPSAxMjg7XHJcbmNvbnN0IGRlcHRoID0gNztcclxuXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnbWFwJywge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubWFwQ29udGV4dCA9IG1hcEdlbi5nbyhzaXplLCBkZXB0aCk7XHJcbiAgICAgICAgbGV0IHdvcmxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpO1xyXG4gICAgICAgIGxldCB3b3JsZERhdGEgPSB0aGlzLm1hcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHNpemUsIHNpemUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2RwID0gKGkgKyBzaXplICogaikgKiA0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHdvcmxkRGF0YS5kYXRhW3dkcF0gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLmlkID0gYGZsb29yLSR7aX0tJHtqfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuY2xhc3NMaXN0LmFkZChcImZsb29yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdID09IDEwMikgcGxhbmUuc2V0QXR0cmlidXRlKFwicGl4ZWwtc2hhZGVyXCIsIFwiaW5kZXg6MTE7bG9va3VwOjhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod29ybGREYXRhLmRhdGFbd2RwXSA9PSAxNzApIHBsYW5lLnNldEF0dHJpYnV0ZShcInBpeGVsLXNoYWRlclwiLCBcImluZGV4OjEyO2xvb2t1cDoxMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdID09IDIzOCkgcGxhbmUuc2V0QXR0cmlidXRlKFwicGl4ZWwtc2hhZGVyXCIsIFwiaW5kZXg6MTI7bG9va3VwOjlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZShcInBpeGVsLXNoYWRlclwiLCBcImluZGV4OjA7bG9va3VwOlwiICsgfn4oKGkgKiA1KSAvIChqICogMikgKiAzKSAlIDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGkgLSAoc2l6ZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gaiAtIChzaXplIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJtb3VzZWVudGVyOlwiLGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3JjRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgeyB4OiAuOTYsIHk6IC45NiB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdXNlbGVhdmU6XCIsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3JjRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgeyB4OiAxLCB5OiAxIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoR00uZGF0YS5zdGF0ZSA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdNLnBsYXllci5jb21wb25lbnRzLnBsYXllci5tb3ZlKHsgeCwgeSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJjdXJzb3ItbGlzdGVuZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3h9IDAgJHt5fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAndm94ZWwnKTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC5hcHBlbmRDaGlsZChwbGFuZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQod29ybGQpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5hZGRPYmpzKCkpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5hZGRJdGVtcygpKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuYWRkTW9icygpKTtcclxuICAgIH0sXHJcbiAgICBnZXRQaXg6IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwQ29udGV4dC5nZXRJbWFnZURhdGEoeCwgeSwgMSwgMSk7XHJcbiAgICB9LFxyXG4gICAgcHV0UGl4OiBmdW5jdGlvbiAoYywgeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcENvbnRleHQucHV0SW1hZ2VEYXRhKGMsIHgsIHkpO1xyXG4gICAgfSxcclxuICAgIHJhbmRvbVBsYWNlOiBmdW5jdGlvbiAobWluRGlzdGFuY2UgPSAwKSB7XHJcbiAgICAgICAgbGV0IHgsIHksIGM7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB4ID0gd2luZG93LnJuZChzaXplKTtcclxuICAgICAgICAgICAgeSA9IHdpbmRvdy5ybmQoc2l6ZSk7XHJcbiAgICAgICAgICAgIGMgPSB0aGlzLmdldFBpeCh4LCB5KTtcclxuICAgICAgICB9IHdoaWxlIChjLmRhdGEuZXZlcnkocCA9PiBwID09IDApKTtcclxuICAgICAgICByZXR1cm4geyB4LCB5LCBjIH07XHJcbiAgICB9LFxyXG4gICAgZ2V0V2VpZ2h0ZWQ6IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICAgICAgbGV0IGYgPSBmYWxzZSwgaXRlbTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBsaXN0W3JuZChsaXN0Lmxlbmd0aCldO1xyXG4gICAgICAgICAgICBmID0gcm5kKDEwMCkgPCBpdGVtLmM7XHJcbiAgICAgICAgfSB3aGlsZSAoIWYpXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9LFxyXG4gICAgYWRkSXRlbXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKSwgdHgsIHR5LCBwLCBpdGVtO1xyXG5cclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcCA9IHRoaXMucmFuZG9tUGxhY2UoKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLmdldFdlaWdodGVkKEQuaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5tYXAgPSBwO1xyXG5cclxuICAgICAgICAgICAgICAgIGQgPSAobmV3IFRIUkVFLlZlY3RvcjIoMCwgMCkpLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjIocC54LCBwLnkpKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoaXRlbS5tID49IGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHAuYy5kYXRhWzFdICE9IDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBwLmMuZGF0YVsxXSA9IDB4NDE7XHJcbiAgICAgICAgICAgIHRoaXMucHV0UGl4KHAuYywgcC54LCBwLnkpO1xyXG5cclxuICAgICAgICAgICAgdHggPSBwLnggLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgdHkgPSBwLnkgLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgdmFyIGQgPSAobmV3IFRIUkVFLlZlY3RvcjIoMCwgMCkpLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjIodHgsIHR5KSk7XHJcblxyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZShcImJpbGxib2FyZC1zaGFkZXJcIiwgeyBpbmRleDogMyB9KTsvLyB7IGluZGV4OiBpdGVtLnMsIGxvb2t1cDogaXRlbS5pIH0pO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0eH0gLjI1ICR7dHl9YCk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ2l0ZW0nLCB7IHg6IHAueCwgeTogcC55LCBwcm9wczogaXRlbSB9KTtcclxuICAgICAgICAgICAgYi5pZCA9IGBiJHtwLnh9LSR7cC55fWA7XHJcbiAgICAgICAgICAgIGIuZGF0YSA9IGl0ZW07XHJcbiAgICAgICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9LFxyXG4gICAgYWRkTW9iczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IG51bWJlck9mTW9icyA9IDE1MDtcclxuICAgICAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZk1vYnM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKSwgdHgsIHR5O1xyXG4gICAgICAgICAgICBsZXQgbW9iID0gdGhpcy5nZXRXZWlnaHRlZChELm1vYnMpLCBwLCBkO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBwID0gdGhpcy5yYW5kb21QbGFjZSgpO1xyXG4gICAgICAgICAgICAgICAgdHggPSBwLnggLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgICAgIHR5ID0gcC55IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgICAgICBkID0gKG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApKS5kaXN0YW5jZVRvKG5ldyBUSFJFRS5WZWN0b3IyKHR4LCB0eSkpO1xyXG4gICAgICAgICAgICB9IHdoaWxlIChtb2IubSA+PSBkKTtcclxuICAgICAgICAgICAgcC5jLmRhdGFbMl0gPSAweDg4O1xyXG4gICAgICAgICAgICB0aGlzLnB1dFBpeChwLmMsIHAueCwgcC55KTtcclxuXHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKFwiYmlsbGJvYXJkLXNoYWRlclwiLCB7IGluZGV4OiAyLCBsb29rdXA6IG1vYi5pIH0pO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0eH0gLjI1ICR7dHl9YCk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21vYicsIHtcclxuICAgICAgICAgICAgICAgIHg6IHAueCwgeTogcC55LFxyXG4gICAgICAgICAgICAgICAgaGVhbHRoOiBybmQobW9iLmhbMV0pICsgbW9iLmhbMF0sXHJcbiAgICAgICAgICAgICAgICBkYW1hZ2U6IHJuZChtb2IuZFsxXSkgKyBtb2IuZFswXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYi5pZCA9IGBlJHtwLnh9LSR7cC55fWA7XHJcbiAgICAgICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9LFxyXG4gICAgYWRkT2JqczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBvYmpzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpLCB0eCwgdHksIHAsIGQ7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHAgPSB0aGlzLnJhbmRvbVBsYWNlKCk7XHJcbiAgICAgICAgICAgICAgICB0eCA9IHAueCAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgdHkgPSBwLnkgLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgICAgIGQgPSAobmV3IFRIUkVFLlZlY3RvcjIoMCwgMCkpLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjIodHgsIHR5KSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKDI1ID49IGQpOyBcclxuXHJcbiAgICAgICAgICAgIHAuYy5kYXRhWzFdID0gMHhFRTtcclxuICAgICAgICAgICAgdGhpcy5wdXRQaXgocC5jLCBwLngsIHAueSk7XHJcblxyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZShcImJpbGxib2FyZC1zaGFkZXJcIiwgeyBpbmRleDogRC5vYmpzW2ldLnMgfSk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3R4fSAuMjUgJHt0eX1gKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3NwcicpO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnaXRlbScsIHsgeDogcC54LCB5OiBwLnksIHByb3BzOiBELm9ianNbaV0gfSk7XHJcbiAgICAgICAgICAgIGIuaWQgPSBgYiR7cC54fS0ke3AueX1gO1xyXG4gICAgICAgICAgICBvYmpzLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqcztcclxuICAgIH1cclxufSk7XHJcblxyXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2N1cnNvci1saXN0ZW5lcicsIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGxhc3RJbmRleCA9IC0xO1xyXG4gICAgICB2YXIgQ09MT1JTID0gWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddO1xyXG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGxhc3RJbmRleCA9IChsYXN0SW5kZXggKyAxKSAlIENPTE9SUy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ21hdGVyaWFsJywgJ2NvbG9yJywgQ09MT1JTW2xhc3RJbmRleF0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJIHdhcyBjbGlja2VkIGF0OiAnLCBldnQuZGV0YWlsLmludGVyc2VjdGlvbi5wb2ludCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21hcC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxudmFyIGdlbmVyYXRvciA9IHtcclxuICAgIGdvOiAobWFwV2lkdGgsIGRlcHRoKSA9PiB7XHJcbiAgICAgICAgdmFyIHBpZWNlcyA9IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDIsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAwLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMiwgMCwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDIsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXTtcclxuICAgICAgICBsZXQgbnVtYmVyT2ZQaWVjZXMgPSBwaWVjZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZQaWVjZXM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUgPSBwaWVjZXNbaV0uc2xpY2UoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjbG9uZS5sZW5ndGg7IGorKylcclxuICAgICAgICAgICAgICAgIGNsb25lW2pdID0gY2xvbmVbal0uc2xpY2UoKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHBpZWNlcy5wdXNoKGNsb25lKTtcclxuICAgICAgICAgICAgbGV0IGNsb25lMiA9IHBpZWNlc1tpXS5zbGljZSgpO1xyXG4gICAgICAgICAgICBjbG9uZTIgPSBjbG9uZTIucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBwaWVjZXMucHVzaChjbG9uZTIpO1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUzID0gY2xvbmUuc2xpY2UoKTtcclxuICAgICAgICAgICAgY2xvbmUzID0gY2xvbmUzLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgcGllY2VzLnB1c2goY2xvbmUzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaWVjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcGllY2VzW2ldLnNpemUgPSB7IHc6IHBpZWNlc1tpXVswXS5sZW5ndGgsIGg6IHBpZWNlc1tpXS5sZW5ndGggfTtcclxuICAgICAgICAgICAgcGllY2VzW2ldLmV4aXRzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGllY2VzW2ldLnNpemUuaDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IHBpZWNlc1tpXS5zaXplLnc7IGgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZXNbaV1bal1baF0gPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2VzW2ldLmV4aXRzLnB1c2goeyB4OiBoLCB5OiBqIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG1hcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIG1hcENhbnZhcy53aWR0aCA9IG1hcFdpZHRoO1xyXG4gICAgICAgIG1hcENhbnZhcy5oZWlnaHQgPSBtYXBXaWR0aDtcclxuXHJcbiAgICAgICAgLy8gVGVtcCBkdXJpbmcgZGV2ZWxvcG1lbnRcclxuICAgICAgICBtYXBDYW52YXMuc3R5bGUud2lkdGggPSAnMTAyNHB4JztcclxuICAgICAgICBtYXBDYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMjRweCc7XHJcbiAgICAgICAgbWFwQ2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXBDYW52YXMpO1xyXG4gICAgICAgIC8vIEVORFxyXG5cclxuICAgICAgICB2YXIgbWFwQ29udGV4dCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDApXCI7XHJcbiAgICAgICAgbWFwQ29udGV4dC5maWxsUmVjdCgwLCAwLCBtYXBXaWR0aCwgbWFwV2lkdGgpO1xyXG5cclxuICAgICAgICBsZXQgZmlyc3QgPSB0cnVlO1xyXG4gICAgICAgIHZhciBhZGRSb29tID0gKGV4aXQsIHNwZWNpYWwpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBpZWNlO1xyXG4gICAgICAgICAgICBsZXQgZXhpdHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRYO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WTtcclxuICAgICAgICAgICAgbGV0IHRyaWVzID0gMjU7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHBpZWNlID0gcGllY2VzW3JuZChwaWVjZXMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBxID0gMDsgcSA8IHBpZWNlLmV4aXRzLmxlbmd0aDsgcSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCA9IGV4aXQueCAtIHBpZWNlLmV4aXRzW3FdLng7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSA9IGV4aXQueSAtIHBpZWNlLmV4aXRzW3FdLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZ0RhdGEgPSBtYXBDb250ZXh0LmdldEltYWdlRGF0YSh0YXJnZXRYLCB0YXJnZXRZLCBwaWVjZS5zaXplLncsIHBpZWNlLnNpemUuaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXIgPSBpbWdEYXRhLmRhdGEuZXZlcnkoZCA9PiBkID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdHJpZXMtLTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodHJpZXMgPiAwICYmICFjbGVhcik7XHJcbiAgICAgICAgICAgIGlmICghY2xlYXIpIHtcclxuICAgICAgICAgICAgICAgIHBpZWNlID0gW1sxXV07XHJcbiAgICAgICAgICAgICAgICBwaWVjZS5leGl0cyA9IFt7fV07XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRYID0gZXhpdC54O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WSA9IGV4aXQueTtcclxuICAgICAgICAgICAgICAgIHEgPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gIWZpcnN0ID8gXCIjNDAwXCIgOiBcIiM2MDBcIjtcclxuICAgICAgICAgICAgaWYgKCFmaXJzdCkgbWFwQ29udGV4dC5maWxsUmVjdCh0YXJnZXRYICsgcGllY2UuZXhpdHNbcV0ueCB8fCAwLCB0YXJnZXRZICsgcGllY2UuZXhpdHNbcV0ueSB8fCAwLCAxLCAxKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzcGVjaWFsID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwiI0UwMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGVjaWFsID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwiI0EwMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBpZWNlLmZvckVhY2goKGksIHB5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpLmZvckVhY2goKGosIHB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsUmVjdCh0YXJnZXRYICsgcHgsIHRhcmdldFkgKyBweSwgMSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXRzLnB1c2goeyB4OiB0YXJnZXRYICsgcHgsIHk6IHRhcmdldFkgKyBweSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4aXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9vcHMgPSBkZXB0aDtcclxuICAgICAgICBsZXQgZXhpdHMgPSBbeyB4OiBtYXBXaWR0aCAvIDIsIHk6IG1hcFdpZHRoIC8gMiB9XTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3BzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5ld0V4aXRzID0gW107XHJcbiAgICAgICAgICAgIGxldCBzcGVjaWFsO1xyXG4gICAgICAgICAgICBleGl0cy5mb3JFYWNoKChleGl0LCBpbmQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IGxvb3BzIC0gMSAmJiBpbmQgPT0gZXhpdHMubGVuZ3RoIC0gfn4oZXhpdHMubGVuZ3RoIC8gMykpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpID09IGxvb3BzIC0gMSAmJiBpbmQgPT0gfn4oZXhpdHMubGVuZ3RoIC8gMykpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsID0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCByb29tID0gYWRkUm9vbShleGl0LCBzcGVjaWFsKTtcclxuICAgICAgICAgICAgICAgIG5ld0V4aXRzID0gbmV3RXhpdHMuY29uY2F0KHJvb20pO1xyXG4gICAgICAgICAgICAgICAgc3BlY2lhbCA9IDA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBleGl0cyA9IG5ld0V4aXRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1hcENvbnRleHQ7XHJcbiAgICB9XHJcblxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21hcGdlbi5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2dhbWVtYW5hZ2VyJywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgc3RhdGU6IHsgdmFsdWU6ICdpbnQnLCBkZWZhdWx0OiAwIH1cclxuICAgICAgICAvLyAwID09IHBsYXllclxyXG4gICAgICAgIC8vIDEgPT0gZW5lbXlcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyJyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhJyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEuZGVsdGFSb3QgPSAwO1xyXG4gICAgICAgIHRoaXMubWFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcGdlbycpLmNvbXBvbmVudHMubWFwO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tjYW52YXMtdGV4dF0nKS5jb21wb25lbnRzWydjYW52YXMtdGV4dCddO1xyXG4gICAgICAgIHRoaXMuY3Vyc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2N1cnNvcl0nKTtcclxuICAgICAgICB0aGlzLnJheWNhc3RlciA9IEFGUkFNRS5zY2VuZXNbMF0ucXVlcnlTZWxlY3RvcignW3JheWNhc3Rlcl0nKS5jb21wb25lbnRzLnJheWNhc3RlcjtcclxuICAgICAgICB0aGlzLnVwZGF0ZVRpbGVXaXRoUGxheWVyKHt4OjAseTowfSk7XHJcbiAgICAgICAgd2luZG93LkdNID0gdGhpcztcclxuICAgIH0sXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChjb29yZHMpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLnN0YXRlID4gMSkgcmV0dXJuO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kYXRhLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbXBvbmVudHMucGxheWVyLm1vdmUoY29vcmRzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5zZXRBdHRyaWJ1dGUoJ2N1cnNvcicsIHsgZnVzZTogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9icyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1ttb2JdJyk7XHJcbiAgICAgICAgICAgICAgICBtb2JzLmZvckVhY2gobSA9PiBtLmNvbXBvbmVudHMubW9iLm1vdmUoKSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnNvci5zZXRBdHRyaWJ1dGUoJ2N1cnNvcicsIHsgZnVzZTogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlVGlsZVdpdGhQbGF5ZXI6IGZ1bmN0aW9uIChjb29yZHMpIHtcclxuICAgICAgICBsZXQgb2xkcG9zaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucGxheWVyLXBvc2l0aW9uYCk7XHJcbiAgICAgICAgaWYgKCEhb2xkcG9zaXRpb24pIHtcclxuICAgICAgICAgICAgb2xkcG9zaXRpb24uY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyLXBvc2l0aW9uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgbmV3cG9zaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZmxvb3ItJHtjb29yZHMueCArIChzaXplIC8gMil9LSR7Y29vcmRzLnkgKyAoc2l6ZSAvIDIpfWApO1xyXG4gICAgICAgIG5ld3Bvc2l0aW9uLmNsYXNzTGlzdC5hZGQoJ3BsYXllci1wb3NpdGlvbicpO1xyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZVNlbGVjdGFibGVUaWxlcygpO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVTZWxlY3RhYmxlVGlsZXM6ZnVuY3Rpb24gKGNvb3JkcylcclxuICAgIHtcclxuICAgICAgICBsZXQgb2xkc2VsZWN0YWJsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuc2VsZWN0YWJsZWApO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkc2VsZWN0YWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgb2xkc2VsZWN0YWJsZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0YWJsZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHBsYXllcnBvc2l0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci1wb3NpdGlvbmApO1xyXG4gICAgICAgIGxldCBweCA9IHBsYXllcnBvc2l0aW9uLmlkLnNwbGl0KCctJylbMV07XHJcbiAgICAgICAgbGV0IHB5ID0gcGxheWVycG9zaXRpb24uaWQuc3BsaXQoJy0nKVsyXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IC0xOyBpIDw9IDE7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gLTE7IGogPD0gMTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3dGlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBmbG9vci0keytweCtpfS0keytweStqfWApO1xyXG4gICAgICAgICAgICAgICAgaWYoISFuZXd0aWxlICYmICFuZXd0aWxlLmNsYXNzTGlzdC5jb250YWlucygncGxheWVyLXBvc2l0aW9uJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld3RpbGUuY2xhc3NMaXN0LmFkZCgnc2VsZWN0YWJsZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJheWNhc3Rlci5yZWZyZXNoT2JqZWN0cygpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nYW1lbWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ21vYicsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIHg6IHsgdmFsdWU6ICdmbG9hdCcgfSxcclxuICAgICAgICB5OiB7IHZhbHVlOiAnZmxvYXQnIH0sXHJcbiAgICAgICAgaGVhbHRoOiB7IHZhbHVlOiAnaW50JyB9LFxyXG4gICAgICAgIGRhbWFnZTogeyB2YWx1ZTogJ2ludCcgfVxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbjtcclxuICAgIH0sXHJcbiAgICBtb3ZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQSogd291bGQgYmUgbmljZS4uLiBmb3Igbm93LCBqdXN0IG1vdmUgcmFuZG9tLi4uXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5oZWFsdGggPD0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB0eCwgdHksIGMsIHMgPSB0aGlzLFxyXG4gICAgICAgICAgICBwbGF5ZXJQb3NpdGlvbiA9IEdNLnBsYXllci5jb21wb25lbnRzLnBvc2l0aW9uLmRhdGE7XHJcbiAgICAgICAgdmFyIGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhwbGF5ZXJQb3NpdGlvbi54LCBwbGF5ZXJQb3NpdGlvbi56LCAwKTsgICAgICAgICAgICAgICAgICAgICAgLy8gMCwwXHJcbiAgICAgICAgdmFyIGIgPSBuZXcgVEhSRUUuVmVjdG9yMyh0aGlzLnBvcy5kYXRhLngsIHRoaXMucG9zLmRhdGEueiwgMCk7XHJcbiAgICAgICAgaWYgKGEuZGlzdGFuY2VUbyhiKSA8IDEuOSkgey8vIHBsYXllciBpcyBuZXh0IHRvIHRoZSBtb2IgYXR0YWNrXHJcbiAgICAgICAgICAgIHR4ID0gYS54IC0gYi54O1xyXG4gICAgICAgICAgICB0eSA9IGEueSAtIGIueTtcclxuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHsgeDogcy5wb3MuZGF0YS54LCB6OiBzLnBvcy5kYXRhLnogfTtcclxuICAgICAgICAgICAgdmFyIHR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcykgLy8gQ3JlYXRlIGEgbmV3IHR3ZWVuIHRoYXQgbW9kaWZpZXMgJ2Nvb3JkcycuXHJcbiAgICAgICAgICAgICAgICAudG8oeyB4OiBzLnBvcy5kYXRhLnggKyB0eCwgejogcy5wb3MuZGF0YS56ICsgdHkgfSwgNTAwKSAvLyBNb3ZlIHRvICgzMDAsIDIwMCkgaW4gMSBzZWNvbmQuXHJcbiAgICAgICAgICAgICAgICAueW95byh0cnVlKS5yZXBlYXQoMSlcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5Jbk91dCkgLy8gVXNlIGFuIGVhc2luZyBmdW5jdGlvbiB0byBtYWtlIHRoZSBhbmltYXRpb24gc21vb3RoLlxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uICgpIHsgLy8gQ2FsbGVkIGFmdGVyIHR3ZWVuLmpzIHVwZGF0ZXMgJ2Nvb3JkcycuXHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7Y29vcmRzLnh9IC4yNSAke2Nvb3Jkcy56fWApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL3Nob3cgc3BsYXRcclxuICAgICAgICAgICAgICAgICAgICBHTS5wbGF5ZXIuY29tcG9uZW50cy5wbGF5ZXIuaGl0KHRoaXMuZGF0YS5kYW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpOyAvLyBTdGFydCB0aGUgdHdlZW4gaW1tZWRpYXRlbHkuICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IC8vbW92ZVxyXG4gICAgICAgICAgICBsZXQgdHJpZXMgPSAxMDtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgdHggPSBybmQoMykgLSAxO1xyXG4gICAgICAgICAgICAgICAgdHkgPSBybmQoMykgLSAxO1xyXG4gICAgICAgICAgICAgICAgYyA9IEdNLm1hcC5nZXRQaXgocy5kYXRhLnggKyB0eCwgcy5kYXRhLnkgKyB0eSk7XHJcbiAgICAgICAgICAgICAgICB0cmllcy0tO1xyXG4gICAgICAgICAgICAgICAgaWYodHJpZXMgPT09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSB3aGlsZSAoYy5kYXRhWzBdID09PSAwIHx8IGMuZGF0YVsyXSAhPT0gMClcclxuXHJcbiAgICAgICAgICAgIGxldCBvbGQgPSBHTS5tYXAuZ2V0UGl4KHMuZGF0YS54LCBzLmRhdGEueSk7XHJcbiAgICAgICAgICAgIG9sZC5kYXRhWzJdID0gMDtcclxuICAgICAgICAgICAgR00ubWFwLnB1dFBpeChvbGQsIHMuZGF0YS54LCBzLmRhdGEueSk7XHJcbiAgICAgICAgICAgIGMuZGF0YVsyXSA9IDB4ODg7XHJcbiAgICAgICAgICAgIHMuZGF0YS54ICs9IHR4O1xyXG4gICAgICAgICAgICBzLmRhdGEueSArPSB0eTtcclxuICAgICAgICAgICAgR00ubWFwLnB1dFBpeChjLCBzLmRhdGEueCwgcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICBsZXQgY29vcmRzID0geyB4OiBzLnBvcy5kYXRhLngsIHo6IHMucG9zLmRhdGEueiB9O1xyXG4gICAgICAgICAgICB2YXIgdHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKVxyXG4gICAgICAgICAgICAgICAgLnRvKHsgeDogcy5wb3MuZGF0YS54ICsgdHgsIHo6IHMucG9zLmRhdGEueiArIHR5IH0sIDQwMCArIHJuZCg0MDApKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KHJuZCgyNTApKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluT3V0KVxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHtjb29yZHMueH0gLjI1ICR7Y29vcmRzLnp9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5pZCA9IGBlJHtjb29yZHMueCArIHNpemUgLyAyfS0ke2Nvb3Jkcy56ICsgc2l6ZSAvIDJ9YDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGl0OiBmdW5jdGlvbiAoYW1vdW50KSB7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5oZWFsdGggLT0gYW1vdW50O1xyXG4gICAgICAgIGxldCBlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWVudGl0eScpO1xyXG4gICAgICAgIGVudC5zZXRBdHRyaWJ1dGUoJ2JpbGxib2FyZC1zaGFkZXInLCB7IGluZGV4OiAxNCwgbG9va3VwOiAxMiB9KTtcclxuICAgICAgICBlbnQuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICBlbnQuc2V0QXR0cmlidXRlKCdhdXRvLWRlc3Ryb3knLCAnJyk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuaGVhbHRoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5pZCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgcGl4ID0gR00ubWFwLmdldFBpeCh0aGlzLmRhdGEueCwgdGhpcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICBwaXguZGF0YVsyXSA9IDA7XHJcbiAgICAgICAgICAgIEdNLm1hcC5wdXRQaXgocGl4LCB0aGlzLmRhdGEueCwgdGhpcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhdXRvLWRlc3Ryb3knLCAnJyk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2IuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypnbG9iYWwgQUZSQU1FLCBHTSwgVEhSRUUsIHNpemUsIFRXRUVOLCBybmQqL1xyXG5cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdwbGF5ZXInLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICBoZWFsdGg6IHsgdmFsdWU6ICdpbnQnLCBkZWZhdWx0OiAyNSB9XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZm91bmRQaWVjZXMgPSAwO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrID0gMTtcclxuICAgICAgICB0aGlzLmRlZmVuc2UgPSAwO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci1zcHJpdGUnKTtcclxuICAgIH0sXHJcbiAgICBtb3ZlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGlmIChHTS5kYXRhLnN0YXRlICE9IDApe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcm90YXRpb25zID0gW1s0NSwgMCwgMzE1XSwgWzkwLCAwLCAyNzBdLCBbMTM1LCAxODAsIDIyNV1dLFxyXG4gICAgICAgICAgICBzZWxmID0gdGhpcyxcclxuICAgICAgICAgICAgY29vcmRzID0gc2VsZi5lbC5jb21wb25lbnRzLnBvc2l0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIG5ld0Nvb3JkcyA9IG5ldyBUSFJFRS5WZWN0b3IzKGRhdGEueCwgZGF0YS55LCAwKSwgICAgICAgICAgICAgICAgICAgICAgLy8gMCwwXHJcbiAgICAgICAgICAgIG9sZENvb3JkcyA9IG5ldyBUSFJFRS5WZWN0b3IzKGNvb3Jkcy54LCBjb29yZHMueiwgMCksICAgICAgICAgICAgICAgICAgLy8gMSwwXHJcbiAgICAgICAgICAgIGNvbG9yID0gR00ubWFwLmdldFBpeChuZXdDb29yZHMueCArIHNpemUgLyAyLCBuZXdDb29yZHMueSArIHNpemUgLyAyKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbG9yLmRhdGFbMl0gPiAwKSB7IC8vIG1vYiBpbiBuZXh0IHBvc2l0aW9uXHJcbiAgICAgICAgICAgIC8vIGNvZGUgZm9yIGF0dGFja2luZyB0aGUgbW9iLlxyXG4gICAgICAgICAgICBsZXQgbW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Uke25ld0Nvb3Jkcy54ICsgc2l6ZSAvIDJ9LSR7bmV3Q29vcmRzLnkgKyBzaXplIC8gMn1gKS5jb21wb25lbnRzLm1vYjtcclxuICAgICAgICAgICAgbGV0IHNwcmNvb3JkID0geyB4OiAwLCB6OiAwIH07XHJcbiAgICAgICAgICAgIG5ldyBUV0VFTi5Ud2VlbihzcHJjb29yZClcclxuICAgICAgICAgICAgICAgIC50byh7IHg6IG5ld0Nvb3Jkcy54IC0gb2xkQ29vcmRzLngsIHo6IG5ld0Nvb3Jkcy55IC0gb2xkQ29vcmRzLnkgfSwgNTAwKVxyXG4gICAgICAgICAgICAgICAgLnlveW8odHJ1ZSlcclxuICAgICAgICAgICAgICAgIC5yZXBlYXQoMSlcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5Jbk91dClcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3NwcmNvb3JkLnh9IDAgJHtzcHJjb29yZC56fWApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2IuaGl0KHRoaXMuYXR0YWNrICsgcm5kKDIpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEdNLmRhdGEuc3RhdGUgPiAyKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdNLmRhdGEuc3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHTS51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoY29sb3IuZGF0YVsxXSA+IDApIHsgLy8gaXRlbSBpbiBuZXh0IHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYiR7bmV3Q29vcmRzLnggKyBzaXplIC8gMn0tJHtuZXdDb29yZHMueSArIHNpemUgLyAyfWApLmNvbXBvbmVudHMuaXRlbS5nZXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXNnID0gYEZvdW5kICR7aXRlbS5ufWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaXRlbS50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IC8vIGhlYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXRhLmhlYWx0aCA9IE1hdGgubWluKHNlbGYuZGF0YS5oZWFsdGggKz0gNSwgMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBgXFxuSGVhbHRoID0gJHtzZWxmLmRhdGEuaGVhbHRofS8yNWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IC8vIHN3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZCA+IHRoaXMuYXR0YWNrKSB0aGlzLmF0dGFjayA9IGl0ZW0uZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzogLy8gc2hpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZlbnNlID0gTWF0aC5tYXgodGhpcy5kZWZlbnNlLCBpdGVtLmIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiAvLyBwbGFuZSBwaWVjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm91bmRQaWVjZXMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3VuZFBpZWNlcyA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IGBcXG5Pbmx5ICR7NSAtIHRoaXMuZm91bmRQaWVjZXN9IHBpZWNlcyBsZWZ0YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHTS5kYXRhLnN0YXRlID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR00ubWVzc2FnZS53cml0ZShgWW91IGZvdW5kIGFsbCBwaWVjZXNcXG5hbmQgZXNjYXBlZCB0aGUgcGxhbmV0IWAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdNLm1lc3NhZ2Uud3JpdGUobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDYW1lcmFSb3RhdGlvbiA9IEdNLmNhbWVyYS5nZXRBdHRyaWJ1dGUoJ3JvdGF0aW9uJyksXHJcbiAgICAgICAgICAgICAgICBvbGRDYW1lcmFSb3RhdGlvbiA9IGN1cnJlbnRDYW1lcmFSb3RhdGlvbi55LFxyXG4gICAgICAgICAgICAgICAgbmV3Q2FtZXJhUm90YXRpb24gPSByb3RhdGlvbnNbTWF0aC5hYnMofihuZXdDb29yZHMueSAtIG9sZENvb3Jkcy55KSldW01hdGguYWJzKH4obmV3Q29vcmRzLnggLSBvbGRDb29yZHMueCkpXSxcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjdyA9IE1hdGguYWJzKG9sZENhbWVyYVJvdGF0aW9uIC0gbmV3Q2FtZXJhUm90YXRpb24pLFxyXG4gICAgICAgICAgICAgICAgY2N3ID0gTWF0aC5hYnMob2xkQ2FtZXJhUm90YXRpb24gLSAobmV3Q2FtZXJhUm90YXRpb24gLSAzNjApKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjY3cgPCBjdykge1xyXG4gICAgICAgICAgICAgICAgbmV3Q2FtZXJhUm90YXRpb24gLT0gMzYwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0Q2FtZXJhUm90YXRpb24gPSB7IHg6IC0yNywgeTogbmV3Q2FtZXJhUm90YXRpb24gfSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDYW1lcmFQb3NpdGlvbiA9IEdNLmNhbWVyYS5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRDYW1lcmFQb3NpdGlvbiA9IHsgeDogTWF0aC5zaW4oZGVnVG9SYWQobmV3Q2FtZXJhUm90YXRpb24pKSAqIDIsIHo6IE1hdGguY29zKGRlZ1RvUmFkKG5ld0NhbWVyYVJvdGF0aW9uKSkgKiAyIH07XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIHRoZSBwbGF5ZXJcclxuICAgICAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKHtcclxuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy54LCB6OiBjb29yZHMueixcclxuICAgICAgICAgICAgICAgIGNhbXBvc3g6IGN1cnJlbnRDYW1lcmFQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgY2FtcG9zejogY3VycmVudENhbWVyYVBvc2l0aW9uLnosXHJcbiAgICAgICAgICAgICAgICBjYW1yb3R4OiBjdXJyZW50Q2FtZXJhUm90YXRpb24ueCxcclxuICAgICAgICAgICAgICAgIGNhbXJvdHk6IGN1cnJlbnRDYW1lcmFSb3RhdGlvbi55XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IG5ld0Nvb3Jkcy54LCB6OiBuZXdDb29yZHMueSxcclxuICAgICAgICAgICAgICAgICAgICBjYW1wb3N4OiB0YXJnZXRDYW1lcmFQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbXBvc3o6IHRhcmdldENhbWVyYVBvc2l0aW9uLnosXHJcbiAgICAgICAgICAgICAgICAgICAgY2Ftcm90eDogdGFyZ2V0Q2FtZXJhUm90YXRpb24ueCxcclxuICAgICAgICAgICAgICAgICAgICBjYW1yb3R5OiB0YXJnZXRDYW1lcmFSb3RhdGlvbi55XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluT3V0KVxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0aGlzLnh9IC4yNSAke3RoaXMuen1gKTtcclxuICAgICAgICAgICAgICAgICAgICBHTS5jYW1lcmEuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3RoaXMuY2FtcG9zeH0gMC44ICR7dGhpcy5jYW1wb3N6fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIEdNLmNhbWVyYS5zZXRBdHRyaWJ1dGUoJ3JvdGF0aW9uJywgYCR7dGhpcy5jYW1yb3R4fSAke3RoaXMuY2Ftcm90eX0gMGApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBHTS51cGRhdGVUaWxlV2l0aFBsYXllcihuZXdDb29yZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIEdNLmNhbWVyYS5yb3QgPSAobmV3Q2FtZXJhUm90YXRpb24gKyAzNjApICUgMzYwO1xyXG4gICAgICAgICAgICAgICAgICAgIEdNLmNhbWVyYS5zZXRBdHRyaWJ1dGUoJ3JvdGF0aW9uJywgYCR7dGFyZ2V0Q2FtZXJhUm90YXRpb24ueH0gJHtHTS5jYW1lcmEucm90fSAwYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEdNLmRhdGEuc3RhdGUgPiAyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBHTS5kYXRhLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBHTS51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGl0OiBmdW5jdGlvbiAoYW1vdW50KSB7XHJcbiAgICAgICAgbGV0IGRhbWFnZSA9IGFtb3VudCAqIChybmQoMTAwKSA8IHRoaXMuZGVmZW5zZSA/IDAgOiAxKSxcclxuICAgICAgICAgICAgZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcclxuXHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnYmlsbGJvYXJkLXNoYWRlcicsIHsgaW5kZXg6IDE0LCBsb29rdXA6IGRhbWFnZSA+IDAgPyA1IDogMSB9KTtcclxuXHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAnc3ByJyk7XHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnYXV0by1kZXN0cm95JywgJycpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZW50KTtcclxuICAgICAgICBpZiAoZGFtYWdlID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuaGVhbHRoIC09IGRhbWFnZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc2V0QXR0cmlidXRlKCdiaWxsYm9hcmQtc2hhZGVyJywgeyBpbmRleDogMTUgfSk7XHJcbiAgICAgICAgICAgICAgICBHTS5kYXRhLnN0YXRlID0gMztcclxuICAgICAgICAgICAgICAgIEdNLm1lc3NhZ2Uud3JpdGUoYEdhbWUgT3ZlcmAsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgR00ubWVzc2FnZS53cml0ZShgT3VjaCFcXG5IZWFsdGggPSAke3RoaXMuZGF0YS5oZWFsdGh9LzI1YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BsYXllci5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2l0ZW0nLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICB4OiB7IHZhbHVlOiAnZmxvYXQnIH0sXHJcbiAgICAgICAgeTogeyB2YWx1ZTogJ2Zsb2F0JyB9LFxyXG4gICAgICAgIHByb3BzOiB7IHZhbHVlOiAnb2JqZWN0JyB9XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zID0gdGhpcy5lbC5jb21wb25lbnRzLnBvc2l0aW9uO1xyXG4gICAgfSxcclxuICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZShcImJpbGxib2FyZC1zaGFkZXJcIiwgeyBpbmRleDogcy5kYXRhLnByb3BzLnMsIGxvb2t1cDogcy5kYXRhLnByb3BzLmkgfSk7XHJcbiAgICAgICAgbGV0IGNvb3JkcyA9IHMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhO1xyXG4gICAgICAgIGNvb3Jkcy50ID0gMTtcclxuICAgICAgICBsZXQgdHggPSB0aGlzLmRhdGEueCwgdHkgPSB0aGlzLmRhdGEueTtcclxuICAgICAgICBsZXQgcGl4ID0gR00ubWFwLmdldFBpeCh0eCwgdHkpO1xyXG4gICAgICAgIHBpeC5kYXRhWzFdID0gMDtcclxuICAgICAgICBHTS5tYXAucHV0UGl4KHBpeCwgdHgsIHR5KTtcclxuICAgICAgICAgdmFyIHAgPSBuZXcgUHJvbWlzZShyID0+IHtcclxuICAgICAgICAgICAgdmFyIHQxID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcykgXHJcbiAgICAgICAgICAgICAgICAudG8oeyB5OiBjb29yZHMueSArIDEsIHQ6IDAgfSwgMzUwKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLk91dClcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHsgeDogY29vcmRzLngsIHk6IGNvb3Jkcy55LCB6OiBjb29yZHMueiB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHZhciB0MiA9IG5ldyBUV0VFTi5Ud2Vlbihjb29yZHMpXHJcbiAgICAgICAgICAgICAgICAudG8oeyB5OiBjb29yZHMueSAtIC41LCB0OiAwIH0sIDM1MClcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5JbikgXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24gKCkgeyBcclxuICAgICAgICAgICAgICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7IHg6IGNvb3Jkcy54LCB5OiBjb29yZHMueSwgejogY29vcmRzLnogfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uQ29tcGxldGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzLmVsKTtcclxuICAgICAgICAgICAgICAgICAgICByKHMuZGF0YS5wcm9wcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0MS5jaGFpbih0Mikuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2l0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnYXV0by1kZXN0cm95Jywge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBtZXNoID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgICAgIGlmIChtZXNoKXtcclxuICAgICAgICAgICAgbWVzaC5tYXRlcmlhbC5kZXB0aFRlc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG9sZENvb3JkcyA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhLnggfHwgMCxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhLnkgfHwgMCxcclxuICAgICAgICAgICAgICAgIHo6IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhLnogfHwgMH0sXHJcbiAgICAgICAgICAgIG5ld0Nvb3JkcyA9IHsgeTogb2xkQ29vcmRzLnkgfTtcclxuXHJcbiAgICAgICAgbGV0IHR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKG5ld0Nvb3JkcylcclxuICAgICAgICAgICAgLnRvKHsgeTogb2xkQ29vcmRzLnkgIC0gLjI1IH0sIDUwMCkgXHJcbiAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5JbikgXHJcbiAgICAgICAgICAgIC5vblVwZGF0ZSgoKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgeyB4OiBvbGRDb29yZHMueCwgeTogbmV3Q29vcmRzLnksIHo6IG9sZENvb3Jkcy56ICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTsgXHJcbiAgICB9XHJcbn0pO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdXRvZGVzdHJveS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdjYW52YXMtdGV4dCcsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIHRleHQ6IHsgdmFsdWU6ICdzdHJpbmcnIH1cclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgYml0bWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgbGV0IGNvbnRleHQgPSBiaXRtYXAuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBiaXRtYXAud2lkdGggPSAxMDI0O1xyXG4gICAgICAgIGJpdG1hcC5oZWlnaHQgPSAxMDI0O1xyXG4gICAgICAgIGJpdG1hcC5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnO1xyXG4gICAgICAgIGNvbnRleHQuZm9udCA9ICdib2xkIDQwcHggQXJpYWwnO1xyXG4gICAgICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICAgICAgY29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICB0aGlzLm11bHRpbGluZShjb250ZXh0LCB0aGlzLmRhdGEudGV4dCwgNTEyLCA1MTIpO1xyXG4gICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoYml0bWFwKVxyXG4gICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsIHsgc3JjOiB0ZXh0dXJlLCB0cmFuc3BhcmVudDogdHJ1ZSwgb3BhY2l0eTowLjggfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIG11bHRpbGluZTogZnVuY3Rpb24gKGN0eCwgdGV4dCwgeCwgeSkge1xyXG4gICAgICAgIGxldCBsaW5laGVpZ2h0ID0gY3R4Lm1lYXN1cmVUZXh0KFwiTVwiKS53aWR0aCAqIDEuMixcclxuICAgICAgICAgICAgbGluZXNPZnRleHQgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXNPZnRleHQubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjYmUyNjMzJztcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KGxpbmVzT2Z0ZXh0W2ldLCB4LCB5KTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlVGV4dChsaW5lc09mdGV4dFtpXSwgeCwgeSk7XHJcbiAgICAgICAgICAgIHkgKz0gbGluZWhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHdyaXRlOiBmdW5jdGlvbiAodGV4dCwgZG9udEZhZGUpIHtcclxuICAgICAgICB0aGlzLmRhdGEudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICBsZXQgbWF0ZXJpYWxQcm9wZXJ0aWVzID0geyBvcGFjaXR5OiAwLjggfTtcclxuICAgICAgICBpZiAoIWRvbnRGYWRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4obWF0ZXJpYWxQcm9wZXJ0aWVzKVxyXG4gICAgICAgICAgICAgICAgLnRvKHsgb3BhY2l0eTogMCB9LCAyNTApXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoMjAwMClcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ21hdGVyaWFsJywgeyBvcGFjaXR5OiBtYXRlcmlhbFByb3BlcnRpZXMub3BhY2l0eSB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NhbnZhc3RleHQuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=