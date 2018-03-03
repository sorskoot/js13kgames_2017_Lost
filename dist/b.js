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
/* 4 */
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
	                    plane.classList.add("floor");
	                    if (worldData.data[wdp] == 102) plane.setAttribute("mytexture", "index:11;lookup:8");
	                    else if (worldData.data[wdp] == 170) plane.setAttribute("mytexture", "index:12;lookup:10");
	                    else if (worldData.data[wdp] == 238) plane.setAttribute("mytexture", "index:12;lookup:9");
	                    else {
	                        plane.setAttribute("mytexture", "index:0;lookup:" + ~~((i * 5) / (j * 2) * 3) % 5);
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
	        this.map = document.getElementById('mapgeo').components.map;
	        this.message = document.querySelector('[canvas-text]').components['canvas-text'];
	        this.cursor = document.querySelector('[cursor]');        
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
	        let rotations = [[45, 0, 315], [90, 0, 270], [135, 180, 225]];
	        var s = this;
	        if (GM.data.state != 0) return;
	        var coords = s.el.components.position.data;
	        var a = new THREE.Vector3(data.x, data.y, 0);                      // 0,0
	        var b = new THREE.Vector3(coords.x, coords.z, 0);                  // 1,0
	
	        GM.camera.rot = rotations[Math.abs(~(a.y - b.y))][Math.abs(~(a.x - b.x))];
	
	        coords.r = GM.camera.rot;
	        if (a.distanceTo(b) > 1.9 || a.distanceTo(b) < .2)
	            return;
	        var c = GM.map.getPix(data.x + size / 2, data.y + size / 2);
	        if (c.data[2] > 0) { // mob in next position
	            // code for attacking the mob.
	            let mob = document.querySelector(`#e${data.x + size / 2}-${data.y + size / 2}`).components.mob;
	            let sprcoord = { x: 0, z: 0 };
	            new TWEEN.Tween(sprcoord) 
	                .to({ x: a.x - b.x, z: a.y - b.y }, 500)
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
	            // move the player
	            new TWEEN.Tween(coords)
	                .to({ x: data.x, z: data.y }, 1000)
	                .easing(TWEEN.Easing.Quadratic.InOut)
	                .onUpdate(function () {
	                    s.el.setAttribute('position', `${coords.x} .25 ${coords.z}`);
	                })
	                .onComplete(() => {
	                    // TODO: Tweening
	                    let newCameraPos = { x: Math.sin(degToRad(GM.camera.rot)) * 2, y: Math.cos(degToRad(GM.camera.rot)) * 2 };
	                    GM.camera.setAttribute('rotation', `-27 ${GM.camera.rot} 0`);
	                    GM.camera.setAttribute('position', `${newCameraPos.x} 0.8 ${newCameraPos.y}`);
	
	                    if (GM.data.state > 2) return;
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
/* 11 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODI1ZTZhMmVmMzZmMmIxZTIzYzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215U2hhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9iaWxsYm9hcmRTaGFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwZ2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9iLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1dG9kZXN0cm95LmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXN0ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxN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O0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsd0JBQXdCO0FBQzdDO0FBQ0Esd0M7QUFDQSxvREFBbUQsd0NBQXdDO0FBQzNGLGtCQUFpQjtBQUNqQjtBQUNBLHNCQUFxQix5QkFBeUI7QUFDOUM7QUFDQSx3QztBQUNBLG9EQUFtRCx3Q0FBd0M7QUFDM0Ysa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixrQ0FBaUM7QUFDakMsVUFBUztBQUNUO0FBQ0E7OztBQUdBLEVBQUMsRTs7Ozs7O0FDekNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0I7QUFDdEI7QUFDQSxrQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0EsOEJBQTZCO0FBQzdCLG1EQUFrRCxnQ0FBZ0M7QUFDbEYsY0FBYTtBQUNiO0FBQ0E7QUFDQSxjQUFhO0FBQ2Isc0JBQXFCO0FBQ3JCO0FBQ0EsRUFBQzs7Ozs7OztBQ3BCRDtBQUNBO0FBQ0EsZ0JBQWU7QUFDZixNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsK0NBQStDO0FBQ3pGLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0EsdURBQXNELGVBQWU7QUFDckUsa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRSIsImZpbGUiOiJiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODI1ZTZhMmVmMzZmMmIxZTIzYzkiLCJyZXF1aXJlKCcuL2dsb2JhbCcpO1xyXG5yZXF1aXJlKCcuL2RhdGEnKTtcclxucmVxdWlyZSgnLi9teVNoYWRlcicpO1xyXG5yZXF1aXJlKCcuL2JpbGxib2FyZFNoYWRlcicpO1xyXG5yZXF1aXJlKCcuL21hcCcpO1xyXG5yZXF1aXJlKCcuL2dhbWVtYW5hZ2VyJyk7XHJcbnJlcXVpcmUoJy4vbW9iJyk7XHJcbnJlcXVpcmUoJy4vcGxheWVyJyk7XHJcbnJlcXVpcmUoJy4vaXRlbScpO1xyXG5yZXF1aXJlKCcuL2F1dG9kZXN0cm95Jyk7XHJcbnJlcXVpcmUoJy4vY2FudmFzdGV4dCcpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ3aW5kb3cucm5kID0gbSA9PiB+fihNYXRoLnJhbmRvbSgpICogbSk7XHJcbndpbmRvdy5kZWdUb1JhZCA9IGQgPT4gZCAvIDE4MCAqIE1hdGguUEk7XHJcbndpbmRvdy50ID0gbmV3IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoJy4vbG9zdC5wbmcnKTtcclxud2luZG93LnQubWluRmlsdGVyID0gd2luZG93LnQubWFnRmlsdGVyID0gMTAwMztcclxud2luZG93LnBhbCA9IG5ldyBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCcuL3BhbGV0dGVzLnBuZycpO1xyXG53aW5kb3cucGFsLm1pbkZpbHRlciA9IHdpbmRvdy5wYWwubWFnRmlsdGVyID0gMTAwMztcclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ3aW5kb3cuRCA9IHtcclxuICAgIHBsYXllcjoge1xyXG4gICAgICAgIHQ6IDEsICAvLyB0eXBlIDogcGxheWVyXHJcbiAgICAgICAgczogMiwgIC8vIHNwcml0ZTogMiAgICBcclxuICAgICAgICBoOiAxMCwgLy8gc3RhcnQgaGVhbHRoXHJcbiAgICB9LCBtb2JzOiBbe1xyXG4gICAgICAgIGg6IFszLCAyXSwgLy8gaGVhbHRoOiBiZXR3ZWVuIDIgYW5kIDVcclxuICAgICAgICBkOiBbMSwgMV0sIC8vZGFtYWdlIGJldHdlZW4gMSBhbmQgMlxyXG4gICAgICAgIGk6IDYsICAvLyBjb2xvciBpbmRleCA4XHJcbiAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgYzogNzAgLy8gY2hhbmdlPTcwJVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoOiBbNCwgNF0sIC8vIGhlYWx0aDogYmV0d2VlbiA0IGFuZCA4XHJcbiAgICAgICAgZDogWzMsIDJdLCAvL2RhbWFnZSBiZXR3ZWVuIDIgYW5kIDVcclxuICAgICAgICBpOiA3LCAvLyBjb2xvciBpbmRleCA4XHJcbiAgICAgICAgbTogMTAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgIGM6IDIwIC8vY2hhbmdlIDMwJSAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGg6IFs2LCA2XSwgLy8gaGVhbHRoOiBiZXR3ZWVuIDYgYW5kIDEyXHJcbiAgICAgICAgZDogWzUsIDRdLCAvL2RhbWFnZSBiZXR3ZWVuIDQgYW5kIDlcclxuICAgICAgICBpOiA5LCAgLy8gY29sb3IgaW5kZXggOFxyXG4gICAgICAgIG06IDMwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICBjOiAxMCAvLyBjaGFuZ2UgMTAlXHJcbiAgICB9XSxcclxuICAgIGZsb29yczogW3tcclxuICAgICAgICB0OiAzLCAvLyB0eXBlOiBmbG9vclxyXG4gICAgICAgIGI6IDEsIC8vIGJpb21lOiAxXHJcbiAgICAgICAgczogWzFdLFxyXG4gICAgICAgIGk6IFsyLCA1XVxyXG4gICAgfV0sXHJcbiAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdDogMSxcclxuICAgICAgICAgICAgbjogXCJhIGhlYXJ0XCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBzOiAxMywgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogLTEsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDcwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDIsIC8vIHN1YnR5cGUgOiBzd29yZFwiLFxyXG4gICAgICAgICAgICBuOiBcImFuIGlyb24gc3dvcmRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGQ6IDMsIC8vIGRhbWFnZVxyXG4gICAgICAgICAgICBzOiA1LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAxLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAyMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMiwgLy8gc3VidHlwZSA6IHN3b3JkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYSBnb2xkZW4gc3dvcmRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGQ6IDYsIC8vIGRhbWFnZVxyXG4gICAgICAgICAgICBzOiA1LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAyMywgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOjYsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAxMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAyLCAvLyBzdWJ0eXBlIDogc3dvcmRcIixcclxuICAgICAgICAgICAgbjogXCJhIGRpYW1vbmQgc3dvcmRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGQ6IDEwLCAvLyBkYW1hZ2VcclxuICAgICAgICAgICAgczogNSwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMjQsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMTIsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAyLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDMsIC8vIHN1YnR5cGUgOiBzaGllbGRcIixcclxuICAgICAgICAgICAgbjogXCJhbiBpcm9uIHNoaWVsZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgYjogNDAsIC8vIGJsb2NrIHZhbHVlIDQwJVxyXG4gICAgICAgICAgICBzOiA0LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAwLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAyMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAzLCAvLyBzdWJ0eXBlIDogc2hpZWxkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYSBnb2xkZW4gc2hpZWxkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBiOiA3MCwgLy8gYmxvY2sgdmFsdWUgNzAlXHJcbiAgICAgICAgICAgIHM6IDQsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDIzLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDYsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAxMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAzLCAvLyBzdWJ0eXBlIDogc2hpZWxkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYSBkaWFtb25kIHNoaWVsZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgYjogODUsIC8vIGJsb2NrIHZhbHVlIDg1JVxyXG4gICAgICAgICAgICBzOiA0LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAyNCwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAxMiwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDUsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH1dLFxyXG4gICAgb2JqczogW3sgLy9vYmplY3RpdmVzXHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDEsIC8vIHBpZWNlID0xXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgY2FiaW5cIixcclxuICAgICAgICBzOiA2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHQ6IDgsIC8vIGl0ZW0gdHlwZSA9IDhcclxuICAgICAgICBwOiAyLFxyXG4gICAgICAgIG46IFwieW91ciBwbGFuZSdzIGxlZnQgd2luZ1wiLFxyXG4gICAgICAgIHM6IDdcclxuICAgIH0se1xyXG4gICAgICAgIHQ6IDgsIC8vIGl0ZW0gdHlwZSA9IDhcclxuICAgICAgICBwOiAzLFxyXG4gICAgICAgIG46IFwieW91ciBwbGFuZSdzIGJvZHlcIixcclxuICAgICAgICBzOiA4XHJcbiAgICB9LHtcclxuICAgICAgICB0OiA4LCAvLyBpdGVtIHR5cGUgPSA4XHJcbiAgICAgICAgcDogNCxcclxuICAgICAgICBuOiBcInlvdXIgcGxhbmUncyByaWdodCB3aW5nXCIsXHJcbiAgICAgICAgczogOVxyXG4gICAgfSx7XHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDUsXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgdGhydXN0ZXJcIixcclxuICAgICAgICBzOiAxMFxyXG4gICAgfV1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFsIFRIUkVFLCBBRlJBTUUgKi9cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdteXRleHR1cmUnLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBjb2xvcjpcclxuICAgIHtcclxuICAgICAgdHlwZTogJ2NvbG9yJ1xyXG4gICAgfSxcclxuICAgIGluZGV4OiB7IHR5cGU6ICdpbnQnIH0sXHJcbiAgICBsb29rdXA6IHsgdHlwZTogJ2ludCcsIGRlZmF1bHQ6IDAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCB1c2luZyB0aGUgdHdvIHNoYWRlcnMgZGVmaW5lZFxyXG4gICAqIGluIHZlcnRleC5nbHNsIGFuZCBmcmFnbWVudC5nbHNsLlxyXG4gICAqL1xyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhZ21lbnQnKS50ZXh0Q29udGVudDtcclxuICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVydGV4JykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgaW5kZXg6IHsgdmFsdWU6IHRoaXMuZGF0YS5pbmRleCB9LFxyXG4gICAgICAgIERpZmZ1c2VUZXh0dXJlOiB7IHZhbHVlOiB3aW5kb3cudCB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LFxyXG4gICAgICAgIGNvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoZGF0YS5jb2xvcikgfSxcclxuICAgICAgICBzcHJpdGVEaW1lbnNpb25zOiB7IHZhbHVlOiB7IHg6IDE2LjAsIHk6IDEuMCB9IH0sXHJcbiAgICAgICAgcmVwZWF0OiB7IHZhbHVlOiB7IHg6IDEuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICBmb2dTdGFydDogeyB2YWx1ZTogNSB9LFxyXG4gICAgICAgIGZvZ0VuZDogeyB2YWx1ZTogMTUgfSxcclxuICAgICAgICBsb29rdXBJbmRleDp7dmFsdWU6ZGF0YS5sb29rdXB9LFxyXG4gICAgICAgIGZvZ0NvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMCwgMCwgMCkgfSxcclxuICAgICAgICB0aW50OiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMjU1LCAyNTUsIDI1NSkgfSxcclxuICAgICAgICB0aW50QW1vdW50OiB7IHZhbHVlOiAwIH1cclxuICAgICAgfSxcclxuICAgICAgdmVydGV4U2hhZGVyLFxyXG4gICAgICBmcmFnbWVudFNoYWRlclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFwcGx5VG9NZXNoKCk7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGVsLWxvYWRlZCcsICgpID0+IHRoaXMuYXBwbHlUb01lc2goKSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIFNoYWRlck1hdGVyaWFsIHdoZW4gY29tcG9uZW50IGRhdGEgY2hhbmdlcy5cclxuICAgKi9cclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMuaW5kZXgudmFsdWUgPSB0aGlzLmRhdGEuaW5kZXg7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLmxvb2t1cEluZGV4LnZhbHVlPXRoaXMuZGF0YS5sb29rdXA7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBBcHBseSB0aGUgbWF0ZXJpYWwgdG8gdGhlIGN1cnJlbnQgZW50aXR5LlxyXG4gICAqL1xyXG4gIGFwcGx5VG9NZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZXNoID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgaWYgKG1lc2gpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueCA9ICt0aGlzLmVsLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpIHx8IDE7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnkgPSArdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIikgfHwgMTtcclxuICAgICAgbWVzaC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBPbiBlYWNoIGZyYW1lLCB1cGRhdGUgdGhlICd0aW1lJyB1bmlmb3JtIGluIHRoZSBzaGFkZXJzLlxyXG4gICAqL1xyXG4gIC8vIHRpY2s6IGZ1bmN0aW9uICh0KSB7XHJcbiAgLy8gICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0IC8gMTAwMDsgXHJcbiAgLy8gfVxyXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL215U2hhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGdsb2JhbCBUSFJFRSwgQUZSQU1FICovXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnYmlsbGJvYXJkLXRleHR1cmUnLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBpbmRleDp7dHlwZTonaW50J30sXHJcbiAgICBsb29rdXA6IHsgdHlwZTogJ2ludCcsIGRlZmF1bHQ6IC0xIH1cclxuICB9LFxyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7ICAgIFxyXG4gICAgdmFyIGZyYWdtZW50U2hhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYWdtZW50JykudGV4dENvbnRlbnQ7XHJcbiAgICB2YXIgdmVydGV4U2hhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcnRleC1iaWxsYm9hcmQnKS50ZXh0Q29udGVudDtcclxuICAgIFxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgaW5kZXg6IHsgdmFsdWU6IHRoaXMuZGF0YS5pbmRleCB9LFxyXG4gICAgICAgIERpZmZ1c2VUZXh0dXJlOiB7IHZhbHVlOiB3aW5kb3cudH0sXHJcbiAgICAgICAgY29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcihkYXRhLmNvbG9yKSB9LFxyXG4gICAgICAgIHNwcml0ZURpbWVuc2lvbnM6IHsgdmFsdWU6IHsgeDogMTYuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICByZXBlYXQ6IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LCAgICBcclxuICAgICAgICBsb29rdXBJbmRleDp7dmFsdWU6ZGF0YS5sb29rdXB9LFxyXG4gICAgICAgIGZvZ1N0YXJ0Ont2YWx1ZTo1fSxcclxuICAgICAgICBmb2dFbmQ6e3ZhbHVlOjE1fSxcclxuICAgICAgICBhbHBoYXRlc3Q6e3ZhbHVlOjAuOTV9LFxyXG4gICAgICAgIGZvZ0NvbG9yOnt2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKDAsMCwwKX1cclxuICAgICAgfSxcclxuICAgICAgdmVydGV4U2hhZGVyLFxyXG4gICAgICBmcmFnbWVudFNoYWRlclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1hdGVyaWFsLmJsZW5kaW5nID0gVEhSRUUuTXVsdGlwbHlCbGVuZGluZztcclxuICAgIHRoaXMuYXBwbHlUb01lc2goKTtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kZWwtbG9hZGVkJywgKCkgPT4gdGhpcy5hcHBseVRvTWVzaCgpKTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgU2hhZGVyTWF0ZXJpYWwgd2hlbiBjb21wb25lbnQgZGF0YSBjaGFuZ2VzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5pbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5pbmRleDtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMubG9va3VwSW5kZXgudmFsdWUgPSB0aGlzLmRhdGEubG9va3VwO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQXBwbHkgdGhlIG1hdGVyaWFsIHRvIHRoZSBjdXJyZW50IGVudGl0eS5cclxuICAgKi9cclxuICBhcHBseVRvTWVzaDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWVzaCA9IHRoaXMuZWwuZ2V0T2JqZWN0M0QoJ21lc2gnKTtcclxuICAgIGlmIChtZXNoKSB7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnggPSt0aGlzLmVsLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpfHwxO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlcGVhdC52YWx1ZS55ID0rdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIil8fDE7XHJcbiAgICAgIG1lc2gubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogT24gZWFjaCBmcmFtZSwgdXBkYXRlIHRoZSAndGltZScgdW5pZm9ybSBpbiB0aGUgc2hhZGVycy5cclxuICAgKi9cclxuICAvLyB0aWNrOiBmdW5jdGlvbiAodCkge1xyXG4gIC8vICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50aW1lLnZhbHVlID0gdCAvIDEwMDA7IFxyXG4gIC8vIH1cclxufSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iaWxsYm9hcmRTaGFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbWFwR2VuID0gcmVxdWlyZShcIi4vbWFwZ2VuXCIpO1xyXG5cclxud2luZG93LnNpemUgPSAxMjg7XHJcbmNvbnN0IGRlcHRoID0gNztcclxuXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnbWFwJywge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubWFwQ29udGV4dCA9IG1hcEdlbi5nbyhzaXplLCBkZXB0aCk7XHJcbiAgICAgICAgbGV0IHdvcmxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpO1xyXG4gICAgICAgIGxldCB3b3JsZERhdGEgPSB0aGlzLm1hcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHNpemUsIHNpemUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2RwID0gKGkgKyBzaXplICogaikgKiA0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHdvcmxkRGF0YS5kYXRhW3dkcF0gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLmNsYXNzTGlzdC5hZGQoXCJmbG9vclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod29ybGREYXRhLmRhdGFbd2RwXSA9PSAxMDIpIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjExO2xvb2t1cDo4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdvcmxkRGF0YS5kYXRhW3dkcF0gPT0gMTcwKSBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJpbmRleDoxMjtsb29rdXA6MTBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod29ybGREYXRhLmRhdGFbd2RwXSA9PSAyMzgpIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjEyO2xvb2t1cDo5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJpbmRleDowO2xvb2t1cDpcIiArIH5+KChpICogNSkgLyAoaiAqIDIpICogMykgJSA1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBpIC0gKHNpemUgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IGogLSAoc2l6ZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwibW91c2VlbnRlcjpcIixlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNyY0VsZW1lbnQuc2V0QXR0cmlidXRlKCdzY2FsZScsIHsgeDogLjk2LCB5OiAuOTYgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3VzZWxlYXZlOlwiLGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNyY0VsZW1lbnQuc2V0QXR0cmlidXRlKCdzY2FsZScsIHsgeDogMSwgeTogMSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEdNLmRhdGEuc3RhdGUgPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHTS5wbGF5ZXIuY29tcG9uZW50cy5wbGF5ZXIubW92ZSh7IHgsIHkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKFwiY3Vyc29yLWxpc3RlbmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt4fSAwICR7eX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3ZveGVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQuYXBwZW5kQ2hpbGQocGxhbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHdvcmxkKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuYWRkT2JqcygpKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuYWRkSXRlbXMoKSk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmFkZE1vYnMoKSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UGl4OiBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcENvbnRleHQuZ2V0SW1hZ2VEYXRhKHgsIHksIDEsIDEpO1xyXG4gICAgfSxcclxuICAgIHB1dFBpeDogZnVuY3Rpb24gKGMsIHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBDb250ZXh0LnB1dEltYWdlRGF0YShjLCB4LCB5KTtcclxuICAgIH0sXHJcbiAgICByYW5kb21QbGFjZTogZnVuY3Rpb24gKG1pbkRpc3RhbmNlID0gMCkge1xyXG4gICAgICAgIGxldCB4LCB5LCBjO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeCA9IHdpbmRvdy5ybmQoc2l6ZSk7XHJcbiAgICAgICAgICAgIHkgPSB3aW5kb3cucm5kKHNpemUpO1xyXG4gICAgICAgICAgICBjID0gdGhpcy5nZXRQaXgoeCwgeSk7XHJcbiAgICAgICAgfSB3aGlsZSAoYy5kYXRhLmV2ZXJ5KHAgPT4gcCA9PSAwKSk7XHJcbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgYyB9O1xyXG4gICAgfSxcclxuICAgIGdldFdlaWdodGVkOiBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgICAgIGxldCBmID0gZmFsc2UsIGl0ZW07XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpdGVtID0gbGlzdFtybmQobGlzdC5sZW5ndGgpXTtcclxuICAgICAgICAgICAgZiA9IHJuZCgxMDApIDwgaXRlbS5jO1xyXG4gICAgICAgIH0gd2hpbGUgKCFmKVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSxcclxuICAgIGFkZEl0ZW1zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTUwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIiksIHR4LCB0eSwgcCwgaXRlbTtcclxuXHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHAgPSB0aGlzLnJhbmRvbVBsYWNlKCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5nZXRXZWlnaHRlZChELml0ZW1zKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ubWFwID0gcDtcclxuXHJcbiAgICAgICAgICAgICAgICBkID0gKG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApKS5kaXN0YW5jZVRvKG5ldyBUSFJFRS5WZWN0b3IyKHAueCwgcC55KSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGl0ZW0ubSA+PSBkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwLmMuZGF0YVsxXSAhPSAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgcC5jLmRhdGFbMV0gPSAweDQxO1xyXG4gICAgICAgICAgICB0aGlzLnB1dFBpeChwLmMsIHAueCwgcC55KTtcclxuXHJcbiAgICAgICAgICAgIHR4ID0gcC54IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgIHR5ID0gcC55IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgIHZhciBkID0gKG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApKS5kaXN0YW5jZVRvKG5ldyBUSFJFRS5WZWN0b3IyKHR4LCB0eSkpO1xyXG5cclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtdGV4dHVyZVwiLCB7IGluZGV4OiAzIH0pOy8vIHsgaW5kZXg6IGl0ZW0ucywgbG9va3VwOiBpdGVtLmkgfSk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3R4fSAuMjUgJHt0eX1gKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3NwcicpO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnaXRlbScsIHsgeDogcC54LCB5OiBwLnksIHByb3BzOiBpdGVtIH0pO1xyXG4gICAgICAgICAgICBiLmlkID0gYGIke3AueH0tJHtwLnl9YDtcclxuICAgICAgICAgICAgYi5kYXRhID0gaXRlbTtcclxuICAgICAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0sXHJcbiAgICBhZGRNb2JzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTUwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIiksIHR4LCB0eTtcclxuICAgICAgICAgICAgbGV0IG1vYiA9IHRoaXMuZ2V0V2VpZ2h0ZWQoRC5tb2JzKSwgcCwgZDtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcCA9IHRoaXMucmFuZG9tUGxhY2UoKTtcclxuICAgICAgICAgICAgICAgIHR4ID0gcC54IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgICAgICB0eSA9IHAueSAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgZCA9IChuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSkuZGlzdGFuY2VUbyhuZXcgVEhSRUUuVmVjdG9yMih0eCwgdHkpKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAobW9iLm0gPj0gZCk7XHJcbiAgICAgICAgICAgIHAuYy5kYXRhWzJdID0gMHg4ODtcclxuICAgICAgICAgICAgdGhpcy5wdXRQaXgocC5jLCBwLngsIHAueSk7XHJcblxyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZShcImJpbGxib2FyZC10ZXh0dXJlXCIsIHsgaW5kZXg6IDIsIGxvb2t1cDogbW9iLmkgfSk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3R4fSAuMjUgJHt0eX1gKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3NwcicpO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnbW9iJywge1xyXG4gICAgICAgICAgICAgICAgeDogcC54LCB5OiBwLnksXHJcbiAgICAgICAgICAgICAgICBoZWFsdGg6IHJuZChtb2IuaFsxXSkgKyBtb2IuaFswXSxcclxuICAgICAgICAgICAgICAgIGRhbWFnZTogcm5kKG1vYi5kWzFdKSArIG1vYi5kWzBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBiLmlkID0gYGUke3AueH0tJHtwLnl9YDtcclxuICAgICAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0sXHJcbiAgICBhZGRPYmpzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG9ianMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIiksIHR4LCB0eSwgcCwgZDtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcCA9IHRoaXMucmFuZG9tUGxhY2UoKTtcclxuICAgICAgICAgICAgICAgIHR4ID0gcC54IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgICAgICB0eSA9IHAueSAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgZCA9IChuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSkuZGlzdGFuY2VUbyhuZXcgVEhSRUUuVmVjdG9yMih0eCwgdHkpKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoMjUgPj0gZCk7IFxyXG5cclxuICAgICAgICAgICAgcC5jLmRhdGFbMV0gPSAweEVFO1xyXG4gICAgICAgICAgICB0aGlzLnB1dFBpeChwLmMsIHAueCwgcC55KTtcclxuXHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKFwiYmlsbGJvYXJkLXRleHR1cmVcIiwgeyBpbmRleDogRC5vYmpzW2ldLnMgfSk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3R4fSAuMjUgJHt0eX1gKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3NwcicpO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnaXRlbScsIHsgeDogcC54LCB5OiBwLnksIHByb3BzOiBELm9ianNbaV0gfSk7XHJcbiAgICAgICAgICAgIGIuaWQgPSBgYiR7cC54fS0ke3AueX1gO1xyXG4gICAgICAgICAgICBvYmpzLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqcztcclxuICAgIH1cclxufSk7XHJcblxyXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2N1cnNvci1saXN0ZW5lcicsIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGxhc3RJbmRleCA9IC0xO1xyXG4gICAgICB2YXIgQ09MT1JTID0gWydyZWQnLCAnZ3JlZW4nLCAnYmx1ZSddO1xyXG4gICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGxhc3RJbmRleCA9IChsYXN0SW5kZXggKyAxKSAlIENPTE9SUy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ21hdGVyaWFsJywgJ2NvbG9yJywgQ09MT1JTW2xhc3RJbmRleF0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJIHdhcyBjbGlja2VkIGF0OiAnLCBldnQuZGV0YWlsLmludGVyc2VjdGlvbi5wb2ludCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21hcC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxudmFyIGdlbmVyYXRvciA9IHtcclxuICAgIGdvOiAobWFwV2lkdGgsIGRlcHRoKSA9PiB7XHJcbiAgICAgICAgdmFyIHBpZWNlcyA9IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDIsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAwLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMiwgMCwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDIsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gdmFyIG1hcFdpZHRoID0gMjU2O1xyXG5cclxuICAgICAgICBsZXQgcGwgPSBwaWVjZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGw7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUgPSBwaWVjZXNbaV0uc2xpY2UoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjbG9uZS5sZW5ndGg7IGorKylcclxuICAgICAgICAgICAgICAgIGNsb25lW2pdID0gY2xvbmVbal0uc2xpY2UoKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHBpZWNlcy5wdXNoKGNsb25lKTtcclxuICAgICAgICAgICAgbGV0IGNsb25lMiA9IHBpZWNlc1tpXS5zbGljZSgpO1xyXG4gICAgICAgICAgICBjbG9uZTIgPSBjbG9uZTIucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBwaWVjZXMucHVzaChjbG9uZTIpO1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUzID0gY2xvbmUuc2xpY2UoKTtcclxuICAgICAgICAgICAgY2xvbmUzID0gY2xvbmUzLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgcGllY2VzLnB1c2goY2xvbmUzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaWVjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcGllY2VzW2ldLnNpemUgPSB7IHc6IHBpZWNlc1tpXVswXS5sZW5ndGgsIGg6IHBpZWNlc1tpXS5sZW5ndGggfTtcclxuICAgICAgICAgICAgcGllY2VzW2ldLmV4aXRzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGllY2VzW2ldLnNpemUuaDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IHBpZWNlc1tpXS5zaXplLnc7IGgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZXNbaV1bal1baF0gPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2VzW2ldLmV4aXRzLnB1c2goeyB4OiBoLCB5OiBqIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG1hcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIG1hcENhbnZhcy53aWR0aCA9IG1hcFdpZHRoO1xyXG4gICAgICAgIG1hcENhbnZhcy5oZWlnaHQgPSBtYXBXaWR0aDtcclxuXHJcbiAgICAgICAgLy8gVGVtcCBkdXJpbmcgZGV2ZWxvcG1lbnRcclxuICAgICAgICBtYXBDYW52YXMuc3R5bGUud2lkdGggPSAnMTAyNHB4JztcclxuICAgICAgICBtYXBDYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMjRweCc7XHJcbiAgICAgICAgbWFwQ2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXBDYW52YXMpO1xyXG4gICAgICAgIC8vIEVORFxyXG5cclxuICAgICAgICB2YXIgbWFwQ29udGV4dCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDApXCI7XHJcbiAgICAgICAgbWFwQ29udGV4dC5maWxsUmVjdCgwLCAwLCBtYXBXaWR0aCwgbWFwV2lkdGgpO1xyXG5cclxuICAgICAgICBsZXQgZmlyc3QgPSB0cnVlO1xyXG4gICAgICAgIHZhciBhZGRSb29tID0gKGV4aXQsIHNwZWNpYWwpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBpZWNlO1xyXG4gICAgICAgICAgICBsZXQgZXhpdHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRYO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WTtcclxuICAgICAgICAgICAgbGV0IHRyaWVzID0gMjU7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHBpZWNlID0gcGllY2VzW3JuZChwaWVjZXMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBxID0gMDsgcSA8IHBpZWNlLmV4aXRzLmxlbmd0aDsgcSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCA9IGV4aXQueCAtIHBpZWNlLmV4aXRzW3FdLng7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSA9IGV4aXQueSAtIHBpZWNlLmV4aXRzW3FdLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZ0RhdGEgPSBtYXBDb250ZXh0LmdldEltYWdlRGF0YSh0YXJnZXRYLCB0YXJnZXRZLCBwaWVjZS5zaXplLncsIHBpZWNlLnNpemUuaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXIgPSBpbWdEYXRhLmRhdGEuZXZlcnkoZCA9PiBkID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdHJpZXMtLTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodHJpZXMgPiAwICYmICFjbGVhcik7XHJcbiAgICAgICAgICAgIGlmICghY2xlYXIpIHtcclxuICAgICAgICAgICAgICAgIHBpZWNlID0gW1sxXV07XHJcbiAgICAgICAgICAgICAgICBwaWVjZS5leGl0cyA9IFt7fV07XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRYID0gZXhpdC54O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WSA9IGV4aXQueTtcclxuICAgICAgICAgICAgICAgIHEgPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gIWZpcnN0ID8gXCIjNDAwXCIgOiBcIiM2MDBcIjtcclxuICAgICAgICAgICAgaWYgKCFmaXJzdCkgbWFwQ29udGV4dC5maWxsUmVjdCh0YXJnZXRYICsgcGllY2UuZXhpdHNbcV0ueCB8fCAwLCB0YXJnZXRZICsgcGllY2UuZXhpdHNbcV0ueSB8fCAwLCAxLCAxKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzcGVjaWFsID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwiI0UwMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGVjaWFsID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwiI0EwMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBpZWNlLmZvckVhY2goKGksIHB5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpLmZvckVhY2goKGosIHB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsUmVjdCh0YXJnZXRYICsgcHgsIHRhcmdldFkgKyBweSwgMSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXRzLnB1c2goeyB4OiB0YXJnZXRYICsgcHgsIHk6IHRhcmdldFkgKyBweSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4aXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9vcHMgPSBkZXB0aDtcclxuICAgICAgICBsZXQgZXhpdHMgPSBbeyB4OiBtYXBXaWR0aCAvIDIsIHk6IG1hcFdpZHRoIC8gMiB9XTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3BzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5ld0V4aXRzID0gW107XHJcbiAgICAgICAgICAgIGxldCBzcGVjaWFsO1xyXG4gICAgICAgICAgICBleGl0cy5mb3JFYWNoKChleGl0LCBpbmQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IGxvb3BzIC0gMSAmJiBpbmQgPT0gZXhpdHMubGVuZ3RoIC0gfn4oZXhpdHMubGVuZ3RoIC8gMykpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpID09IGxvb3BzIC0gMSAmJiBpbmQgPT0gfn4oZXhpdHMubGVuZ3RoIC8gMykpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsID0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBxID0gYWRkUm9vbShleGl0LCBzcGVjaWFsKTtcclxuICAgICAgICAgICAgICAgIG5ld0V4aXRzID0gbmV3RXhpdHMuY29uY2F0KHEpO1xyXG4gICAgICAgICAgICAgICAgc3BlY2lhbCA9IDA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBleGl0cyA9IG5ld0V4aXRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1hcENvbnRleHQ7XHJcbiAgICB9XHJcblxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21hcGdlbi5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2dhbWVtYW5hZ2VyJywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgc3RhdGU6IHsgdmFsdWU6ICdpbnQnLCBkZWZhdWx0OiAwIH1cclxuICAgICAgICAvLyAwID09IHBsYXllclxyXG4gICAgICAgIC8vIDEgPT0gZW5lbXlcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyJyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhJyk7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwZ2VvJykuY29tcG9uZW50cy5tYXA7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NhbnZhcy10ZXh0XScpLmNvbXBvbmVudHNbJ2NhbnZhcy10ZXh0J107XHJcbiAgICAgICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbY3Vyc29yXScpOyAgICAgICAgXHJcbiAgICAgICAgd2luZG93LkdNID0gdGhpcztcclxuICAgIH0sXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zdGF0ZSA+IDEpIHJldHVybjtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YS5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jb21wb25lbnRzLnBsYXllci5tb3ZlKGQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnNldEF0dHJpYnV0ZSgnY3Vyc29yJywgeyBmdXNlOiBmYWxzZSB9KTtcclxuICAgICAgICAgICAgICAgIGxldCBtb2JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW21vYl0nKTtcclxuICAgICAgICAgICAgICAgIG1vYnMuZm9yRWFjaChkID0+IGQuY29tcG9uZW50cy5tb2IubW92ZSgpKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3Vyc29yLnNldEF0dHJpYnV0ZSgnY3Vyc29yJywgeyBmdXNlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dhbWVtYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnbW9iJywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgeDogeyB2YWx1ZTogJ2Zsb2F0JyB9LFxyXG4gICAgICAgIHk6IHsgdmFsdWU6ICdmbG9hdCcgfSxcclxuICAgICAgICBoZWFsdGg6IHsgdmFsdWU6ICdpbnQnIH0sXHJcbiAgICAgICAgZGFtYWdlOiB7IHZhbHVlOiAnaW50JyB9XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zID0gdGhpcy5lbC5jb21wb25lbnRzLnBvc2l0aW9uO1xyXG4gICAgfSxcclxuICAgIG1vdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBBKiB3b3VsZCBiZSBuaWNlLi4uIGZvciBub3csIGp1c3QgbW92ZSByYW5kb20uLi5cclxuICAgICAgICBpZiAodGhpcy5kYXRhLmhlYWx0aCA8PSAwKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHR4LCB0eSwgYywgcyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHBsYXllclBvc2l0aW9uID0gR00ucGxheWVyLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YTtcclxuICAgICAgICB2YXIgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHBsYXllclBvc2l0aW9uLngsIHBsYXllclBvc2l0aW9uLnosIDApOyAgICAgICAgICAgICAgICAgICAgICAvLyAwLDBcclxuICAgICAgICB2YXIgYiA9IG5ldyBUSFJFRS5WZWN0b3IzKHRoaXMucG9zLmRhdGEueCwgdGhpcy5wb3MuZGF0YS56LCAwKTtcclxuICAgICAgICBpZiAoYS5kaXN0YW5jZVRvKGIpIDwgMS45KSB7Ly8gcGxheWVyIGlzIG5leHQgdG8gdGhlIG1vYiBhdHRhY2tcclxuICAgICAgICAgICAgdHggPSBhLnggLSBiLng7XHJcbiAgICAgICAgICAgIHR5ID0gYS55IC0gYi55O1xyXG4gICAgICAgICAgICBsZXQgY29vcmRzID0geyB4OiBzLnBvcy5kYXRhLngsIHo6IHMucG9zLmRhdGEueiB9O1xyXG4gICAgICAgICAgICB2YXIgdHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKSAvLyBDcmVhdGUgYSBuZXcgdHdlZW4gdGhhdCBtb2RpZmllcyAnY29vcmRzJy5cclxuICAgICAgICAgICAgICAgIC50byh7IHg6IHMucG9zLmRhdGEueCArIHR4LCB6OiBzLnBvcy5kYXRhLnogKyB0eSB9LCA1MDApIC8vIE1vdmUgdG8gKDMwMCwgMjAwKSBpbiAxIHNlY29uZC5cclxuICAgICAgICAgICAgICAgIC55b3lvKHRydWUpLnJlcGVhdCgxKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluT3V0KSAvLyBVc2UgYW4gZWFzaW5nIGZ1bmN0aW9uIHRvIG1ha2UgdGhlIGFuaW1hdGlvbiBzbW9vdGguXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24gKCkgeyAvLyBDYWxsZWQgYWZ0ZXIgdHdlZW4uanMgdXBkYXRlcyAnY29vcmRzJy5cclxuICAgICAgICAgICAgICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHtjb29yZHMueH0gLjI1ICR7Y29vcmRzLnp9YCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uQ29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vc2hvdyBzcGxhdFxyXG4gICAgICAgICAgICAgICAgICAgIEdNLnBsYXllci5jb21wb25lbnRzLnBsYXllci5oaXQodGhpcy5kYXRhLmRhbWFnZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7IC8vIFN0YXJ0IHRoZSB0d2VlbiBpbW1lZGlhdGVseS4gICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHsgLy9tb3ZlXHJcbiAgICAgICAgICAgIGxldCB0cmllcyA9IDEwO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICB0eCA9IHJuZCgzKSAtIDE7XHJcbiAgICAgICAgICAgICAgICB0eSA9IHJuZCgzKSAtIDE7XHJcbiAgICAgICAgICAgICAgICBjID0gR00ubWFwLmdldFBpeChzLmRhdGEueCArIHR4LCBzLmRhdGEueSArIHR5KTtcclxuICAgICAgICAgICAgICAgIHRyaWVzLS07XHJcbiAgICAgICAgICAgICAgICBpZih0cmllcyA9PT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IHdoaWxlIChjLmRhdGFbMF0gPT09IDAgfHwgYy5kYXRhWzJdICE9PSAwKVxyXG5cclxuICAgICAgICAgICAgbGV0IG9sZCA9IEdNLm1hcC5nZXRQaXgocy5kYXRhLngsIHMuZGF0YS55KTtcclxuICAgICAgICAgICAgb2xkLmRhdGFbMl0gPSAwO1xyXG4gICAgICAgICAgICBHTS5tYXAucHV0UGl4KG9sZCwgcy5kYXRhLngsIHMuZGF0YS55KTtcclxuICAgICAgICAgICAgYy5kYXRhWzJdID0gMHg4ODtcclxuICAgICAgICAgICAgcy5kYXRhLnggKz0gdHg7XHJcbiAgICAgICAgICAgIHMuZGF0YS55ICs9IHR5O1xyXG4gICAgICAgICAgICBHTS5tYXAucHV0UGl4KGMsIHMuZGF0YS54LCBzLmRhdGEueSk7XHJcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSB7IHg6IHMucG9zLmRhdGEueCwgejogcy5wb3MuZGF0YS56IH07XHJcbiAgICAgICAgICAgIHZhciB0d2VlbiA9IG5ldyBUV0VFTi5Ud2Vlbihjb29yZHMpXHJcbiAgICAgICAgICAgICAgICAudG8oeyB4OiBzLnBvcy5kYXRhLnggKyB0eCwgejogcy5wb3MuZGF0YS56ICsgdHkgfSwgNDAwICsgcm5kKDQwMCkpXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkocm5kKDI1MCkpXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuSW5PdXQpXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke2Nvb3Jkcy54fSAuMjUgJHtjb29yZHMuen1gKTtcclxuICAgICAgICAgICAgICAgICAgICBzLmVsLmlkID0gYGUke2Nvb3Jkcy54ICsgc2l6ZSAvIDJ9LSR7Y29vcmRzLnogKyBzaXplIC8gMn1gO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaXQ6IGZ1bmN0aW9uIChhbW91bnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLmhlYWx0aCAtPSBhbW91bnQ7XHJcbiAgICAgICAgbGV0IGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtZW50aXR5Jyk7XHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnYmlsbGJvYXJkLXRleHR1cmUnLCB7IGluZGV4OiAxNCwgbG9va3VwOiAxMiB9KTtcclxuICAgICAgICBlbnQuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICBlbnQuc2V0QXR0cmlidXRlKCdhdXRvLWRlc3Ryb3knLCAnJyk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbnQpO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuaGVhbHRoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5lbC5pZCA9ICcnO1xyXG4gICAgICAgICAgICBsZXQgcGl4ID0gR00ubWFwLmdldFBpeCh0aGlzLmRhdGEueCwgdGhpcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICBwaXguZGF0YVsyXSA9IDA7XHJcbiAgICAgICAgICAgIEdNLm1hcC5wdXRQaXgocGl4LCB0aGlzLmRhdGEueCwgdGhpcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdhdXRvLWRlc3Ryb3knLCAnJyk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2IuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypnbG9iYWwgQUZSQU1FLCBHTSwgVEhSRUUsIHNpemUsIFRXRUVOLCBybmQqL1xyXG5cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdwbGF5ZXInLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICBoZWFsdGg6IHsgdmFsdWU6ICdpbnQnLCBkZWZhdWx0OiAyNSB9XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZm91bmRQaWVjZXMgPSAwO1xyXG4gICAgICAgIHRoaXMuYXR0YWNrID0gMTtcclxuICAgICAgICB0aGlzLmRlZmVuc2UgPSAwO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYXllci1zcHJpdGUnKTtcclxuICAgIH0sXHJcbiAgICBtb3ZlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGxldCByb3RhdGlvbnMgPSBbWzQ1LCAwLCAzMTVdLCBbOTAsIDAsIDI3MF0sIFsxMzUsIDE4MCwgMjI1XV07XHJcbiAgICAgICAgdmFyIHMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChHTS5kYXRhLnN0YXRlICE9IDApIHJldHVybjtcclxuICAgICAgICB2YXIgY29vcmRzID0gcy5lbC5jb21wb25lbnRzLnBvc2l0aW9uLmRhdGE7XHJcbiAgICAgICAgdmFyIGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhkYXRhLngsIGRhdGEueSwgMCk7ICAgICAgICAgICAgICAgICAgICAgIC8vIDAsMFxyXG4gICAgICAgIHZhciBiID0gbmV3IFRIUkVFLlZlY3RvcjMoY29vcmRzLngsIGNvb3Jkcy56LCAwKTsgICAgICAgICAgICAgICAgICAvLyAxLDBcclxuXHJcbiAgICAgICAgR00uY2FtZXJhLnJvdCA9IHJvdGF0aW9uc1tNYXRoLmFicyh+KGEueSAtIGIueSkpXVtNYXRoLmFicyh+KGEueCAtIGIueCkpXTtcclxuXHJcbiAgICAgICAgY29vcmRzLnIgPSBHTS5jYW1lcmEucm90O1xyXG4gICAgICAgIGlmIChhLmRpc3RhbmNlVG8oYikgPiAxLjkgfHwgYS5kaXN0YW5jZVRvKGIpIDwgLjIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgYyA9IEdNLm1hcC5nZXRQaXgoZGF0YS54ICsgc2l6ZSAvIDIsIGRhdGEueSArIHNpemUgLyAyKTtcclxuICAgICAgICBpZiAoYy5kYXRhWzJdID4gMCkgeyAvLyBtb2IgaW4gbmV4dCBwb3NpdGlvblxyXG4gICAgICAgICAgICAvLyBjb2RlIGZvciBhdHRhY2tpbmcgdGhlIG1vYi5cclxuICAgICAgICAgICAgbGV0IG1vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlJHtkYXRhLnggKyBzaXplIC8gMn0tJHtkYXRhLnkgKyBzaXplIC8gMn1gKS5jb21wb25lbnRzLm1vYjtcclxuICAgICAgICAgICAgbGV0IHNwcmNvb3JkID0geyB4OiAwLCB6OiAwIH07XHJcbiAgICAgICAgICAgIG5ldyBUV0VFTi5Ud2VlbihzcHJjb29yZCkgXHJcbiAgICAgICAgICAgICAgICAudG8oeyB4OiBhLnggLSBiLngsIHo6IGEueSAtIGIueSB9LCA1MDApXHJcbiAgICAgICAgICAgICAgICAueW95byh0cnVlKVxyXG4gICAgICAgICAgICAgICAgLnJlcGVhdCgxKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluT3V0KSBcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZSgoKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHtzcHJjb29yZC54fSAwICR7c3ByY29vcmQuen1gKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAub25Db21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9iLmhpdCh0aGlzLmF0dGFjayArIHJuZCgyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChHTS5kYXRhLnN0YXRlID4gMikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHTS5kYXRhLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgR00udXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7IC8vIFN0YXJ0IHRoZSB0d2VlbiBpbW1lZGlhdGVseS4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYy5kYXRhWzFdID4gMCkgeyAvLyBpdGVtIGluIG5leHQgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNiJHtkYXRhLnggKyBzaXplIC8gMn0tJHtkYXRhLnkgKyBzaXplIC8gMn1gKS5jb21wb25lbnRzLml0ZW0uZ2V0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1zZyA9IGBGb3VuZCAke3Aubn1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHAudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiAvLyBoZWFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZGF0YS5oZWFsdGggPSBNYXRoLm1pbihzLmRhdGEuaGVhbHRoICs9IDUsIDI1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gYFxcbkhlYWx0aCA9ICR7cy5kYXRhLmhlYWx0aH0vMjVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiAvLyBzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwLmQgPiB0aGlzLmF0dGFjaykgdGhpcy5hdHRhY2sgPSBwLmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IC8vIHNoaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmZW5zZSA9IE1hdGgubWF4KHRoaXMuZGVmZW5zZSwgcC5iKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODogLy8gcGxhbmUgcGllY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvdW5kUGllY2VzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm91bmRQaWVjZXMgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBgXFxuT25seSAkezUgLSB0aGlzLmZvdW5kUGllY2VzfSBwaWVjZXMgbGVmdGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR00uZGF0YS5zdGF0ZSA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdNLm1lc3NhZ2Uud3JpdGUoYFlvdSBmb3VuZCBhbGwgcGllY2VzXFxuYW5kIGVzY2FwZWQgdGhlIHBsYW5ldCFgLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHTS5tZXNzYWdlLndyaXRlKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbW92ZSB0aGUgcGxheWVyXHJcbiAgICAgICAgICAgIG5ldyBUV0VFTi5Ud2Vlbihjb29yZHMpXHJcbiAgICAgICAgICAgICAgICAudG8oeyB4OiBkYXRhLngsIHo6IGRhdGEueSB9LCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluT3V0KVxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHtjb29yZHMueH0gLjI1ICR7Y29vcmRzLnp9YCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uQ29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IFR3ZWVuaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0NhbWVyYVBvcyA9IHsgeDogTWF0aC5zaW4oZGVnVG9SYWQoR00uY2FtZXJhLnJvdCkpICogMiwgeTogTWF0aC5jb3MoZGVnVG9SYWQoR00uY2FtZXJhLnJvdCkpICogMiB9O1xyXG4gICAgICAgICAgICAgICAgICAgIEdNLmNhbWVyYS5zZXRBdHRyaWJ1dGUoJ3JvdGF0aW9uJywgYC0yNyAke0dNLmNhbWVyYS5yb3R9IDBgKTtcclxuICAgICAgICAgICAgICAgICAgICBHTS5jYW1lcmEuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke25ld0NhbWVyYVBvcy54fSAwLjggJHtuZXdDYW1lcmFQb3MueX1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEdNLmRhdGEuc3RhdGUgPiAyKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgR00uZGF0YS5zdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgR00udXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7IC8vIFN0YXJ0IHRoZSB0d2VlbiBpbW1lZGlhdGVseS5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGl0OiBmdW5jdGlvbiAoYW1vdW50KSB7XHJcblxyXG4gICAgICAgIGxldCBkYW1hZ2UgPSBhbW91bnQgKiAocm5kKDEwMCkgPCB0aGlzLmRlZmVuc2UgPyAwIDogMSk7XHJcblxyXG4gICAgICAgIGxldCBlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWVudGl0eScpO1xyXG5cclxuICAgICAgICBlbnQuc2V0QXR0cmlidXRlKCdiaWxsYm9hcmQtdGV4dHVyZScsIHsgaW5kZXg6IDE0LCBsb29rdXA6IGRhbWFnZSA+IDAgPyA1IDogMSB9KTtcclxuXHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAnc3ByJyk7XHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnYXV0by1kZXN0cm95JywgJycpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZW50KTtcclxuICAgICAgICBpZiAoZGFtYWdlID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuaGVhbHRoIC09IGRhbWFnZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuaGVhbHRoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNldEF0dHJpYnV0ZSgnYmlsbGJvYXJkLXRleHR1cmUnLCB7IGluZGV4OiAxNSB9KTtcclxuICAgICAgICAgICAgICAgIEdNLmRhdGEuc3RhdGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgR00ubWVzc2FnZS53cml0ZShgR2FtZSBPdmVyYCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBHTS5tZXNzYWdlLndyaXRlKGBPdWNoIVxcbkhlYWx0aCA9ICR7dGhpcy5kYXRhLmhlYWx0aH0vMjVgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcGxheWVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnaXRlbScsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIHg6IHsgdmFsdWU6ICdmbG9hdCcgfSxcclxuICAgICAgICB5OiB7IHZhbHVlOiAnZmxvYXQnIH0sXHJcbiAgICAgICAgcHJvcHM6IHsgdmFsdWU6ICdvYmplY3QnIH1cclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb247XHJcbiAgICB9LFxyXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKFwiYmlsbGJvYXJkLXRleHR1cmVcIiwgeyBpbmRleDogcy5kYXRhLnByb3BzLnMsIGxvb2t1cDogcy5kYXRhLnByb3BzLmkgfSk7XHJcbiAgICAgICAgbGV0IGNvb3JkcyA9IHMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhO1xyXG4gICAgICAgIGNvb3Jkcy50ID0gMTtcclxuICAgICAgICBsZXQgdHggPSB0aGlzLmRhdGEueCwgdHkgPSB0aGlzLmRhdGEueTtcclxuICAgICAgICBsZXQgcGl4ID0gR00ubWFwLmdldFBpeCh0eCwgdHkpO1xyXG4gICAgICAgIHBpeC5kYXRhWzFdID0gMDtcclxuICAgICAgICBHTS5tYXAucHV0UGl4KHBpeCwgdHgsIHR5KTtcclxuICAgICAgICAgdmFyIHAgPSBuZXcgUHJvbWlzZShyID0+IHtcclxuICAgICAgICAgICAgdmFyIHQxID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcykgXHJcbiAgICAgICAgICAgICAgICAudG8oeyB5OiBjb29yZHMueSArIDEsIHQ6IDAgfSwgMzUwKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLk91dClcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHsgeDogY29vcmRzLngsIHk6IGNvb3Jkcy55LCB6OiBjb29yZHMueiB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHZhciB0MiA9IG5ldyBUV0VFTi5Ud2Vlbihjb29yZHMpXHJcbiAgICAgICAgICAgICAgICAudG8oeyB5OiBjb29yZHMueSAtIC41LCB0OiAwIH0sIDM1MClcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5JbikgXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24gKCkgeyBcclxuICAgICAgICAgICAgICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7IHg6IGNvb3Jkcy54LCB5OiBjb29yZHMueSwgejogY29vcmRzLnogfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uQ29tcGxldGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzLmVsKTtcclxuICAgICAgICAgICAgICAgICAgICByKHMuZGF0YS5wcm9wcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0MS5jaGFpbih0Mikuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2l0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnYXV0by1kZXN0cm95Jywge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHR3ZWVuIGFuZCBkZXN0cm95XHJcbiAgICAgICAgdmFyIG0gPSB0aGlzLmVsLmdldE9iamVjdDNEKCdtZXNoJyk7XHJcbiAgICAgICAgaWYgKG0pIG0ubWF0ZXJpYWwuZGVwdGhUZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG9sZHggPSB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YS54IHx8IDAsXHJcbiAgICAgICAgICAgIG9sZHkgPSB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YS55IHx8IDAsXHJcbiAgICAgICAgICAgIG9sZHogPSB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YS56IHx8IDAsXHJcbiAgICAgICAgICAgIGNvb3JkcyA9IHsgeTogb2xkeSB9XHJcbiAgICAgICAgdmFyIHR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcykgLy8gQ3JlYXRlIGEgbmV3IHR3ZWVuIHRoYXQgbW9kaWZpZXMgJ2Nvb3JkcycuXHJcbiAgICAgICAgICAgIC50byh7IHk6IG9sZHkgLSAuMjUgfSwgNTAwKSAvLyBNb3ZlIHRvICgzMDAsIDIwMCkgaW4gMSBzZWNvbmQuXHJcbiAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5JbikgLy8gVXNlIGFuIGVhc2luZyBmdW5jdGlvbiB0byBtYWtlIHRoZSBhbmltYXRpb24gc21vb3RoLlxyXG4gICAgICAgICAgICAub25VcGRhdGUoKCkgPT4geyAvLyBDYWxsZWQgYWZ0ZXIgdHdlZW4uanMgdXBkYXRlcyAnY29vcmRzJy5cclxuICAgICAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHsgeDogb2xkeCwgeTogY29vcmRzLnksIHo6IG9sZHogfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7IC8vIFN0YXJ0IHRoZSB0d2VlbiBpbW1lZGlhdGVseS5cclxuICAgIH1cclxufSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F1dG9kZXN0cm95LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2NhbnZhcy10ZXh0Jywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgdGV4dDogeyB2YWx1ZTogJ3N0cmluZycgfVxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBiaXRtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICB2YXIgZyA9IGJpdG1hcC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGJpdG1hcC53aWR0aCA9IDEwMjQ7XHJcbiAgICAgICAgYml0bWFwLmhlaWdodCA9IDEwMjQ7XHJcbiAgICAgICAgYml0bWFwLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCc7XHJcbiAgICAgICAgZy5mb250ID0gJ2JvbGQgNDBweCBBcmlhbCc7XHJcbiAgICAgICAgZy50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcclxuICAgICAgICBnLnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICAgIHRoaXMubXVsdGlsaW5lKGcsIHRoaXMuZGF0YS50ZXh0LCA1MTIsIDUxMik7XHJcbiAgICAgICAgdmFyIHRleHR1cmUgPSBuZXcgVEhSRUUuVGV4dHVyZShiaXRtYXApXHJcbiAgICAgICAgdGV4dHVyZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ21hdGVyaWFsJywgeyBzcmM6IHRleHR1cmUsIHRyYW5zcGFyZW50OiB0cnVlLCBvcGFjaXR5OjAuOCB9KTtcclxuICAgIH0sXHJcbiAgICBtdWx0aWxpbmU6IGZ1bmN0aW9uIChjdHgsIHRleHQsIHgsIHkpIHtcclxuICAgICAgICBsZXQgbGggPSBjdHgubWVhc3VyZVRleHQoXCJNXCIpLndpZHRoICogMS4yLFxyXG4gICAgICAgICAgICB0ID0gdGV4dC5zcGxpdChcIlxcblwiKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHQubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjYmUyNjMzJztcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRbaV0sIHgsIHkpO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnIzAwMCc7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VUZXh0KHRbaV0sIHgsIHkpO1xyXG4gICAgICAgICAgICB5ICs9IGxoO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3cml0ZTogZnVuY3Rpb24gKHRleHQsIGRvbnRGYWRlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgdmFyIGQgPSB7IG86IDAuOCB9O1xyXG4gICAgICAgIGlmICghZG9udEZhZGUpIHtcclxuICAgICAgICAgICAgdGhpcy50ID0gbmV3IFRXRUVOLlR3ZWVuKGQpXHJcbiAgICAgICAgICAgICAgICAudG8oeyBvOiAwIH0sIDI1MClcclxuICAgICAgICAgICAgICAgIC5kZWxheSgyMDAwKVxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnbWF0ZXJpYWwnLCB7IG9wYWNpdHk6IGQubyB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NhbnZhc3RleHQuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=