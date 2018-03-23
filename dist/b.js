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
	AFRAME.registerComponent('billboard-shader', {
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
	        this.raycaster = AFRAME.scenes[0].querySelector('[raycaster]').components.raycaster;
	        this.updateTileWithPlayer({x:0,y:0});
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
	                    GM.updateTileWithPlayer(data);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWM4YTU5NGNiZDhhODE0ZTNmYjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpeGVsU2hhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9iaWxsYm9hcmRTaGFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFwZ2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lbWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9iLmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2l0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1dG9kZXN0cm95LmpzIiwid2VicGFjazovLy8uL3NyYy9jYW52YXN0ZXh0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUNBO0FBQ0EsRUFBQzs7Ozs7OztBQ3ZCRDtBQUNBO0FBQ0EsZ0JBQWU7QUFDZixNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsK0NBQStDO0FBQ3pGLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzQkFBcUIsT0FBTztBQUM1QjtBQUNBO0FBQ0EsdURBQXNELGVBQWU7QUFDckUsa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRSIsImZpbGUiOiJiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWM4YTU5NGNiZDhhODE0ZTNmYjIiLCJyZXF1aXJlKCcuL2dsb2JhbCcpO1xyXG5yZXF1aXJlKCcuL2RhdGEnKTtcclxucmVxdWlyZSgnLi9waXhlbFNoYWRlcicpO1xyXG5yZXF1aXJlKCcuL2JpbGxib2FyZFNoYWRlcicpO1xyXG5yZXF1aXJlKCcuL21hcCcpO1xyXG5yZXF1aXJlKCcuL2dhbWVtYW5hZ2VyJyk7XHJcbnJlcXVpcmUoJy4vbW9iJyk7XHJcbnJlcXVpcmUoJy4vcGxheWVyJyk7XHJcbnJlcXVpcmUoJy4vaXRlbScpO1xyXG5yZXF1aXJlKCcuL2F1dG9kZXN0cm95Jyk7XHJcbnJlcXVpcmUoJy4vY2FudmFzdGV4dCcpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ3aW5kb3cucm5kID0gbSA9PiB+fihNYXRoLnJhbmRvbSgpICogbSk7XHJcbndpbmRvdy5kZWdUb1JhZCA9IGQgPT4gZCAvIDE4MCAqIE1hdGguUEk7XHJcbndpbmRvdy50ID0gbmV3IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoJy4vbG9zdC5wbmcnKTtcclxud2luZG93LnQubWluRmlsdGVyID0gd2luZG93LnQubWFnRmlsdGVyID0gMTAwMztcclxud2luZG93LnBhbCA9IG5ldyBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCcuL3BhbGV0dGVzLnBuZycpO1xyXG53aW5kb3cucGFsLm1pbkZpbHRlciA9IHdpbmRvdy5wYWwubWFnRmlsdGVyID0gMTAwMztcclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ3aW5kb3cuRCA9IHtcclxuICAgIHBsYXllcjoge1xyXG4gICAgICAgIHQ6IDEsICAvLyB0eXBlIDogcGxheWVyXHJcbiAgICAgICAgczogMiwgIC8vIHNwcml0ZTogMiAgICBcclxuICAgICAgICBoOiAxMCwgLy8gc3RhcnQgaGVhbHRoXHJcbiAgICB9LCBtb2JzOiBbe1xyXG4gICAgICAgIGg6IFszLCAyXSwgLy8gaGVhbHRoOiBiZXR3ZWVuIDIgYW5kIDVcclxuICAgICAgICBkOiBbMSwgMV0sIC8vZGFtYWdlIGJldHdlZW4gMSBhbmQgMlxyXG4gICAgICAgIGk6IDYsICAvLyBjb2xvciBpbmRleCA4XHJcbiAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgYzogNzAgLy8gY2hhbmdlPTcwJVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoOiBbNCwgNF0sIC8vIGhlYWx0aDogYmV0d2VlbiA0IGFuZCA4XHJcbiAgICAgICAgZDogWzMsIDJdLCAvL2RhbWFnZSBiZXR3ZWVuIDIgYW5kIDVcclxuICAgICAgICBpOiA3LCAvLyBjb2xvciBpbmRleCA4XHJcbiAgICAgICAgbTogMTAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgIGM6IDIwIC8vY2hhbmdlIDMwJSAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGg6IFs2LCA2XSwgLy8gaGVhbHRoOiBiZXR3ZWVuIDYgYW5kIDEyXHJcbiAgICAgICAgZDogWzUsIDRdLCAvL2RhbWFnZSBiZXR3ZWVuIDQgYW5kIDlcclxuICAgICAgICBpOiA5LCAgLy8gY29sb3IgaW5kZXggOFxyXG4gICAgICAgIG06IDMwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICBjOiAxMCAvLyBjaGFuZ2UgMTAlXHJcbiAgICB9XSxcclxuICAgIGZsb29yczogW3tcclxuICAgICAgICB0OiAzLCAvLyB0eXBlOiBmbG9vclxyXG4gICAgICAgIGI6IDEsIC8vIGJpb21lOiAxXHJcbiAgICAgICAgczogWzFdLFxyXG4gICAgICAgIGk6IFsyLCA1XVxyXG4gICAgfV0sXHJcbiAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdDogMSxcclxuICAgICAgICAgICAgbjogXCJhIGhlYXJ0XCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBzOiAxMywgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogLTEsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDcwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDIsIC8vIHN1YnR5cGUgOiBzd29yZFwiLFxyXG4gICAgICAgICAgICBuOiBcImFuIGlyb24gc3dvcmRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGQ6IDMsIC8vIGRhbWFnZVxyXG4gICAgICAgICAgICBzOiA1LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAxLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAyMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMiwgLy8gc3VidHlwZSA6IHN3b3JkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYSBnb2xkZW4gc3dvcmRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGQ6IDYsIC8vIGRhbWFnZVxyXG4gICAgICAgICAgICBzOiA1LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAyMywgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOjYsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAxMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAyLCAvLyBzdWJ0eXBlIDogc3dvcmRcIixcclxuICAgICAgICAgICAgbjogXCJhIGRpYW1vbmQgc3dvcmRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGQ6IDEwLCAvLyBkYW1hZ2VcclxuICAgICAgICAgICAgczogNSwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMjQsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMTIsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAyLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDMsIC8vIHN1YnR5cGUgOiBzaGllbGRcIixcclxuICAgICAgICAgICAgbjogXCJhbiBpcm9uIHNoaWVsZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgYjogNDAsIC8vIGJsb2NrIHZhbHVlIDQwJVxyXG4gICAgICAgICAgICBzOiA0LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAwLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAyMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAzLCAvLyBzdWJ0eXBlIDogc2hpZWxkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYSBnb2xkZW4gc2hpZWxkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBiOiA3MCwgLy8gYmxvY2sgdmFsdWUgNzAlXHJcbiAgICAgICAgICAgIHM6IDQsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDIzLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDYsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAxMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAzLCAvLyBzdWJ0eXBlIDogc2hpZWxkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYSBkaWFtb25kIHNoaWVsZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgYjogODUsIC8vIGJsb2NrIHZhbHVlIDg1JVxyXG4gICAgICAgICAgICBzOiA0LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAyNCwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAxMiwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDUsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH1dLFxyXG4gICAgb2JqczogW3sgLy9vYmplY3RpdmVzXHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDEsIC8vIHBpZWNlID0xXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgY2FiaW5cIixcclxuICAgICAgICBzOiA2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHQ6IDgsIC8vIGl0ZW0gdHlwZSA9IDhcclxuICAgICAgICBwOiAyLFxyXG4gICAgICAgIG46IFwieW91ciBwbGFuZSdzIGxlZnQgd2luZ1wiLFxyXG4gICAgICAgIHM6IDdcclxuICAgIH0se1xyXG4gICAgICAgIHQ6IDgsIC8vIGl0ZW0gdHlwZSA9IDhcclxuICAgICAgICBwOiAzLFxyXG4gICAgICAgIG46IFwieW91ciBwbGFuZSdzIGJvZHlcIixcclxuICAgICAgICBzOiA4XHJcbiAgICB9LHtcclxuICAgICAgICB0OiA4LCAvLyBpdGVtIHR5cGUgPSA4XHJcbiAgICAgICAgcDogNCxcclxuICAgICAgICBuOiBcInlvdXIgcGxhbmUncyByaWdodCB3aW5nXCIsXHJcbiAgICAgICAgczogOVxyXG4gICAgfSx7XHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDUsXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgdGhydXN0ZXJcIixcclxuICAgICAgICBzOiAxMFxyXG4gICAgfV1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFsIFRIUkVFLCBBRlJBTUUgKi9cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdwaXhlbC1zaGFkZXInLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBjb2xvcjpcclxuICAgIHtcclxuICAgICAgdHlwZTogJ2NvbG9yJ1xyXG4gICAgfSxcclxuICAgIGluZGV4OiB7IHR5cGU6ICdpbnQnIH0sXHJcbiAgICBsb29rdXA6IHsgdHlwZTogJ2ludCcsIGRlZmF1bHQ6IDAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCB1c2luZyB0aGUgdHdvIHNoYWRlcnMgZGVmaW5lZFxyXG4gICAqIGluIHZlcnRleC5nbHNsIGFuZCBmcmFnbWVudC5nbHNsLlxyXG4gICAqL1xyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhZ21lbnQnKS50ZXh0Q29udGVudDtcclxuICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVydGV4JykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgaW5kZXg6IHsgdmFsdWU6IHRoaXMuZGF0YS5pbmRleCB9LFxyXG4gICAgICAgIERpZmZ1c2VUZXh0dXJlOiB7IHZhbHVlOiB3aW5kb3cudCB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LFxyXG4gICAgICAgIGNvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoZGF0YS5jb2xvcikgfSxcclxuICAgICAgICBzcHJpdGVEaW1lbnNpb25zOiB7IHZhbHVlOiB7IHg6IDE2LjAsIHk6IDEuMCB9IH0sXHJcbiAgICAgICAgcmVwZWF0OiB7IHZhbHVlOiB7IHg6IDEuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICBmb2dTdGFydDogeyB2YWx1ZTogNSB9LFxyXG4gICAgICAgIGZvZ0VuZDogeyB2YWx1ZTogMTUgfSxcclxuICAgICAgICBsb29rdXBJbmRleDp7dmFsdWU6ZGF0YS5sb29rdXB9LFxyXG4gICAgICAgIGZvZ0NvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMCwgMCwgMCkgfSxcclxuICAgICAgICB0aW50OiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMjU1LCAyNTUsIDI1NSkgfSxcclxuICAgICAgICB0aW50QW1vdW50OiB7IHZhbHVlOiAwIH1cclxuICAgICAgfSxcclxuICAgICAgdmVydGV4U2hhZGVyLFxyXG4gICAgICBmcmFnbWVudFNoYWRlclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFwcGx5VG9NZXNoKCk7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGVsLWxvYWRlZCcsICgpID0+IHRoaXMuYXBwbHlUb01lc2goKSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIFNoYWRlck1hdGVyaWFsIHdoZW4gY29tcG9uZW50IGRhdGEgY2hhbmdlcy5cclxuICAgKi9cclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMuaW5kZXgudmFsdWUgPSB0aGlzLmRhdGEuaW5kZXg7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLmxvb2t1cEluZGV4LnZhbHVlPXRoaXMuZGF0YS5sb29rdXA7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBBcHBseSB0aGUgbWF0ZXJpYWwgdG8gdGhlIGN1cnJlbnQgZW50aXR5LlxyXG4gICAqL1xyXG4gIGFwcGx5VG9NZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZXNoID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgaWYgKG1lc2gpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueCA9ICt0aGlzLmVsLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpIHx8IDE7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnkgPSArdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIikgfHwgMTtcclxuICAgICAgbWVzaC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBPbiBlYWNoIGZyYW1lLCB1cGRhdGUgdGhlICd0aW1lJyB1bmlmb3JtIGluIHRoZSBzaGFkZXJzLlxyXG4gICAqL1xyXG4gIC8vIHRpY2s6IGZ1bmN0aW9uICh0KSB7XHJcbiAgLy8gICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0IC8gMTAwMDsgXHJcbiAgLy8gfVxyXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BpeGVsU2hhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGdsb2JhbCBUSFJFRSwgQUZSQU1FICovXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnYmlsbGJvYXJkLXNoYWRlcicsIHtcclxuICBzY2hlbWE6IHtcclxuICAgIGluZGV4Ont0eXBlOidpbnQnfSxcclxuICAgIGxvb2t1cDogeyB0eXBlOiAnaW50JywgZGVmYXVsdDogLTEgfVxyXG4gIH0sXHJcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTsgICAgXHJcbiAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhZ21lbnQnKS50ZXh0Q29udGVudDtcclxuICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVydGV4LWJpbGxib2FyZCcpLnRleHRDb250ZW50O1xyXG4gICAgXHJcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICB0aW1lOiB7IHZhbHVlOiAwLjAgfSxcclxuICAgICAgICBpbmRleDogeyB2YWx1ZTogdGhpcy5kYXRhLmluZGV4IH0sXHJcbiAgICAgICAgRGlmZnVzZVRleHR1cmU6IHsgdmFsdWU6IHdpbmRvdy50fSxcclxuICAgICAgICBjb2xvcjogeyB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKGRhdGEuY29sb3IpIH0sXHJcbiAgICAgICAgc3ByaXRlRGltZW5zaW9uczogeyB2YWx1ZTogeyB4OiAxNi4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIHJlcGVhdDogeyB2YWx1ZTogeyB4OiAxLjAsIHk6IDEuMCB9IH0sXHJcbiAgICAgICAgTG9va3VwOiB7IHZhbHVlOiB3aW5kb3cucGFsIH0sICAgIFxyXG4gICAgICAgIGxvb2t1cEluZGV4Ont2YWx1ZTpkYXRhLmxvb2t1cH0sXHJcbiAgICAgICAgZm9nU3RhcnQ6e3ZhbHVlOjV9LFxyXG4gICAgICAgIGZvZ0VuZDp7dmFsdWU6MTV9LFxyXG4gICAgICAgIGFscGhhdGVzdDp7dmFsdWU6MC45NX0sXHJcbiAgICAgICAgZm9nQ29sb3I6e3ZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMCwwLDApfVxyXG4gICAgICB9LFxyXG4gICAgICB2ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgIGZyYWdtZW50U2hhZGVyXHJcbiAgICB9KTtcclxuICAgIHRoaXMubWF0ZXJpYWwuYmxlbmRpbmcgPSBUSFJFRS5NdWx0aXBseUJsZW5kaW5nO1xyXG4gICAgdGhpcy5hcHBseVRvTWVzaCgpO1xyXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb2RlbC1sb2FkZWQnLCAoKSA9PiB0aGlzLmFwcGx5VG9NZXNoKCkpO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRoZSBTaGFkZXJNYXRlcmlhbCB3aGVuIGNvbXBvbmVudCBkYXRhIGNoYW5nZXMuXHJcbiAgICovXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLmluZGV4LnZhbHVlID0gdGhpcy5kYXRhLmluZGV4O1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5sb29rdXBJbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5sb29rdXA7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBBcHBseSB0aGUgbWF0ZXJpYWwgdG8gdGhlIGN1cnJlbnQgZW50aXR5LlxyXG4gICAqL1xyXG4gIGFwcGx5VG9NZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZXNoID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgaWYgKG1lc2gpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueCA9K3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwid2lkdGhcIil8fDE7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnkgPSt0aGlzLmVsLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKXx8MTtcclxuICAgICAgbWVzaC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBPbiBlYWNoIGZyYW1lLCB1cGRhdGUgdGhlICd0aW1lJyB1bmlmb3JtIGluIHRoZSBzaGFkZXJzLlxyXG4gICAqL1xyXG4gIC8vIHRpY2s6IGZ1bmN0aW9uICh0KSB7XHJcbiAgLy8gICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0IC8gMTAwMDsgXHJcbiAgLy8gfVxyXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JpbGxib2FyZFNoYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtYXBHZW4gPSByZXF1aXJlKFwiLi9tYXBnZW5cIik7XHJcblxyXG53aW5kb3cuc2l6ZSA9IDEyODtcclxuY29uc3QgZGVwdGggPSA3O1xyXG5cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdtYXAnLCB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tYXBDb250ZXh0ID0gbWFwR2VuLmdvKHNpemUsIGRlcHRoKTtcclxuICAgICAgICBsZXQgd29ybGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIik7XHJcbiAgICAgICAgbGV0IHdvcmxkRGF0YSA9IHRoaXMubWFwQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgc2l6ZSwgc2l6ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB3ZHAgPSAoaSArIHNpemUgKiBqKSAqIDQ7XHJcbiAgICAgICAgICAgICAgICBpZiAod29ybGREYXRhLmRhdGFbd2RwXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuaWQgPSBgZmxvb3ItJHtpfS0ke2p9YDtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5jbGFzc0xpc3QuYWRkKFwiZmxvb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdvcmxkRGF0YS5kYXRhW3dkcF0gPT0gMTAyKSBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJwaXhlbC1zaGFkZXJcIiwgXCJpbmRleDoxMTtsb29rdXA6OFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdID09IDE3MCkgcGxhbmUuc2V0QXR0cmlidXRlKFwicGl4ZWwtc2hhZGVyXCIsIFwiaW5kZXg6MTI7bG9va3VwOjEwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdvcmxkRGF0YS5kYXRhW3dkcF0gPT0gMjM4KSBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJwaXhlbC1zaGFkZXJcIiwgXCJpbmRleDoxMjtsb29rdXA6OVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKFwicGl4ZWwtc2hhZGVyXCIsIFwiaW5kZXg6MDtsb29rdXA6XCIgKyB+figoaSAqIDUpIC8gKGogKiAyKSAqIDMpICUgNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gaSAtIChzaXplIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSBqIC0gKHNpemUgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcIm1vdXNlZW50ZXI6XCIsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zcmNFbGVtZW50LnNldEF0dHJpYnV0ZSgnc2NhbGUnLCB7IHg6IC45NiwgeTogLjk2IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW91c2VsZWF2ZTpcIixlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5zcmNFbGVtZW50LnNldEF0dHJpYnV0ZSgnc2NhbGUnLCB7IHg6IDEsIHk6IDEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChHTS5kYXRhLnN0YXRlID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR00ucGxheWVyLmNvbXBvbmVudHMucGxheWVyLm1vdmUoeyB4LCB5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZShcImN1cnNvci1saXN0ZW5lclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7eH0gMCAke3l9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKCdtaXhpbicsICd2b3hlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLmFwcGVuZENoaWxkKHBsYW5lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh3b3JsZCk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmFkZE9ianMoKSk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmFkZEl0ZW1zKCkpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5hZGRNb2JzKCkpO1xyXG4gICAgfSxcclxuICAgIGdldFBpeDogZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBDb250ZXh0LmdldEltYWdlRGF0YSh4LCB5LCAxLCAxKTtcclxuICAgIH0sXHJcbiAgICBwdXRQaXg6IGZ1bmN0aW9uIChjLCB4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwQ29udGV4dC5wdXRJbWFnZURhdGEoYywgeCwgeSk7XHJcbiAgICB9LFxyXG4gICAgcmFuZG9tUGxhY2U6IGZ1bmN0aW9uIChtaW5EaXN0YW5jZSA9IDApIHtcclxuICAgICAgICBsZXQgeCwgeSwgYztcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHggPSB3aW5kb3cucm5kKHNpemUpO1xyXG4gICAgICAgICAgICB5ID0gd2luZG93LnJuZChzaXplKTtcclxuICAgICAgICAgICAgYyA9IHRoaXMuZ2V0UGl4KHgsIHkpO1xyXG4gICAgICAgIH0gd2hpbGUgKGMuZGF0YS5ldmVyeShwID0+IHAgPT0gMCkpO1xyXG4gICAgICAgIHJldHVybiB7IHgsIHksIGMgfTtcclxuICAgIH0sXHJcbiAgICBnZXRXZWlnaHRlZDogZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgICAgICBsZXQgZiA9IGZhbHNlLCBpdGVtO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaXRlbSA9IGxpc3Rbcm5kKGxpc3QubGVuZ3RoKV07XHJcbiAgICAgICAgICAgIGYgPSBybmQoMTAwKSA8IGl0ZW0uYztcclxuICAgICAgICB9IHdoaWxlICghZilcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0sXHJcbiAgICBhZGRJdGVtczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpLCB0eCwgdHksIHAsIGl0ZW07XHJcblxyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBwID0gdGhpcy5yYW5kb21QbGFjZSgpO1xyXG4gICAgICAgICAgICAgICAgaXRlbSA9IHRoaXMuZ2V0V2VpZ2h0ZWQoRC5pdGVtcyk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLm1hcCA9IHA7XHJcblxyXG4gICAgICAgICAgICAgICAgZCA9IChuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSkuZGlzdGFuY2VUbyhuZXcgVEhSRUUuVmVjdG9yMihwLngsIHAueSkpO1xyXG4gICAgICAgICAgICB9IHdoaWxlIChpdGVtLm0gPj0gZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocC5jLmRhdGFbMV0gIT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIHAuYy5kYXRhWzFdID0gMHg0MTtcclxuICAgICAgICAgICAgdGhpcy5wdXRQaXgocC5jLCBwLngsIHAueSk7XHJcblxyXG4gICAgICAgICAgICB0eCA9IHAueCAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICB0eSA9IHAueSAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICB2YXIgZCA9IChuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSkuZGlzdGFuY2VUbyhuZXcgVEhSRUUuVmVjdG9yMih0eCwgdHkpKTtcclxuXHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKFwiYmlsbGJvYXJkLXNoYWRlclwiLCB7IGluZGV4OiAzIH0pOy8vIHsgaW5kZXg6IGl0ZW0ucywgbG9va3VwOiBpdGVtLmkgfSk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3R4fSAuMjUgJHt0eX1gKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3NwcicpO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnaXRlbScsIHsgeDogcC54LCB5OiBwLnksIHByb3BzOiBpdGVtIH0pO1xyXG4gICAgICAgICAgICBiLmlkID0gYGIke3AueH0tJHtwLnl9YDtcclxuICAgICAgICAgICAgYi5kYXRhID0gaXRlbTtcclxuICAgICAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0sXHJcbiAgICBhZGRNb2JzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyT2ZNb2JzID0gMTUwO1xyXG4gICAgICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mTW9iczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpLCB0eCwgdHk7XHJcbiAgICAgICAgICAgIGxldCBtb2IgPSB0aGlzLmdldFdlaWdodGVkKEQubW9icyksIHAsIGQ7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHAgPSB0aGlzLnJhbmRvbVBsYWNlKCk7XHJcbiAgICAgICAgICAgICAgICB0eCA9IHAueCAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgdHkgPSBwLnkgLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgICAgIGQgPSAobmV3IFRIUkVFLlZlY3RvcjIoMCwgMCkpLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjIodHgsIHR5KSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKG1vYi5tID49IGQpO1xyXG4gICAgICAgICAgICBwLmMuZGF0YVsyXSA9IDB4ODg7XHJcbiAgICAgICAgICAgIHRoaXMucHV0UGl4KHAuYywgcC54LCBwLnkpO1xyXG5cclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtc2hhZGVyXCIsIHsgaW5kZXg6IDIsIGxvb2t1cDogbW9iLmkgfSk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3R4fSAuMjUgJHt0eX1gKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3NwcicpO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnbW9iJywge1xyXG4gICAgICAgICAgICAgICAgeDogcC54LCB5OiBwLnksXHJcbiAgICAgICAgICAgICAgICBoZWFsdGg6IHJuZChtb2IuaFsxXSkgKyBtb2IuaFswXSxcclxuICAgICAgICAgICAgICAgIGRhbWFnZTogcm5kKG1vYi5kWzFdKSArIG1vYi5kWzBdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBiLmlkID0gYGUke3AueH0tJHtwLnl9YDtcclxuICAgICAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0sXHJcbiAgICBhZGRPYmpzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG9ianMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIiksIHR4LCB0eSwgcCwgZDtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcCA9IHRoaXMucmFuZG9tUGxhY2UoKTtcclxuICAgICAgICAgICAgICAgIHR4ID0gcC54IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgICAgICB0eSA9IHAueSAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgZCA9IChuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSkuZGlzdGFuY2VUbyhuZXcgVEhSRUUuVmVjdG9yMih0eCwgdHkpKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoMjUgPj0gZCk7IFxyXG5cclxuICAgICAgICAgICAgcC5jLmRhdGFbMV0gPSAweEVFO1xyXG4gICAgICAgICAgICB0aGlzLnB1dFBpeChwLmMsIHAueCwgcC55KTtcclxuXHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKFwiYmlsbGJvYXJkLXNoYWRlclwiLCB7IGluZGV4OiBELm9ianNbaV0ucyB9KTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7dHh9IC4yNSAke3R5fWApO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAnc3ByJyk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdpdGVtJywgeyB4OiBwLngsIHk6IHAueSwgcHJvcHM6IEQub2Jqc1tpXSB9KTtcclxuICAgICAgICAgICAgYi5pZCA9IGBiJHtwLnh9LSR7cC55fWA7XHJcbiAgICAgICAgICAgIG9ianMuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpzO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnY3Vyc29yLWxpc3RlbmVyJywge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgbGFzdEluZGV4ID0gLTE7XHJcbiAgICAgIHZhciBDT0xPUlMgPSBbJ3JlZCcsICdncmVlbicsICdibHVlJ107XHJcbiAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgbGFzdEluZGV4ID0gKGxhc3RJbmRleCArIDEpICUgQ09MT1JTLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbWF0ZXJpYWwnLCAnY29sb3InLCBDT0xPUlNbbGFzdEluZGV4XSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0kgd2FzIGNsaWNrZWQgYXQ6ICcsIGV2dC5kZXRhaWwuaW50ZXJzZWN0aW9uLnBvaW50KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG52YXIgZ2VuZXJhdG9yID0ge1xyXG4gICAgZ286IChtYXBXaWR0aCwgZGVwdGgpID0+IHtcclxuICAgICAgICB2YXIgcGllY2VzID0gW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsxLCAwLCAyLCAwLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMiwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMCwgMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMiwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDAsIDAsIDAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMiwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvLyB2YXIgbWFwV2lkdGggPSAyNTY7XHJcblxyXG4gICAgICAgIGxldCBwbCA9IHBpZWNlcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZSA9IHBpZWNlc1tpXS5zbGljZSgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNsb25lLmxlbmd0aDsgaisrKVxyXG4gICAgICAgICAgICAgICAgY2xvbmVbal0gPSBjbG9uZVtqXS5zbGljZSgpLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgcGllY2VzLnB1c2goY2xvbmUpO1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUyID0gcGllY2VzW2ldLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGNsb25lMiA9IGNsb25lMi5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHBpZWNlcy5wdXNoKGNsb25lMik7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZTMgPSBjbG9uZS5zbGljZSgpO1xyXG4gICAgICAgICAgICBjbG9uZTMgPSBjbG9uZTMucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBwaWVjZXMucHVzaChjbG9uZTMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBpZWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwaWVjZXNbaV0uc2l6ZSA9IHsgdzogcGllY2VzW2ldWzBdLmxlbmd0aCwgaDogcGllY2VzW2ldLmxlbmd0aCB9O1xyXG4gICAgICAgICAgICBwaWVjZXNbaV0uZXhpdHMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwaWVjZXNbaV0uc2l6ZS5oOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgcGllY2VzW2ldLnNpemUudzsgaCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpZWNlc1tpXVtqXVtoXSA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZXNbaV0uZXhpdHMucHVzaCh7IHg6IGgsIHk6IGogfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbWFwQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgbWFwQ2FudmFzLndpZHRoID0gbWFwV2lkdGg7XHJcbiAgICAgICAgbWFwQ2FudmFzLmhlaWdodCA9IG1hcFdpZHRoO1xyXG5cclxuICAgICAgICAvLyBUZW1wIGR1cmluZyBkZXZlbG9wbWVudFxyXG4gICAgICAgIG1hcENhbnZhcy5zdHlsZS53aWR0aCA9ICcxMDI0cHgnO1xyXG4gICAgICAgIG1hcENhbnZhcy5zdHlsZS5oZWlnaHQgPSAnMTAyNHB4JztcclxuICAgICAgICBtYXBDYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1hcENhbnZhcyk7XHJcbiAgICAgICAgLy8gRU5EXHJcblxyXG4gICAgICAgIHZhciBtYXBDb250ZXh0ID0gbWFwQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMClcIjtcclxuICAgICAgICBtYXBDb250ZXh0LmZpbGxSZWN0KDAsIDAsIG1hcFdpZHRoLCBtYXBXaWR0aCk7XHJcblxyXG4gICAgICAgIGxldCBmaXJzdCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGFkZFJvb20gPSAoZXhpdCwgc3BlY2lhbCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGllY2U7XHJcbiAgICAgICAgICAgIGxldCBleGl0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY2xlYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHRhcmdldFg7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRZO1xyXG4gICAgICAgICAgICBsZXQgdHJpZXMgPSAyNTtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcGllY2UgPSBwaWVjZXNbcm5kKHBpZWNlcy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHEgPSAwOyBxIDwgcGllY2UuZXhpdHMubGVuZ3RoOyBxKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRYID0gZXhpdC54IC0gcGllY2UuZXhpdHNbcV0ueDtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZID0gZXhpdC55IC0gcGllY2UuZXhpdHNbcV0ueTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nRGF0YSA9IG1hcENvbnRleHQuZ2V0SW1hZ2VEYXRhKHRhcmdldFgsIHRhcmdldFksIHBpZWNlLnNpemUudywgcGllY2Uuc2l6ZS5oKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhciA9IGltZ0RhdGEuZGF0YS5ldmVyeShkID0+IGQgPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0cmllcy0tO1xyXG4gICAgICAgICAgICB9IHdoaWxlICh0cmllcyA+IDAgJiYgIWNsZWFyKTtcclxuICAgICAgICAgICAgaWYgKCFjbGVhcikge1xyXG4gICAgICAgICAgICAgICAgcGllY2UgPSBbWzFdXTtcclxuICAgICAgICAgICAgICAgIHBpZWNlLmV4aXRzID0gW3t9XTtcclxuICAgICAgICAgICAgICAgIHRhcmdldFggPSBleGl0Lng7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRZID0gZXhpdC55O1xyXG4gICAgICAgICAgICAgICAgcSA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSAhZmlyc3QgPyBcIiM0MDBcIiA6IFwiIzYwMFwiO1xyXG4gICAgICAgICAgICBpZiAoIWZpcnN0KSBtYXBDb250ZXh0LmZpbGxSZWN0KHRhcmdldFggKyBwaWVjZS5leGl0c1txXS54IHx8IDAsIHRhcmdldFkgKyBwaWVjZS5leGl0c1txXS55IHx8IDAsIDEsIDEpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHNwZWNpYWwgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCIjRTAwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwZWNpYWwgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCIjQTAwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgcGllY2UuZm9yRWFjaCgoaSwgcHkpID0+IHtcclxuICAgICAgICAgICAgICAgIGkuZm9yRWFjaCgoaiwgcHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxSZWN0KHRhcmdldFggKyBweCwgdGFyZ2V0WSArIHB5LCAxLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdHMucHVzaCh7IHg6IHRhcmdldFggKyBweCwgeTogdGFyZ2V0WSArIHB5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZXhpdHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb29wcyA9IGRlcHRoO1xyXG4gICAgICAgIGxldCBleGl0cyA9IFt7IHg6IG1hcFdpZHRoIC8gMiwgeTogbWFwV2lkdGggLyAyIH1dO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcHM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbmV3RXhpdHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHNwZWNpYWw7XHJcbiAgICAgICAgICAgIGV4aXRzLmZvckVhY2goKGV4aXQsIGluZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gbG9vcHMgLSAxICYmIGluZCA9PSBleGl0cy5sZW5ndGggLSB+fihleGl0cy5sZW5ndGggLyAzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gbG9vcHMgLSAxICYmIGluZCA9PSB+fihleGl0cy5sZW5ndGggLyAzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHEgPSBhZGRSb29tKGV4aXQsIHNwZWNpYWwpO1xyXG4gICAgICAgICAgICAgICAgbmV3RXhpdHMgPSBuZXdFeGl0cy5jb25jYXQocSk7XHJcbiAgICAgICAgICAgICAgICBzcGVjaWFsID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV4aXRzID0gbmV3RXhpdHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFwQ29udGV4dDtcclxuICAgIH1cclxuXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0b3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFwZ2VuLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnZ2FtZW1hbmFnZXInLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICBzdGF0ZTogeyB2YWx1ZTogJ2ludCcsIGRlZmF1bHQ6IDAgfVxyXG4gICAgICAgIC8vIDAgPT0gcGxheWVyXHJcbiAgICAgICAgLy8gMSA9PSBlbmVteVxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXInKTtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEnKTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5kZWx0YVJvdCA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwZ2VvJykuY29tcG9uZW50cy5tYXA7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NhbnZhcy10ZXh0XScpLmNvbXBvbmVudHNbJ2NhbnZhcy10ZXh0J107XHJcbiAgICAgICAgdGhpcy5jdXJzb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbY3Vyc29yXScpO1xyXG4gICAgICAgIHRoaXMucmF5Y2FzdGVyID0gQUZSQU1FLnNjZW5lc1swXS5xdWVyeVNlbGVjdG9yKCdbcmF5Y2FzdGVyXScpLmNvbXBvbmVudHMucmF5Y2FzdGVyO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGlsZVdpdGhQbGF5ZXIoe3g6MCx5OjB9KTtcclxuICAgICAgICB3aW5kb3cuR00gPSB0aGlzO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLnN0YXRlID4gMSkgcmV0dXJuO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kYXRhLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmNvbXBvbmVudHMucGxheWVyLm1vdmUoZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3Iuc2V0QXR0cmlidXRlKCdjdXJzb3InLCB7IGZ1c2U6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbW9iXScpO1xyXG4gICAgICAgICAgICAgICAgbW9icy5mb3JFYWNoKGQgPT4gZC5jb21wb25lbnRzLm1vYi5tb3ZlKCkpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJzb3Iuc2V0QXR0cmlidXRlKCdjdXJzb3InLCB7IGZ1c2U6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnN0YXRlID0gMDtcclxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZVRpbGVXaXRoUGxheWVyOiBmdW5jdGlvbiAoY29vcmRzKSB7XHJcbiAgICAgICAgbGV0IG9sZHBvc2l0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBsYXllci1wb3NpdGlvbmApO1xyXG4gICAgICAgIGlmICghIW9sZHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIG9sZHBvc2l0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllci1wb3NpdGlvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5ld3Bvc2l0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Zsb29yLSR7Y29vcmRzLnggKyAoc2l6ZSAvIDIpfS0ke2Nvb3Jkcy55ICsgKHNpemUgLyAyKX1gKTtcclxuICAgICAgICBuZXdwb3NpdGlvbi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXItcG9zaXRpb24nKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVTZWxlY3RhYmxlVGlsZXMoKTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlU2VsZWN0YWJsZVRpbGVzOmZ1bmN0aW9uIChjb29yZHMpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IG9sZHNlbGVjdGFibGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLnNlbGVjdGFibGVgKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZHNlbGVjdGFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG9sZHNlbGVjdGFibGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGFibGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXJwb3NpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wbGF5ZXItcG9zaXRpb25gKTtcclxuICAgICAgICBsZXQgcHggPSBwbGF5ZXJwb3NpdGlvbi5pZC5zcGxpdCgnLScpWzFdO1xyXG4gICAgICAgIGxldCBweSA9IHBsYXllcnBvc2l0aW9uLmlkLnNwbGl0KCctJylbMl07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAtMTsgaSA8PSAxOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IC0xOyBqIDw9IDE7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld3RpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZmxvb3ItJHsrcHgraX0tJHsrcHkran1gKTtcclxuICAgICAgICAgICAgICAgIGlmKCEhbmV3dGlsZSAmJiAhbmV3dGlsZS5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXllci1wb3NpdGlvbicpKXtcclxuICAgICAgICAgICAgICAgICAgICBuZXd0aWxlLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGFibGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yYXljYXN0ZXIucmVmcmVzaE9iamVjdHMoKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2FtZW1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdtb2InLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICB4OiB7IHZhbHVlOiAnZmxvYXQnIH0sXHJcbiAgICAgICAgeTogeyB2YWx1ZTogJ2Zsb2F0JyB9LFxyXG4gICAgICAgIGhlYWx0aDogeyB2YWx1ZTogJ2ludCcgfSxcclxuICAgICAgICBkYW1hZ2U6IHsgdmFsdWU6ICdpbnQnIH1cclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb247XHJcbiAgICB9LFxyXG4gICAgbW92ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEEqIHdvdWxkIGJlIG5pY2UuLi4gZm9yIG5vdywganVzdCBtb3ZlIHJhbmRvbS4uLlxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuaGVhbHRoIDw9IDApIHJldHVybjtcclxuICAgICAgICBsZXQgdHgsIHR5LCBjLCBzID0gdGhpcyxcclxuICAgICAgICAgICAgcGxheWVyUG9zaXRpb24gPSBHTS5wbGF5ZXIuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhO1xyXG4gICAgICAgIHZhciBhID0gbmV3IFRIUkVFLlZlY3RvcjMocGxheWVyUG9zaXRpb24ueCwgcGxheWVyUG9zaXRpb24ueiwgMCk7ICAgICAgICAgICAgICAgICAgICAgIC8vIDAsMFxyXG4gICAgICAgIHZhciBiID0gbmV3IFRIUkVFLlZlY3RvcjModGhpcy5wb3MuZGF0YS54LCB0aGlzLnBvcy5kYXRhLnosIDApO1xyXG4gICAgICAgIGlmIChhLmRpc3RhbmNlVG8oYikgPCAxLjkpIHsvLyBwbGF5ZXIgaXMgbmV4dCB0byB0aGUgbW9iIGF0dGFja1xyXG4gICAgICAgICAgICB0eCA9IGEueCAtIGIueDtcclxuICAgICAgICAgICAgdHkgPSBhLnkgLSBiLnk7XHJcbiAgICAgICAgICAgIGxldCBjb29yZHMgPSB7IHg6IHMucG9zLmRhdGEueCwgejogcy5wb3MuZGF0YS56IH07XHJcbiAgICAgICAgICAgIHZhciB0d2VlbiA9IG5ldyBUV0VFTi5Ud2Vlbihjb29yZHMpIC8vIENyZWF0ZSBhIG5ldyB0d2VlbiB0aGF0IG1vZGlmaWVzICdjb29yZHMnLlxyXG4gICAgICAgICAgICAgICAgLnRvKHsgeDogcy5wb3MuZGF0YS54ICsgdHgsIHo6IHMucG9zLmRhdGEueiArIHR5IH0sIDUwMCkgLy8gTW92ZSB0byAoMzAwLCAyMDApIGluIDEgc2Vjb25kLlxyXG4gICAgICAgICAgICAgICAgLnlveW8odHJ1ZSkucmVwZWF0KDEpXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuSW5PdXQpIC8vIFVzZSBhbiBlYXNpbmcgZnVuY3Rpb24gdG8gbWFrZSB0aGUgYW5pbWF0aW9uIHNtb290aC5cclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7IC8vIENhbGxlZCBhZnRlciB0d2Vlbi5qcyB1cGRhdGVzICdjb29yZHMnLlxyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke2Nvb3Jkcy54fSAuMjUgJHtjb29yZHMuen1gKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAub25Db21wbGV0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9zaG93IHNwbGF0XHJcbiAgICAgICAgICAgICAgICAgICAgR00ucGxheWVyLmNvbXBvbmVudHMucGxheWVyLmhpdCh0aGlzLmRhdGEuZGFtYWdlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LiAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgeyAvL21vdmVcclxuICAgICAgICAgICAgbGV0IHRyaWVzID0gMTA7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHR4ID0gcm5kKDMpIC0gMTtcclxuICAgICAgICAgICAgICAgIHR5ID0gcm5kKDMpIC0gMTtcclxuICAgICAgICAgICAgICAgIGMgPSBHTS5tYXAuZ2V0UGl4KHMuZGF0YS54ICsgdHgsIHMuZGF0YS55ICsgdHkpO1xyXG4gICAgICAgICAgICAgICAgdHJpZXMtLTtcclxuICAgICAgICAgICAgICAgIGlmKHRyaWVzID09PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGMuZGF0YVswXSA9PT0gMCB8fCBjLmRhdGFbMl0gIT09IDApXHJcblxyXG4gICAgICAgICAgICBsZXQgb2xkID0gR00ubWFwLmdldFBpeChzLmRhdGEueCwgcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICBvbGQuZGF0YVsyXSA9IDA7XHJcbiAgICAgICAgICAgIEdNLm1hcC5wdXRQaXgob2xkLCBzLmRhdGEueCwgcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICBjLmRhdGFbMl0gPSAweDg4O1xyXG4gICAgICAgICAgICBzLmRhdGEueCArPSB0eDtcclxuICAgICAgICAgICAgcy5kYXRhLnkgKz0gdHk7XHJcbiAgICAgICAgICAgIEdNLm1hcC5wdXRQaXgoYywgcy5kYXRhLngsIHMuZGF0YS55KTtcclxuICAgICAgICAgICAgbGV0IGNvb3JkcyA9IHsgeDogcy5wb3MuZGF0YS54LCB6OiBzLnBvcy5kYXRhLnogfTtcclxuICAgICAgICAgICAgdmFyIHR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcylcclxuICAgICAgICAgICAgICAgIC50byh7IHg6IHMucG9zLmRhdGEueCArIHR4LCB6OiBzLnBvcy5kYXRhLnogKyB0eSB9LCA0MDAgKyBybmQoNDAwKSlcclxuICAgICAgICAgICAgICAgIC5kZWxheShybmQoMjUwKSlcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5Jbk91dClcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7Y29vcmRzLnh9IC4yNSAke2Nvb3Jkcy56fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuaWQgPSBgZSR7Y29vcmRzLnggKyBzaXplIC8gMn0tJHtjb29yZHMueiArIHNpemUgLyAyfWA7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpdDogZnVuY3Rpb24gKGFtb3VudCkge1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEuaGVhbHRoIC09IGFtb3VudDtcclxuICAgICAgICBsZXQgZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcclxuICAgICAgICBlbnQuc2V0QXR0cmlidXRlKCdiaWxsYm9hcmQtc2hhZGVyJywgeyBpbmRleDogMTQsIGxvb2t1cDogMTIgfSk7XHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAnc3ByJyk7XHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnYXV0by1kZXN0cm95JywgJycpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZW50KTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuaWQgPSAnJztcclxuICAgICAgICAgICAgbGV0IHBpeCA9IEdNLm1hcC5nZXRQaXgodGhpcy5kYXRhLngsIHRoaXMuZGF0YS55KTtcclxuICAgICAgICAgICAgcGl4LmRhdGFbMl0gPSAwO1xyXG4gICAgICAgICAgICBHTS5tYXAucHV0UGl4KHBpeCwgdGhpcy5kYXRhLngsIHRoaXMuZGF0YS55KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnYXV0by1kZXN0cm95JywgJycpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9iLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qZ2xvYmFsIEFGUkFNRSwgR00sIFRIUkVFLCBzaXplLCBUV0VFTiwgcm5kKi9cclxuXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgncGxheWVyJywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgaGVhbHRoOiB7IHZhbHVlOiAnaW50JywgZGVmYXVsdDogMjUgfVxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmZvdW5kUGllY2VzID0gMDtcclxuICAgICAgICB0aGlzLmF0dGFjayA9IDE7XHJcbiAgICAgICAgdGhpcy5kZWZlbnNlID0gMDtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItc3ByaXRlJyk7XHJcbiAgICB9LFxyXG4gICAgbW92ZTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICBsZXQgcm90YXRpb25zID0gW1s0NSwgMCwgMzE1XSwgWzkwLCAwLCAyNzBdLCBbMTM1LCAxODAsIDIyNV1dO1xyXG4gICAgICAgIHZhciBzID0gdGhpcztcclxuICAgICAgICBpZiAoR00uZGF0YS5zdGF0ZSAhPSAwKSByZXR1cm47XHJcbiAgICAgICAgdmFyIGNvb3JkcyA9IHMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhO1xyXG4gICAgICAgIHZhciBhID0gbmV3IFRIUkVFLlZlY3RvcjMoZGF0YS54LCBkYXRhLnksIDApOyAgICAgICAgICAgICAgICAgICAgICAvLyAwLDBcclxuICAgICAgICB2YXIgYiA9IG5ldyBUSFJFRS5WZWN0b3IzKGNvb3Jkcy54LCBjb29yZHMueiwgMCk7ICAgICAgICAgICAgICAgICAgLy8gMSwwXHJcblxyXG5cclxuICAgICAgICBpZiAoYS5kaXN0YW5jZVRvKGIpID4gMS45IHx8IGEuZGlzdGFuY2VUbyhiKSA8IC4yKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIGMgPSBHTS5tYXAuZ2V0UGl4KGRhdGEueCArIHNpemUgLyAyLCBkYXRhLnkgKyBzaXplIC8gMik7XHJcbiAgICAgICAgaWYgKGMuZGF0YVsyXSA+IDApIHsgLy8gbW9iIGluIG5leHQgcG9zaXRpb25cclxuICAgICAgICAgICAgLy8gY29kZSBmb3IgYXR0YWNraW5nIHRoZSBtb2IuXHJcbiAgICAgICAgICAgIGxldCBtb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjZSR7ZGF0YS54ICsgc2l6ZSAvIDJ9LSR7ZGF0YS55ICsgc2l6ZSAvIDJ9YCkuY29tcG9uZW50cy5tb2I7XHJcbiAgICAgICAgICAgIGxldCBzcHJjb29yZCA9IHsgeDogMCwgejogMCB9O1xyXG4gICAgICAgICAgICBuZXcgVFdFRU4uVHdlZW4oc3ByY29vcmQpXHJcbiAgICAgICAgICAgICAgICAudG8oeyB4OiBhLnggLSBiLngsIHo6IGEueSAtIGIueSB9LCA1MDApXHJcbiAgICAgICAgICAgICAgICAueW95byh0cnVlKVxyXG4gICAgICAgICAgICAgICAgLnJlcGVhdCgxKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluT3V0KVxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwcml0ZS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7c3ByY29vcmQueH0gMCAke3NwcmNvb3JkLnp9YCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uQ29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vYi5oaXQodGhpcy5hdHRhY2sgKyBybmQoMikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoR00uZGF0YS5zdGF0ZSA+IDIpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgR00uZGF0YS5zdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdNLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpOyAvLyBTdGFydCB0aGUgdHdlZW4gaW1tZWRpYXRlbHkuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGMuZGF0YVsxXSA+IDApIHsgLy8gaXRlbSBpbiBuZXh0IHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYiR7ZGF0YS54ICsgc2l6ZSAvIDJ9LSR7ZGF0YS55ICsgc2l6ZSAvIDJ9YCkuY29tcG9uZW50cy5pdGVtLmdldCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtc2cgPSBgRm91bmQgJHtwLm59YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwLnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTogLy8gaGVhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmRhdGEuaGVhbHRoID0gTWF0aC5taW4ocy5kYXRhLmhlYWx0aCArPSA1LCAyNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IGBcXG5IZWFsdGggPSAke3MuZGF0YS5oZWFsdGh9LzI1YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjogLy8gc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocC5kID4gdGhpcy5hdHRhY2spIHRoaXMuYXR0YWNrID0gcC5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiAvLyBzaGllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlZmVuc2UgPSBNYXRoLm1heCh0aGlzLmRlZmVuc2UsIHAuYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IC8vIHBsYW5lIHBpZWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3VuZFBpZWNlcysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvdW5kUGllY2VzIDwgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gYFxcbk9ubHkgJHs1IC0gdGhpcy5mb3VuZFBpZWNlc30gcGllY2VzIGxlZnRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdNLmRhdGEuc3RhdGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHTS5tZXNzYWdlLndyaXRlKGBZb3UgZm91bmQgYWxsIHBpZWNlc1xcbmFuZCBlc2NhcGVkIHRoZSBwbGFuZXQhYCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgR00ubWVzc2FnZS53cml0ZShtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50Q2FtZXJhUm90YXRpb24gPSBHTS5jYW1lcmEuZ2V0QXR0cmlidXRlKCdyb3RhdGlvbicpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG9sZENhbWVyYVJvdGF0aW9uID0gY3VycmVudENhbWVyYVJvdGF0aW9uLnk7XHJcbiAgICAgICAgICAgIGxldCBuZXdDYW1lcmFSb3RhdGlvbiA9IHJvdGF0aW9uc1tNYXRoLmFicyh+KGEueSAtIGIueSkpXVtNYXRoLmFicyh+KGEueCAtIGIueCkpXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdyA9IE1hdGguYWJzKG9sZENhbWVyYVJvdGF0aW9uIC0gbmV3Q2FtZXJhUm90YXRpb24pO1xyXG4gICAgICAgICAgICBsZXQgY2N3ID0gTWF0aC5hYnMob2xkQ2FtZXJhUm90YXRpb24gLSAobmV3Q2FtZXJhUm90YXRpb24gLSAzNjApKTtcclxuICAgICAgICAgICAgaWYgKGNjdyA8IGN3KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdDYW1lcmFSb3RhdGlvbiAtPSAzNjA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRDYW1lcmFSb3RhdGlvbiA9IHsgeDogLTI3LCB5OiBuZXdDYW1lcmFSb3RhdGlvbiB9O1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudENhbWVyYVBvc2l0aW9uID0gR00uY2FtZXJhLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcclxuICAgICAgICAgICAgbGV0IHRhcmdldENhbWVyYVBvc2l0aW9uID0geyB4OiBNYXRoLnNpbihkZWdUb1JhZChuZXdDYW1lcmFSb3RhdGlvbikpICogMiwgejogTWF0aC5jb3MoZGVnVG9SYWQobmV3Q2FtZXJhUm90YXRpb24pKSAqIDIgfTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgLy8gbW92ZSB0aGUgcGxheWVyXHJcbiAgICAgICAgICAgIG5ldyBUV0VFTi5Ud2Vlbih7XHJcbiAgICAgICAgICAgICAgICB4OiBjb29yZHMueCwgejogY29vcmRzLnosXHJcbiAgICAgICAgICAgICAgICBjYW1wb3N4OiBjdXJyZW50Q2FtZXJhUG9zaXRpb24ueCxcclxuICAgICAgICAgICAgICAgIGNhbXBvc3o6IGN1cnJlbnRDYW1lcmFQb3NpdGlvbi56LFxyXG4gICAgICAgICAgICAgICAgY2Ftcm90eDogY3VycmVudENhbWVyYVJvdGF0aW9uLngsXHJcbiAgICAgICAgICAgICAgICBjYW1yb3R5OiBjdXJyZW50Q2FtZXJhUm90YXRpb24ueVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRvKHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBkYXRhLngsIHo6IGRhdGEueSxcclxuICAgICAgICAgICAgICAgICAgICBjYW1wb3N4OiB0YXJnZXRDYW1lcmFQb3NpdGlvbi54LFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbXBvc3o6IHRhcmdldENhbWVyYVBvc2l0aW9uLnosXHJcbiAgICAgICAgICAgICAgICAgICAgY2Ftcm90eDogdGFyZ2V0Q2FtZXJhUm90YXRpb24ueCxcclxuICAgICAgICAgICAgICAgICAgICBjYW1yb3R5OiB0YXJnZXRDYW1lcmFSb3RhdGlvbi55XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluT3V0KVxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0aGlzLnh9IC4yNSAke3RoaXMuen1gKTtcclxuICAgICAgICAgICAgICAgICAgICBHTS5jYW1lcmEuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3RoaXMuY2FtcG9zeH0gMC44ICR7dGhpcy5jYW1wb3N6fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIEdNLmNhbWVyYS5zZXRBdHRyaWJ1dGUoJ3JvdGF0aW9uJywgYCR7dGhpcy5jYW1yb3R4fSAke3RoaXMuY2Ftcm90eX0gMGApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBHTS51cGRhdGVUaWxlV2l0aFBsYXllcihkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgR00uY2FtZXJhLnJvdCA9IChuZXdDYW1lcmFSb3RhdGlvbiArIDM2MCkgJSAzNjA7IC8vIFRPRE86IE1ha2Ugc3VyZSBpdHMgYmV0d2VlbiAwIGFuZCAzNjAgYWdhaW5cclxuICAgICAgICAgICAgICAgICAgICBHTS5jYW1lcmEuc2V0QXR0cmlidXRlKCdyb3RhdGlvbicsIGAke3RhcmdldENhbWVyYVJvdGF0aW9uLnh9ICR7R00uY2FtZXJhLnJvdH0gMGApO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChHTS5kYXRhLnN0YXRlID4gMikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIEdNLmRhdGEuc3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIEdNLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpOyAvLyBTdGFydCB0aGUgdHdlZW4gaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpdDogZnVuY3Rpb24gKGFtb3VudCkge1xyXG5cclxuICAgICAgICBsZXQgZGFtYWdlID0gYW1vdW50ICogKHJuZCgxMDApIDwgdGhpcy5kZWZlbnNlID8gMCA6IDEpO1xyXG5cclxuICAgICAgICBsZXQgZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcclxuXHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnYmlsbGJvYXJkLXNoYWRlcicsIHsgaW5kZXg6IDE0LCBsb29rdXA6IGRhbWFnZSA+IDAgPyA1IDogMSB9KTtcclxuXHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAnc3ByJyk7XHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnYXV0by1kZXN0cm95JywgJycpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZW50KTtcclxuICAgICAgICBpZiAoZGFtYWdlID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuaGVhbHRoIC09IGRhbWFnZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuaGVhbHRoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ByaXRlLnNldEF0dHJpYnV0ZSgnYmlsbGJvYXJkLXNoYWRlcicsIHsgaW5kZXg6IDE1IH0pO1xyXG4gICAgICAgICAgICAgICAgR00uZGF0YS5zdGF0ZSA9IDM7XHJcbiAgICAgICAgICAgICAgICBHTS5tZXNzYWdlLndyaXRlKGBHYW1lIE92ZXJgLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIEdNLm1lc3NhZ2Uud3JpdGUoYE91Y2ghXFxuSGVhbHRoID0gJHt0aGlzLmRhdGEuaGVhbHRofS8yNWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wbGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdpdGVtJywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgeDogeyB2YWx1ZTogJ2Zsb2F0JyB9LFxyXG4gICAgICAgIHk6IHsgdmFsdWU6ICdmbG9hdCcgfSxcclxuICAgICAgICBwcm9wczogeyB2YWx1ZTogJ29iamVjdCcgfVxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbjtcclxuICAgIH0sXHJcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtc2hhZGVyXCIsIHsgaW5kZXg6IHMuZGF0YS5wcm9wcy5zLCBsb29rdXA6IHMuZGF0YS5wcm9wcy5pIH0pO1xyXG4gICAgICAgIGxldCBjb29yZHMgPSBzLmVsLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YTtcclxuICAgICAgICBjb29yZHMudCA9IDE7XHJcbiAgICAgICAgbGV0IHR4ID0gdGhpcy5kYXRhLngsIHR5ID0gdGhpcy5kYXRhLnk7XHJcbiAgICAgICAgbGV0IHBpeCA9IEdNLm1hcC5nZXRQaXgodHgsIHR5KTtcclxuICAgICAgICBwaXguZGF0YVsxXSA9IDA7XHJcbiAgICAgICAgR00ubWFwLnB1dFBpeChwaXgsIHR4LCB0eSk7XHJcbiAgICAgICAgIHZhciBwID0gbmV3IFByb21pc2UociA9PiB7XHJcbiAgICAgICAgICAgIHZhciB0MSA9IG5ldyBUV0VFTi5Ud2Vlbihjb29yZHMpIFxyXG4gICAgICAgICAgICAgICAgLnRvKHsgeTogY29vcmRzLnkgKyAxLCB0OiAwIH0sIDM1MClcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5PdXQpXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24gKCkgeyBcclxuICAgICAgICAgICAgICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7IHg6IGNvb3Jkcy54LCB5OiBjb29yZHMueSwgejogY29vcmRzLnogfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB2YXIgdDIgPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKVxyXG4gICAgICAgICAgICAgICAgLnRvKHsgeTogY29vcmRzLnkgLSAuNSwgdDogMCB9LCAzNTApXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuSW4pIFxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uICgpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgeyB4OiBjb29yZHMueCwgeTogY29vcmRzLnksIHo6IGNvb3Jkcy56IH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbkNvbXBsZXRlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocy5lbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcihzLmRhdGEucHJvcHMpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdDEuY2hhaW4odDIpLnN0YXJ0KCk7IC8vIFN0YXJ0IHRoZSB0d2VlbiBpbW1lZGlhdGVseS5cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH1cclxuXHJcblxyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pdGVtLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2F1dG8tZGVzdHJveScsIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgbWVzaCA9IHRoaXMuZWwuZ2V0T2JqZWN0M0QoJ21lc2gnKTtcclxuICAgICAgICBpZiAobWVzaCl7XHJcbiAgICAgICAgICAgIG1lc2gubWF0ZXJpYWwuZGVwdGhUZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvbGRDb29yZHMgPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YS54IHx8IDAsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YS55IHx8IDAsXHJcbiAgICAgICAgICAgICAgICB6OiB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YS56IHx8IDB9LFxyXG4gICAgICAgICAgICBuZXdDb29yZHMgPSB7IHk6IG9sZENvb3Jkcy55IH07XHJcblxyXG4gICAgICAgIGxldCB0d2VlbiA9IG5ldyBUV0VFTi5Ud2VlbihuZXdDb29yZHMpXHJcbiAgICAgICAgICAgIC50byh7IHk6IG9sZENvb3Jkcy55ICAtIC4yNSB9LCA1MDApIFxyXG4gICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuSW4pIFxyXG4gICAgICAgICAgICAub25VcGRhdGUoKCkgPT4geyBcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHsgeDogb2xkQ29vcmRzLngsIHk6IG5ld0Nvb3Jkcy55LCB6OiBvbGRDb29yZHMueiAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7IFxyXG4gICAgfVxyXG59KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXV0b2Rlc3Ryb3kuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnY2FudmFzLXRleHQnLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICB0ZXh0OiB7IHZhbHVlOiAnc3RyaW5nJyB9XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGJpdG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIHZhciBnID0gYml0bWFwLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgYml0bWFwLndpZHRoID0gMTAyNDtcclxuICAgICAgICBiaXRtYXAuaGVpZ2h0ID0gMTAyNDtcclxuICAgICAgICBiaXRtYXAuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcclxuICAgICAgICBnLmZvbnQgPSAnYm9sZCA0MHB4IEFyaWFsJztcclxuICAgICAgICBnLnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xyXG4gICAgICAgIGcudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgdGhpcy5tdWx0aWxpbmUoZywgdGhpcy5kYXRhLnRleHQsIDUxMiwgNTEyKTtcclxuICAgICAgICB2YXIgdGV4dHVyZSA9IG5ldyBUSFJFRS5UZXh0dXJlKGJpdG1hcClcclxuICAgICAgICB0ZXh0dXJlLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnbWF0ZXJpYWwnLCB7IHNyYzogdGV4dHVyZSwgdHJhbnNwYXJlbnQ6IHRydWUsIG9wYWNpdHk6MC44IH0pO1xyXG4gICAgfSxcclxuICAgIG11bHRpbGluZTogZnVuY3Rpb24gKGN0eCwgdGV4dCwgeCwgeSkge1xyXG4gICAgICAgIGxldCBsaCA9IGN0eC5tZWFzdXJlVGV4dChcIk1cIikud2lkdGggKiAxLjIsXHJcbiAgICAgICAgICAgIHQgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdC5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNiZTI2MzMnO1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQodFtpXSwgeCwgeSk7XHJcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjMDAwJztcclxuICAgICAgICAgICAgY3R4LnN0cm9rZVRleHQodFtpXSwgeCwgeSk7XHJcbiAgICAgICAgICAgIHkgKz0gbGg7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdyaXRlOiBmdW5jdGlvbiAodGV4dCwgZG9udEZhZGUpIHtcclxuICAgICAgICB0aGlzLmRhdGEudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB2YXIgZCA9IHsgbzogMC44IH07XHJcbiAgICAgICAgaWYgKCFkb250RmFkZSkge1xyXG4gICAgICAgICAgICB0aGlzLnQgPSBuZXcgVFdFRU4uVHdlZW4oZClcclxuICAgICAgICAgICAgICAgIC50byh7IG86IDAgfSwgMjUwKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KDIwMDApXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsIHsgb3BhY2l0eTogZC5vIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY2FudmFzdGV4dC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==