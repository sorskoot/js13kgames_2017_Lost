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

	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

	window.rnd = m => ~~(Math.random() * m);
	window.t = new THREE.ImageUtils.loadTexture('./lost.png');
	window.t.minFilter = window.t.magFilter = 1003;
	window.pal = new THREE.ImageUtils.loadTexture('./palettes.png');
	window.pal.minFilter = window.pal.magFilter = 1003;
	


/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

	/* global THREE, AFRAME */
	AFRAME.registerComponent('mytexture', {
	  schema: {
	    color:
	    {
	      type: 'color'
	    },
	    index: { type: 'int' },
	    lookup: { type: 'int', default: 0 }
	  },
	  /**
	   * Creates a new THREE.ShaderMaterial using the two shaders defined
	   * in vertex.glsl and fragment.glsl.
	   */
	  init: function () {
	    const data = this.data;
	    var fragmentShader = document.getElementById('fragment').textContent;
	    var vertexShader = document.getElementById('vertex').textContent;
	
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
	        lookupIndex:{value:data.lookup},
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
	  /**
	   * Update the ShaderMaterial when component data changes.
	   */
	  update: function () {
	    this.material.uniforms.index.value = this.data.index;
	    this.material.uniforms.lookupIndex.value=this.data.lookup;
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
	  },
	  /**
	   * On each frame, update the 'time' uniform in the shaders.
	   */
	  // tick: function (t) {
	  //   this.material.uniforms.time.value = t / 1000; 
	  // }
	})

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	/* global THREE, AFRAME */
	AFRAME.registerComponent('billboard-texture', {
	  schema: {
	    index:{type:'int'},
	    lookup: { type: 'int', default: -1 }
	  },
	  init: function () {
	    const data = this.data;    
	    var fragmentShader = document.getElementById('fragment').textContent;
	    var vertexShader = document.getElementById('vertex-billboard').textContent;
	    
	    this.material = new THREE.ShaderMaterial({
	      uniforms: {
	        time: { value: 0.0 },
	        index: { value: this.data.index },
	        DiffuseTexture: { value: window.t},
	        color: { value: new THREE.Color(data.color) },
	        spriteDimensions: { value: { x: 16.0, y: 1.0 } },
	        repeat: { value: { x: 1.0, y: 1.0 } },
	        Lookup: { value: window.pal },    
	        lookupIndex:{value:data.lookup},
	        fogStart:{value:5},
	        fogEnd:{value:15},
	        alphatest:{value:0.95},
	        fogColor:{value: new THREE.Color(0,0,0)}
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
	      this.material.uniforms.repeat.value.x =+this.el.getAttribute("width")||1;
	      this.material.uniforms.repeat.value.y =+this.el.getAttribute("height")||1;
	      mesh.material = this.material;
	    }
	  },
	  /**
	   * On each frame, update the 'time' uniform in the shaders.
	   */
	  // tick: function (t) {
	  //   this.material.uniforms.time.value = t / 1000; 
	  // }
	})

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	const mapGen = __webpack_require__(14);
	
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
	                    if (worldData.data[wdp] == 102) plane.setAttribute("mytexture", "index:11;lookup:8");
	                    else if (worldData.data[wdp] == 170) plane.setAttribute("mytexture", "index:12;lookup:10");
	                    else if (worldData.data[wdp] == 238) plane.setAttribute("mytexture", "index:12;lookup:9");
	                    else {
	                        plane.setAttribute("mytexture", "index:0;lookup:" + ~~((i * 5) / (j * 2) * 3) % 5);
	                    }
	                    let x = i - (size / 2);
	                    let y = j - (size / 2);
	
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
	            p.c.data[2] = 0x88;
	            this.putPix(p.c, p.x, p.y);
	
	            b.setAttribute("billboard-texture", { index: 2, lookup: mob.i });
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
	
	            b.setAttribute("billboard-texture", { index: D.objs[i].s });
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
/* 14 */
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
	
	        // var mapWidth = 256;
	
	        let pl = pieces.length;
	        for (let i = 0; i < pl; i++) {
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
	
	        var mapCanvas = document.createElement('canvas');
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
	                let q = addRoom(exit, special);
	                newExits = newExits.concat(q);
	                special = 0;
	            });
	            exits = newExits;
	        }
	
	        return mapContext;
	    }
	
	}
	module.exports = generator;

/***/ }),
/* 15 */
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
	        this.map = document.getElementById('mapgeo').components.map;
	        this.message = document.querySelector('[canvas-text]').components['canvas-text'];
	        this.cursor = document.querySelector('[cursor]');
	        this.camera.rot = 0;
	        window.GM = this;
	    },
	    update: function (d) {
	        if (this.data.state > 1) return;
	        switch (this.data.state) {
	            case 0:
	                this.player.components.player.move(d);
	                break;
	            case 1:
	                this.cursor.setAttribute('cursor', { fuse: false });
	                let mobs = document.querySelectorAll('[mob]');
	                mobs.forEach(d => d.components.mob.move());
	                setTimeout(() => {
	                    this.cursor.setAttribute('cursor', { fuse: true });
	                    this.data.state = 0;
	                }, 500);
	                break;
	        }
	    }
	
	
	});
	
	
	
	
	


