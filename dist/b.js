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
	        const numberOfMobs = 1; //150
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
	        coords.rot = coords.rot || 0;
	
	        GM.camera.rot = rotations[Math.abs(~(a.y - b.y))][Math.abs(~(a.x - b.x))];
	
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
	            let targetCameraRotation = { x: -27, y: GM.camera.rot };
	            let currentCameraPosition = GM.camera.getAttribute('position');
	            let targetCameraPosition = { x: Math.sin(degToRad(GM.camera.rot)) * 2, z: Math.cos(degToRad(GM.camera.rot)) * 2 };
	
	
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
	                    // TODO: Tweening
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWE4NDZkYTlhNTVjNTNkNDNjMWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215U2hhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9iaWxsYm9hcmRTaGFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwZ2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9iLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1dG9kZXN0cm95LmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXN0ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxN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anMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYTg0NmRhOWE1NWM1M2Q0M2MxYiIsInJlcXVpcmUoJy4vZ2xvYmFsJyk7XHJcbnJlcXVpcmUoJy4vZGF0YScpO1xyXG5yZXF1aXJlKCcuL215U2hhZGVyJyk7XHJcbnJlcXVpcmUoJy4vYmlsbGJvYXJkU2hhZGVyJyk7XHJcbnJlcXVpcmUoJy4vbWFwJyk7XHJcbnJlcXVpcmUoJy4vZ2FtZW1hbmFnZXInKTtcclxucmVxdWlyZSgnLi9tb2InKTtcclxucmVxdWlyZSgnLi9wbGF5ZXInKTtcclxucmVxdWlyZSgnLi9pdGVtJyk7XHJcbnJlcXVpcmUoJy4vYXV0b2Rlc3Ryb3knKTtcclxucmVxdWlyZSgnLi9jYW52YXN0ZXh0Jyk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIndpbmRvdy5ybmQgPSBtID0+IH5+KE1hdGgucmFuZG9tKCkgKiBtKTtcclxud2luZG93LmRlZ1RvUmFkID0gZCA9PiBkIC8gMTgwICogTWF0aC5QSTtcclxud2luZG93LnQgPSBuZXcgVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSgnLi9sb3N0LnBuZycpO1xyXG53aW5kb3cudC5taW5GaWx0ZXIgPSB3aW5kb3cudC5tYWdGaWx0ZXIgPSAxMDAzO1xyXG53aW5kb3cucGFsID0gbmV3IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoJy4vcGFsZXR0ZXMucG5nJyk7XHJcbndpbmRvdy5wYWwubWluRmlsdGVyID0gd2luZG93LnBhbC5tYWdGaWx0ZXIgPSAxMDAzO1xyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIndpbmRvdy5EID0ge1xyXG4gICAgcGxheWVyOiB7XHJcbiAgICAgICAgdDogMSwgIC8vIHR5cGUgOiBwbGF5ZXJcclxuICAgICAgICBzOiAyLCAgLy8gc3ByaXRlOiAyICAgIFxyXG4gICAgICAgIGg6IDEwLCAvLyBzdGFydCBoZWFsdGhcclxuICAgIH0sIG1vYnM6IFt7XHJcbiAgICAgICAgaDogWzMsIDJdLCAvLyBoZWFsdGg6IGJldHdlZW4gMiBhbmQgNVxyXG4gICAgICAgIGQ6IFsxLCAxXSwgLy9kYW1hZ2UgYmV0d2VlbiAxIGFuZCAyXHJcbiAgICAgICAgaTogNiwgIC8vIGNvbG9yIGluZGV4IDhcclxuICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICBjOiA3MCAvLyBjaGFuZ2U9NzAlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGg6IFs0LCA0XSwgLy8gaGVhbHRoOiBiZXR3ZWVuIDQgYW5kIDhcclxuICAgICAgICBkOiBbMywgMl0sIC8vZGFtYWdlIGJldHdlZW4gMiBhbmQgNVxyXG4gICAgICAgIGk6IDcsIC8vIGNvbG9yIGluZGV4IDhcclxuICAgICAgICBtOiAxMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgYzogMjAgLy9jaGFuZ2UgMzAlICAgICAgICBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaDogWzYsIDZdLCAvLyBoZWFsdGg6IGJldHdlZW4gNiBhbmQgMTJcclxuICAgICAgICBkOiBbNSwgNF0sIC8vZGFtYWdlIGJldHdlZW4gNCBhbmQgOVxyXG4gICAgICAgIGk6IDksICAvLyBjb2xvciBpbmRleCA4XHJcbiAgICAgICAgbTogMzAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgIGM6IDEwIC8vIGNoYW5nZSAxMCVcclxuICAgIH1dLFxyXG4gICAgZmxvb3JzOiBbe1xyXG4gICAgICAgIHQ6IDMsIC8vIHR5cGU6IGZsb29yXHJcbiAgICAgICAgYjogMSwgLy8gYmlvbWU6IDFcclxuICAgICAgICBzOiBbMV0sXHJcbiAgICAgICAgaTogWzIsIDVdXHJcbiAgICB9XSxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0OiAxLFxyXG4gICAgICAgICAgICBuOiBcImEgaGVhcnRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIHM6IDEzLCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAtMSwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogNzAsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMiwgLy8gc3VidHlwZSA6IHN3b3JkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYW4gaXJvbiBzd29yZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgZDogMywgLy8gZGFtYWdlXHJcbiAgICAgICAgICAgIHM6IDUsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDEsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDIwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAyLCAvLyBzdWJ0eXBlIDogc3dvcmRcIixcclxuICAgICAgICAgICAgbjogXCJhIGdvbGRlbiBzd29yZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgZDogNiwgLy8gZGFtYWdlXHJcbiAgICAgICAgICAgIHM6IDUsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDIzLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06NiwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDEwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDIsIC8vIHN1YnR5cGUgOiBzd29yZFwiLFxyXG4gICAgICAgICAgICBuOiBcImEgZGlhbW9uZCBzd29yZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgZDogMTAsIC8vIGRhbWFnZVxyXG4gICAgICAgICAgICBzOiA1LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAyNCwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAxMiwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDIsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMywgLy8gc3VidHlwZSA6IHNoaWVsZFwiLFxyXG4gICAgICAgICAgICBuOiBcImFuIGlyb24gc2hpZWxkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBiOiA0MCwgLy8gYmxvY2sgdmFsdWUgNDAlXHJcbiAgICAgICAgICAgIHM6IDQsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDAsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDIwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDMsIC8vIHN1YnR5cGUgOiBzaGllbGRcIixcclxuICAgICAgICAgICAgbjogXCJhIGdvbGRlbiBzaGllbGRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGI6IDcwLCAvLyBibG9jayB2YWx1ZSA3MCVcclxuICAgICAgICAgICAgczogNCwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMjMsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogNiwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDEwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDMsIC8vIHN1YnR5cGUgOiBzaGllbGRcIixcclxuICAgICAgICAgICAgbjogXCJhIGRpYW1vbmQgc2hpZWxkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBiOiA4NSwgLy8gYmxvY2sgdmFsdWUgODUlXHJcbiAgICAgICAgICAgIHM6IDQsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDI0LCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDEyLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogNSwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfV0sXHJcbiAgICBvYmpzOiBbeyAvL29iamVjdGl2ZXNcclxuICAgICAgICB0OiA4LCAvLyBpdGVtIHR5cGUgPSA4XHJcbiAgICAgICAgcDogMSwgLy8gcGllY2UgPTFcclxuICAgICAgICBuOiBcInlvdXIgcGxhbmUncyBjYWJpblwiLFxyXG4gICAgICAgIHM6IDZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDIsXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgbGVmdCB3aW5nXCIsXHJcbiAgICAgICAgczogN1xyXG4gICAgfSx7XHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDMsXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgYm9keVwiLFxyXG4gICAgICAgIHM6IDhcclxuICAgIH0se1xyXG4gICAgICAgIHQ6IDgsIC8vIGl0ZW0gdHlwZSA9IDhcclxuICAgICAgICBwOiA0LFxyXG4gICAgICAgIG46IFwieW91ciBwbGFuZSdzIHJpZ2h0IHdpbmdcIixcclxuICAgICAgICBzOiA5XHJcbiAgICB9LHtcclxuICAgICAgICB0OiA4LCAvLyBpdGVtIHR5cGUgPSA4XHJcbiAgICAgICAgcDogNSxcclxuICAgICAgICBuOiBcInlvdXIgcGxhbmUncyB0aHJ1c3RlclwiLFxyXG4gICAgICAgIHM6IDEwXHJcbiAgICB9XVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWwgVEhSRUUsIEFGUkFNRSAqL1xyXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ215dGV4dHVyZScsIHtcclxuICBzY2hlbWE6IHtcclxuICAgIGNvbG9yOlxyXG4gICAge1xyXG4gICAgICB0eXBlOiAnY29sb3InXHJcbiAgICB9LFxyXG4gICAgaW5kZXg6IHsgdHlwZTogJ2ludCcgfSxcclxuICAgIGxvb2t1cDogeyB0eXBlOiAnaW50JywgZGVmYXVsdDogMCB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsIHVzaW5nIHRoZSB0d28gc2hhZGVycyBkZWZpbmVkXHJcbiAgICogaW4gdmVydGV4Lmdsc2wgYW5kIGZyYWdtZW50Lmdsc2wuXHJcbiAgICovXHJcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgIHZhciBmcmFnbWVudFNoYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFnbWVudCcpLnRleHRDb250ZW50O1xyXG4gICAgdmFyIHZlcnRleFNoYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJ0ZXgnKS50ZXh0Q29udGVudDtcclxuXHJcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICB0aW1lOiB7IHZhbHVlOiAwLjAgfSxcclxuICAgICAgICBpbmRleDogeyB2YWx1ZTogdGhpcy5kYXRhLmluZGV4IH0sXHJcbiAgICAgICAgRGlmZnVzZVRleHR1cmU6IHsgdmFsdWU6IHdpbmRvdy50IH0sXHJcbiAgICAgICAgTG9va3VwOiB7IHZhbHVlOiB3aW5kb3cucGFsIH0sXHJcbiAgICAgICAgY29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcihkYXRhLmNvbG9yKSB9LFxyXG4gICAgICAgIHNwcml0ZURpbWVuc2lvbnM6IHsgdmFsdWU6IHsgeDogMTYuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICByZXBlYXQ6IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIGZvZ1N0YXJ0OiB7IHZhbHVlOiA1IH0sXHJcbiAgICAgICAgZm9nRW5kOiB7IHZhbHVlOiAxNSB9LFxyXG4gICAgICAgIGxvb2t1cEluZGV4Ont2YWx1ZTpkYXRhLmxvb2t1cH0sXHJcbiAgICAgICAgZm9nQ29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigwLCAwLCAwKSB9LFxyXG4gICAgICAgIHRpbnQ6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigyNTUsIDI1NSwgMjU1KSB9LFxyXG4gICAgICAgIHRpbnRBbW91bnQ6IHsgdmFsdWU6IDAgfVxyXG4gICAgICB9LFxyXG4gICAgICB2ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgIGZyYWdtZW50U2hhZGVyXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYXBwbHlUb01lc2goKTtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kZWwtbG9hZGVkJywgKCkgPT4gdGhpcy5hcHBseVRvTWVzaCgpKTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgU2hhZGVyTWF0ZXJpYWwgd2hlbiBjb21wb25lbnQgZGF0YSBjaGFuZ2VzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5pbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5pbmRleDtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMubG9va3VwSW5kZXgudmFsdWU9dGhpcy5kYXRhLmxvb2t1cDtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IHRoZSBtYXRlcmlhbCB0byB0aGUgY3VycmVudCBlbnRpdHkuXHJcbiAgICovXHJcbiAgYXBwbHlUb01lc2g6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG1lc2ggPSB0aGlzLmVsLmdldE9iamVjdDNEKCdtZXNoJyk7XHJcbiAgICBpZiAobWVzaCkge1xyXG4gICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlcGVhdC52YWx1ZS54ID0gK3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikgfHwgMTtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueSA9ICt0aGlzLmVsLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKSB8fCAxO1xyXG4gICAgICBtZXNoLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuICAgIH1cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIE9uIGVhY2ggZnJhbWUsIHVwZGF0ZSB0aGUgJ3RpbWUnIHVuaWZvcm0gaW4gdGhlIHNoYWRlcnMuXHJcbiAgICovXHJcbiAgLy8gdGljazogZnVuY3Rpb24gKHQpIHtcclxuICAvLyAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudGltZS52YWx1ZSA9IHQgLyAxMDAwOyBcclxuICAvLyB9XHJcbn0pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbXlTaGFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFsIFRIUkVFLCBBRlJBTUUgKi9cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdiaWxsYm9hcmQtdGV4dHVyZScsIHtcclxuICBzY2hlbWE6IHtcclxuICAgIGluZGV4Ont0eXBlOidpbnQnfSxcclxuICAgIGxvb2t1cDogeyB0eXBlOiAnaW50JywgZGVmYXVsdDogLTEgfVxyXG4gIH0sXHJcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTsgICAgXHJcbiAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhZ21lbnQnKS50ZXh0Q29udGVudDtcclxuICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVydGV4LWJpbGxib2FyZCcpLnRleHRDb250ZW50O1xyXG4gICAgXHJcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICB0aW1lOiB7IHZhbHVlOiAwLjAgfSxcclxuICAgICAgICBpbmRleDogeyB2YWx1ZTogdGhpcy5kYXRhLmluZGV4IH0sXHJcbiAgICAgICAgRGlmZnVzZVRleHR1cmU6IHsgdmFsdWU6IHdpbmRvdy50fSxcclxuICAgICAgICBjb2xvcjogeyB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKGRhdGEuY29sb3IpIH0sXHJcbiAgICAgICAgc3ByaXRlRGltZW5zaW9uczogeyB2YWx1ZTogeyB4OiAxNi4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIHJlcGVhdDogeyB2YWx1ZTogeyB4OiAxLjAsIHk6IDEuMCB9IH0sXHJcbiAgICAgICAgTG9va3VwOiB7IHZhbHVlOiB3aW5kb3cucGFsIH0sICAgIFxyXG4gICAgICAgIGxvb2t1cEluZGV4Ont2YWx1ZTpkYXRhLmxvb2t1cH0sXHJcbiAgICAgICAgZm9nU3RhcnQ6e3ZhbHVlOjV9LFxyXG4gICAgICAgIGZvZ0VuZDp7dmFsdWU6MTV9LFxyXG4gICAgICAgIGFscGhhdGVzdDp7dmFsdWU6MC45NX0sXHJcbiAgICAgICAgZm9nQ29sb3I6e3ZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMCwwLDApfVxyXG4gICAgICB9LFxyXG4gICAgICB2ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgIGZyYWdtZW50U2hhZGVyXHJcbiAgICB9KTtcclxuICAgIHRoaXMubWF0ZXJpYWwuYmxlbmRpbmcgPSBUSFJFRS5NdWx0aXBseUJsZW5kaW5nO1xyXG4gICAgdGhpcy5hcHBseVRvTWVzaCgpO1xyXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb2RlbC1sb2FkZWQnLCAoKSA9PiB0aGlzLmFwcGx5VG9NZXNoKCkpO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRoZSBTaGFkZXJNYXRlcmlhbCB3aGVuIGNvbXBvbmVudCBkYXRhIGNoYW5nZXMuXHJcbiAgICovXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLmluZGV4LnZhbHVlID0gdGhpcy5kYXRhLmluZGV4O1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5sb29rdXBJbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5sb29rdXA7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBBcHBseSB0aGUgbWF0ZXJpYWwgdG8gdGhlIGN1cnJlbnQgZW50aXR5LlxyXG4gICAqL1xyXG4gIGFwcGx5VG9NZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZXNoID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgaWYgKG1lc2gpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueCA9K3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwid2lkdGhcIil8fDE7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnkgPSt0aGlzLmVsLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKXx8MTtcclxuICAgICAgbWVzaC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBPbiBlYWNoIGZyYW1lLCB1cGRhdGUgdGhlICd0aW1lJyB1bmlmb3JtIGluIHRoZSBzaGFkZXJzLlxyXG4gICAqL1xyXG4gIC8vIHRpY2s6IGZ1bmN0aW9uICh0KSB7XHJcbiAgLy8gICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0IC8gMTAwMDsgXHJcbiAgLy8gfVxyXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JpbGxib2FyZFNoYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtYXBHZW4gPSByZXF1aXJlKFwiLi9tYXBnZW5cIik7XHJcblxyXG53aW5kb3cuc2l6ZSA9IDEyODtcclxuY29uc3QgZGVwdGggPSA3O1xyXG5cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdtYXAnLCB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tYXBDb250ZXh0ID0gbWFwR2VuLmdvKHNpemUsIGRlcHRoKTtcclxuICAgICAgICBsZXQgd29ybGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIik7XHJcbiAgICAgICAgbGV0IHdvcmxkRGF0YSA9IHRoaXMubWFwQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgc2l6ZSwgc2l6ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB3ZHAgPSAoaSArIHNpemUgKiBqKSAqIDQ7XHJcbiAgICAgICAgICAgICAgICBpZiAod29ybGREYXRhLmRhdGFbd2RwXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuY2xhc3NMaXN0LmFkZChcImZsb29yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdID09IDEwMikgcGxhbmUuc2V0QXR0cmlidXRlKFwibXl0ZXh0dXJlXCIsIFwiaW5kZXg6MTE7bG9va3VwOjhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod29ybGREYXRhLmRhdGFbd2RwXSA9PSAxNzApIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjEyO2xvb2t1cDoxMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdID09IDIzOCkgcGxhbmUuc2V0QXR0cmlidXRlKFwibXl0ZXh0dXJlXCIsIFwiaW5kZXg6MTI7bG9va3VwOjlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjA7bG9va3VwOlwiICsgfn4oKGkgKiA1KSAvIChqICogMikgKiAzKSAlIDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGkgLSAoc2l6ZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gaiAtIChzaXplIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJtb3VzZWVudGVyOlwiLGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3JjRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgeyB4OiAuOTYsIHk6IC45NiB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdXNlbGVhdmU6XCIsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUuc3JjRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NjYWxlJywgeyB4OiAxLCB5OiAxIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoR00uZGF0YS5zdGF0ZSA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdNLnBsYXllci5jb21wb25lbnRzLnBsYXllci5tb3ZlKHsgeCwgeSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJjdXJzb3ItbGlzdGVuZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3h9IDAgJHt5fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAndm94ZWwnKTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC5hcHBlbmRDaGlsZChwbGFuZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQod29ybGQpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5hZGRPYmpzKCkpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5hZGRJdGVtcygpKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuYWRkTW9icygpKTtcclxuICAgIH0sXHJcbiAgICBnZXRQaXg6IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwQ29udGV4dC5nZXRJbWFnZURhdGEoeCwgeSwgMSwgMSk7XHJcbiAgICB9LFxyXG4gICAgcHV0UGl4OiBmdW5jdGlvbiAoYywgeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcENvbnRleHQucHV0SW1hZ2VEYXRhKGMsIHgsIHkpO1xyXG4gICAgfSxcclxuICAgIHJhbmRvbVBsYWNlOiBmdW5jdGlvbiAobWluRGlzdGFuY2UgPSAwKSB7XHJcbiAgICAgICAgbGV0IHgsIHksIGM7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB4ID0gd2luZG93LnJuZChzaXplKTtcclxuICAgICAgICAgICAgeSA9IHdpbmRvdy5ybmQoc2l6ZSk7XHJcbiAgICAgICAgICAgIGMgPSB0aGlzLmdldFBpeCh4LCB5KTtcclxuICAgICAgICB9IHdoaWxlIChjLmRhdGEuZXZlcnkocCA9PiBwID09IDApKTtcclxuICAgICAgICByZXR1cm4geyB4LCB5LCBjIH07XHJcbiAgICB9LFxyXG4gICAgZ2V0V2VpZ2h0ZWQ6IGZ1bmN0aW9uIChsaXN0KSB7XHJcbiAgICAgICAgbGV0IGYgPSBmYWxzZSwgaXRlbTtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBsaXN0W3JuZChsaXN0Lmxlbmd0aCldO1xyXG4gICAgICAgICAgICBmID0gcm5kKDEwMCkgPCBpdGVtLmM7XHJcbiAgICAgICAgfSB3aGlsZSAoIWYpXHJcbiAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICB9LFxyXG4gICAgYWRkSXRlbXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKSwgdHgsIHR5LCBwLCBpdGVtO1xyXG5cclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcCA9IHRoaXMucmFuZG9tUGxhY2UoKTtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0aGlzLmdldFdlaWdodGVkKEQuaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5tYXAgPSBwO1xyXG5cclxuICAgICAgICAgICAgICAgIGQgPSAobmV3IFRIUkVFLlZlY3RvcjIoMCwgMCkpLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjIocC54LCBwLnkpKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoaXRlbS5tID49IGQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHAuYy5kYXRhWzFdICE9IDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBwLmMuZGF0YVsxXSA9IDB4NDE7XHJcbiAgICAgICAgICAgIHRoaXMucHV0UGl4KHAuYywgcC54LCBwLnkpO1xyXG5cclxuICAgICAgICAgICAgdHggPSBwLnggLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgdHkgPSBwLnkgLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgdmFyIGQgPSAobmV3IFRIUkVFLlZlY3RvcjIoMCwgMCkpLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjIodHgsIHR5KSk7XHJcblxyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZShcImJpbGxib2FyZC10ZXh0dXJlXCIsIHsgaW5kZXg6IDMgfSk7Ly8geyBpbmRleDogaXRlbS5zLCBsb29rdXA6IGl0ZW0uaSB9KTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7dHh9IC4yNSAke3R5fWApO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAnc3ByJyk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdpdGVtJywgeyB4OiBwLngsIHk6IHAueSwgcHJvcHM6IGl0ZW0gfSk7XHJcbiAgICAgICAgICAgIGIuaWQgPSBgYiR7cC54fS0ke3AueX1gO1xyXG4gICAgICAgICAgICBiLmRhdGEgPSBpdGVtO1xyXG4gICAgICAgICAgICBpdGVtcy5hcHBlbmRDaGlsZChiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSxcclxuICAgIGFkZE1vYnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCBudW1iZXJPZk1vYnMgPSAxOyAvLzE1MFxyXG4gICAgICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mTW9iczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpLCB0eCwgdHk7XHJcbiAgICAgICAgICAgIGxldCBtb2IgPSB0aGlzLmdldFdlaWdodGVkKEQubW9icyksIHAsIGQ7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHAgPSB0aGlzLnJhbmRvbVBsYWNlKCk7XHJcbiAgICAgICAgICAgICAgICB0eCA9IHAueCAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgdHkgPSBwLnkgLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgICAgIGQgPSAobmV3IFRIUkVFLlZlY3RvcjIoMCwgMCkpLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjIodHgsIHR5KSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKG1vYi5tID49IGQpO1xyXG4gICAgICAgICAgICBwLmMuZGF0YVsyXSA9IDB4ODg7XHJcbiAgICAgICAgICAgIHRoaXMucHV0UGl4KHAuYywgcC54LCBwLnkpO1xyXG5cclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtdGV4dHVyZVwiLCB7IGluZGV4OiAyLCBsb29rdXA6IG1vYi5pIH0pO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0eH0gLjI1ICR7dHl9YCk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21vYicsIHtcclxuICAgICAgICAgICAgICAgIHg6IHAueCwgeTogcC55LFxyXG4gICAgICAgICAgICAgICAgaGVhbHRoOiBybmQobW9iLmhbMV0pICsgbW9iLmhbMF0sXHJcbiAgICAgICAgICAgICAgICBkYW1hZ2U6IHJuZChtb2IuZFsxXSkgKyBtb2IuZFswXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYi5pZCA9IGBlJHtwLnh9LSR7cC55fWA7XHJcbiAgICAgICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9LFxyXG4gICAgYWRkT2JqczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBvYmpzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpLCB0eCwgdHksIHAsIGQ7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHAgPSB0aGlzLnJhbmRvbVBsYWNlKCk7XHJcbiAgICAgICAgICAgICAgICB0eCA9IHAueCAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgdHkgPSBwLnkgLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgICAgIGQgPSAobmV3IFRIUkVFLlZlY3RvcjIoMCwgMCkpLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjIodHgsIHR5KSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKDI1ID49IGQpOyBcclxuXHJcbiAgICAgICAgICAgIHAuYy5kYXRhWzFdID0gMHhFRTtcclxuICAgICAgICAgICAgdGhpcy5wdXRQaXgocC5jLCBwLngsIHAueSk7XHJcblxyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZShcImJpbGxib2FyZC10ZXh0dXJlXCIsIHsgaW5kZXg6IEQub2Jqc1tpXS5zIH0pO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0eH0gLjI1ICR7dHl9YCk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ2l0ZW0nLCB7IHg6IHAueCwgeTogcC55LCBwcm9wczogRC5vYmpzW2ldIH0pO1xyXG4gICAgICAgICAgICBiLmlkID0gYGIke3AueH0tJHtwLnl9YDtcclxuICAgICAgICAgICAgb2Jqcy5hcHBlbmRDaGlsZChiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdjdXJzb3ItbGlzdGVuZXInLCB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBsYXN0SW5kZXggPSAtMTtcclxuICAgICAgdmFyIENPTE9SUyA9IFsncmVkJywgJ2dyZWVuJywgJ2JsdWUnXTtcclxuICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBsYXN0SW5kZXggPSAobGFzdEluZGV4ICsgMSkgJSBDT0xPUlMubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsICdjb2xvcicsIENPTE9SU1tsYXN0SW5kZXhdKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnSSB3YXMgY2xpY2tlZCBhdDogJywgZXZ0LmRldGFpbC5pbnRlcnNlY3Rpb24ucG9pbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbnZhciBnZW5lcmF0b3IgPSB7XHJcbiAgICBnbzogKG1hcFdpZHRoLCBkZXB0aCkgPT4ge1xyXG4gICAgICAgIHZhciBwaWVjZXMgPSBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAyLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMCwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDIsIDAsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAyLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAwLCAxLCAxXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAyLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMiwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMCwgMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAyLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIHZhciBtYXBXaWR0aCA9IDI1NjtcclxuXHJcbiAgICAgICAgbGV0IHBsID0gcGllY2VzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lID0gcGllY2VzW2ldLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2xvbmUubGVuZ3RoOyBqKyspXHJcbiAgICAgICAgICAgICAgICBjbG9uZVtqXSA9IGNsb25lW2pdLnNsaWNlKCkucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBwaWVjZXMucHVzaChjbG9uZSk7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZTIgPSBwaWVjZXNbaV0uc2xpY2UoKTtcclxuICAgICAgICAgICAgY2xvbmUyID0gY2xvbmUyLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgcGllY2VzLnB1c2goY2xvbmUyKTtcclxuICAgICAgICAgICAgbGV0IGNsb25lMyA9IGNsb25lLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGNsb25lMyA9IGNsb25lMy5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHBpZWNlcy5wdXNoKGNsb25lMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGllY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBpZWNlc1tpXS5zaXplID0geyB3OiBwaWVjZXNbaV1bMF0ubGVuZ3RoLCBoOiBwaWVjZXNbaV0ubGVuZ3RoIH07XHJcbiAgICAgICAgICAgIHBpZWNlc1tpXS5leGl0cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBpZWNlc1tpXS5zaXplLmg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBwaWVjZXNbaV0uc2l6ZS53OyBoKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGllY2VzW2ldW2pdW2hdID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlc1tpXS5leGl0cy5wdXNoKHsgeDogaCwgeTogaiB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBtYXBDYW52YXMud2lkdGggPSBtYXBXaWR0aDtcclxuICAgICAgICBtYXBDYW52YXMuaGVpZ2h0ID0gbWFwV2lkdGg7XHJcblxyXG4gICAgICAgIC8vIFRlbXAgZHVyaW5nIGRldmVsb3BtZW50XHJcbiAgICAgICAgbWFwQ2FudmFzLnN0eWxlLndpZHRoID0gJzEwMjRweCc7XHJcbiAgICAgICAgbWFwQ2FudmFzLnN0eWxlLmhlaWdodCA9ICcxMDI0cHgnO1xyXG4gICAgICAgIG1hcENhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFwQ2FudmFzKTtcclxuICAgICAgICAvLyBFTkRcclxuXHJcbiAgICAgICAgdmFyIG1hcENvbnRleHQgPSBtYXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAwKVwiO1xyXG4gICAgICAgIG1hcENvbnRleHQuZmlsbFJlY3QoMCwgMCwgbWFwV2lkdGgsIG1hcFdpZHRoKTtcclxuXHJcbiAgICAgICAgbGV0IGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICB2YXIgYWRkUm9vbSA9IChleGl0LCBzcGVjaWFsKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwaWVjZTtcclxuICAgICAgICAgICAgbGV0IGV4aXRzID0gW107XHJcbiAgICAgICAgICAgIGxldCBjbGVhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WDtcclxuICAgICAgICAgICAgbGV0IHRhcmdldFk7XHJcbiAgICAgICAgICAgIGxldCB0cmllcyA9IDI1O1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBwaWVjZSA9IHBpZWNlc1tybmQocGllY2VzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcSA9IDA7IHEgPCBwaWVjZS5leGl0cy5sZW5ndGg7IHErKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggPSBleGl0LnggLSBwaWVjZS5leGl0c1txXS54O1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFkgPSBleGl0LnkgLSBwaWVjZS5leGl0c1txXS55O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWdEYXRhID0gbWFwQ29udGV4dC5nZXRJbWFnZURhdGEodGFyZ2V0WCwgdGFyZ2V0WSwgcGllY2Uuc2l6ZS53LCBwaWVjZS5zaXplLmgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyID0gaW1nRGF0YS5kYXRhLmV2ZXJ5KGQgPT4gZCA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRyaWVzLS07XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRyaWVzID4gMCAmJiAhY2xlYXIpO1xyXG4gICAgICAgICAgICBpZiAoIWNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICBwaWVjZSA9IFtbMV1dO1xyXG4gICAgICAgICAgICAgICAgcGllY2UuZXhpdHMgPSBbe31dO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WCA9IGV4aXQueDtcclxuICAgICAgICAgICAgICAgIHRhcmdldFkgPSBleGl0Lnk7XHJcbiAgICAgICAgICAgICAgICBxID0gMDtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9ICFmaXJzdCA/IFwiIzQwMFwiIDogXCIjNjAwXCI7XHJcbiAgICAgICAgICAgIGlmICghZmlyc3QpIG1hcENvbnRleHQuZmlsbFJlY3QodGFyZ2V0WCArIHBpZWNlLmV4aXRzW3FdLnggfHwgMCwgdGFyZ2V0WSArIHBpZWNlLmV4aXRzW3FdLnkgfHwgMCwgMSwgMSk7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoc3BlY2lhbCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSBcIiNFMDBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BlY2lhbCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSBcIiNBMDBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwaWVjZS5mb3JFYWNoKChpLCBweSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaS5mb3JFYWNoKChqLCBweCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFJlY3QodGFyZ2V0WCArIHB4LCB0YXJnZXRZICsgcHksIDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0cy5wdXNoKHsgeDogdGFyZ2V0WCArIHB4LCB5OiB0YXJnZXRZICsgcHkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBleGl0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvb3BzID0gZGVwdGg7XHJcbiAgICAgICAgbGV0IGV4aXRzID0gW3sgeDogbWFwV2lkdGggLyAyLCB5OiBtYXBXaWR0aCAvIDIgfV07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb29wczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdFeGl0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgc3BlY2lhbDtcclxuICAgICAgICAgICAgZXhpdHMuZm9yRWFjaCgoZXhpdCwgaW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBsb29wcyAtIDEgJiYgaW5kID09IGV4aXRzLmxlbmd0aCAtIH5+KGV4aXRzLmxlbmd0aCAvIDMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY2lhbCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBsb29wcyAtIDEgJiYgaW5kID09IH5+KGV4aXRzLmxlbmd0aCAvIDMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY2lhbCA9IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcSA9IGFkZFJvb20oZXhpdCwgc3BlY2lhbCk7XHJcbiAgICAgICAgICAgICAgICBuZXdFeGl0cyA9IG5ld0V4aXRzLmNvbmNhdChxKTtcclxuICAgICAgICAgICAgICAgIHNwZWNpYWwgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZXhpdHMgPSBuZXdFeGl0cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYXBDb250ZXh0O1xyXG4gICAgfVxyXG5cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRvcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYXBnZW4uanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdnYW1lbWFuYWdlcicsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIHN0YXRlOiB7IHZhbHVlOiAnaW50JywgZGVmYXVsdDogMCB9XHJcbiAgICAgICAgLy8gMCA9PSBwbGF5ZXJcclxuICAgICAgICAvLyAxID09IGVuZW15XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcicpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYScpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmRlbHRhUm90ID0gMDtcclxuICAgICAgICB0aGlzLm1hcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBnZW8nKS5jb21wb25lbnRzLm1hcDtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbY2FudmFzLXRleHRdJykuY29tcG9uZW50c1snY2FudmFzLXRleHQnXTtcclxuICAgICAgICB0aGlzLmN1cnNvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tjdXJzb3JdJyk7ICAgICAgICBcclxuICAgICAgICB3aW5kb3cuR00gPSB0aGlzO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLnN0YXRlID4gMSkgcmV0dXJuO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kYXRhLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbXBvbmVudHMucGxheWVyLm1vdmUoZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3Iuc2V0QXR0cmlidXRlKCdjdXJzb3InLCB7IGZ1c2U6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbW9iXScpO1xyXG4gICAgICAgICAgICAgICAgbW9icy5mb3JFYWNoKGQgPT4gZC5jb21wb25lbnRzLm1vYi5tb3ZlKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJzb3Iuc2V0QXR0cmlidXRlKCdjdXJzb3InLCB7IGZ1c2U6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnN0YXRlID0gMDtcclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2FtZW1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdtb2InLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICB4OiB7IHZhbHVlOiAnZmxvYXQnIH0sXHJcbiAgICAgICAgeTogeyB2YWx1ZTogJ2Zsb2F0JyB9LFxyXG4gICAgICAgIGhlYWx0aDogeyB2YWx1ZTogJ2ludCcgfSxcclxuICAgICAgICBkYW1hZ2U6IHsgdmFsdWU6ICdpbnQnIH1cclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb247XHJcbiAgICB9LFxyXG4gICAgbW92ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEEqIHdvdWxkIGJlIG5pY2UuLi4gZm9yIG5vdywganVzdCBtb3ZlIHJhbmRvbS4uLlxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuaGVhbHRoIDw9IDApIHJldHVybjtcclxuICAgICAgICBsZXQgdHgsIHR5LCBjLCBzID0gdGhpcyxcclxuICAgICAgICAgICAgcGxheWVyUG9zaXRpb24gPSBHTS5wbGF5ZXIuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhO1xyXG4gICAgICAgIHZhciBhID0gbmV3IFRIUkVFLlZlY3RvcjMocGxheWVyUG9zaXRpb24ueCwgcGxheWVyUG9zaXRpb24ueiwgMCk7ICAgICAgICAgICAgICAgICAgICAgIC8vIDAsMFxyXG4gICAgICAgIHZhciBiID0gbmV3IFRIUkVFLlZlY3RvcjModGhpcy5wb3MuZGF0YS54LCB0aGlzLnBvcy5kYXRhLnosIDApO1xyXG4gICAgICAgIGlmIChhLmRpc3RhbmNlVG8oYikgPCAxLjkpIHsvLyBwbGF5ZXIgaXMgbmV4dCB0byB0aGUgbW9iIGF0dGFja1xyXG4gICAgICAgICAgICB0eCA9IGEueCAtIGIueDtcclxuICAgICAgICAgICAgdHkgPSBhLnkgLSBiLnk7XHJcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSB7IHg6IHMucG9zLmRhdGEueCwgejogcy5wb3MuZGF0YS56IH07XHJcbiAgICAgICAgICAgIHZhciB0d2VlbiA9IG5ldyBUV0VFTi5Ud2Vlbihjb29yZHMpIC8vIENyZWF0ZSBhIG5ldyB0d2VlbiB0aGF0IG1vZGlmaWVzICdjb29yZHMnLlxyXG4gICAgICAgICAgICAgICAgLnRvKHsgeDogcy5wb3MuZGF0YS54ICsgdHgsIHo6IHMucG9zLmRhdGEueiArIHR5IH0sIDUwMCkgLy8gTW92ZSB0byAoMzAwLCAyMDApIGluIDEgc2Vjb25kLlxyXG4gICAgICAgICAgICAgICAgLnlveW8odHJ1ZSkucmVwZWF0KDEpXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuSW5PdXQpIC8vIFVzZSBhbiBlYXNpbmcgZnVuY3Rpb24gdG8gbWFrZSB0aGUgYW5pbWF0aW9uIHNtb290aC5cclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7IC8vIENhbGxlZCBhZnRlciB0d2Vlbi5qcyB1cGRhdGVzICdjb29yZHMnLlxyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke2Nvb3Jkcy54fSAuMjUgJHtjb29yZHMuen1gKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAub25Db21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9zaG93IHNwbGF0XHJcbiAgICAgICAgICAgICAgICAgICAgR00ucGxheWVyLmNvbXBvbmVudHMucGxheWVyLmhpdCh0aGlzLmRhdGEuZGFtYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LiAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyAvL21vdmVcclxuICAgICAgICAgICAgbGV0IHRyaWVzID0gMTA7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHR4ID0gcm5kKDMpIC0gMTtcclxuICAgICAgICAgICAgICAgIHR5ID0gcm5kKDMpIC0gMTtcclxuICAgICAgICAgICAgICAgIGMgPSBHTS5tYXAuZ2V0UGl4KHMuZGF0YS54ICsgdHgsIHMuZGF0YS55ICsgdHkpO1xyXG4gICAgICAgICAgICAgICAgdHJpZXMtLTtcclxuICAgICAgICAgICAgICAgIGlmKHRyaWVzID09PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGMuZGF0YVswXSA9PT0gMCB8fCBjLmRhdGFbMl0gIT09IDApXHJcblxyXG4gICAgICAgICAgICBsZXQgb2xkID0gR00ubWFwLmdldFBpeChzLmRhdGEueCwgcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICBvbGQuZGF0YVsyXSA9IDA7XHJcbiAgICAgICAgICAgIEdNLm1hcC5wdXRQaXgob2xkLCBzLmRhdGEueCwgcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICBjLmRhdGFbMl0gPSAweDg4O1xyXG4gICAgICAgICAgICBzLmRhdGEueCArPSB0eDtcclxuICAgICAgICAgICAgcy5kYXRhLnkgKz0gdHk7XHJcbiAgICAgICAgICAgIEdNLm1hcC5wdXRQaXgoYywgcy5kYXRhLngsIHMuZGF0YS55KTtcclxuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHsgeDogcy5wb3MuZGF0YS54LCB6OiBzLnBvcy5kYXRhLnogfTtcclxuICAgICAgICAgICAgdmFyIHR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcylcclxuICAgICAgICAgICAgICAgIC50byh7IHg6IHMucG9zLmRhdGEueCArIHR4LCB6OiBzLnBvcy5kYXRhLnogKyB0eSB9LCA0MDAgKyBybmQoNDAwKSlcclxuICAgICAgICAgICAgICAgIC5kZWxheShybmQoMjUwKSlcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5Jbk91dClcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7Y29vcmRzLnh9IC4yNSAke2Nvb3Jkcy56fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuaWQgPSBgZSR7Y29vcmRzLnggKyBzaXplIC8gMn0tJHtjb29yZHMueiArIHNpemUgLyAyfWA7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpdDogZnVuY3Rpb24gKGFtb3VudCkge1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEuaGVhbHRoIC09IGFtb3VudDtcclxuICAgICAgICBsZXQgZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcclxuICAgICAgICBlbnQuc2V0QXR0cmlidXRlKCdiaWxsYm9hcmQtdGV4dHVyZScsIHsgaW5kZXg6IDE0LCBsb29rdXA6IDEyIH0pO1xyXG4gICAgICAgIGVudC5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3NwcicpO1xyXG4gICAgICAgIGVudC5zZXRBdHRyaWJ1dGUoJ2F1dG8tZGVzdHJveScsICcnKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVudCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVsLmlkID0gJyc7XHJcbiAgICAgICAgICAgIGxldCBwaXggPSBHTS5tYXAuZ2V0UGl4KHRoaXMuZGF0YS54LCB0aGlzLmRhdGEueSk7XHJcbiAgICAgICAgICAgIHBpeC5kYXRhWzJdID0gMDtcclxuICAgICAgICAgICAgR00ubWFwLnB1dFBpeChwaXgsIHRoaXMuZGF0YS54LCB0aGlzLmRhdGEueSk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ2F1dG8tZGVzdHJveScsICcnKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vYi5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKmdsb2JhbCBBRlJBTUUsIEdNLCBUSFJFRSwgc2l6ZSwgVFdFRU4sIHJuZCovXHJcblxyXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ3BsYXllcicsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIGhlYWx0aDogeyB2YWx1ZTogJ2ludCcsIGRlZmF1bHQ6IDI1IH1cclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5mb3VuZFBpZWNlcyA9IDA7XHJcbiAgICAgICAgdGhpcy5hdHRhY2sgPSAxO1xyXG4gICAgICAgIHRoaXMuZGVmZW5zZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGxheWVyLXNwcml0ZScpO1xyXG4gICAgfSxcclxuICAgIG1vdmU6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgbGV0IHJvdGF0aW9ucyA9IFtbNDUsIDAsIDMxNV0sIFs5MCwgMCwgMjcwXSwgWzEzNSwgMTgwLCAyMjVdXTtcclxuICAgICAgICB2YXIgcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKEdNLmRhdGEuc3RhdGUgIT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBjb29yZHMgPSBzLmVsLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YTtcclxuICAgICAgICB2YXIgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKGRhdGEueCwgZGF0YS55LCAwKTsgICAgICAgICAgICAgICAgICAgICAgLy8gMCwwXHJcbiAgICAgICAgdmFyIGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhjb29yZHMueCwgY29vcmRzLnosIDApOyAgICAgICAgICAgICAgICAgIC8vIDEsMFxyXG4gICAgICAgIGNvb3Jkcy5yb3QgPSBjb29yZHMucm90IHx8IDA7XHJcblxyXG4gICAgICAgIEdNLmNhbWVyYS5yb3QgPSByb3RhdGlvbnNbTWF0aC5hYnMofihhLnkgLSBiLnkpKV1bTWF0aC5hYnMofihhLnggLSBiLngpKV07XHJcblxyXG4gICAgICAgIGlmIChhLmRpc3RhbmNlVG8oYikgPiAxLjkgfHwgYS5kaXN0YW5jZVRvKGIpIDwgLjIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgYyA9IEdNLm1hcC5nZXRQaXgoZGF0YS54ICsgc2l6ZSAvIDIsIGRhdGEueSArIHNpemUgLyAyKTtcclxuICAgICAgICBpZiAoYy5kYXRhWzJdID4gMCkgeyAvLyBtb2IgaW4gbmV4dCBwb3NpdGlvblxyXG4gICAgICAgICAgICAvLyBjb2RlIGZvciBhdHRhY2tpbmcgdGhlIG1vYi5cclxuICAgICAgICAgICAgbGV0IG1vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNlJHtkYXRhLnggKyBzaXplIC8gMn0tJHtkYXRhLnkgKyBzaXplIC8gMn1gKS5jb21wb25lbnRzLm1vYjtcclxuICAgICAgICAgICAgbGV0IHNwcmNvb3JkID0geyB4OiAwLCB6OiAwIH07XHJcbiAgICAgICAgICAgIG5ldyBUV0VFTi5Ud2VlbihzcHJjb29yZClcclxuICAgICAgICAgICAgICAgIC50byh7IHg6IGEueCAtIGIueCwgejogYS55IC0gYi55IH0sIDUwMClcclxuICAgICAgICAgICAgICAgIC55b3lvKHRydWUpXHJcbiAgICAgICAgICAgICAgICAucmVwZWF0KDEpXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuSW5PdXQpXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHtzcHJjb29yZC54fSAwICR7c3ByY29vcmQuen1gKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAub25Db21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9iLmhpdCh0aGlzLmF0dGFjayArIHJuZCgyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChHTS5kYXRhLnN0YXRlID4gMikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHTS5kYXRhLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgR00udXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7IC8vIFN0YXJ0IHRoZSB0d2VlbiBpbW1lZGlhdGVseS4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoYy5kYXRhWzFdID4gMCkgeyAvLyBpdGVtIGluIG5leHQgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNiJHtkYXRhLnggKyBzaXplIC8gMn0tJHtkYXRhLnkgKyBzaXplIC8gMn1gKS5jb21wb25lbnRzLml0ZW0uZ2V0KClcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1zZyA9IGBGb3VuZCAke3Aubn1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHAudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiAvLyBoZWFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZGF0YS5oZWFsdGggPSBNYXRoLm1pbihzLmRhdGEuaGVhbHRoICs9IDUsIDI1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gYFxcbkhlYWx0aCA9ICR7cy5kYXRhLmhlYWx0aH0vMjVgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiAvLyBzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwLmQgPiB0aGlzLmF0dGFjaykgdGhpcy5hdHRhY2sgPSBwLmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDM6IC8vIHNoaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVmZW5zZSA9IE1hdGgubWF4KHRoaXMuZGVmZW5zZSwgcC5iKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgODogLy8gcGxhbmUgcGllY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvdW5kUGllY2VzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm91bmRQaWVjZXMgPCA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBgXFxuT25seSAkezUgLSB0aGlzLmZvdW5kUGllY2VzfSBwaWVjZXMgbGVmdGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR00uZGF0YS5zdGF0ZSA9IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdNLm1lc3NhZ2Uud3JpdGUoYFlvdSBmb3VuZCBhbGwgcGllY2VzXFxuYW5kIGVzY2FwZWQgdGhlIHBsYW5ldCFgLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHTS5tZXNzYWdlLndyaXRlKG1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDYW1lcmFSb3RhdGlvbiA9IEdNLmNhbWVyYS5nZXRBdHRyaWJ1dGUoJ3JvdGF0aW9uJyk7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRDYW1lcmFSb3RhdGlvbiA9IHsgeDogLTI3LCB5OiBHTS5jYW1lcmEucm90IH07XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q2FtZXJhUG9zaXRpb24gPSBHTS5jYW1lcmEuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0Q2FtZXJhUG9zaXRpb24gPSB7IHg6IE1hdGguc2luKGRlZ1RvUmFkKEdNLmNhbWVyYS5yb3QpKSAqIDIsIHo6IE1hdGguY29zKGRlZ1RvUmFkKEdNLmNhbWVyYS5yb3QpKSAqIDIgfTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIHRoZSBwbGF5ZXJcclxuICAgICAgICAgICAgbmV3IFRXRUVOLlR3ZWVuKHtcclxuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy54LCB6OiBjb29yZHMueixcclxuICAgICAgICAgICAgICAgIGNhbXBvc3g6IGN1cnJlbnRDYW1lcmFQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgY2FtcG9zejogY3VycmVudENhbWVyYVBvc2l0aW9uLnosXHJcbiAgICAgICAgICAgICAgICBjYW1yb3R4OiBjdXJyZW50Q2FtZXJhUm90YXRpb24ueCxcclxuICAgICAgICAgICAgICAgIGNhbXJvdHk6IGN1cnJlbnRDYW1lcmFSb3RhdGlvbi55XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IGRhdGEueCwgejogZGF0YS55LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbXBvc3g6IHRhcmdldENhbWVyYVBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtcG9zejogdGFyZ2V0Q2FtZXJhUG9zaXRpb24ueixcclxuICAgICAgICAgICAgICAgICAgICBjYW1yb3R4OiB0YXJnZXRDYW1lcmFSb3RhdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbXJvdHk6IHRhcmdldENhbWVyYVJvdGF0aW9uLnlcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuSW5PdXQpXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3RoaXMueH0gLjI1ICR7dGhpcy56fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIEdNLmNhbWVyYS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7dGhpcy5jYW1wb3N4fSAwLjggJHt0aGlzLmNhbXBvc3p9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgR00uY2FtZXJhLnNldEF0dHJpYnV0ZSgncm90YXRpb24nLCBgJHt0aGlzLmNhbXJvdHh9ICR7dGhpcy5jYW1yb3R5fSAwYCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uQ29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IFR3ZWVuaW5nXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChHTS5kYXRhLnN0YXRlID4gMikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIEdNLmRhdGEuc3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIEdNLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpOyAvLyBTdGFydCB0aGUgdHdlZW4gaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpdDogZnVuY3Rpb24gKGFtb3VudCkge1xyXG5cclxuICAgICAgICBsZXQgZGFtYWdlID0gYW1vdW50ICogKHJuZCgxMDApIDwgdGhpcy5kZWZlbnNlID8gMCA6IDEpO1xyXG5cclxuICAgICAgICBsZXQgZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcclxuXHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnYmlsbGJvYXJkLXRleHR1cmUnLCB7IGluZGV4OiAxNCwgbG9va3VwOiBkYW1hZ2UgPiAwID8gNSA6IDEgfSk7XHJcblxyXG4gICAgICAgIGVudC5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3NwcicpO1xyXG4gICAgICAgIGVudC5zZXRBdHRyaWJ1dGUoJ2F1dG8tZGVzdHJveScsICcnKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKGVudCk7XHJcbiAgICAgICAgaWYgKGRhbWFnZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmhlYWx0aCAtPSBkYW1hZ2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5zZXRBdHRyaWJ1dGUoJ2JpbGxib2FyZC10ZXh0dXJlJywgeyBpbmRleDogMTUgfSk7XHJcbiAgICAgICAgICAgICAgICBHTS5kYXRhLnN0YXRlID0gMztcclxuICAgICAgICAgICAgICAgIEdNLm1lc3NhZ2Uud3JpdGUoYEdhbWUgT3ZlcmAsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgR00ubWVzc2FnZS53cml0ZShgT3VjaCFcXG5IZWFsdGggPSAke3RoaXMuZGF0YS5oZWFsdGh9LzI1YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BsYXllci5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2l0ZW0nLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICB4OiB7IHZhbHVlOiAnZmxvYXQnIH0sXHJcbiAgICAgICAgeTogeyB2YWx1ZTogJ2Zsb2F0JyB9LFxyXG4gICAgICAgIHByb3BzOiB7IHZhbHVlOiAnb2JqZWN0JyB9XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zID0gdGhpcy5lbC5jb21wb25lbnRzLnBvc2l0aW9uO1xyXG4gICAgfSxcclxuICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBzID0gdGhpcztcclxuICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZShcImJpbGxib2FyZC10ZXh0dXJlXCIsIHsgaW5kZXg6IHMuZGF0YS5wcm9wcy5zLCBsb29rdXA6IHMuZGF0YS5wcm9wcy5pIH0pO1xyXG4gICAgICAgIGxldCBjb29yZHMgPSBzLmVsLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YTtcclxuICAgICAgICBjb29yZHMudCA9IDE7XHJcbiAgICAgICAgbGV0IHR4ID0gdGhpcy5kYXRhLngsIHR5ID0gdGhpcy5kYXRhLnk7XHJcbiAgICAgICAgbGV0IHBpeCA9IEdNLm1hcC5nZXRQaXgodHgsIHR5KTtcclxuICAgICAgICBwaXguZGF0YVsxXSA9IDA7XHJcbiAgICAgICAgR00ubWFwLnB1dFBpeChwaXgsIHR4LCB0eSk7XHJcbiAgICAgICAgIHZhciBwID0gbmV3IFByb21pc2UociA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0MSA9IG5ldyBUV0VFTi5Ud2Vlbihjb29yZHMpIFxyXG4gICAgICAgICAgICAgICAgLnRvKHsgeTogY29vcmRzLnkgKyAxLCB0OiAwIH0sIDM1MClcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5PdXQpXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24gKCkgeyBcclxuICAgICAgICAgICAgICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7IHg6IGNvb3Jkcy54LCB5OiBjb29yZHMueSwgejogY29vcmRzLnogfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB2YXIgdDIgPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKVxyXG4gICAgICAgICAgICAgICAgLnRvKHsgeTogY29vcmRzLnkgLSAuNSwgdDogMCB9LCAzNTApXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuSW4pIFxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uICgpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgeyB4OiBjb29yZHMueCwgeTogY29vcmRzLnksIHo6IGNvb3Jkcy56IH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbkNvbXBsZXRlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocy5lbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcihzLmRhdGEucHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdDEuY2hhaW4odDIpLnN0YXJ0KCk7IC8vIFN0YXJ0IHRoZSB0d2VlbiBpbW1lZGlhdGVseS5cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuXHJcblxyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pdGVtLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2F1dG8tZGVzdHJveScsIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyB0d2VlbiBhbmQgZGVzdHJveVxyXG4gICAgICAgIHZhciBtID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgICAgIGlmIChtKSBtLm1hdGVyaWFsLmRlcHRoVGVzdCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBvbGR4ID0gdGhpcy5lbC5jb21wb25lbnRzLnBvc2l0aW9uLmRhdGEueCB8fCAwLFxyXG4gICAgICAgICAgICBvbGR5ID0gdGhpcy5lbC5jb21wb25lbnRzLnBvc2l0aW9uLmRhdGEueSB8fCAwLFxyXG4gICAgICAgICAgICBvbGR6ID0gdGhpcy5lbC5jb21wb25lbnRzLnBvc2l0aW9uLmRhdGEueiB8fCAwLFxyXG4gICAgICAgICAgICBjb29yZHMgPSB7IHk6IG9sZHkgfVxyXG4gICAgICAgIHZhciB0d2VlbiA9IG5ldyBUV0VFTi5Ud2Vlbihjb29yZHMpIC8vIENyZWF0ZSBhIG5ldyB0d2VlbiB0aGF0IG1vZGlmaWVzICdjb29yZHMnLlxyXG4gICAgICAgICAgICAudG8oeyB5OiBvbGR5IC0gLjI1IH0sIDUwMCkgLy8gTW92ZSB0byAoMzAwLCAyMDApIGluIDEgc2Vjb25kLlxyXG4gICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuSW4pIC8vIFVzZSBhbiBlYXNpbmcgZnVuY3Rpb24gdG8gbWFrZSB0aGUgYW5pbWF0aW9uIHNtb290aC5cclxuICAgICAgICAgICAgLm9uVXBkYXRlKCgpID0+IHsgLy8gQ2FsbGVkIGFmdGVyIHR3ZWVuLmpzIHVwZGF0ZXMgJ2Nvb3JkcycuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7IHg6IG9sZHgsIHk6IGNvb3Jkcy55LCB6OiBvbGR6IH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpOyAvLyBTdGFydCB0aGUgdHdlZW4gaW1tZWRpYXRlbHkuXHJcbiAgICB9XHJcbn0pO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9hdXRvZGVzdHJveS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdjYW52YXMtdGV4dCcsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIHRleHQ6IHsgdmFsdWU6ICdzdHJpbmcnIH1cclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYml0bWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgdmFyIGcgPSBiaXRtYXAuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBiaXRtYXAud2lkdGggPSAxMDI0O1xyXG4gICAgICAgIGJpdG1hcC5oZWlnaHQgPSAxMDI0O1xyXG4gICAgICAgIGJpdG1hcC5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnO1xyXG4gICAgICAgIGcuZm9udCA9ICdib2xkIDQwcHggQXJpYWwnO1xyXG4gICAgICAgIGcudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICAgICAgZy50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgICAgICB0aGlzLm11bHRpbGluZShnLCB0aGlzLmRhdGEudGV4dCwgNTEyLCA1MTIpO1xyXG4gICAgICAgIHZhciB0ZXh0dXJlID0gbmV3IFRIUkVFLlRleHR1cmUoYml0bWFwKVxyXG4gICAgICAgIHRleHR1cmUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsIHsgc3JjOiB0ZXh0dXJlLCB0cmFuc3BhcmVudDogdHJ1ZSwgb3BhY2l0eTowLjggfSk7XHJcbiAgICB9LFxyXG4gICAgbXVsdGlsaW5lOiBmdW5jdGlvbiAoY3R4LCB0ZXh0LCB4LCB5KSB7XHJcbiAgICAgICAgbGV0IGxoID0gY3R4Lm1lYXN1cmVUZXh0KFwiTVwiKS53aWR0aCAqIDEuMixcclxuICAgICAgICAgICAgdCA9IHRleHQuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0Lmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2JlMjYzMyc7XHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0W2ldLCB4LCB5KTtcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMwMDAnO1xyXG4gICAgICAgICAgICBjdHguc3Ryb2tlVGV4dCh0W2ldLCB4LCB5KTtcclxuICAgICAgICAgICAgeSArPSBsaDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgd3JpdGU6IGZ1bmN0aW9uICh0ZXh0LCBkb250RmFkZSkge1xyXG4gICAgICAgIHRoaXMuZGF0YS50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHZhciBkID0geyBvOiAwLjggfTtcclxuICAgICAgICBpZiAoIWRvbnRGYWRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudCA9IG5ldyBUV0VFTi5Ud2VlbihkKVxyXG4gICAgICAgICAgICAgICAgLnRvKHsgbzogMCB9LCAyNTApXHJcbiAgICAgICAgICAgICAgICAuZGVsYXkoMjAwMClcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ21hdGVyaWFsJywgeyBvcGFjaXR5OiBkLm8gfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jYW52YXN0ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9