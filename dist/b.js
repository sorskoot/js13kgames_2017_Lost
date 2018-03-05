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
	        const numberOfMobs = 1;//50;
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
	        this.camera.deltaRot = 0;
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
	            let currentCameraRotation = GM.camera.getAttribute('rotation');
	
	            let oldCameraRotation = currentCameraRotation.y;
	            let newCameraRotation = rotations[Math.abs(~(a.y - b.y))][Math.abs(~(a.x - b.x))];
	
	            let cw = Math.abs(oldCameraRotation - newCameraRotation);
	            let ccw = Math.abs(oldCameraRotation - (newCameraRotation - 360));
	            if (ccw < cw) {
	                newCameraRotation -= 360;
	            }
	
	            let targetCameraRotation = { x: -27, y: newCameraRotation };
	            let currentCameraPosition = GM.camera.getAttribute('position');
	            let targetCameraPosition = { x: Math.sin(degToRad(newCameraRotation)) * 2, z: Math.cos(degToRad(newCameraRotation)) * 2 };
	
	            // move the player
	            new TWEEN.Tween({
	                x: coords.x, z: coords.z,
	                camposx: currentCameraPosition.x,
	                camposz: currentCameraPosition.z,
	                camrotx: currentCameraRotation.x,
	                camroty: currentCameraRotation.y
	            })
	                .to({
	                    x: data.x, z: data.y,
	                    camposx: targetCameraPosition.x,
	                    camposz: targetCameraPosition.z,
	                    camrotx: targetCameraRotation.x,
	                    camroty: targetCameraRotation.y
	                }, 1000)
	                .easing(TWEEN.Easing.Quadratic.InOut)
	                .onUpdate(function () {
	                    s.el.setAttribute('position', `${this.x} .25 ${this.z}`);
	                    GM.camera.setAttribute('position', `${this.camposx} 0.8 ${this.camposz}`);
	                    GM.camera.setAttribute('rotation', `${this.camrotx} ${this.camroty} 0`);
	                })
	                .onComplete(() => {
	                    GM.camera.rot = (newCameraRotation + 360) % 360; // TODO: Make sure its between 0 and 360 again
	                    GM.camera.setAttribute('rotation', `${targetCameraRotation.x} ${GM.camera.rot} 0`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzgyOTBlZjdkMTk0YTI3ZDJiNTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215U2hhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9iaWxsYm9hcmRTaGFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwZ2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9iLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1dG9kZXN0cm95LmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXN0ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxN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dURBQXNELGVBQWU7QUFDckUsa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRSIsImZpbGUiOiJiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzgyOTBlZjdkMTk0YTI3ZDJiNTYiLCJyZXF1aXJlKCcuL2dsb2JhbCcpO1xyXG5yZXF1aXJlKCcuL2RhdGEnKTtcclxucmVxdWlyZSgnLi9teVNoYWRlcicpO1xyXG5yZXF1aXJlKCcuL2JpbGxib2FyZFNoYWRlcicpO1xyXG5yZXF1aXJlKCcuL21hcCcpO1xyXG5yZXF1aXJlKCcuL2dhbWVtYW5hZ2VyJyk7XHJcbnJlcXVpcmUoJy4vbW9iJyk7XHJcbnJlcXVpcmUoJy4vcGxheWVyJyk7XHJcbnJlcXVpcmUoJy4vaXRlbScpO1xyXG5yZXF1aXJlKCcuL2F1dG9kZXN0cm95Jyk7XHJcbnJlcXVpcmUoJy4vY2FudmFzdGV4dCcpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ3aW5kb3cucm5kID0gbSA9PiB+fihNYXRoLnJhbmRvbSgpICogbSk7XHJcbndpbmRvdy5kZWdUb1JhZCA9IGQgPT4gZCAvIDE4MCAqIE1hdGguUEk7XHJcbndpbmRvdy50ID0gbmV3IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoJy4vbG9zdC5wbmcnKTtcclxud2luZG93LnQubWluRmlsdGVyID0gd2luZG93LnQubWFnRmlsdGVyID0gMTAwMztcclxud2luZG93LnBhbCA9IG5ldyBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCcuL3BhbGV0dGVzLnBuZycpO1xyXG53aW5kb3cucGFsLm1pbkZpbHRlciA9IHdpbmRvdy5wYWwubWFnRmlsdGVyID0gMTAwMztcclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ3aW5kb3cuRCA9IHtcclxuICAgIHBsYXllcjoge1xyXG4gICAgICAgIHQ6IDEsICAvLyB0eXBlIDogcGxheWVyXHJcbiAgICAgICAgczogMiwgIC8vIHNwcml0ZTogMiAgICBcclxuICAgICAgICBoOiAxMCwgLy8gc3RhcnQgaGVhbHRoXHJcbiAgICB9LCBtb2JzOiBbe1xyXG4gICAgICAgIGg6IFszLCAyXSwgLy8gaGVhbHRoOiBiZXR3ZWVuIDIgYW5kIDVcclxuICAgICAgICBkOiBbMSwgMV0sIC8vZGFtYWdlIGJldHdlZW4gMSBhbmQgMlxyXG4gICAgICAgIGk6IDYsICAvLyBjb2xvciBpbmRleCA4XHJcbiAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgYzogNzAgLy8gY2hhbmdlPTcwJVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoOiBbNCwgNF0sIC8vIGhlYWx0aDogYmV0d2VlbiA0IGFuZCA4XHJcbiAgICAgICAgZDogWzMsIDJdLCAvL2RhbWFnZSBiZXR3ZWVuIDIgYW5kIDVcclxuICAgICAgICBpOiA3LCAvLyBjb2xvciBpbmRleCA4XHJcbiAgICAgICAgbTogMTAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgIGM6IDIwIC8vY2hhbmdlIDMwJSAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGg6IFs2LCA2XSwgLy8gaGVhbHRoOiBiZXR3ZWVuIDYgYW5kIDEyXHJcbiAgICAgICAgZDogWzUsIDRdLCAvL2RhbWFnZSBiZXR3ZWVuIDQgYW5kIDlcclxuICAgICAgICBpOiA5LCAgLy8gY29sb3IgaW5kZXggOFxyXG4gICAgICAgIG06IDMwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICBjOiAxMCAvLyBjaGFuZ2UgMTAlXHJcbiAgICB9XSxcclxuICAgIGZsb29yczogW3tcclxuICAgICAgICB0OiAzLCAvLyB0eXBlOiBmbG9vclxyXG4gICAgICAgIGI6IDEsIC8vIGJpb21lOiAxXHJcbiAgICAgICAgczogWzFdLFxyXG4gICAgICAgIGk6IFsyLCA1XVxyXG4gICAgfV0sXHJcbiAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdDogMSxcclxuICAgICAgICAgICAgbjogXCJhIGhlYXJ0XCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBzOiAxMywgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogLTEsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDcwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDIsIC8vIHN1YnR5cGUgOiBzd29yZFwiLFxyXG4gICAgICAgICAgICBuOiBcImFuIGlyb24gc3dvcmRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGQ6IDMsIC8vIGRhbWFnZVxyXG4gICAgICAgICAgICBzOiA1LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAxLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAyMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMiwgLy8gc3VidHlwZSA6IHN3b3JkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYSBnb2xkZW4gc3dvcmRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGQ6IDYsIC8vIGRhbWFnZVxyXG4gICAgICAgICAgICBzOiA1LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAyMywgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOjYsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAxMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAyLCAvLyBzdWJ0eXBlIDogc3dvcmRcIixcclxuICAgICAgICAgICAgbjogXCJhIGRpYW1vbmQgc3dvcmRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGQ6IDEwLCAvLyBkYW1hZ2VcclxuICAgICAgICAgICAgczogNSwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMjQsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMTIsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAyLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDMsIC8vIHN1YnR5cGUgOiBzaGllbGRcIixcclxuICAgICAgICAgICAgbjogXCJhbiBpcm9uIHNoaWVsZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgYjogNDAsIC8vIGJsb2NrIHZhbHVlIDQwJVxyXG4gICAgICAgICAgICBzOiA0LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAwLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAyMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAzLCAvLyBzdWJ0eXBlIDogc2hpZWxkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYSBnb2xkZW4gc2hpZWxkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBiOiA3MCwgLy8gYmxvY2sgdmFsdWUgNzAlXHJcbiAgICAgICAgICAgIHM6IDQsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDIzLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDYsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAxMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAzLCAvLyBzdWJ0eXBlIDogc2hpZWxkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYSBkaWFtb25kIHNoaWVsZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgYjogODUsIC8vIGJsb2NrIHZhbHVlIDg1JVxyXG4gICAgICAgICAgICBzOiA0LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAyNCwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAxMiwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDUsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH1dLFxyXG4gICAgb2JqczogW3sgLy9vYmplY3RpdmVzXHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDEsIC8vIHBpZWNlID0xXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgY2FiaW5cIixcclxuICAgICAgICBzOiA2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHQ6IDgsIC8vIGl0ZW0gdHlwZSA9IDhcclxuICAgICAgICBwOiAyLFxyXG4gICAgICAgIG46IFwieW91ciBwbGFuZSdzIGxlZnQgd2luZ1wiLFxyXG4gICAgICAgIHM6IDdcclxuICAgIH0se1xyXG4gICAgICAgIHQ6IDgsIC8vIGl0ZW0gdHlwZSA9IDhcclxuICAgICAgICBwOiAzLFxyXG4gICAgICAgIG46IFwieW91ciBwbGFuZSdzIGJvZHlcIixcclxuICAgICAgICBzOiA4XHJcbiAgICB9LHtcclxuICAgICAgICB0OiA4LCAvLyBpdGVtIHR5cGUgPSA4XHJcbiAgICAgICAgcDogNCxcclxuICAgICAgICBuOiBcInlvdXIgcGxhbmUncyByaWdodCB3aW5nXCIsXHJcbiAgICAgICAgczogOVxyXG4gICAgfSx7XHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDUsXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgdGhydXN0ZXJcIixcclxuICAgICAgICBzOiAxMFxyXG4gICAgfV1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFsIFRIUkVFLCBBRlJBTUUgKi9cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdteXRleHR1cmUnLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBjb2xvcjpcclxuICAgIHtcclxuICAgICAgdHlwZTogJ2NvbG9yJ1xyXG4gICAgfSxcclxuICAgIGluZGV4OiB7IHR5cGU6ICdpbnQnIH0sXHJcbiAgICBsb29rdXA6IHsgdHlwZTogJ2ludCcsIGRlZmF1bHQ6IDAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCB1c2luZyB0aGUgdHdvIHNoYWRlcnMgZGVmaW5lZFxyXG4gICAqIGluIHZlcnRleC5nbHNsIGFuZCBmcmFnbWVudC5nbHNsLlxyXG4gICAqL1xyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhZ21lbnQnKS50ZXh0Q29udGVudDtcclxuICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVydGV4JykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgaW5kZXg6IHsgdmFsdWU6IHRoaXMuZGF0YS5pbmRleCB9LFxyXG4gICAgICAgIERpZmZ1c2VUZXh0dXJlOiB7IHZhbHVlOiB3aW5kb3cudCB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LFxyXG4gICAgICAgIGNvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoZGF0YS5jb2xvcikgfSxcclxuICAgICAgICBzcHJpdGVEaW1lbnNpb25zOiB7IHZhbHVlOiB7IHg6IDE2LjAsIHk6IDEuMCB9IH0sXHJcbiAgICAgICAgcmVwZWF0OiB7IHZhbHVlOiB7IHg6IDEuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICBmb2dTdGFydDogeyB2YWx1ZTogNSB9LFxyXG4gICAgICAgIGZvZ0VuZDogeyB2YWx1ZTogMTUgfSxcclxuICAgICAgICBsb29rdXBJbmRleDp7dmFsdWU6ZGF0YS5sb29rdXB9LFxyXG4gICAgICAgIGZvZ0NvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMCwgMCwgMCkgfSxcclxuICAgICAgICB0aW50OiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMjU1LCAyNTUsIDI1NSkgfSxcclxuICAgICAgICB0aW50QW1vdW50OiB7IHZhbHVlOiAwIH1cclxuICAgICAgfSxcclxuICAgICAgdmVydGV4U2hhZGVyLFxyXG4gICAgICBmcmFnbWVudFNoYWRlclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFwcGx5VG9NZXNoKCk7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGVsLWxvYWRlZCcsICgpID0+IHRoaXMuYXBwbHlUb01lc2goKSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIFNoYWRlck1hdGVyaWFsIHdoZW4gY29tcG9uZW50IGRhdGEgY2hhbmdlcy5cclxuICAgKi9cclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMuaW5kZXgudmFsdWUgPSB0aGlzLmRhdGEuaW5kZXg7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLmxvb2t1cEluZGV4LnZhbHVlPXRoaXMuZGF0YS5sb29rdXA7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBBcHBseSB0aGUgbWF0ZXJpYWwgdG8gdGhlIGN1cnJlbnQgZW50aXR5LlxyXG4gICAqL1xyXG4gIGFwcGx5VG9NZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZXNoID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgaWYgKG1lc2gpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueCA9ICt0aGlzLmVsLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpIHx8IDE7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnkgPSArdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIikgfHwgMTtcclxuICAgICAgbWVzaC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBPbiBlYWNoIGZyYW1lLCB1cGRhdGUgdGhlICd0aW1lJyB1bmlmb3JtIGluIHRoZSBzaGFkZXJzLlxyXG4gICAqL1xyXG4gIC8vIHRpY2s6IGZ1bmN0aW9uICh0KSB7XHJcbiAgLy8gICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0IC8gMTAwMDsgXHJcbiAgLy8gfVxyXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL215U2hhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGdsb2JhbCBUSFJFRSwgQUZSQU1FICovXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnYmlsbGJvYXJkLXRleHR1cmUnLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBpbmRleDp7dHlwZTonaW50J30sXHJcbiAgICBsb29rdXA6IHsgdHlwZTogJ2ludCcsIGRlZmF1bHQ6IC0xIH1cclxuICB9LFxyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7ICAgIFxyXG4gICAgdmFyIGZyYWdtZW50U2hhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYWdtZW50JykudGV4dENvbnRlbnQ7XHJcbiAgICB2YXIgdmVydGV4U2hhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcnRleC1iaWxsYm9hcmQnKS50ZXh0Q29udGVudDtcclxuICAgIFxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgaW5kZXg6IHsgdmFsdWU6IHRoaXMuZGF0YS5pbmRleCB9LFxyXG4gICAgICAgIERpZmZ1c2VUZXh0dXJlOiB7IHZhbHVlOiB3aW5kb3cudH0sXHJcbiAgICAgICAgY29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcihkYXRhLmNvbG9yKSB9LFxyXG4gICAgICAgIHNwcml0ZURpbWVuc2lvbnM6IHsgdmFsdWU6IHsgeDogMTYuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICByZXBlYXQ6IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LCAgICBcclxuICAgICAgICBsb29rdXBJbmRleDp7dmFsdWU6ZGF0YS5sb29rdXB9LFxyXG4gICAgICAgIGZvZ1N0YXJ0Ont2YWx1ZTo1fSxcclxuICAgICAgICBmb2dFbmQ6e3ZhbHVlOjE1fSxcclxuICAgICAgICBhbHBoYXRlc3Q6e3ZhbHVlOjAuOTV9LFxyXG4gICAgICAgIGZvZ0NvbG9yOnt2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKDAsMCwwKX1cclxuICAgICAgfSxcclxuICAgICAgdmVydGV4U2hhZGVyLFxyXG4gICAgICBmcmFnbWVudFNoYWRlclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1hdGVyaWFsLmJsZW5kaW5nID0gVEhSRUUuTXVsdGlwbHlCbGVuZGluZztcclxuICAgIHRoaXMuYXBwbHlUb01lc2goKTtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kZWwtbG9hZGVkJywgKCkgPT4gdGhpcy5hcHBseVRvTWVzaCgpKTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgU2hhZGVyTWF0ZXJpYWwgd2hlbiBjb21wb25lbnQgZGF0YSBjaGFuZ2VzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5pbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5pbmRleDtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMubG9va3VwSW5kZXgudmFsdWUgPSB0aGlzLmRhdGEubG9va3VwO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQXBwbHkgdGhlIG1hdGVyaWFsIHRvIHRoZSBjdXJyZW50IGVudGl0eS5cclxuICAgKi9cclxuICBhcHBseVRvTWVzaDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWVzaCA9IHRoaXMuZWwuZ2V0T2JqZWN0M0QoJ21lc2gnKTtcclxuICAgIGlmIChtZXNoKSB7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnggPSt0aGlzLmVsLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpfHwxO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlcGVhdC52YWx1ZS55ID0rdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIil8fDE7XHJcbiAgICAgIG1lc2gubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogT24gZWFjaCBmcmFtZSwgdXBkYXRlIHRoZSAndGltZScgdW5pZm9ybSBpbiB0aGUgc2hhZGVycy5cclxuICAgKi9cclxuICAvLyB0aWNrOiBmdW5jdGlvbiAodCkge1xyXG4gIC8vICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50aW1lLnZhbHVlID0gdCAvIDEwMDA7IFxyXG4gIC8vIH1cclxufSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iaWxsYm9hcmRTaGFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgbWFwR2VuID0gcmVxdWlyZShcIi4vbWFwZ2VuXCIpO1xyXG5cclxud2luZG93LnNpemUgPSAxMjg7XHJcbmNvbnN0IGRlcHRoID0gNztcclxuXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnbWFwJywge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubWFwQ29udGV4dCA9IG1hcEdlbi5nbyhzaXplLCBkZXB0aCk7XHJcbiAgICAgICAgbGV0IHdvcmxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpO1xyXG4gICAgICAgIGxldCB3b3JsZERhdGEgPSB0aGlzLm1hcENvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHNpemUsIHNpemUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2RwID0gKGkgKyBzaXplICogaikgKiA0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHdvcmxkRGF0YS5kYXRhW3dkcF0gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGFuZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLmNsYXNzTGlzdC5hZGQoXCJmbG9vclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAod29ybGREYXRhLmRhdGFbd2RwXSA9PSAxMDIpIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjExO2xvb2t1cDo4XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdvcmxkRGF0YS5kYXRhW3dkcF0gPT0gMTcwKSBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJpbmRleDoxMjtsb29rdXA6MTBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod29ybGREYXRhLmRhdGFbd2RwXSA9PSAyMzgpIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjEyO2xvb2t1cDo5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJpbmRleDowO2xvb2t1cDpcIiArIH5+KChpICogNSkgLyAoaiAqIDIpICogMykgJSA1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBpIC0gKHNpemUgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IGogLSAoc2l6ZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwibW91c2VlbnRlcjpcIixlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNyY0VsZW1lbnQuc2V0QXR0cmlidXRlKCdzY2FsZScsIHsgeDogLjk2LCB5OiAuOTYgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3VzZWxlYXZlOlwiLGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnNyY0VsZW1lbnQuc2V0QXR0cmlidXRlKCdzY2FsZScsIHsgeDogMSwgeTogMSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEdNLmRhdGEuc3RhdGUgPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHTS5wbGF5ZXIuY29tcG9uZW50cy5wbGF5ZXIubW92ZSh7IHgsIHkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKFwiY3Vyc29yLWxpc3RlbmVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt4fSAwICR7eX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3ZveGVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQuYXBwZW5kQ2hpbGQocGxhbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHdvcmxkKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuYWRkT2JqcygpKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuYWRkSXRlbXMoKSk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmFkZE1vYnMoKSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UGl4OiBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcENvbnRleHQuZ2V0SW1hZ2VEYXRhKHgsIHksIDEsIDEpO1xyXG4gICAgfSxcclxuICAgIHB1dFBpeDogZnVuY3Rpb24gKGMsIHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBDb250ZXh0LnB1dEltYWdlRGF0YShjLCB4LCB5KTtcclxuICAgIH0sXHJcbiAgICByYW5kb21QbGFjZTogZnVuY3Rpb24gKG1pbkRpc3RhbmNlID0gMCkge1xyXG4gICAgICAgIGxldCB4LCB5LCBjO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeCA9IHdpbmRvdy5ybmQoc2l6ZSk7XHJcbiAgICAgICAgICAgIHkgPSB3aW5kb3cucm5kKHNpemUpO1xyXG4gICAgICAgICAgICBjID0gdGhpcy5nZXRQaXgoeCwgeSk7XHJcbiAgICAgICAgfSB3aGlsZSAoYy5kYXRhLmV2ZXJ5KHAgPT4gcCA9PSAwKSk7XHJcbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgYyB9O1xyXG4gICAgfSxcclxuICAgIGdldFdlaWdodGVkOiBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgICAgIGxldCBmID0gZmFsc2UsIGl0ZW07XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpdGVtID0gbGlzdFtybmQobGlzdC5sZW5ndGgpXTtcclxuICAgICAgICAgICAgZiA9IHJuZCgxMDApIDwgaXRlbS5jO1xyXG4gICAgICAgIH0gd2hpbGUgKCFmKVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSxcclxuICAgIGFkZEl0ZW1zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTUwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIiksIHR4LCB0eSwgcCwgaXRlbTtcclxuXHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHAgPSB0aGlzLnJhbmRvbVBsYWNlKCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gdGhpcy5nZXRXZWlnaHRlZChELml0ZW1zKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0ubWFwID0gcDtcclxuXHJcbiAgICAgICAgICAgICAgICBkID0gKG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApKS5kaXN0YW5jZVRvKG5ldyBUSFJFRS5WZWN0b3IyKHAueCwgcC55KSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGl0ZW0ubSA+PSBkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwLmMuZGF0YVsxXSAhPSAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgcC5jLmRhdGFbMV0gPSAweDQxO1xyXG4gICAgICAgICAgICB0aGlzLnB1dFBpeChwLmMsIHAueCwgcC55KTtcclxuXHJcbiAgICAgICAgICAgIHR4ID0gcC54IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgIHR5ID0gcC55IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgIHZhciBkID0gKG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApKS5kaXN0YW5jZVRvKG5ldyBUSFJFRS5WZWN0b3IyKHR4LCB0eSkpO1xyXG5cclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtdGV4dHVyZVwiLCB7IGluZGV4OiAzIH0pOy8vIHsgaW5kZXg6IGl0ZW0ucywgbG9va3VwOiBpdGVtLmkgfSk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3R4fSAuMjUgJHt0eX1gKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3NwcicpO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnaXRlbScsIHsgeDogcC54LCB5OiBwLnksIHByb3BzOiBpdGVtIH0pO1xyXG4gICAgICAgICAgICBiLmlkID0gYGIke3AueH0tJHtwLnl9YDtcclxuICAgICAgICAgICAgYi5kYXRhID0gaXRlbTtcclxuICAgICAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0sXHJcbiAgICBhZGRNb2JzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZNb2JzID0gMTsvLzUwO1xyXG4gICAgICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mTW9iczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpLCB0eCwgdHk7XHJcbiAgICAgICAgICAgIGxldCBtb2IgPSB0aGlzLmdldFdlaWdodGVkKEQubW9icyksIHAsIGQ7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHAgPSB0aGlzLnJhbmRvbVBsYWNlKCk7XHJcbiAgICAgICAgICAgICAgICB0eCA9IHAueCAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgdHkgPSBwLnkgLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgICAgIGQgPSAobmV3IFRIUkVFLlZlY3RvcjIoMCwgMCkpLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjIodHgsIHR5KSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKG1vYi5tID49IGQpO1xyXG4gICAgICAgICAgICBwLmMuZGF0YVsyXSA9IDB4ODg7XHJcbiAgICAgICAgICAgIHRoaXMucHV0UGl4KHAuYywgcC54LCBwLnkpO1xyXG5cclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtdGV4dHVyZVwiLCB7IGluZGV4OiAyLCBsb29rdXA6IG1vYi5pIH0pO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0eH0gLjI1ICR7dHl9YCk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21vYicsIHtcclxuICAgICAgICAgICAgICAgIHg6IHAueCwgeTogcC55LFxyXG4gICAgICAgICAgICAgICAgaGVhbHRoOiBybmQobW9iLmhbMV0pICsgbW9iLmhbMF0sXHJcbiAgICAgICAgICAgICAgICBkYW1hZ2U6IHJuZChtb2IuZFsxXSkgKyBtb2IuZFswXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYi5pZCA9IGBlJHtwLnh9LSR7cC55fWA7XHJcbiAgICAgICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9LFxyXG4gICAgYWRkT2JqczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBvYmpzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpLCB0eCwgdHksIHAsIGQ7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHAgPSB0aGlzLnJhbmRvbVBsYWNlKCk7XHJcbiAgICAgICAgICAgICAgICB0eCA9IHAueCAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgdHkgPSBwLnkgLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgICAgIGQgPSAobmV3IFRIUkVFLlZlY3RvcjIoMCwgMCkpLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjIodHgsIHR5KSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKDI1ID49IGQpOyBcclxuXHJcbiAgICAgICAgICAgIHAuYy5kYXRhWzFdID0gMHhFRTtcclxuICAgICAgICAgICAgdGhpcy5wdXRQaXgocC5jLCBwLngsIHAueSk7XHJcblxyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZShcImJpbGxib2FyZC10ZXh0dXJlXCIsIHsgaW5kZXg6IEQub2Jqc1tpXS5zIH0pO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0eH0gLjI1ICR7dHl9YCk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ2l0ZW0nLCB7IHg6IHAueCwgeTogcC55LCBwcm9wczogRC5vYmpzW2ldIH0pO1xyXG4gICAgICAgICAgICBiLmlkID0gYGIke3AueH0tJHtwLnl9YDtcclxuICAgICAgICAgICAgb2Jqcy5hcHBlbmRDaGlsZChiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdjdXJzb3ItbGlzdGVuZXInLCB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBsYXN0SW5kZXggPSAtMTtcclxuICAgICAgdmFyIENPTE9SUyA9IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXTtcclxuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBsYXN0SW5kZXggPSAobGFzdEluZGV4ICsgMSkgJSBDT0xPUlMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsICdjb2xvcicsIENPTE9SU1tsYXN0SW5kZXhdKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnSSB3YXMgY2xpY2tlZCBhdDogJywgZXZ0LmRldGFpbC5pbnRlcnNlY3Rpb24ucG9pbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbnZhciBnZW5lcmF0b3IgPSB7XHJcbiAgICBnbzogKG1hcFdpZHRoLCBkZXB0aCkgPT4ge1xyXG4gICAgICAgIHZhciBwaWVjZXMgPSBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAyLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMCwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDIsIDAsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAyLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAwLCAxLCAxXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAyLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMiwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMCwgMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAyLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIHZhciBtYXBXaWR0aCA9IDI1NjtcclxuXHJcbiAgICAgICAgbGV0IHBsID0gcGllY2VzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lID0gcGllY2VzW2ldLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2xvbmUubGVuZ3RoOyBqKyspXHJcbiAgICAgICAgICAgICAgICBjbG9uZVtqXSA9IGNsb25lW2pdLnNsaWNlKCkucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBwaWVjZXMucHVzaChjbG9uZSk7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZTIgPSBwaWVjZXNbaV0uc2xpY2UoKTtcclxuICAgICAgICAgICAgY2xvbmUyID0gY2xvbmUyLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgcGllY2VzLnB1c2goY2xvbmUyKTtcclxuICAgICAgICAgICAgbGV0IGNsb25lMyA9IGNsb25lLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGNsb25lMyA9IGNsb25lMy5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHBpZWNlcy5wdXNoKGNsb25lMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGllY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBpZWNlc1tpXS5zaXplID0geyB3OiBwaWVjZXNbaV1bMF0ubGVuZ3RoLCBoOiBwaWVjZXNbaV0ubGVuZ3RoIH07XHJcbiAgICAgICAgICAgIHBpZWNlc1tpXS5leGl0cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBpZWNlc1tpXS5zaXplLmg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBwaWVjZXNbaV0uc2l6ZS53OyBoKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGllY2VzW2ldW2pdW2hdID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlc1tpXS5leGl0cy5wdXNoKHsgeDogaCwgeTogaiB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBtYXBDYW52YXMud2lkdGggPSBtYXBXaWR0aDtcclxuICAgICAgICBtYXBDYW52YXMuaGVpZ2h0ID0gbWFwV2lkdGg7XHJcblxyXG4gICAgICAgIC8vIFRlbXAgZHVyaW5nIGRldmVsb3BtZW50XHJcbiAgICAgICAgbWFwQ2FudmFzLnN0eWxlLndpZHRoID0gJzEwMjRweCc7XHJcbiAgICAgICAgbWFwQ2FudmFzLnN0eWxlLmhlaWdodCA9ICcxMDI0cHgnO1xyXG4gICAgICAgIG1hcENhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFwQ2FudmFzKTtcclxuICAgICAgICAvLyBFTkRcclxuXHJcbiAgICAgICAgdmFyIG1hcENvbnRleHQgPSBtYXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAwKVwiO1xyXG4gICAgICAgIG1hcENvbnRleHQuZmlsbFJlY3QoMCwgMCwgbWFwV2lkdGgsIG1hcFdpZHRoKTtcclxuXHJcbiAgICAgICAgbGV0IGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICB2YXIgYWRkUm9vbSA9IChleGl0LCBzcGVjaWFsKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwaWVjZTtcclxuICAgICAgICAgICAgbGV0IGV4aXRzID0gW107XHJcbiAgICAgICAgICAgIGxldCBjbGVhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WDtcclxuICAgICAgICAgICAgbGV0IHRhcmdldFk7XHJcbiAgICAgICAgICAgIGxldCB0cmllcyA9IDI1O1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBwaWVjZSA9IHBpZWNlc1tybmQocGllY2VzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcSA9IDA7IHEgPCBwaWVjZS5leGl0cy5sZW5ndGg7IHErKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggPSBleGl0LnggLSBwaWVjZS5leGl0c1txXS54O1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFkgPSBleGl0LnkgLSBwaWVjZS5leGl0c1txXS55O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWdEYXRhID0gbWFwQ29udGV4dC5nZXRJbWFnZURhdGEodGFyZ2V0WCwgdGFyZ2V0WSwgcGllY2Uuc2l6ZS53LCBwaWVjZS5zaXplLmgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyID0gaW1nRGF0YS5kYXRhLmV2ZXJ5KGQgPT4gZCA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRyaWVzLS07XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRyaWVzID4gMCAmJiAhY2xlYXIpO1xyXG4gICAgICAgICAgICBpZiAoIWNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICBwaWVjZSA9IFtbMV1dO1xyXG4gICAgICAgICAgICAgICAgcGllY2UuZXhpdHMgPSBbe31dO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WCA9IGV4aXQueDtcclxuICAgICAgICAgICAgICAgIHRhcmdldFkgPSBleGl0Lnk7XHJcbiAgICAgICAgICAgICAgICBxID0gMDtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9ICFmaXJzdCA/IFwiIzQwMFwiIDogXCIjNjAwXCI7XHJcbiAgICAgICAgICAgIGlmICghZmlyc3QpIG1hcENvbnRleHQuZmlsbFJlY3QodGFyZ2V0WCArIHBpZWNlLmV4aXRzW3FdLnggfHwgMCwgdGFyZ2V0WSArIHBpZWNlLmV4aXRzW3FdLnkgfHwgMCwgMSwgMSk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoc3BlY2lhbCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSBcIiNFMDBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BlY2lhbCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSBcIiNBMDBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwaWVjZS5mb3JFYWNoKChpLCBweSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaS5mb3JFYWNoKChqLCBweCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFJlY3QodGFyZ2V0WCArIHB4LCB0YXJnZXRZICsgcHksIDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0cy5wdXNoKHsgeDogdGFyZ2V0WCArIHB4LCB5OiB0YXJnZXRZICsgcHkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBleGl0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvb3BzID0gZGVwdGg7XHJcbiAgICAgICAgbGV0IGV4aXRzID0gW3sgeDogbWFwV2lkdGggLyAyLCB5OiBtYXBXaWR0aCAvIDIgfV07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb29wczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdFeGl0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgc3BlY2lhbDtcclxuICAgICAgICAgICAgZXhpdHMuZm9yRWFjaCgoZXhpdCwgaW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBsb29wcyAtIDEgJiYgaW5kID09IGV4aXRzLmxlbmd0aCAtIH5+KGV4aXRzLmxlbmd0aCAvIDMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY2lhbCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBsb29wcyAtIDEgJiYgaW5kID09IH5+KGV4aXRzLmxlbmd0aCAvIDMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY2lhbCA9IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcSA9IGFkZFJvb20oZXhpdCwgc3BlY2lhbCk7XHJcbiAgICAgICAgICAgICAgICBuZXdFeGl0cyA9IG5ld0V4aXRzLmNvbmNhdChxKTtcclxuICAgICAgICAgICAgICAgIHNwZWNpYWwgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZXhpdHMgPSBuZXdFeGl0cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYXBDb250ZXh0O1xyXG4gICAgfVxyXG5cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRvcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYXBnZW4uanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdnYW1lbWFuYWdlcicsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIHN0YXRlOiB7IHZhbHVlOiAnaW50JywgZGVmYXVsdDogMCB9XHJcbiAgICAgICAgLy8gMCA9PSBwbGF5ZXJcclxuICAgICAgICAvLyAxID09IGVuZW15XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcicpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYScpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmRlbHRhUm90ID0gMDtcclxuICAgICAgICB0aGlzLm1hcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBnZW8nKS5jb21wb25lbnRzLm1hcDtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbY2FudmFzLXRleHRdJykuY29tcG9uZW50c1snY2FudmFzLXRleHQnXTtcclxuICAgICAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tjdXJzb3JdJyk7ICAgICAgICBcclxuICAgICAgICB3aW5kb3cuR00gPSB0aGlzO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLnN0YXRlID4gMSkgcmV0dXJuO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kYXRhLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbXBvbmVudHMucGxheWVyLm1vdmUoZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3Iuc2V0QXR0cmlidXRlKCdjdXJzb3InLCB7IGZ1c2U6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbW9iXScpO1xyXG4gICAgICAgICAgICAgICAgbW9icy5mb3JFYWNoKGQgPT4gZC5jb21wb25lbnRzLm1vYi5tb3ZlKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJzb3Iuc2V0QXR0cmlidXRlKCdjdXJzb3InLCB7IGZ1c2U6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnN0YXRlID0gMDtcclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2FtZW1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdtb2InLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICB4OiB7IHZhbHVlOiAnZmxvYXQnIH0sXHJcbiAgICAgICAgeTogeyB2YWx1ZTogJ2Zsb2F0JyB9LFxyXG4gICAgICAgIGhlYWx0aDogeyB2YWx1ZTogJ2ludCcgfSxcclxuICAgICAgICBkYW1hZ2U6IHsgdmFsdWU6ICdpbnQnIH1cclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb247XHJcbiAgICB9LFxyXG4gICAgbW92ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEEqIHdvdWxkIGJlIG5pY2UuLi4gZm9yIG5vdywganVzdCBtb3ZlIHJhbmRvbS4uLlxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuaGVhbHRoIDw9IDApIHJldHVybjtcclxuICAgICAgICBsZXQgdHgsIHR5LCBjLCBzID0gdGhpcyxcclxuICAgICAgICAgICAgcGxheWVyUG9zaXRpb24gPSBHTS5wbGF5ZXIuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhO1xyXG4gICAgICAgIHZhciBhID0gbmV3IFRIUkVFLlZlY3RvcjMocGxheWVyUG9zaXRpb24ueCwgcGxheWVyUG9zaXRpb24ueiwgMCk7ICAgICAgICAgICAgICAgICAgICAgIC8vIDAsMFxyXG4gICAgICAgIHZhciBiID0gbmV3IFRIUkVFLlZlY3RvcjModGhpcy5wb3MuZGF0YS54LCB0aGlzLnBvcy5kYXRhLnosIDApO1xyXG4gICAgICAgIGlmIChhLmRpc3RhbmNlVG8oYikgPCAxLjkpIHsvLyBwbGF5ZXIgaXMgbmV4dCB0byB0aGUgbW9iIGF0dGFja1xyXG4gICAgICAgICAgICB0eCA9IGEueCAtIGIueDtcclxuICAgICAgICAgICAgdHkgPSBhLnkgLSBiLnk7XHJcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSB7IHg6IHMucG9zLmRhdGEueCwgejogcy5wb3MuZGF0YS56IH07XHJcbiAgICAgICAgICAgIHZhciB0d2VlbiA9IG5ldyBUV0VFTi5Ud2Vlbihjb29yZHMpIC8vIENyZWF0ZSBhIG5ldyB0d2VlbiB0aGF0IG1vZGlmaWVzICdjb29yZHMnLlxyXG4gICAgICAgICAgICAgICAgLnRvKHsgeDogcy5wb3MuZGF0YS54ICsgdHgsIHo6IHMucG9zLmRhdGEueiArIHR5IH0sIDUwMCkgLy8gTW92ZSB0byAoMzAwLCAyMDApIGluIDEgc2Vjb25kLlxyXG4gICAgICAgICAgICAgICAgLnlveW8odHJ1ZSkucmVwZWF0KDEpXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuSW5PdXQpIC8vIFVzZSBhbiBlYXNpbmcgZnVuY3Rpb24gdG8gbWFrZSB0aGUgYW5pbWF0aW9uIHNtb290aC5cclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7IC8vIENhbGxlZCBhZnRlciB0d2Vlbi5qcyB1cGRhdGVzICdjb29yZHMnLlxyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke2Nvb3Jkcy54fSAuMjUgJHtjb29yZHMuen1gKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAub25Db21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9zaG93IHNwbGF0XHJcbiAgICAgICAgICAgICAgICAgICAgR00ucGxheWVyLmNvbXBvbmVudHMucGxheWVyLmhpdCh0aGlzLmRhdGEuZGFtYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LiAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyAvL21vdmVcclxuICAgICAgICAgICAgbGV0IHRyaWVzID0gMTA7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHR4ID0gcm5kKDMpIC0gMTtcclxuICAgICAgICAgICAgICAgIHR5ID0gcm5kKDMpIC0gMTtcclxuICAgICAgICAgICAgICAgIGMgPSBHTS5tYXAuZ2V0UGl4KHMuZGF0YS54ICsgdHgsIHMuZGF0YS55ICsgdHkpO1xyXG4gICAgICAgICAgICAgICAgdHJpZXMtLTtcclxuICAgICAgICAgICAgICAgIGlmKHRyaWVzID09PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGMuZGF0YVswXSA9PT0gMCB8fCBjLmRhdGFbMl0gIT09IDApXHJcblxyXG4gICAgICAgICAgICBsZXQgb2xkID0gR00ubWFwLmdldFBpeChzLmRhdGEueCwgcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICBvbGQuZGF0YVsyXSA9IDA7XHJcbiAgICAgICAgICAgIEdNLm1hcC5wdXRQaXgob2xkLCBzLmRhdGEueCwgcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICBjLmRhdGFbMl0gPSAweDg4O1xyXG4gICAgICAgICAgICBzLmRhdGEueCArPSB0eDtcclxuICAgICAgICAgICAgcy5kYXRhLnkgKz0gdHk7XHJcbiAgICAgICAgICAgIEdNLm1hcC5wdXRQaXgoYywgcy5kYXRhLngsIHMuZGF0YS55KTtcclxuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHsgeDogcy5wb3MuZGF0YS54LCB6OiBzLnBvcy5kYXRhLnogfTtcclxuICAgICAgICAgICAgdmFyIHR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcylcclxuICAgICAgICAgICAgICAgIC50byh7IHg6IHMucG9zLmRhdGEueCArIHR4LCB6OiBzLnBvcy5kYXRhLnogKyB0eSB9LCA0MDAgKyBybmQoNDAwKSlcclxuICAgICAgICAgICAgICAgIC5kZWxheShybmQoMjUwKSlcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5Jbk91dClcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7Y29vcmRzLnh9IC4yNSAke2Nvb3Jkcy56fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuaWQgPSBgZSR7Y29vcmRzLnggKyBzaXplIC8gMn0tJHtjb29yZHMueiArIHNpemUgLyAyfWA7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpdDogZnVuY3Rpb24gKGFtb3VudCkge1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEuaGVhbHRoIC09IGFtb3VudDtcclxuICAgICAgICBsZXQgZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcclxuICAgICAgICBlbnQuc2V0QXR0cmlidXRlKCdiaWxsYm9hcmQtdGV4dHVyZScsIHsgaW5kZXg6IDE0LCBsb29rdXA6IDEyIH0pO1xyXG4gICAgICAgIGVudC5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3NwcicpO1xyXG4gICAgICAgIGVudC5zZXRBdHRyaWJ1dGUoJ2F1dG8tZGVzdHJveScsICcnKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmlkID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBwaXggPSBHTS5tYXAuZ2V0UGl4KHRoaXMuZGF0YS54LCB0aGlzLmRhdGEueSk7XHJcbiAgICAgICAgICAgIHBpeC5kYXRhWzJdID0gMDtcclxuICAgICAgICAgICAgR00ubWFwLnB1dFBpeChwaXgsIHRoaXMuZGF0YS54LCB0aGlzLmRhdGEueSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2F1dG8tZGVzdHJveScsICcnKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vYi5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKmdsb2JhbCBBRlJBTUUsIEdNLCBUSFJFRSwgc2l6ZSwgVFdFRU4sIHJuZCovXHJcblxyXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ3BsYXllcicsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIGhlYWx0aDogeyB2YWx1ZTogJ2ludCcsIGRlZmF1bHQ6IDI1IH1cclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5mb3VuZFBpZWNlcyA9IDA7XHJcbiAgICAgICAgdGhpcy5hdHRhY2sgPSAxO1xyXG4gICAgICAgIHRoaXMuZGVmZW5zZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLXNwcml0ZScpO1xyXG4gICAgfSxcclxuICAgIG1vdmU6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgbGV0IHJvdGF0aW9ucyA9IFtbNDUsIDAsIDMxNV0sIFs5MCwgMCwgMjcwXSwgWzEzNSwgMTgwLCAyMjVdXTtcclxuICAgICAgICB2YXIgcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKEdNLmRhdGEuc3RhdGUgIT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBjb29yZHMgPSBzLmVsLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YTtcclxuICAgICAgICB2YXIgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKGRhdGEueCwgZGF0YS55LCAwKTsgICAgICAgICAgICAgICAgICAgICAgLy8gMCwwXHJcbiAgICAgICAgdmFyIGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhjb29yZHMueCwgY29vcmRzLnosIDApOyAgICAgICAgICAgICAgICAgIC8vIDEsMFxyXG5cclxuXHJcbiAgICAgICAgaWYgKGEuZGlzdGFuY2VUbyhiKSA+IDEuOSB8fCBhLmRpc3RhbmNlVG8oYikgPCAuMilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBjID0gR00ubWFwLmdldFBpeChkYXRhLnggKyBzaXplIC8gMiwgZGF0YS55ICsgc2l6ZSAvIDIpO1xyXG4gICAgICAgIGlmIChjLmRhdGFbMl0gPiAwKSB7IC8vIG1vYiBpbiBuZXh0IHBvc2l0aW9uXHJcbiAgICAgICAgICAgIC8vIGNvZGUgZm9yIGF0dGFja2luZyB0aGUgbW9iLlxyXG4gICAgICAgICAgICBsZXQgbW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Uke2RhdGEueCArIHNpemUgLyAyfS0ke2RhdGEueSArIHNpemUgLyAyfWApLmNvbXBvbmVudHMubW9iO1xyXG4gICAgICAgICAgICBsZXQgc3ByY29vcmQgPSB7IHg6IDAsIHo6IDAgfTtcclxuICAgICAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKHNwcmNvb3JkKVxyXG4gICAgICAgICAgICAgICAgLnRvKHsgeDogYS54IC0gYi54LCB6OiBhLnkgLSBiLnkgfSwgNTAwKVxyXG4gICAgICAgICAgICAgICAgLnlveW8odHJ1ZSlcclxuICAgICAgICAgICAgICAgIC5yZXBlYXQoMSlcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5Jbk91dClcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3NwcmNvb3JkLnh9IDAgJHtzcHJjb29yZC56fWApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2IuaGl0KHRoaXMuYXR0YWNrICsgcm5kKDIpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEdNLmRhdGEuc3RhdGUgPiAyKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdNLmRhdGEuc3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHTS51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjLmRhdGFbMV0gPiAwKSB7IC8vIGl0ZW0gaW4gbmV4dCBwb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Ike2RhdGEueCArIHNpemUgLyAyfS0ke2RhdGEueSArIHNpemUgLyAyfWApLmNvbXBvbmVudHMuaXRlbS5nZXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXNnID0gYEZvdW5kICR7cC5ufWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocC50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6IC8vIGhlYXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5kYXRhLmhlYWx0aCA9IE1hdGgubWluKHMuZGF0YS5oZWFsdGggKz0gNSwgMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBgXFxuSGVhbHRoID0gJHtzLmRhdGEuaGVhbHRofS8yNWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IC8vIHN3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAuZCA+IHRoaXMuYXR0YWNrKSB0aGlzLmF0dGFjayA9IHAuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzogLy8gc2hpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWZlbnNlID0gTWF0aC5tYXgodGhpcy5kZWZlbnNlLCBwLmIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiAvLyBwbGFuZSBwaWVjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm91bmRQaWVjZXMrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3VuZFBpZWNlcyA8IDUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IGBcXG5Pbmx5ICR7NSAtIHRoaXMuZm91bmRQaWVjZXN9IHBpZWNlcyBsZWZ0YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHTS5kYXRhLnN0YXRlID0gMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR00ubWVzc2FnZS53cml0ZShgWW91IGZvdW5kIGFsbCBwaWVjZXNcXG5hbmQgZXNjYXBlZCB0aGUgcGxhbmV0IWAsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdNLm1lc3NhZ2Uud3JpdGUobXNnKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY3VycmVudENhbWVyYVJvdGF0aW9uID0gR00uY2FtZXJhLmdldEF0dHJpYnV0ZSgncm90YXRpb24nKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBvbGRDYW1lcmFSb3RhdGlvbiA9IGN1cnJlbnRDYW1lcmFSb3RhdGlvbi55O1xyXG4gICAgICAgICAgICBsZXQgbmV3Q2FtZXJhUm90YXRpb24gPSByb3RhdGlvbnNbTWF0aC5hYnMofihhLnkgLSBiLnkpKV1bTWF0aC5hYnMofihhLnggLSBiLngpKV07XHJcblxyXG4gICAgICAgICAgICBsZXQgY3cgPSBNYXRoLmFicyhvbGRDYW1lcmFSb3RhdGlvbiAtIG5ld0NhbWVyYVJvdGF0aW9uKTtcclxuICAgICAgICAgICAgbGV0IGNjdyA9IE1hdGguYWJzKG9sZENhbWVyYVJvdGF0aW9uIC0gKG5ld0NhbWVyYVJvdGF0aW9uIC0gMzYwKSk7XHJcbiAgICAgICAgICAgIGlmIChjY3cgPCBjdykge1xyXG4gICAgICAgICAgICAgICAgbmV3Q2FtZXJhUm90YXRpb24gLT0gMzYwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0Q2FtZXJhUm90YXRpb24gPSB7IHg6IC0yNywgeTogbmV3Q2FtZXJhUm90YXRpb24gfTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDYW1lcmFQb3NpdGlvbiA9IEdNLmNhbWVyYS5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRDYW1lcmFQb3NpdGlvbiA9IHsgeDogTWF0aC5zaW4oZGVnVG9SYWQobmV3Q2FtZXJhUm90YXRpb24pKSAqIDIsIHo6IE1hdGguY29zKGRlZ1RvUmFkKG5ld0NhbWVyYVJvdGF0aW9uKSkgKiAyIH07XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIHRoZSBwbGF5ZXJcclxuICAgICAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKHtcclxuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy54LCB6OiBjb29yZHMueixcclxuICAgICAgICAgICAgICAgIGNhbXBvc3g6IGN1cnJlbnRDYW1lcmFQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgY2FtcG9zejogY3VycmVudENhbWVyYVBvc2l0aW9uLnosXHJcbiAgICAgICAgICAgICAgICBjYW1yb3R4OiBjdXJyZW50Q2FtZXJhUm90YXRpb24ueCxcclxuICAgICAgICAgICAgICAgIGNhbXJvdHk6IGN1cnJlbnRDYW1lcmFSb3RhdGlvbi55XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IGRhdGEueCwgejogZGF0YS55LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbXBvc3g6IHRhcmdldENhbWVyYVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtcG9zejogdGFyZ2V0Q2FtZXJhUG9zaXRpb24ueixcclxuICAgICAgICAgICAgICAgICAgICBjYW1yb3R4OiB0YXJnZXRDYW1lcmFSb3RhdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbXJvdHk6IHRhcmdldENhbWVyYVJvdGF0aW9uLnlcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuSW5PdXQpXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3RoaXMueH0gLjI1ICR7dGhpcy56fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIEdNLmNhbWVyYS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7dGhpcy5jYW1wb3N4fSAwLjggJHt0aGlzLmNhbXBvc3p9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgR00uY2FtZXJhLnNldEF0dHJpYnV0ZSgncm90YXRpb24nLCBgJHt0aGlzLmNhbXJvdHh9ICR7dGhpcy5jYW1yb3R5fSAwYCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uQ29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEdNLmNhbWVyYS5yb3QgPSAobmV3Q2FtZXJhUm90YXRpb24gKyAzNjApICUgMzYwOyAvLyBUT0RPOiBNYWtlIHN1cmUgaXRzIGJldHdlZW4gMCBhbmQgMzYwIGFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgR00uY2FtZXJhLnNldEF0dHJpYnV0ZSgncm90YXRpb24nLCBgJHt0YXJnZXRDYW1lcmFSb3RhdGlvbi54fSAke0dNLmNhbWVyYS5yb3R9IDBgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoR00uZGF0YS5zdGF0ZSA+IDIpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICBHTS5kYXRhLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBHTS51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaXQ6IGZ1bmN0aW9uIChhbW91bnQpIHtcclxuXHJcbiAgICAgICAgbGV0IGRhbWFnZSA9IGFtb3VudCAqIChybmQoMTAwKSA8IHRoaXMuZGVmZW5zZSA/IDAgOiAxKTtcclxuXHJcbiAgICAgICAgbGV0IGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtZW50aXR5Jyk7XHJcblxyXG4gICAgICAgIGVudC5zZXRBdHRyaWJ1dGUoJ2JpbGxib2FyZC10ZXh0dXJlJywgeyBpbmRleDogMTQsIGxvb2t1cDogZGFtYWdlID4gMCA/IDUgOiAxIH0pO1xyXG5cclxuICAgICAgICBlbnQuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICBlbnQuc2V0QXR0cmlidXRlKCdhdXRvLWRlc3Ryb3knLCAnJyk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZChlbnQpO1xyXG4gICAgICAgIGlmIChkYW1hZ2UgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5oZWFsdGggLT0gZGFtYWdlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc2V0QXR0cmlidXRlKCdiaWxsYm9hcmQtdGV4dHVyZScsIHsgaW5kZXg6IDE1IH0pO1xyXG4gICAgICAgICAgICAgICAgR00uZGF0YS5zdGF0ZSA9IDM7XHJcbiAgICAgICAgICAgICAgICBHTS5tZXNzYWdlLndyaXRlKGBHYW1lIE92ZXJgLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEdNLm1lc3NhZ2Uud3JpdGUoYE91Y2ghXFxuSGVhbHRoID0gJHt0aGlzLmRhdGEuaGVhbHRofS8yNWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wbGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdpdGVtJywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgeDogeyB2YWx1ZTogJ2Zsb2F0JyB9LFxyXG4gICAgICAgIHk6IHsgdmFsdWU6ICdmbG9hdCcgfSxcclxuICAgICAgICBwcm9wczogeyB2YWx1ZTogJ29iamVjdCcgfVxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbjtcclxuICAgIH0sXHJcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtdGV4dHVyZVwiLCB7IGluZGV4OiBzLmRhdGEucHJvcHMucywgbG9va3VwOiBzLmRhdGEucHJvcHMuaSB9KTtcclxuICAgICAgICBsZXQgY29vcmRzID0gcy5lbC5jb21wb25lbnRzLnBvc2l0aW9uLmRhdGE7XHJcbiAgICAgICAgY29vcmRzLnQgPSAxO1xyXG4gICAgICAgIGxldCB0eCA9IHRoaXMuZGF0YS54LCB0eSA9IHRoaXMuZGF0YS55O1xyXG4gICAgICAgIGxldCBwaXggPSBHTS5tYXAuZ2V0UGl4KHR4LCB0eSk7XHJcbiAgICAgICAgcGl4LmRhdGFbMV0gPSAwO1xyXG4gICAgICAgIEdNLm1hcC5wdXRQaXgocGl4LCB0eCwgdHkpO1xyXG4gICAgICAgICB2YXIgcCA9IG5ldyBQcm9taXNlKHIgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdDEgPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKSBcclxuICAgICAgICAgICAgICAgIC50byh7IHk6IGNvb3Jkcy55ICsgMSwgdDogMCB9LCAzNTApXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuT3V0KVxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uICgpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgeyB4OiBjb29yZHMueCwgeTogY29vcmRzLnksIHo6IGNvb3Jkcy56IH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdmFyIHQyID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcylcclxuICAgICAgICAgICAgICAgIC50byh7IHk6IGNvb3Jkcy55IC0gLjUsIHQ6IDAgfSwgMzUwKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluKSBcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHsgeDogY29vcmRzLngsIHk6IGNvb3Jkcy55LCB6OiBjb29yZHMueiB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAub25Db21wbGV0ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHMuZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHIocy5kYXRhLnByb3BzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHQxLmNoYWluKHQyKS5zdGFydCgpOyAvLyBTdGFydCB0aGUgdHdlZW4gaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcblxyXG5cclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaXRlbS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdhdXRvLWRlc3Ryb3knLCB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gdHdlZW4gYW5kIGRlc3Ryb3lcclxuICAgICAgICB2YXIgbSA9IHRoaXMuZWwuZ2V0T2JqZWN0M0QoJ21lc2gnKTtcclxuICAgICAgICBpZiAobSkgbS5tYXRlcmlhbC5kZXB0aFRlc3QgPSBmYWxzZTtcclxuICAgICAgICBsZXQgb2xkeCA9IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhLnggfHwgMCxcclxuICAgICAgICAgICAgb2xkeSA9IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhLnkgfHwgMCxcclxuICAgICAgICAgICAgb2xkeiA9IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhLnogfHwgMCxcclxuICAgICAgICAgICAgY29vcmRzID0geyB5OiBvbGR5IH1cclxuICAgICAgICB2YXIgdHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKSAvLyBDcmVhdGUgYSBuZXcgdHdlZW4gdGhhdCBtb2RpZmllcyAnY29vcmRzJy5cclxuICAgICAgICAgICAgLnRvKHsgeTogb2xkeSAtIC4yNSB9LCA1MDApIC8vIE1vdmUgdG8gKDMwMCwgMjAwKSBpbiAxIHNlY29uZC5cclxuICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluKSAvLyBVc2UgYW4gZWFzaW5nIGZ1bmN0aW9uIHRvIG1ha2UgdGhlIGFuaW1hdGlvbiBzbW9vdGguXHJcbiAgICAgICAgICAgIC5vblVwZGF0ZSgoKSA9PiB7IC8vIENhbGxlZCBhZnRlciB0d2Vlbi5qcyB1cGRhdGVzICdjb29yZHMnLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgeyB4OiBvbGR4LCB5OiBjb29yZHMueSwgejogb2xkeiB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZWwpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LlxyXG4gICAgfVxyXG59KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXV0b2Rlc3Ryb3kuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnY2FudmFzLXRleHQnLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICB0ZXh0OiB7IHZhbHVlOiAnc3RyaW5nJyB9XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJpdG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHZhciBnID0gYml0bWFwLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgYml0bWFwLndpZHRoID0gMTAyNDtcclxuICAgICAgICBiaXRtYXAuaGVpZ2h0ID0gMTAyNDtcclxuICAgICAgICBiaXRtYXAuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcclxuICAgICAgICBnLmZvbnQgPSAnYm9sZCA0MHB4IEFyaWFsJztcclxuICAgICAgICBnLnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG4gICAgICAgIGcudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgdGhpcy5tdWx0aWxpbmUoZywgdGhpcy5kYXRhLnRleHQsIDUxMiwgNTEyKTtcclxuICAgICAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKGJpdG1hcClcclxuICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnbWF0ZXJpYWwnLCB7IHNyYzogdGV4dHVyZSwgdHJhbnNwYXJlbnQ6IHRydWUsIG9wYWNpdHk6MC44IH0pO1xyXG4gICAgfSxcclxuICAgIG11bHRpbGluZTogZnVuY3Rpb24gKGN0eCwgdGV4dCwgeCwgeSkge1xyXG4gICAgICAgIGxldCBsaCA9IGN0eC5tZWFzdXJlVGV4dChcIk1cIikud2lkdGggKiAxLjIsXHJcbiAgICAgICAgICAgIHQgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNiZTI2MzMnO1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQodFtpXSwgeCwgeSk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVRleHQodFtpXSwgeCwgeSk7XHJcbiAgICAgICAgICAgIHkgKz0gbGg7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdyaXRlOiBmdW5jdGlvbiAodGV4dCwgZG9udEZhZGUpIHtcclxuICAgICAgICB0aGlzLmRhdGEudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB2YXIgZCA9IHsgbzogMC44IH07XHJcbiAgICAgICAgaWYgKCFkb250RmFkZSkge1xyXG4gICAgICAgICAgICB0aGlzLnQgPSBuZXcgVFdFRU4uVHdlZW4oZClcclxuICAgICAgICAgICAgICAgIC50byh7IG86IDAgfSwgMjUwKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDIwMDApXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsIHsgb3BhY2l0eTogZC5vIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2FudmFzdGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==