/***/ }),
/* 16 */
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
	            pp = GM.player.components.position.data;
	        var a = new THREE.Vector3(pp.x, pp.z, 0);                      // 0,0
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
	            do {
	                tx = rnd(3) - 1;
	                ty = rnd(3) - 1;
	                c = GM.map.getPix(s.data.x + tx, s.data.y + ty);
	            } while (c.data[0] == 0)
	
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
	        ent.setAttribute('billboard-texture', { index: 14, lookup: 12 });
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
/* 17 */
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
	        var s = this;
	        if (GM.data.state != 0) return;
	        var coords = s.el.components.position.data;
	        var a = new THREE.Vector3(data.x, data.y, 0);                      // 0,0
	        var b = new THREE.Vector3(coords.x, coords.z, 0);                  // 1,0
	        coords.r = GM.camera.rot;
	        if (a.distanceTo(b) > 1.9 || a.distanceTo(b) < .2)
	            return;
	        var c = GM.map.getPix(data.x + size / 2, data.y + size / 2);
	        if (c.data[2] > 0) { // mob in next position
	            let mob = document.querySelector(`#e${data.x + size / 2}-${data.y + size / 2}`).components.mob;
	            let sprcoord = { x: 0, z: 0 };
	            new TWEEN.Tween(sprcoord) // Create a new tween that modifies 'coords'.
	                .to({ x: a.x - b.x, z: a.y - b.y }, 500) // Move to (300, 200) in 1 second.
	                .yoyo(true)
	                .repeat(1)
	                .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
	                .onUpdate(() => { // Called after tween.js updates 'coords'.
	                    this.sprite.setAttribute('position', `${sprcoord.x} 0 ${sprcoord.z}`);
	                })
	                .onComplete(() => {
	                    mob.hit(this.attack + rnd(2));
	                    setTimeout(() => {
	                        if(GM.data.state >2)return;
	                        GM.data.state = 1;
	                        GM.update();
	                    }, 1000);
	                })
	                .start(); // Start the tween immediately.            
	        } else {
	            if (c.data[1] > 0) { // item in next position
	                document.querySelector(`#b${data.x + size / 2}-${data.y + size / 2}`).components.item.get()
	                    .then(p => {
	                        let msg = `Found ${p.n}`;
	                        switch (p.t) {
	                            case 1: // heart
	                                s.data.health = Math.min(s.data.health += 5, 25);
	                                msg += `\nHealth = ${s.data.health}/25`;
	                                break;
	                            case 2: // sword
	                                if (p.d > this.attack) this.attack = p.d;
	                                break;
	                            case 3: // shield
	                                this.defense = Math.max(this.defense, p.b);
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
	
	            new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
	                .to({ x: data.x, z: data.y }, 1000) // Move to (300, 200) in 1 second.
	                .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
	                .onUpdate(function () { // Called after tween.js updates 'coords'.
	                    s.el.setAttribute('position', `${coords.x} .25 ${coords.z}`);
	                })
	                .onComplete(() => {
	                    if(GM.data.state > 2)return;
	                    GM.data.state = 1;
	                    GM.update();
	                })
	                .start(); // Start the tween immediately.
	        }
	    },
	    hit: function (amount) {
	
	        let damage = amount * (rnd(100) < this.defense ? 0 : 1);
	
	        let ent = document.createElement('a-entity');
	
	        ent.setAttribute('billboard-texture', { index: 14, lookup: damage > 0 ? 5 : 1 });
	
	        ent.setAttribute('mixin', 'spr');
	        ent.setAttribute('auto-destroy', '');
	        this.el.appendChild(ent);
	        if (damage > 0) {
	            this.data.health -= damage;
	
	            if (this.data.health <= 0) {
	                this.sprite.setAttribute('billboard-texture', { index: 15 });
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
/* 18 */
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
	        s.el.setAttribute("billboard-texture", { index: s.data.props.s, lookup: s.data.props.i });
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
/* 19 */
/***/ (function(module, exports) {

	AFRAME.registerComponent('auto-destroy', {
	    init: function () {
	        // tween and destroy
	        var m = this.el.getObject3D('mesh');
	        if (m) m.material.depthTest = false;
	        let oldx = this.el.components.position.data.x || 0,
	            oldy = this.el.components.position.data.y || 0,
	            oldz = this.el.components.position.data.z || 0,
	            coords = { y: oldy }
	        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
	            .to({ y: oldy - .25 }, 500) // Move to (300, 200) in 1 second.
	            .easing(TWEEN.Easing.Quadratic.In) // Use an easing function to make the animation smooth.
	            .onUpdate(() => { // Called after tween.js updates 'coords'.
	                this.el.setAttribute('position', { x: oldx, y: coords.y, z: oldz });
	            })
	            .onComplete(() => {
	                this.el.parentNode.removeChild(this.el);
	            })
	            .start(); // Start the tween immediately.
	    }
	});


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	AFRAME.registerComponent('canvas-text', {
	    schema: {
	        text: { value: 'string' }
	    },
	    init: function () {
	        this.update();
	    },
	    update: function () {
	        var bitmap = document.createElement('canvas');
	        var g = bitmap.getContext('2d');
	        bitmap.width = 1024;
	        bitmap.height = 1024;
	        bitmap.style.imageRendering = 'pixelated';
	        g.font = 'bold 40px Arial';
	        g.textBaseline = 'middle';
	        g.textAlign = 'center';
	        this.multiline(g, this.data.text, 512, 512);
	        var texture = new THREE.Texture(bitmap)
	        texture.needsUpdate = true;
	        this.el.setAttribute('material', { src: texture, transparent: true, opacity:0.8 });
	    },
	    multiline: function (ctx, text, x, y) {
	        let lh = ctx.measureText("M").width * 1.2,
	            t = text.split("\n");
	        for (var i = 0; i < t.length; ++i) {
	            ctx.fillStyle = '#be2633';
	            ctx.fillText(t[i], x, y);
	            ctx.strokeStyle = '#000';
	            ctx.strokeText(t[i], x, y);
	            y += lh;
	        }
	    },
	    write: function (text, dontFade) {
	        this.data.text = text;
	        this.update();
	        var d = { o: 0.8 };
	        if (!dontFade) {
	            this.t = new TWEEN.Tween(d)
	                .to({ o: 0 }, 250)
	                .delay(2000)
	                .onUpdate(() => {
	                    this.el.setAttribute('material', { opacity: d.o });
	                })
	                .start();
	        }
	    }
	});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTkwZjkwOWIxY2RhNWRjYzJkZDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215U2hhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9iaWxsYm9hcmRTaGFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwZ2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9iLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1dG9kZXN0cm95LmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXN0ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakIsa0NBQWlDO0FBQ2pDLFVBQVM7QUFDVDtBQUNBOzs7QUFHQSxFQUFDLEU7Ozs7OztBQ3pDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCO0FBQ3RCO0FBQ0Esa0JBQWlCLGdCQUFnQjtBQUNqQztBQUNBLDhCQUE2QjtBQUM3QixtREFBa0QsZ0NBQWdDO0FBQ2xGLGNBQWE7QUFDYjtBQUNBO0FBQ0EsY0FBYTtBQUNiLHNCQUFxQjtBQUNyQjtBQUNBLEVBQUM7Ozs7Ozs7QUNwQkQ7QUFDQTtBQUNBLGdCQUFlO0FBQ2YsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTBDLCtDQUErQztBQUN6RixNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esc0JBQXFCLE9BQU87QUFDNUI7QUFDQTtBQUNBLHVEQUFzRCxlQUFlO0FBQ3JFLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxFQUFDLEUiLCJmaWxlIjoiYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGU5MGY5MDliMWNkYTVkY2MyZGQ2IiwicmVxdWlyZSgnLi9nbG9iYWwnKTtcclxucmVxdWlyZSgnLi9kYXRhJyk7XHJcbnJlcXVpcmUoJy4vbXlTaGFkZXInKTtcclxucmVxdWlyZSgnLi9iaWxsYm9hcmRTaGFkZXInKTtcclxucmVxdWlyZSgnLi9tYXAnKTtcclxucmVxdWlyZSgnLi9nYW1lbWFuYWdlcicpO1xyXG5yZXF1aXJlKCcuL21vYicpO1xyXG5yZXF1aXJlKCcuL3BsYXllcicpO1xyXG5yZXF1aXJlKCcuL2l0ZW0nKTtcclxucmVxdWlyZSgnLi9hdXRvZGVzdHJveScpO1xyXG5yZXF1aXJlKCcuL2NhbnZhc3RleHQnKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwid2luZG93LnJuZCA9IG0gPT4gfn4oTWF0aC5yYW5kb20oKSAqIG0pO1xyXG53aW5kb3cudCA9IG5ldyBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCcuL2xvc3QucG5nJyk7XHJcbndpbmRvdy50Lm1pbkZpbHRlciA9IHdpbmRvdy50Lm1hZ0ZpbHRlciA9IDEwMDM7XHJcbndpbmRvdy5wYWwgPSBuZXcgVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSgnLi9wYWxldHRlcy5wbmcnKTtcclxud2luZG93LnBhbC5taW5GaWx0ZXIgPSB3aW5kb3cucGFsLm1hZ0ZpbHRlciA9IDEwMDM7XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwid2luZG93LkQgPSB7XHJcbiAgICBwbGF5ZXI6IHtcclxuICAgICAgICB0OiAxLCAgLy8gdHlwZSA6IHBsYXllclxyXG4gICAgICAgIHM6IDIsICAvLyBzcHJpdGU6IDIgICAgXHJcbiAgICAgICAgaDogMTAsIC8vIHN0YXJ0IGhlYWx0aFxyXG4gICAgfSwgbW9iczogW3tcclxuICAgICAgICBoOiBbMywgMl0sIC8vIGhlYWx0aDogYmV0d2VlbiAyIGFuZCA1XHJcbiAgICAgICAgZDogWzEsIDFdLCAvL2RhbWFnZSBiZXR3ZWVuIDEgYW5kIDJcclxuICAgICAgICBpOiA2LCAgLy8gY29sb3IgaW5kZXggOFxyXG4gICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgIGM6IDcwIC8vIGNoYW5nZT03MCVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaDogWzQsIDRdLCAvLyBoZWFsdGg6IGJldHdlZW4gNCBhbmQgOFxyXG4gICAgICAgIGQ6IFszLCAyXSwgLy9kYW1hZ2UgYmV0d2VlbiAyIGFuZCA1XHJcbiAgICAgICAgaTogNywgLy8gY29sb3IgaW5kZXggOFxyXG4gICAgICAgIG06IDEwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICBjOiAyMCAvL2NoYW5nZSAzMCUgICAgICAgIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoOiBbNiwgNl0sIC8vIGhlYWx0aDogYmV0d2VlbiA2IGFuZCAxMlxyXG4gICAgICAgIGQ6IFs1LCA0XSwgLy9kYW1hZ2UgYmV0d2VlbiA0IGFuZCA5XHJcbiAgICAgICAgaTogOSwgIC8vIGNvbG9yIGluZGV4IDhcclxuICAgICAgICBtOiAzMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgYzogMTAgLy8gY2hhbmdlIDEwJVxyXG4gICAgfV0sXHJcbiAgICBmbG9vcnM6IFt7XHJcbiAgICAgICAgdDogMywgLy8gdHlwZTogZmxvb3JcclxuICAgICAgICBiOiAxLCAvLyBiaW9tZTogMVxyXG4gICAgICAgIHM6IFsxXSxcclxuICAgICAgICBpOiBbMiwgNV1cclxuICAgIH1dLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHQ6IDEsXHJcbiAgICAgICAgICAgIG46IFwiYSBoZWFydFwiLCAvL25hbWVcclxuICAgICAgICAgICAgczogMTMsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IC0xLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiA3MCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAyLCAvLyBzdWJ0eXBlIDogc3dvcmRcIixcclxuICAgICAgICAgICAgbjogXCJhbiBpcm9uIHN3b3JkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBkOiAzLCAvLyBkYW1hZ2VcclxuICAgICAgICAgICAgczogNSwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMSwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogMjAsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG5cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDIsIC8vIHN1YnR5cGUgOiBzd29yZFwiLFxyXG4gICAgICAgICAgICBuOiBcImEgZ29sZGVuIHN3b3JkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBkOiA2LCAvLyBkYW1hZ2VcclxuICAgICAgICAgICAgczogNSwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMjMsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTo2LCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogMTAsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMiwgLy8gc3VidHlwZSA6IHN3b3JkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYSBkaWFtb25kIHN3b3JkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBkOiAxMCwgLy8gZGFtYWdlXHJcbiAgICAgICAgICAgIHM6IDUsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDI0LCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDEyLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogMiwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAzLCAvLyBzdWJ0eXBlIDogc2hpZWxkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYW4gaXJvbiBzaGllbGRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGI6IDQwLCAvLyBibG9jayB2YWx1ZSA0MCVcclxuICAgICAgICAgICAgczogNCwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMCwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogMjAsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMywgLy8gc3VidHlwZSA6IHNoaWVsZFwiLFxyXG4gICAgICAgICAgICBuOiBcImEgZ29sZGVuIHNoaWVsZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgYjogNzAsIC8vIGJsb2NrIHZhbHVlIDcwJVxyXG4gICAgICAgICAgICBzOiA0LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAyMywgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiA2LCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogMTAsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMywgLy8gc3VidHlwZSA6IHNoaWVsZFwiLFxyXG4gICAgICAgICAgICBuOiBcImEgZGlhbW9uZCBzaGllbGRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGI6IDg1LCAvLyBibG9jayB2YWx1ZSA4NSVcclxuICAgICAgICAgICAgczogNCwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMjQsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMTIsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiA1LCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9XSxcclxuICAgIG9ianM6IFt7IC8vb2JqZWN0aXZlc1xyXG4gICAgICAgIHQ6IDgsIC8vIGl0ZW0gdHlwZSA9IDhcclxuICAgICAgICBwOiAxLCAvLyBwaWVjZSA9MVxyXG4gICAgICAgIG46IFwieW91ciBwbGFuZSdzIGNhYmluXCIsXHJcbiAgICAgICAgczogNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0OiA4LCAvLyBpdGVtIHR5cGUgPSA4XHJcbiAgICAgICAgcDogMixcclxuICAgICAgICBuOiBcInlvdXIgcGxhbmUncyBsZWZ0IHdpbmdcIixcclxuICAgICAgICBzOiA3XHJcbiAgICB9LHtcclxuICAgICAgICB0OiA4LCAvLyBpdGVtIHR5cGUgPSA4XHJcbiAgICAgICAgcDogMyxcclxuICAgICAgICBuOiBcInlvdXIgcGxhbmUncyBib2R5XCIsXHJcbiAgICAgICAgczogOFxyXG4gICAgfSx7XHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDQsXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgcmlnaHQgd2luZ1wiLFxyXG4gICAgICAgIHM6IDlcclxuICAgIH0se1xyXG4gICAgICAgIHQ6IDgsIC8vIGl0ZW0gdHlwZSA9IDhcclxuICAgICAgICBwOiA1LFxyXG4gICAgICAgIG46IFwieW91ciBwbGFuZSdzIHRocnVzdGVyXCIsXHJcbiAgICAgICAgczogMTBcclxuICAgIH1dXHJcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9kYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWwgVEhSRUUsIEFGUkFNRSAqL1xyXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ215dGV4dHVyZScsIHtcclxuICBzY2hlbWE6IHtcclxuICAgIGNvbG9yOlxyXG4gICAge1xyXG4gICAgICB0eXBlOiAnY29sb3InXHJcbiAgICB9LFxyXG4gICAgaW5kZXg6IHsgdHlwZTogJ2ludCcgfSxcclxuICAgIGxvb2t1cDogeyB0eXBlOiAnaW50JywgZGVmYXVsdDogMCB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsIHVzaW5nIHRoZSB0d28gc2hhZGVycyBkZWZpbmVkXHJcbiAgICogaW4gdmVydGV4Lmdsc2wgYW5kIGZyYWdtZW50Lmdsc2wuXHJcbiAgICovXHJcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgIHZhciBmcmFnbWVudFNoYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFnbWVudCcpLnRleHRDb250ZW50O1xyXG4gICAgdmFyIHZlcnRleFNoYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJ0ZXgnKS50ZXh0Q29udGVudDtcclxuXHJcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICB0aW1lOiB7IHZhbHVlOiAwLjAgfSxcclxuICAgICAgICBpbmRleDogeyB2YWx1ZTogdGhpcy5kYXRhLmluZGV4IH0sXHJcbiAgICAgICAgRGlmZnVzZVRleHR1cmU6IHsgdmFsdWU6IHdpbmRvdy50IH0sXHJcbiAgICAgICAgTG9va3VwOiB7IHZhbHVlOiB3aW5kb3cucGFsIH0sXHJcbiAgICAgICAgY29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcihkYXRhLmNvbG9yKSB9LFxyXG4gICAgICAgIHNwcml0ZURpbWVuc2lvbnM6IHsgdmFsdWU6IHsgeDogMTYuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICByZXBlYXQ6IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIGZvZ1N0YXJ0OiB7IHZhbHVlOiA1IH0sXHJcbiAgICAgICAgZm9nRW5kOiB7IHZhbHVlOiAxNSB9LFxyXG4gICAgICAgIGxvb2t1cEluZGV4Ont2YWx1ZTpkYXRhLmxvb2t1cH0sXHJcbiAgICAgICAgZm9nQ29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigwLCAwLCAwKSB9LFxyXG4gICAgICAgIHRpbnQ6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigyNTUsIDI1NSwgMjU1KSB9LFxyXG4gICAgICAgIHRpbnRBbW91bnQ6IHsgdmFsdWU6IDAgfVxyXG4gICAgICB9LFxyXG4gICAgICB2ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgIGZyYWdtZW50U2hhZGVyXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYXBwbHlUb01lc2goKTtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kZWwtbG9hZGVkJywgKCkgPT4gdGhpcy5hcHBseVRvTWVzaCgpKTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgU2hhZGVyTWF0ZXJpYWwgd2hlbiBjb21wb25lbnQgZGF0YSBjaGFuZ2VzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5pbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5pbmRleDtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMubG9va3VwSW5kZXgudmFsdWU9dGhpcy5kYXRhLmxvb2t1cDtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IHRoZSBtYXRlcmlhbCB0byB0aGUgY3VycmVudCBlbnRpdHkuXHJcbiAgICovXHJcbiAgYXBwbHlUb01lc2g6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG1lc2ggPSB0aGlzLmVsLmdldE9iamVjdDNEKCdtZXNoJyk7XHJcbiAgICBpZiAobWVzaCkge1xyXG4gICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlcGVhdC52YWx1ZS54ID0gK3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikgfHwgMTtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueSA9ICt0aGlzLmVsLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKSB8fCAxO1xyXG4gICAgICBtZXNoLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuICAgIH1cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIE9uIGVhY2ggZnJhbWUsIHVwZGF0ZSB0aGUgJ3RpbWUnIHVuaWZvcm0gaW4gdGhlIHNoYWRlcnMuXHJcbiAgICovXHJcbiAgLy8gdGljazogZnVuY3Rpb24gKHQpIHtcclxuICAvLyAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudGltZS52YWx1ZSA9IHQgLyAxMDAwOyBcclxuICAvLyB9XHJcbn0pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbXlTaGFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGdsb2JhbCBUSFJFRSwgQUZSQU1FICovXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnYmlsbGJvYXJkLXRleHR1cmUnLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBpbmRleDp7dHlwZTonaW50J30sXHJcbiAgICBsb29rdXA6IHsgdHlwZTogJ2ludCcsIGRlZmF1bHQ6IC0xIH1cclxuICB9LFxyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7ICAgIFxyXG4gICAgdmFyIGZyYWdtZW50U2hhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYWdtZW50JykudGV4dENvbnRlbnQ7XHJcbiAgICB2YXIgdmVydGV4U2hhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcnRleC1iaWxsYm9hcmQnKS50ZXh0Q29udGVudDtcclxuICAgIFxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgaW5kZXg6IHsgdmFsdWU6IHRoaXMuZGF0YS5pbmRleCB9LFxyXG4gICAgICAgIERpZmZ1c2VUZXh0dXJlOiB7IHZhbHVlOiB3aW5kb3cudH0sXHJcbiAgICAgICAgY29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcihkYXRhLmNvbG9yKSB9LFxyXG4gICAgICAgIHNwcml0ZURpbWVuc2lvbnM6IHsgdmFsdWU6IHsgeDogMTYuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICByZXBlYXQ6IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LCAgICBcclxuICAgICAgICBsb29rdXBJbmRleDp7dmFsdWU6ZGF0YS5sb29rdXB9LFxyXG4gICAgICAgIGZvZ1N0YXJ0Ont2YWx1ZTo1fSxcclxuICAgICAgICBmb2dFbmQ6e3ZhbHVlOjE1fSxcclxuICAgICAgICBhbHBoYXRlc3Q6e3ZhbHVlOjAuOTV9LFxyXG4gICAgICAgIGZvZ0NvbG9yOnt2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKDAsMCwwKX1cclxuICAgICAgfSxcclxuICAgICAgdmVydGV4U2hhZGVyLFxyXG4gICAgICBmcmFnbWVudFNoYWRlclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1hdGVyaWFsLmJsZW5kaW5nID0gVEhSRUUuTXVsdGlwbHlCbGVuZGluZztcclxuICAgIHRoaXMuYXBwbHlUb01lc2goKTtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kZWwtbG9hZGVkJywgKCkgPT4gdGhpcy5hcHBseVRvTWVzaCgpKTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgU2hhZGVyTWF0ZXJpYWwgd2hlbiBjb21wb25lbnQgZGF0YSBjaGFuZ2VzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5pbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5pbmRleDtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMubG9va3VwSW5kZXgudmFsdWUgPSB0aGlzLmRhdGEubG9va3VwO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQXBwbHkgdGhlIG1hdGVyaWFsIHRvIHRoZSBjdXJyZW50IGVudGl0eS5cclxuICAgKi9cclxuICBhcHBseVRvTWVzaDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWVzaCA9IHRoaXMuZWwuZ2V0T2JqZWN0M0QoJ21lc2gnKTtcclxuICAgIGlmIChtZXNoKSB7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnggPSt0aGlzLmVsLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpfHwxO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlcGVhdC52YWx1ZS55ID0rdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIil8fDE7XHJcbiAgICAgIG1lc2gubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogT24gZWFjaCBmcmFtZSwgdXBkYXRlIHRoZSAndGltZScgdW5pZm9ybSBpbiB0aGUgc2hhZGVycy5cclxuICAgKi9cclxuICAvLyB0aWNrOiBmdW5jdGlvbiAodCkge1xyXG4gIC8vICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50aW1lLnZhbHVlID0gdCAvIDEwMDA7IFxyXG4gIC8vIH1cclxufSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iaWxsYm9hcmRTaGFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IG1hcEdlbiA9IHJlcXVpcmUoXCIuL21hcGdlblwiKTtcclxuXHJcbndpbmRvdy5zaXplID0gMTI4O1xyXG5jb25zdCBkZXB0aCA9IDc7XHJcblxyXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ21hcCcsIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1hcENvbnRleHQgPSBtYXBHZW4uZ28oc2l6ZSwgZGVwdGgpO1xyXG4gICAgICAgIGxldCB3b3JsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKTtcclxuICAgICAgICBsZXQgd29ybGREYXRhID0gdGhpcy5tYXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLCBzaXplKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdkcCA9IChpICsgc2l6ZSAqIGopICogNDtcclxuICAgICAgICAgICAgICAgIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGxhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIilcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5jbGFzc0xpc3QuYWRkKFwiZmxvb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdvcmxkRGF0YS5kYXRhW3dkcF0gPT0gMTAyKSBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJpbmRleDoxMTtsb29rdXA6OFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdID09IDE3MCkgcGxhbmUuc2V0QXR0cmlidXRlKFwibXl0ZXh0dXJlXCIsIFwiaW5kZXg6MTI7bG9va3VwOjEwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdvcmxkRGF0YS5kYXRhW3dkcF0gPT0gMjM4KSBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJpbmRleDoxMjtsb29rdXA6OVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKFwibXl0ZXh0dXJlXCIsIFwiaW5kZXg6MDtsb29rdXA6XCIgKyB+figoaSAqIDUpIC8gKGogKiAyKSAqIDMpICUgNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gaSAtIChzaXplIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSBqIC0gKHNpemUgLyAyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChHTS5kYXRhLnN0YXRlID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR00ucGxheWVyLmNvbXBvbmVudHMucGxheWVyLm1vdmUoeyB4LCB5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZShcImN1cnNvci1saXN0ZW5lclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7eH0gMCAke3l9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKCdtaXhpbicsICd2b3hlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLmFwcGVuZENoaWxkKHBsYW5lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh3b3JsZCk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmFkZE9ianMoKSk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmFkZEl0ZW1zKCkpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5hZGRNb2JzKCkpO1xyXG4gICAgfSxcclxuICAgIGdldFBpeDogZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBDb250ZXh0LmdldEltYWdlRGF0YSh4LCB5LCAxLCAxKTtcclxuICAgIH0sXHJcbiAgICBwdXRQaXg6IGZ1bmN0aW9uIChjLCB4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwQ29udGV4dC5wdXRJbWFnZURhdGEoYywgeCwgeSk7XHJcbiAgICB9LFxyXG4gICAgcmFuZG9tUGxhY2U6IGZ1bmN0aW9uIChtaW5EaXN0YW5jZSA9IDApIHtcclxuICAgICAgICBsZXQgeCwgeSwgYztcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHggPSB3aW5kb3cucm5kKHNpemUpO1xyXG4gICAgICAgICAgICB5ID0gd2luZG93LnJuZChzaXplKTtcclxuICAgICAgICAgICAgYyA9IHRoaXMuZ2V0UGl4KHgsIHkpO1xyXG4gICAgICAgIH0gd2hpbGUgKGMuZGF0YS5ldmVyeShwID0+IHAgPT0gMCkpO1xyXG4gICAgICAgIHJldHVybiB7IHgsIHksIGMgfTtcclxuICAgIH0sXHJcbiAgICBnZXRXZWlnaHRlZDogZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgICAgICBsZXQgZiA9IGZhbHNlLCBpdGVtO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaXRlbSA9IGxpc3Rbcm5kKGxpc3QubGVuZ3RoKV07XHJcbiAgICAgICAgICAgIGYgPSBybmQoMTAwKSA8IGl0ZW0uYztcclxuICAgICAgICB9IHdoaWxlICghZilcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0sXHJcbiAgICBhZGRJdGVtczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpLCB0eCwgdHksIHAsIGl0ZW07XHJcblxyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBwID0gdGhpcy5yYW5kb21QbGFjZSgpO1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuZ2V0V2VpZ2h0ZWQoRC5pdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm1hcCA9IHA7XHJcblxyXG4gICAgICAgICAgICAgICAgZCA9IChuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSkuZGlzdGFuY2VUbyhuZXcgVEhSRUUuVmVjdG9yMihwLngsIHAueSkpO1xyXG4gICAgICAgICAgICB9IHdoaWxlIChpdGVtLm0gPj0gZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocC5jLmRhdGFbMV0gIT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIHAuYy5kYXRhWzFdID0gMHg0MTtcclxuICAgICAgICAgICAgdGhpcy5wdXRQaXgocC5jLCBwLngsIHAueSk7XHJcblxyXG4gICAgICAgICAgICB0eCA9IHAueCAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICB0eSA9IHAueSAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICB2YXIgZCA9IChuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSkuZGlzdGFuY2VUbyhuZXcgVEhSRUUuVmVjdG9yMih0eCwgdHkpKTtcclxuXHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKFwiYmlsbGJvYXJkLXRleHR1cmVcIiwgeyBpbmRleDogMyB9KTsvLyB7IGluZGV4OiBpdGVtLnMsIGxvb2t1cDogaXRlbS5pIH0pO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0eH0gLjI1ICR7dHl9YCk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ2l0ZW0nLCB7IHg6IHAueCwgeTogcC55LCBwcm9wczogaXRlbSB9KTtcclxuICAgICAgICAgICAgYi5pZCA9IGBiJHtwLnh9LSR7cC55fWA7XHJcbiAgICAgICAgICAgIGIuZGF0YSA9IGl0ZW07XHJcbiAgICAgICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9LFxyXG4gICAgYWRkTW9iczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpLCB0eCwgdHk7XHJcbiAgICAgICAgICAgIGxldCBtb2IgPSB0aGlzLmdldFdlaWdodGVkKEQubW9icyksIHAsIGQ7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHAgPSB0aGlzLnJhbmRvbVBsYWNlKCk7XHJcbiAgICAgICAgICAgICAgICB0eCA9IHAueCAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgdHkgPSBwLnkgLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgICAgIGQgPSAobmV3IFRIUkVFLlZlY3RvcjIoMCwgMCkpLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjIodHgsIHR5KSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKG1vYi5tID49IGQpO1xyXG4gICAgICAgICAgICBwLmMuZGF0YVsyXSA9IDB4ODg7XHJcbiAgICAgICAgICAgIHRoaXMucHV0UGl4KHAuYywgcC54LCBwLnkpO1xyXG5cclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtdGV4dHVyZVwiLCB7IGluZGV4OiAyLCBsb29rdXA6IG1vYi5pIH0pO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0eH0gLjI1ICR7dHl9YCk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21vYicsIHtcclxuICAgICAgICAgICAgICAgIHg6IHAueCwgeTogcC55LFxyXG4gICAgICAgICAgICAgICAgaGVhbHRoOiBybmQobW9iLmhbMV0pICsgbW9iLmhbMF0sXHJcbiAgICAgICAgICAgICAgICBkYW1hZ2U6IHJuZChtb2IuZFsxXSkgKyBtb2IuZFswXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYi5pZCA9IGBlJHtwLnh9LSR7cC55fWA7XHJcbiAgICAgICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9LFxyXG4gICAgYWRkT2JqczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBvYmpzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpLCB0eCwgdHksIHAsIGQ7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHAgPSB0aGlzLnJhbmRvbVBsYWNlKCk7XHJcbiAgICAgICAgICAgICAgICB0eCA9IHAueCAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgdHkgPSBwLnkgLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgICAgIGQgPSAobmV3IFRIUkVFLlZlY3RvcjIoMCwgMCkpLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjIodHgsIHR5KSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKDI1ID49IGQpOyBcclxuXHJcbiAgICAgICAgICAgIHAuYy5kYXRhWzFdID0gMHhFRTtcclxuICAgICAgICAgICAgdGhpcy5wdXRQaXgocC5jLCBwLngsIHAueSk7XHJcblxyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZShcImJpbGxib2FyZC10ZXh0dXJlXCIsIHsgaW5kZXg6IEQub2Jqc1tpXS5zIH0pO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0eH0gLjI1ICR7dHl9YCk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ2l0ZW0nLCB7IHg6IHAueCwgeTogcC55LCBwcm9wczogRC5vYmpzW2ldIH0pO1xyXG4gICAgICAgICAgICBiLmlkID0gYGIke3AueH0tJHtwLnl9YDtcclxuICAgICAgICAgICAgb2Jqcy5hcHBlbmRDaGlsZChiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdjdXJzb3ItbGlzdGVuZXInLCB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBsYXN0SW5kZXggPSAtMTtcclxuICAgICAgdmFyIENPTE9SUyA9IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXTtcclxuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBsYXN0SW5kZXggPSAobGFzdEluZGV4ICsgMSkgJSBDT0xPUlMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsICdjb2xvcicsIENPTE9SU1tsYXN0SW5kZXhdKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnSSB3YXMgY2xpY2tlZCBhdDogJywgZXZ0LmRldGFpbC5pbnRlcnNlY3Rpb24ucG9pbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG52YXIgZ2VuZXJhdG9yID0ge1xyXG4gICAgZ286IChtYXBXaWR0aCwgZGVwdGgpID0+IHtcclxuICAgICAgICB2YXIgcGllY2VzID0gW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsxLCAwLCAyLCAwLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMiwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMCwgMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMiwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDAsIDAsIDAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMiwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvLyB2YXIgbWFwV2lkdGggPSAyNTY7XHJcblxyXG4gICAgICAgIGxldCBwbCA9IHBpZWNlcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZSA9IHBpZWNlc1tpXS5zbGljZSgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNsb25lLmxlbmd0aDsgaisrKVxyXG4gICAgICAgICAgICAgICAgY2xvbmVbal0gPSBjbG9uZVtqXS5zbGljZSgpLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgcGllY2VzLnB1c2goY2xvbmUpO1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUyID0gcGllY2VzW2ldLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGNsb25lMiA9IGNsb25lMi5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHBpZWNlcy5wdXNoKGNsb25lMik7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZTMgPSBjbG9uZS5zbGljZSgpO1xyXG4gICAgICAgICAgICBjbG9uZTMgPSBjbG9uZTMucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBwaWVjZXMucHVzaChjbG9uZTMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBpZWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwaWVjZXNbaV0uc2l6ZSA9IHsgdzogcGllY2VzW2ldWzBdLmxlbmd0aCwgaDogcGllY2VzW2ldLmxlbmd0aCB9O1xyXG4gICAgICAgICAgICBwaWVjZXNbaV0uZXhpdHMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwaWVjZXNbaV0uc2l6ZS5oOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgcGllY2VzW2ldLnNpemUudzsgaCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpZWNlc1tpXVtqXVtoXSA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZXNbaV0uZXhpdHMucHVzaCh7IHg6IGgsIHk6IGogfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbWFwQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgbWFwQ2FudmFzLndpZHRoID0gbWFwV2lkdGg7XHJcbiAgICAgICAgbWFwQ2FudmFzLmhlaWdodCA9IG1hcFdpZHRoO1xyXG5cclxuICAgICAgICAvLyBUZW1wIGR1cmluZyBkZXZlbG9wbWVudFxyXG4gICAgICAgIG1hcENhbnZhcy5zdHlsZS53aWR0aCA9ICcxMDI0cHgnO1xyXG4gICAgICAgIG1hcENhbnZhcy5zdHlsZS5oZWlnaHQgPSAnMTAyNHB4JztcclxuICAgICAgICBtYXBDYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1hcENhbnZhcyk7XHJcbiAgICAgICAgLy8gRU5EXHJcblxyXG4gICAgICAgIHZhciBtYXBDb250ZXh0ID0gbWFwQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMClcIjtcclxuICAgICAgICBtYXBDb250ZXh0LmZpbGxSZWN0KDAsIDAsIG1hcFdpZHRoLCBtYXBXaWR0aCk7XHJcblxyXG4gICAgICAgIGxldCBmaXJzdCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGFkZFJvb20gPSAoZXhpdCwgc3BlY2lhbCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGllY2U7XHJcbiAgICAgICAgICAgIGxldCBleGl0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY2xlYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHRhcmdldFg7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRZO1xyXG4gICAgICAgICAgICBsZXQgdHJpZXMgPSAyNTtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcGllY2UgPSBwaWVjZXNbcm5kKHBpZWNlcy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHEgPSAwOyBxIDwgcGllY2UuZXhpdHMubGVuZ3RoOyBxKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRYID0gZXhpdC54IC0gcGllY2UuZXhpdHNbcV0ueDtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZID0gZXhpdC55IC0gcGllY2UuZXhpdHNbcV0ueTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nRGF0YSA9IG1hcENvbnRleHQuZ2V0SW1hZ2VEYXRhKHRhcmdldFgsIHRhcmdldFksIHBpZWNlLnNpemUudywgcGllY2Uuc2l6ZS5oKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhciA9IGltZ0RhdGEuZGF0YS5ldmVyeShkID0+IGQgPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0cmllcy0tO1xyXG4gICAgICAgICAgICB9IHdoaWxlICh0cmllcyA+IDAgJiYgIWNsZWFyKTtcclxuICAgICAgICAgICAgaWYgKCFjbGVhcikge1xyXG4gICAgICAgICAgICAgICAgcGllY2UgPSBbWzFdXTtcclxuICAgICAgICAgICAgICAgIHBpZWNlLmV4aXRzID0gW3t9XTtcclxuICAgICAgICAgICAgICAgIHRhcmdldFggPSBleGl0Lng7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRZID0gZXhpdC55O1xyXG4gICAgICAgICAgICAgICAgcSA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSAhZmlyc3QgPyBcIiM0MDBcIiA6IFwiIzYwMFwiO1xyXG4gICAgICAgICAgICBpZiAoIWZpcnN0KSBtYXBDb250ZXh0LmZpbGxSZWN0KHRhcmdldFggKyBwaWVjZS5leGl0c1txXS54IHx8IDAsIHRhcmdldFkgKyBwaWVjZS5leGl0c1txXS55IHx8IDAsIDEsIDEpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHNwZWNpYWwgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCIjRTAwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwZWNpYWwgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCIjQTAwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgcGllY2UuZm9yRWFjaCgoaSwgcHkpID0+IHtcclxuICAgICAgICAgICAgICAgIGkuZm9yRWFjaCgoaiwgcHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxSZWN0KHRhcmdldFggKyBweCwgdGFyZ2V0WSArIHB5LCAxLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdHMucHVzaCh7IHg6IHRhcmdldFggKyBweCwgeTogdGFyZ2V0WSArIHB5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZXhpdHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb29wcyA9IGRlcHRoO1xyXG4gICAgICAgIGxldCBleGl0cyA9IFt7IHg6IG1hcFdpZHRoIC8gMiwgeTogbWFwV2lkdGggLyAyIH1dO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcHM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbmV3RXhpdHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHNwZWNpYWw7XHJcbiAgICAgICAgICAgIGV4aXRzLmZvckVhY2goKGV4aXQsIGluZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gbG9vcHMgLSAxICYmIGluZCA9PSBleGl0cy5sZW5ndGggLSB+fihleGl0cy5sZW5ndGggLyAzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gbG9vcHMgLSAxICYmIGluZCA9PSB+fihleGl0cy5sZW5ndGggLyAzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHEgPSBhZGRSb29tKGV4aXQsIHNwZWNpYWwpO1xyXG4gICAgICAgICAgICAgICAgbmV3RXhpdHMgPSBuZXdFeGl0cy5jb25jYXQocSk7XHJcbiAgICAgICAgICAgICAgICBzcGVjaWFsID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV4aXRzID0gbmV3RXhpdHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFwQ29udGV4dDtcclxuICAgIH1cclxuXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0b3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFwZ2VuLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2dhbWVtYW5hZ2VyJywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgc3RhdGU6IHsgdmFsdWU6ICdpbnQnLCBkZWZhdWx0OiAwIH1cclxuICAgICAgICAvLyAwID09IHBsYXllclxyXG4gICAgICAgIC8vIDEgPT0gZW5lbXlcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyJyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhJyk7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwZ2VvJykuY29tcG9uZW50cy5tYXA7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NhbnZhcy10ZXh0XScpLmNvbXBvbmVudHNbJ2NhbnZhcy10ZXh0J107XHJcbiAgICAgICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbY3Vyc29yXScpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnJvdCA9IDA7XHJcbiAgICAgICAgd2luZG93LkdNID0gdGhpcztcclxuICAgIH0sXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zdGF0ZSA+IDEpIHJldHVybjtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YS5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jb21wb25lbnRzLnBsYXllci5tb3ZlKGQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnNldEF0dHJpYnV0ZSgnY3Vyc29yJywgeyBmdXNlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIGxldCBtb2JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW21vYl0nKTtcclxuICAgICAgICAgICAgICAgIG1vYnMuZm9yRWFjaChkID0+IGQuY29tcG9uZW50cy5tb2IubW92ZSgpKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnNldEF0dHJpYnV0ZSgnY3Vyc29yJywgeyBmdXNlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dhbWVtYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ21vYicsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIHg6IHsgdmFsdWU6ICdmbG9hdCcgfSxcclxuICAgICAgICB5OiB7IHZhbHVlOiAnZmxvYXQnIH0sXHJcbiAgICAgICAgaGVhbHRoOiB7IHZhbHVlOiAnaW50JyB9LFxyXG4gICAgICAgIGRhbWFnZTogeyB2YWx1ZTogJ2ludCcgfVxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbjtcclxuICAgIH0sXHJcbiAgICBtb3ZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQSogd291bGQgYmUgbmljZS4uLiBmb3Igbm93LCBqdXN0IG1vdmUgcmFuZG9tLi4uXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5oZWFsdGggPD0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCB0eCwgdHksIGMsIHMgPSB0aGlzLFxyXG4gICAgICAgICAgICBwcCA9IEdNLnBsYXllci5jb21wb25lbnRzLnBvc2l0aW9uLmRhdGE7XHJcbiAgICAgICAgdmFyIGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhwcC54LCBwcC56LCAwKTsgICAgICAgICAgICAgICAgICAgICAgLy8gMCwwXHJcbiAgICAgICAgdmFyIGIgPSBuZXcgVEhSRUUuVmVjdG9yMyh0aGlzLnBvcy5kYXRhLngsIHRoaXMucG9zLmRhdGEueiwgMCk7XHJcbiAgICAgICAgaWYgKGEuZGlzdGFuY2VUbyhiKSA8IDEuOSkgey8vIHBsYXllciBpcyBuZXh0IHRvIHRoZSBtb2IgYXR0YWNrXHJcbiAgICAgICAgICAgIHR4ID0gYS54IC0gYi54O1xyXG4gICAgICAgICAgICB0eSA9IGEueSAtIGIueTtcclxuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHsgeDogcy5wb3MuZGF0YS54LCB6OiBzLnBvcy5kYXRhLnogfTtcclxuICAgICAgICAgICAgdmFyIHR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcykgLy8gQ3JlYXRlIGEgbmV3IHR3ZWVuIHRoYXQgbW9kaWZpZXMgJ2Nvb3JkcycuXHJcbiAgICAgICAgICAgICAgICAudG8oeyB4OiBzLnBvcy5kYXRhLnggKyB0eCwgejogcy5wb3MuZGF0YS56ICsgdHkgfSwgNTAwKSAvLyBNb3ZlIHRvICgzMDAsIDIwMCkgaW4gMSBzZWNvbmQuXHJcbiAgICAgICAgICAgICAgICAueW95byh0cnVlKS5yZXBlYXQoMSlcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5Jbk91dCkgLy8gVXNlIGFuIGVhc2luZyBmdW5jdGlvbiB0byBtYWtlIHRoZSBhbmltYXRpb24gc21vb3RoLlxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uICgpIHsgLy8gQ2FsbGVkIGFmdGVyIHR3ZWVuLmpzIHVwZGF0ZXMgJ2Nvb3JkcycuXHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7Y29vcmRzLnh9IC4yNSAke2Nvb3Jkcy56fWApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvL3Nob3cgc3BsYXRcclxuICAgICAgICAgICAgICAgICAgICBHTS5wbGF5ZXIuY29tcG9uZW50cy5wbGF5ZXIuaGl0KHRoaXMuZGF0YS5kYW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpOyAvLyBTdGFydCB0aGUgdHdlZW4gaW1tZWRpYXRlbHkuICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7IC8vbW92ZVxyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICB0eCA9IHJuZCgzKSAtIDE7XHJcbiAgICAgICAgICAgICAgICB0eSA9IHJuZCgzKSAtIDE7XHJcbiAgICAgICAgICAgICAgICBjID0gR00ubWFwLmdldFBpeChzLmRhdGEueCArIHR4LCBzLmRhdGEueSArIHR5KTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoYy5kYXRhWzBdID09IDApXHJcblxyXG4gICAgICAgICAgICBsZXQgb2xkID0gR00ubWFwLmdldFBpeChzLmRhdGEueCwgcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICBvbGQuZGF0YVsyXSA9IDA7XHJcbiAgICAgICAgICAgIEdNLm1hcC5wdXRQaXgob2xkLCBzLmRhdGEueCwgcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICBjLmRhdGFbMl0gPSAweDg4O1xyXG4gICAgICAgICAgICBzLmRhdGEueCArPSB0eDtcclxuICAgICAgICAgICAgcy5kYXRhLnkgKz0gdHk7XHJcbiAgICAgICAgICAgIEdNLm1hcC5wdXRQaXgoYywgcy5kYXRhLngsIHMuZGF0YS55KTtcclxuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHsgeDogcy5wb3MuZGF0YS54LCB6OiBzLnBvcy5kYXRhLnogfTtcclxuICAgICAgICAgICAgdmFyIHR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcylcclxuICAgICAgICAgICAgICAgIC50byh7IHg6IHMucG9zLmRhdGEueCArIHR4LCB6OiBzLnBvcy5kYXRhLnogKyB0eSB9LCA0MDAgKyBybmQoNDAwKSlcclxuICAgICAgICAgICAgICAgIC5kZWxheShybmQoMjUwKSlcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5Jbk91dClcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7Y29vcmRzLnh9IC4yNSAke2Nvb3Jkcy56fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuaWQgPSBgZSR7Y29vcmRzLnggKyBzaXplIC8gMn0tJHtjb29yZHMueiArIHNpemUgLyAyfWA7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpdDogZnVuY3Rpb24gKGFtb3VudCkge1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEuaGVhbHRoIC09IGFtb3VudDtcclxuICAgICAgICBsZXQgZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcclxuICAgICAgICBlbnQuc2V0QXR0cmlidXRlKCdiaWxsYm9hcmQtdGV4dHVyZScsIHsgaW5kZXg6IDE0LCBsb29rdXA6IDEyIH0pO1xyXG4gICAgICAgIGVudC5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3NwcicpO1xyXG4gICAgICAgIGVudC5zZXRBdHRyaWJ1dGUoJ2F1dG8tZGVzdHJveScsICcnKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmlkID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBwaXggPSBHTS5tYXAuZ2V0UGl4KHRoaXMuZGF0YS54LCB0aGlzLmRhdGEueSk7XHJcbiAgICAgICAgICAgIHBpeC5kYXRhWzJdID0gMDtcclxuICAgICAgICAgICAgR00ubWFwLnB1dFBpeChwaXgsIHRoaXMuZGF0YS54LCB0aGlzLmRhdGEueSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2F1dG8tZGVzdHJveScsICcnKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vYi5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypnbG9iYWwgQUZSQU1FLCBHTSwgVEhSRUUsIHNpemUsIFRXRUVOLCBybmQqL1xyXG5cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdwbGF5ZXInLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICBoZWFsdGg6IHsgdmFsdWU6ICdpbnQnLCBkZWZhdWx0OiAyNSB9XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZm91bmRQaWVjZXMgPSAwO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrID0gMTtcclxuICAgICAgICB0aGlzLmRlZmVuc2UgPSAwO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci1zcHJpdGUnKTtcclxuICAgIH0sXHJcbiAgICBtb3ZlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHZhciBzID0gdGhpcztcclxuICAgICAgICBpZiAoR00uZGF0YS5zdGF0ZSAhPSAwKSByZXR1cm47XHJcbiAgICAgICAgdmFyIGNvb3JkcyA9IHMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhO1xyXG4gICAgICAgIHZhciBhID0gbmV3IFRIUkVFLlZlY3RvcjMoZGF0YS54LCBkYXRhLnksIDApOyAgICAgICAgICAgICAgICAgICAgICAvLyAwLDBcclxuICAgICAgICB2YXIgYiA9IG5ldyBUSFJFRS5WZWN0b3IzKGNvb3Jkcy54LCBjb29yZHMueiwgMCk7ICAgICAgICAgICAgICAgICAgLy8gMSwwXHJcbiAgICAgICAgY29vcmRzLnIgPSBHTS5jYW1lcmEucm90O1xyXG4gICAgICAgIGlmIChhLmRpc3RhbmNlVG8oYikgPiAxLjkgfHwgYS5kaXN0YW5jZVRvKGIpIDwgLjIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgYyA9IEdNLm1hcC5nZXRQaXgoZGF0YS54ICsgc2l6ZSAvIDIsIGRhdGEueSArIHNpemUgLyAyKTtcclxuICAgICAgICBpZiAoYy5kYXRhWzJdID4gMCkgeyAvLyBtb2IgaW4gbmV4dCBwb3NpdGlvblxyXG4gICAgICAgICAgICBsZXQgbW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Uke2RhdGEueCArIHNpemUgLyAyfS0ke2RhdGEueSArIHNpemUgLyAyfWApLmNvbXBvbmVudHMubW9iO1xyXG4gICAgICAgICAgICBsZXQgc3ByY29vcmQgPSB7IHg6IDAsIHo6IDAgfTtcclxuICAgICAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKHNwcmNvb3JkKSAvLyBDcmVhdGUgYSBuZXcgdHdlZW4gdGhhdCBtb2RpZmllcyAnY29vcmRzJy5cclxuICAgICAgICAgICAgICAgIC50byh7IHg6IGEueCAtIGIueCwgejogYS55IC0gYi55IH0sIDUwMCkgLy8gTW92ZSB0byAoMzAwLCAyMDApIGluIDEgc2Vjb25kLlxyXG4gICAgICAgICAgICAgICAgLnlveW8odHJ1ZSlcclxuICAgICAgICAgICAgICAgIC5yZXBlYXQoMSlcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5Jbk91dCkgLy8gVXNlIGFuIGVhc2luZyBmdW5jdGlvbiB0byBtYWtlIHRoZSBhbmltYXRpb24gc21vb3RoLlxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKCgpID0+IHsgLy8gQ2FsbGVkIGFmdGVyIHR3ZWVuLmpzIHVwZGF0ZXMgJ2Nvb3JkcycuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3NwcmNvb3JkLnh9IDAgJHtzcHJjb29yZC56fWApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2IuaGl0KHRoaXMuYXR0YWNrICsgcm5kKDIpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoR00uZGF0YS5zdGF0ZSA+MilyZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdNLmRhdGEuc3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHTS51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjLmRhdGFbMV0gPiAwKSB7IC8vIGl0ZW0gaW4gbmV4dCBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Ike2RhdGEueCArIHNpemUgLyAyfS0ke2RhdGEueSArIHNpemUgLyAyfWApLmNvbXBvbmVudHMuaXRlbS5nZXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXNnID0gYEZvdW5kICR7cC5ufWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocC50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IC8vIGhlYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5kYXRhLmhlYWx0aCA9IE1hdGgubWluKHMuZGF0YS5oZWFsdGggKz0gNSwgMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBgXFxuSGVhbHRoID0gJHtzLmRhdGEuaGVhbHRofS8yNWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IC8vIHN3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAuZCA+IHRoaXMuYXR0YWNrKSB0aGlzLmF0dGFjayA9IHAuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzogLy8gc2hpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZlbnNlID0gTWF0aC5tYXgodGhpcy5kZWZlbnNlLCBwLmIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiAvLyBwbGFuZSBwaWVjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm91bmRQaWVjZXMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3VuZFBpZWNlcyA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IGBcXG5Pbmx5ICR7NSAtIHRoaXMuZm91bmRQaWVjZXN9IHBpZWNlcyBsZWZ0YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHTS5kYXRhLnN0YXRlID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR00ubWVzc2FnZS53cml0ZShgWW91IGZvdW5kIGFsbCBwaWVjZXNcXG5hbmQgZXNjYXBlZCB0aGUgcGxhbmV0IWAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdNLm1lc3NhZ2Uud3JpdGUobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcykgLy8gQ3JlYXRlIGEgbmV3IHR3ZWVuIHRoYXQgbW9kaWZpZXMgJ2Nvb3JkcycuXHJcbiAgICAgICAgICAgICAgICAudG8oeyB4OiBkYXRhLngsIHo6IGRhdGEueSB9LCAxMDAwKSAvLyBNb3ZlIHRvICgzMDAsIDIwMCkgaW4gMSBzZWNvbmQuXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuSW5PdXQpIC8vIFVzZSBhbiBlYXNpbmcgZnVuY3Rpb24gdG8gbWFrZSB0aGUgYW5pbWF0aW9uIHNtb290aC5cclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7IC8vIENhbGxlZCBhZnRlciB0d2Vlbi5qcyB1cGRhdGVzICdjb29yZHMnLlxyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke2Nvb3Jkcy54fSAuMjUgJHtjb29yZHMuen1gKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAub25Db21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoR00uZGF0YS5zdGF0ZSA+IDIpcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIEdNLmRhdGEuc3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIEdNLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpOyAvLyBTdGFydCB0aGUgdHdlZW4gaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpdDogZnVuY3Rpb24gKGFtb3VudCkge1xyXG5cclxuICAgICAgICBsZXQgZGFtYWdlID0gYW1vdW50ICogKHJuZCgxMDApIDwgdGhpcy5kZWZlbnNlID8gMCA6IDEpO1xyXG5cclxuICAgICAgICBsZXQgZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcclxuXHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnYmlsbGJvYXJkLXRleHR1cmUnLCB7IGluZGV4OiAxNCwgbG9va3VwOiBkYW1hZ2UgPiAwID8gNSA6IDEgfSk7XHJcblxyXG4gICAgICAgIGVudC5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3NwcicpO1xyXG4gICAgICAgIGVudC5zZXRBdHRyaWJ1dGUoJ2F1dG8tZGVzdHJveScsICcnKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVudCk7XHJcbiAgICAgICAgaWYgKGRhbWFnZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmhlYWx0aCAtPSBkYW1hZ2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5zZXRBdHRyaWJ1dGUoJ2JpbGxib2FyZC10ZXh0dXJlJywgeyBpbmRleDogMTUgfSk7XHJcbiAgICAgICAgICAgICAgICBHTS5kYXRhLnN0YXRlID0gMztcclxuICAgICAgICAgICAgICAgIEdNLm1lc3NhZ2Uud3JpdGUoYEdhbWUgT3ZlcmAsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgR00ubWVzc2FnZS53cml0ZShgT3VjaCFcXG5IZWFsdGggPSAke3RoaXMuZGF0YS5oZWFsdGh9LzI1YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BsYXllci5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdpdGVtJywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgeDogeyB2YWx1ZTogJ2Zsb2F0JyB9LFxyXG4gICAgICAgIHk6IHsgdmFsdWU6ICdmbG9hdCcgfSxcclxuICAgICAgICBwcm9wczogeyB2YWx1ZTogJ29iamVjdCcgfVxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbjtcclxuICAgIH0sXHJcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtdGV4dHVyZVwiLCB7IGluZGV4OiBzLmRhdGEucHJvcHMucywgbG9va3VwOiBzLmRhdGEucHJvcHMuaSB9KTtcclxuICAgICAgICBsZXQgY29vcmRzID0gcy5lbC5jb21wb25lbnRzLnBvc2l0aW9uLmRhdGE7XHJcbiAgICAgICAgY29vcmRzLnQgPSAxO1xyXG4gICAgICAgIGxldCB0eCA9IHRoaXMuZGF0YS54LCB0eSA9IHRoaXMuZGF0YS55O1xyXG4gICAgICAgIGxldCBwaXggPSBHTS5tYXAuZ2V0UGl4KHR4LCB0eSk7XHJcbiAgICAgICAgcGl4LmRhdGFbMV0gPSAwO1xyXG4gICAgICAgIEdNLm1hcC5wdXRQaXgocGl4LCB0eCwgdHkpO1xyXG4gICAgICAgICB2YXIgcCA9IG5ldyBQcm9taXNlKHIgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdDEgPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKSBcclxuICAgICAgICAgICAgICAgIC50byh7IHk6IGNvb3Jkcy55ICsgMSwgdDogMCB9LCAzNTApXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuT3V0KVxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uICgpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgeyB4OiBjb29yZHMueCwgeTogY29vcmRzLnksIHo6IGNvb3Jkcy56IH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdmFyIHQyID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcylcclxuICAgICAgICAgICAgICAgIC50byh7IHk6IGNvb3Jkcy55IC0gLjUsIHQ6IDAgfSwgMzUwKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluKSBcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHsgeDogY29vcmRzLngsIHk6IGNvb3Jkcy55LCB6OiBjb29yZHMueiB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAub25Db21wbGV0ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHMuZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHIocy5kYXRhLnByb3BzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHQxLmNoYWluKHQyKS5zdGFydCgpOyAvLyBTdGFydCB0aGUgdHdlZW4gaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcblxyXG5cclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaXRlbS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdhdXRvLWRlc3Ryb3knLCB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gdHdlZW4gYW5kIGRlc3Ryb3lcclxuICAgICAgICB2YXIgbSA9IHRoaXMuZWwuZ2V0T2JqZWN0M0QoJ21lc2gnKTtcclxuICAgICAgICBpZiAobSkgbS5tYXRlcmlhbC5kZXB0aFRlc3QgPSBmYWxzZTtcclxuICAgICAgICBsZXQgb2xkeCA9IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhLnggfHwgMCxcclxuICAgICAgICAgICAgb2xkeSA9IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhLnkgfHwgMCxcclxuICAgICAgICAgICAgb2xkeiA9IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhLnogfHwgMCxcclxuICAgICAgICAgICAgY29vcmRzID0geyB5OiBvbGR5IH1cclxuICAgICAgICB2YXIgdHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKSAvLyBDcmVhdGUgYSBuZXcgdHdlZW4gdGhhdCBtb2RpZmllcyAnY29vcmRzJy5cclxuICAgICAgICAgICAgLnRvKHsgeTogb2xkeSAtIC4yNSB9LCA1MDApIC8vIE1vdmUgdG8gKDMwMCwgMjAwKSBpbiAxIHNlY29uZC5cclxuICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluKSAvLyBVc2UgYW4gZWFzaW5nIGZ1bmN0aW9uIHRvIG1ha2UgdGhlIGFuaW1hdGlvbiBzbW9vdGguXHJcbiAgICAgICAgICAgIC5vblVwZGF0ZSgoKSA9PiB7IC8vIENhbGxlZCBhZnRlciB0d2Vlbi5qcyB1cGRhdGVzICdjb29yZHMnLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgeyB4OiBvbGR4LCB5OiBjb29yZHMueSwgejogb2xkeiB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LlxyXG4gICAgfVxyXG59KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXV0b2Rlc3Ryb3kuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnY2FudmFzLXRleHQnLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICB0ZXh0OiB7IHZhbHVlOiAnc3RyaW5nJyB9XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJpdG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHZhciBnID0gYml0bWFwLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgYml0bWFwLndpZHRoID0gMTAyNDtcclxuICAgICAgICBiaXRtYXAuaGVpZ2h0ID0gMTAyNDtcclxuICAgICAgICBiaXRtYXAuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcclxuICAgICAgICBnLmZvbnQgPSAnYm9sZCA0MHB4IEFyaWFsJztcclxuICAgICAgICBnLnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG4gICAgICAgIGcudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgdGhpcy5tdWx0aWxpbmUoZywgdGhpcy5kYXRhLnRleHQsIDUxMiwgNTEyKTtcclxuICAgICAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKGJpdG1hcClcclxuICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnbWF0ZXJpYWwnLCB7IHNyYzogdGV4dHVyZSwgdHJhbnNwYXJlbnQ6IHRydWUsIG9wYWNpdHk6MC44IH0pO1xyXG4gICAgfSxcclxuICAgIG11bHRpbGluZTogZnVuY3Rpb24gKGN0eCwgdGV4dCwgeCwgeSkge1xyXG4gICAgICAgIGxldCBsaCA9IGN0eC5tZWFzdXJlVGV4dChcIk1cIikud2lkdGggKiAxLjIsXHJcbiAgICAgICAgICAgIHQgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNiZTI2MzMnO1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQodFtpXSwgeCwgeSk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVRleHQodFtpXSwgeCwgeSk7XHJcbiAgICAgICAgICAgIHkgKz0gbGg7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdyaXRlOiBmdW5jdGlvbiAodGV4dCwgZG9udEZhZGUpIHtcclxuICAgICAgICB0aGlzLmRhdGEudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB2YXIgZCA9IHsgbzogMC44IH07XHJcbiAgICAgICAgaWYgKCFkb250RmFkZSkge1xyXG4gICAgICAgICAgICB0aGlzLnQgPSBuZXcgVFdFRU4uVHdlZW4oZClcclxuICAgICAgICAgICAgICAgIC50byh7IG86IDAgfSwgMjUwKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDIwMDApXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsIHsgb3BhY2l0eTogZC5vIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2FudmFzdGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==