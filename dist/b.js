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
	__webpack_require__(12);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	window.rnd = m => ~~(Math.random() * m);
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
	        h: [2, 3], // health: between 2 and 5
	        i: 6,  // color index 8
	        m: 0, // minimal distance from start
	        c: 70 // change=70%
	    },
	    {
	        h: [4, 4], // health: between 4 and 8
	        i: 7, // color index 8
	        m: 10, // minimal distance from start
	        c: 20 //change 30%        
	    },
	    {
	        h: [6, 6], // health: between 6 and 12
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
	            d: 5, // damage
	            s: 5, //sprite
	            i: 1, // palette index
	            m: 0, // minimal distance from start
	            c: 20, // change of the item spawning
	
	        }, {
	            t: 2, // subtype : sword",
	            n: "a golden sword", //name
	            d: 5, // damage
	            s: 5, //sprite
	            i: 23, // palette index
	            m: 0, // minimal distance from start
	            c: 10, // change of the item spawning
	        }, {
	            t: 2, // subtype : sword",
	            n: "a diamond sword", //name
	            d: 5, // damage
	            s: 5, //sprite
	            i: 24, // palette index
	            m: 0, // minimal distance from start
	            c: 2, // change of the item spawning
	        }, {
	            t: 3, // subtype : shield",
	            n: "an iron shield", //name
	            b: 2, // block value
	            s: 4, //sprite
	            i: 0, // palette index
	            m: 0, // minimal distance from start
	            c: 20, // change of the item spawning
	        }, {
	            t: 3, // subtype : shield",
	            n: "a golden shield", //name
	            b: 4, // block value
	            s: 4, //sprite
	            i: 23, // palette index
	            m: 0, // minimal distance from start
	            c: 10, // change of the item spawning
	        }, {
	            t: 3, // subtype : shield",
	            n: "a diamond shield", //name
	            b: 7, // block value
	            s: 4, //sprite
	            i: 24, // palette index
	            m: 0, // minimal distance from start
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
	        fogStart:{value:10},
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
/* 5 */,
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
	                    //calcalate new position so that the '2s' go on top of eachother, but tiles not overlap
	                    //if they overlap try a different '2'
	                    //if there isn't a 2, try another piece
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
	            mapContext.fillStyle = "#400";
	            if (!first) mapContext.fillRect(targetX + piece.exits[q].x || 0, targetY + piece.exits[q].y || 0, 1, 1);
	            mapContext.fillStyle = !first ? "#400" : "#600";
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
	        this.message = document.querySelector('[message]').components.message;
	        this.camera.rot = 0;
	        window.GM = this;
	    },
	    update: function (d) {
	        switch (this.data.state) {
	            case 0:
	                console.log('player');
	                this.player.components.player.move(d);
	                break;
	            case 1:
	                console.log('enemy');
	                let mobs = document.querySelectorAll('[mob]');
	                mobs.forEach(d => d.components.mob.move());
	                this.data.state = 0;
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
	        health: { value: 'int' }
	    },
	    init: function () {
	        this.pos = this.el.components.position;
	    },
	    move: function () {
	        // A* would be nice... for now, just move random...
	        let tx, ty, c, s = this;
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
	            })
	            .start(); // Start the tween immediately.       
	    }
	});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	AFRAME.registerComponent('player', {
	    schema: {
	        health: { value: 'int', default: 10 }
	    },
	    init: function () {
	        this.foundPieces = 0;
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
	        c = GM.map.getPix(data.x + size / 2, data.y + size / 2);
	
	        if (c.data[1] > 0) { // item in next position
	            document.querySelector(`#b${data.x + size / 2}-${data.y + size / 2}`).components.item.get()
	                .then(p => {
	                    let msg = `Found ${p.n}`;
	                    switch (p.t) {
	                        case 1: // heart
	                            s.data.health = Math.max(s.data.health++, 10);
	                            msg += `\nHealth = ${s.data.health}/10`;
	                            break;
	                        case 2: // sword
	                            break;
	                        case 3: // shield
	                            break;
	                        case 8: // plane piece
	                            this.foundPieces++;
	                            msg += `\nOnly ${5 - this.foundPieces} pieces left`;
	                            break;
	                    }
	                    GM.message.write(msg);
	                });
	        }
	
	        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
	            .to({ x: data.x, z: data.y }, 1000) // Move to (300, 200) in 1 second.
	            .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
	            .onUpdate(function () { // Called after tween.js updates 'coords'.
	                s.el.setAttribute('position', `${coords.x} .25 ${coords.z}`);
	            })
	            .onComplete(function () {
	                GM.data.state = 1;
	                GM.update();
	            })
	            .start(); // Start the tween immediately.
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

	AFRAME.registerComponent('message', {
	    init: function () {
	        this.text = this.el.components.text;
	    },
	    write: function (message) {
	        if (this.t) this.t.stop();
	
	        this.el.setAttribute('text', { value: message, opacity: 0.8 });
	        var d = { o: 0.8 };
	        this.t = new TWEEN.Tween(d)
	            .to({ o: 0 }, 250)
	            .delay(2000)
	            .onUpdate(() => {
	                this.el.setAttribute('text', { opacity: d.o });
	            })
	            .start();
	    }
	});

/***/ }),
/* 12 */
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
	            let b = document.createElement("a-entity"), tx, ty;
	            let p = this.randomPlace();
	            let item = this.getWeighted(D.items);
	            item.map = p;
	                      
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
	            b.setAttribute('mob', { x: p.x, y: p.y, health: rnd(mob.h[1]) + mob.h[0] });
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmQ4ODcxZTRlNGU2Y2Y5OTNiODQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215U2hhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9iaWxsYm9hcmRTaGFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcGdlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsYUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsRTs7Ozs7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxhQUFZLGNBQWM7QUFDMUIsY0FBYTtBQUNiLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZSxhQUFhO0FBQzVCLGlCQUFnQix5QkFBeUI7QUFDekMsMEJBQXlCLGtCQUFrQjtBQUMzQyxrQkFBaUIsb0JBQW9CO0FBQ3JDLGlCQUFnQixxQ0FBcUM7QUFDckQsNEJBQTJCLFNBQVMsa0JBQWtCLEVBQUU7QUFDeEQsa0JBQWlCLFNBQVMsaUJBQWlCLEVBQUU7QUFDN0Msb0JBQW1CLFdBQVc7QUFDOUIsa0JBQWlCLFlBQVk7QUFDN0Isc0JBQXFCLGtCQUFrQjtBQUN2QyxvQkFBbUIsa0NBQWtDO0FBQ3JELGdCQUFlLHdDQUF3QztBQUN2RCxzQkFBcUI7QUFDckIsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRDtBQUNBO0FBQ0EsRUFBQyxDOzs7Ozs7QUNqRUQ7QUFDQTtBQUNBO0FBQ0EsWUFBVyxXQUFXO0FBQ3RCLGNBQWE7QUFDYixJQUFHO0FBQ0g7QUFDQSw0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFlLGFBQWE7QUFDNUIsaUJBQWdCLHlCQUF5QjtBQUN6QywwQkFBeUIsaUJBQWlCO0FBQzFDLGlCQUFnQixxQ0FBcUM7QUFDckQsNEJBQTJCLFNBQVMsa0JBQWtCLEVBQUU7QUFDeEQsa0JBQWlCLFNBQVMsaUJBQWlCLEVBQUU7QUFDN0Msa0JBQWlCLG9CQUFvQjtBQUNyQyxzQkFBcUIsa0JBQWtCO0FBQ3ZDLG1CQUFrQixTQUFTO0FBQzNCLGlCQUFnQixTQUFTO0FBQ3pCLG9CQUFtQixXQUFXO0FBQzlCLG1CQUFrQjtBQUNsQixRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUQ7QUFDQTtBQUNBLEVBQUMsQzs7Ozs7Ozs7QUN4REQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBdUIsUUFBUTtBQUMvQjtBQUNBLDRCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLG1CQUFtQjtBQUMxQywrQkFBOEI7QUFDOUI7QUFDQSw0QkFBMkIsc0JBQXNCO0FBQ2pELGdDQUErQixzQkFBc0I7QUFDckQ7QUFDQSwrQ0FBOEMsYUFBYTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQix3QkFBd0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0Esa0NBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0MsbUNBQW1DO0FBQ3ZFO0FBQ0Esa0JBQWlCO0FBQ2pCLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx1QkFBc0IsbUNBQW1DO0FBQ3pELHdCQUF1QixXQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw0Qjs7Ozs7O0FDM09BO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxFQUFDOzs7Ozs7Ozs7Ozs7QUM5QkQ7QUFDQTtBQUNBLGFBQVksaUJBQWlCO0FBQzdCLGFBQVksaUJBQWlCO0FBQzdCLGtCQUFpQjtBQUNqQixNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0I7QUFDdEI7QUFDQSxrQkFBaUIsNkNBQTZDO0FBQzlEO0FBQ0E7QUFDQTtBQUNBLGtEQUFpRCxTQUFTLE9BQU8sU0FBUztBQUMxRSxjQUFhO0FBQ2Isc0JBQXFCO0FBQ3JCO0FBQ0EsRUFBQyxFOzs7Ozs7QUNuQ0Q7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRDtBQUNyRCwwREFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTRCO0FBQzVCLHlDQUF3QyxrQkFBa0IsR0FBRyxrQkFBa0I7QUFDL0U7QUFDQSx3Q0FBdUMsSUFBSTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxrREFBaUQsY0FBYztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxxQkFBcUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCOztBQUVBO0FBQ0Esa0JBQWlCLHVCQUF1QjtBQUN4QztBQUNBLG9DQUFtQztBQUNuQyxrREFBaUQsU0FBUyxPQUFPLFNBQVM7QUFDMUUsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYixzQkFBcUI7QUFDckI7QUFDQSxFQUFDLEU7Ozs7OztBQ3BERDtBQUNBO0FBQ0EsYUFBWSxpQkFBaUI7QUFDN0IsYUFBWSxpQkFBaUI7QUFDN0IsaUJBQWdCO0FBQ2hCLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxpREFBZ0QsZ0RBQWdEO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsd0JBQXdCO0FBQzdDO0FBQ0Esd0M7QUFDQSxvREFBbUQsd0NBQXdDO0FBQzNGLGtCQUFpQjtBQUNqQjtBQUNBLHNCQUFxQix5QkFBeUI7QUFDOUM7QUFDQSx3QztBQUNBLG9EQUFtRCx3Q0FBd0M7QUFDM0Ysa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQixrQ0FBaUM7QUFDakMsVUFBUztBQUNUO0FBQ0E7OztBQUdBLEVBQUMsRTs7Ozs7O0FDekNEO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBLHVDQUFzQywrQkFBK0I7QUFDckUsa0JBQWlCO0FBQ2pCO0FBQ0Esa0JBQWlCLE9BQU87QUFDeEI7QUFDQTtBQUNBLCtDQUE4QyxlQUFlO0FBQzdELGNBQWE7QUFDYjtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNqQkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLFVBQVU7QUFDakMsNEJBQTJCLFVBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRkFBOEY7QUFDOUYsb0dBQW1HO0FBQ25HLG9HQUFtRztBQUNuRywrRkFBOEY7QUFDOUY7QUFDQSxrRUFBaUU7QUFDakUsc0JBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQSw2RUFBNEU7QUFDNUUsMkRBQTBELE9BQU87QUFDakUsMkVBQTBFLE9BQU87QUFDakYsc0JBQXFCOztBQUVyQix1REFBc0QsRUFBRSxLQUFLLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QztBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULGlCQUFnQjtBQUNoQixNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0Esd0JBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrREFBaUQsV0FBVyxFQUFFLElBQUksZ0NBQWdDO0FBQ2xHLDJDQUEwQyxHQUFHLE9BQU8sR0FBRztBQUN2RDtBQUNBLHFDQUFvQyw4QkFBOEI7QUFDbEUsd0JBQXVCLElBQUksR0FBRyxJQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSx3QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBLGtEQUFpRCwwQkFBMEI7QUFDM0UsMkNBQTBDLEdBQUcsT0FBTyxHQUFHO0FBQ3ZEO0FBQ0Esb0NBQW1DLG1EQUFtRDtBQUN0Rix3QkFBdUIsSUFBSSxHQUFHLElBQUk7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSx3QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhOztBQUViO0FBQ0E7O0FBRUEsa0RBQWlELHFCQUFxQjtBQUN0RSwyQ0FBMEMsR0FBRyxPQUFPLEdBQUc7QUFDdkQ7QUFDQSxxQ0FBb0MsbUNBQW1DO0FBQ3ZFLHdCQUF1QixJQUFJLEdBQUcsSUFBSTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMiLCJmaWxlIjoiYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGJkODg3MWU0ZTRlNmNmOTkzYjg0IiwicmVxdWlyZSgnLi9nbG9iYWwnKTtcclxucmVxdWlyZSgnLi9kYXRhJyk7XHJcbnJlcXVpcmUoJy4vbXlTaGFkZXInKTtcclxucmVxdWlyZSgnLi9iaWxsYm9hcmRTaGFkZXInKTtcclxucmVxdWlyZSgnLi9tYXAnKTtcclxucmVxdWlyZSgnLi9nYW1lbWFuYWdlcicpO1xyXG5yZXF1aXJlKCcuL21vYicpO1xyXG5yZXF1aXJlKCcuL3BsYXllcicpO1xyXG5yZXF1aXJlKCcuL2l0ZW0nKTtcclxucmVxdWlyZSgnLi9tZXNzYWdlJyk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIndpbmRvdy5ybmQgPSBtID0+IH5+KE1hdGgucmFuZG9tKCkgKiBtKTtcclxud2luZG93LnQgPSBuZXcgVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSgnLi9sb3N0LnBuZycpO1xyXG53aW5kb3cudC5taW5GaWx0ZXIgPSB3aW5kb3cudC5tYWdGaWx0ZXIgPSAxMDAzO1xyXG53aW5kb3cucGFsID0gbmV3IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoJy4vcGFsZXR0ZXMucG5nJyk7XHJcbndpbmRvdy5wYWwubWluRmlsdGVyID0gd2luZG93LnBhbC5tYWdGaWx0ZXIgPSAxMDAzO1xyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIndpbmRvdy5EID0ge1xyXG4gICAgcGxheWVyOiB7XHJcbiAgICAgICAgdDogMSwgIC8vIHR5cGUgOiBwbGF5ZXJcclxuICAgICAgICBzOiAyLCAgLy8gc3ByaXRlOiAyICAgIFxyXG4gICAgICAgIGg6IDEwLCAvLyBzdGFydCBoZWFsdGhcclxuICAgIH0sIG1vYnM6IFt7XHJcbiAgICAgICAgaDogWzIsIDNdLCAvLyBoZWFsdGg6IGJldHdlZW4gMiBhbmQgNVxyXG4gICAgICAgIGk6IDYsICAvLyBjb2xvciBpbmRleCA4XHJcbiAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgYzogNzAgLy8gY2hhbmdlPTcwJVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoOiBbNCwgNF0sIC8vIGhlYWx0aDogYmV0d2VlbiA0IGFuZCA4XHJcbiAgICAgICAgaTogNywgLy8gY29sb3IgaW5kZXggOFxyXG4gICAgICAgIG06IDEwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICBjOiAyMCAvL2NoYW5nZSAzMCUgICAgICAgIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoOiBbNiwgNl0sIC8vIGhlYWx0aDogYmV0d2VlbiA2IGFuZCAxMlxyXG4gICAgICAgIGk6IDksICAvLyBjb2xvciBpbmRleCA4XHJcbiAgICAgICAgbTogMzAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgIGM6IDEwIC8vIGNoYW5nZSAxMCVcclxuICAgIH1dLFxyXG4gICAgZmxvb3JzOiBbe1xyXG4gICAgICAgIHQ6IDMsIC8vIHR5cGU6IGZsb29yXHJcbiAgICAgICAgYjogMSwgLy8gYmlvbWU6IDFcclxuICAgICAgICBzOiBbMV0sXHJcbiAgICAgICAgaTogWzIsIDVdXHJcbiAgICB9XSxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0OiAxLFxyXG4gICAgICAgICAgICBuOiBcImEgaGVhcnRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIHM6IDEzLCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAtMSwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogNzAsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMiwgLy8gc3VidHlwZSA6IHN3b3JkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYW4gaXJvbiBzd29yZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgZDogNSwgLy8gZGFtYWdlXHJcbiAgICAgICAgICAgIHM6IDUsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDEsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDIwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAyLCAvLyBzdWJ0eXBlIDogc3dvcmRcIixcclxuICAgICAgICAgICAgbjogXCJhIGdvbGRlbiBzd29yZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgZDogNSwgLy8gZGFtYWdlXHJcbiAgICAgICAgICAgIHM6IDUsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDIzLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAxMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAyLCAvLyBzdWJ0eXBlIDogc3dvcmRcIixcclxuICAgICAgICAgICAgbjogXCJhIGRpYW1vbmQgc3dvcmRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGQ6IDUsIC8vIGRhbWFnZVxyXG4gICAgICAgICAgICBzOiA1LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAyNCwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogMiwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAzLCAvLyBzdWJ0eXBlIDogc2hpZWxkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYW4gaXJvbiBzaGllbGRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGI6IDIsIC8vIGJsb2NrIHZhbHVlXHJcbiAgICAgICAgICAgIHM6IDQsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDAsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDIwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDMsIC8vIHN1YnR5cGUgOiBzaGllbGRcIixcclxuICAgICAgICAgICAgbjogXCJhIGdvbGRlbiBzaGllbGRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGI6IDQsIC8vIGJsb2NrIHZhbHVlXHJcbiAgICAgICAgICAgIHM6IDQsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDIzLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAxMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAzLCAvLyBzdWJ0eXBlIDogc2hpZWxkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYSBkaWFtb25kIHNoaWVsZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgYjogNywgLy8gYmxvY2sgdmFsdWVcclxuICAgICAgICAgICAgczogNCwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMjQsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDUsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH1dLFxyXG4gICAgb2JqczogW3sgLy9vYmplY3RpdmVzXHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDEsIC8vIHBpZWNlID0xXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgY2FiaW5cIixcclxuICAgICAgICBzOiA2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHQ6IDgsIC8vIGl0ZW0gdHlwZSA9IDhcclxuICAgICAgICBwOiAyLFxyXG4gICAgICAgIG46IFwieW91ciBwbGFuZSdzIGxlZnQgd2luZ1wiLFxyXG4gICAgICAgIHM6IDdcclxuICAgIH0se1xyXG4gICAgICAgIHQ6IDgsIC8vIGl0ZW0gdHlwZSA9IDhcclxuICAgICAgICBwOiAzLFxyXG4gICAgICAgIG46IFwieW91ciBwbGFuZSdzIGJvZHlcIixcclxuICAgICAgICBzOiA4XHJcbiAgICB9LHtcclxuICAgICAgICB0OiA4LCAvLyBpdGVtIHR5cGUgPSA4XHJcbiAgICAgICAgcDogNCxcclxuICAgICAgICBuOiBcInlvdXIgcGxhbmUncyByaWdodCB3aW5nXCIsXHJcbiAgICAgICAgczogOVxyXG4gICAgfSx7XHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDUsXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgdGhydXN0ZXJcIixcclxuICAgICAgICBzOiAxMFxyXG4gICAgfV1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFsIFRIUkVFLCBBRlJBTUUgKi9cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdteXRleHR1cmUnLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBjb2xvcjpcclxuICAgIHtcclxuICAgICAgdHlwZTogJ2NvbG9yJ1xyXG4gICAgfSxcclxuICAgIGluZGV4OiB7IHR5cGU6ICdpbnQnIH0sXHJcbiAgICBsb29rdXA6IHsgdHlwZTogJ2ludCcsIGRlZmF1bHQ6IDAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCB1c2luZyB0aGUgdHdvIHNoYWRlcnMgZGVmaW5lZFxyXG4gICAqIGluIHZlcnRleC5nbHNsIGFuZCBmcmFnbWVudC5nbHNsLlxyXG4gICAqL1xyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhZ21lbnQnKS50ZXh0Q29udGVudDtcclxuICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVydGV4JykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgaW5kZXg6IHsgdmFsdWU6IHRoaXMuZGF0YS5pbmRleCB9LFxyXG4gICAgICAgIERpZmZ1c2VUZXh0dXJlOiB7IHZhbHVlOiB3aW5kb3cudCB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LFxyXG4gICAgICAgIGNvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoZGF0YS5jb2xvcikgfSxcclxuICAgICAgICBzcHJpdGVEaW1lbnNpb25zOiB7IHZhbHVlOiB7IHg6IDE2LjAsIHk6IDEuMCB9IH0sXHJcbiAgICAgICAgcmVwZWF0OiB7IHZhbHVlOiB7IHg6IDEuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICBmb2dTdGFydDogeyB2YWx1ZTogNSB9LFxyXG4gICAgICAgIGZvZ0VuZDogeyB2YWx1ZTogMTUgfSxcclxuICAgICAgICBsb29rdXBJbmRleDp7dmFsdWU6ZGF0YS5sb29rdXB9LFxyXG4gICAgICAgIGZvZ0NvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMCwgMCwgMCkgfSxcclxuICAgICAgICB0aW50OiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMjU1LCAyNTUsIDI1NSkgfSxcclxuICAgICAgICB0aW50QW1vdW50OiB7IHZhbHVlOiAwIH1cclxuICAgICAgfSxcclxuICAgICAgdmVydGV4U2hhZGVyLFxyXG4gICAgICBmcmFnbWVudFNoYWRlclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFwcGx5VG9NZXNoKCk7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGVsLWxvYWRlZCcsICgpID0+IHRoaXMuYXBwbHlUb01lc2goKSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIFNoYWRlck1hdGVyaWFsIHdoZW4gY29tcG9uZW50IGRhdGEgY2hhbmdlcy5cclxuICAgKi9cclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMuaW5kZXgudmFsdWUgPSB0aGlzLmRhdGEuaW5kZXg7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLmxvb2t1cEluZGV4LnZhbHVlPXRoaXMuZGF0YS5sb29rdXA7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBBcHBseSB0aGUgbWF0ZXJpYWwgdG8gdGhlIGN1cnJlbnQgZW50aXR5LlxyXG4gICAqL1xyXG4gIGFwcGx5VG9NZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZXNoID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgaWYgKG1lc2gpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueCA9ICt0aGlzLmVsLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpIHx8IDE7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnkgPSArdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIikgfHwgMTtcclxuICAgICAgbWVzaC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBPbiBlYWNoIGZyYW1lLCB1cGRhdGUgdGhlICd0aW1lJyB1bmlmb3JtIGluIHRoZSBzaGFkZXJzLlxyXG4gICAqL1xyXG4gIC8vIHRpY2s6IGZ1bmN0aW9uICh0KSB7XHJcbiAgLy8gICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0IC8gMTAwMDsgXHJcbiAgLy8gfVxyXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL215U2hhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGdsb2JhbCBUSFJFRSwgQUZSQU1FICovXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnYmlsbGJvYXJkLXRleHR1cmUnLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBpbmRleDp7dHlwZTonaW50J30sXHJcbiAgICBsb29rdXA6IHsgdHlwZTogJ2ludCcsIGRlZmF1bHQ6IC0xIH1cclxuICB9LFxyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7ICAgIFxyXG4gICAgdmFyIGZyYWdtZW50U2hhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYWdtZW50JykudGV4dENvbnRlbnQ7XHJcbiAgICB2YXIgdmVydGV4U2hhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcnRleC1iaWxsYm9hcmQnKS50ZXh0Q29udGVudDtcclxuICAgIFxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgaW5kZXg6IHsgdmFsdWU6IHRoaXMuZGF0YS5pbmRleCB9LFxyXG4gICAgICAgIERpZmZ1c2VUZXh0dXJlOiB7IHZhbHVlOiB3aW5kb3cudH0sXHJcbiAgICAgICAgY29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcihkYXRhLmNvbG9yKSB9LFxyXG4gICAgICAgIHNwcml0ZURpbWVuc2lvbnM6IHsgdmFsdWU6IHsgeDogMTYuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICByZXBlYXQ6IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LCAgICBcclxuICAgICAgICBsb29rdXBJbmRleDp7dmFsdWU6ZGF0YS5sb29rdXB9LFxyXG4gICAgICAgIGZvZ1N0YXJ0Ont2YWx1ZToxMH0sXHJcbiAgICAgICAgZm9nRW5kOnt2YWx1ZToxNX0sXHJcbiAgICAgICAgYWxwaGF0ZXN0Ont2YWx1ZTowLjk1fSxcclxuICAgICAgICBmb2dDb2xvcjp7dmFsdWU6IG5ldyBUSFJFRS5Db2xvcigwLDAsMCl9XHJcbiAgICAgIH0sXHJcbiAgICAgIHZlcnRleFNoYWRlcixcclxuICAgICAgZnJhZ21lbnRTaGFkZXJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLk11bHRpcGx5QmxlbmRpbmc7XHJcbiAgICB0aGlzLmFwcGx5VG9NZXNoKCk7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGVsLWxvYWRlZCcsICgpID0+IHRoaXMuYXBwbHlUb01lc2goKSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIFNoYWRlck1hdGVyaWFsIHdoZW4gY29tcG9uZW50IGRhdGEgY2hhbmdlcy5cclxuICAgKi9cclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMuaW5kZXgudmFsdWUgPSB0aGlzLmRhdGEuaW5kZXg7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLmxvb2t1cEluZGV4LnZhbHVlID0gdGhpcy5kYXRhLmxvb2t1cDtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IHRoZSBtYXRlcmlhbCB0byB0aGUgY3VycmVudCBlbnRpdHkuXHJcbiAgICovXHJcbiAgYXBwbHlUb01lc2g6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG1lc2ggPSB0aGlzLmVsLmdldE9iamVjdDNEKCdtZXNoJyk7XHJcbiAgICBpZiAobWVzaCkge1xyXG4gICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlcGVhdC52YWx1ZS54ID0rdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKXx8MTtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueSA9K3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpfHwxO1xyXG4gICAgICBtZXNoLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuICAgIH1cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIE9uIGVhY2ggZnJhbWUsIHVwZGF0ZSB0aGUgJ3RpbWUnIHVuaWZvcm0gaW4gdGhlIHNoYWRlcnMuXHJcbiAgICovXHJcbiAgLy8gdGljazogZnVuY3Rpb24gKHQpIHtcclxuICAvLyAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudGltZS52YWx1ZSA9IHQgLyAxMDAwOyBcclxuICAvLyB9XHJcbn0pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmlsbGJvYXJkU2hhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG52YXIgZ2VuZXJhdG9yID0ge1xyXG4gICAgZ286IChtYXBXaWR0aCwgZGVwdGgpID0+IHtcclxuICAgICAgICB2YXIgcGllY2VzID0gW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsxLCAwLCAyLCAwLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMiwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMCwgMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMCwgMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMiwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDAsIDAsIDAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMiwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICAvLyB2YXIgbWFwV2lkdGggPSAyNTY7XHJcblxyXG4gICAgICAgIGxldCBwbCA9IHBpZWNlcy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZSA9IHBpZWNlc1tpXS5zbGljZSgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNsb25lLmxlbmd0aDsgaisrKVxyXG4gICAgICAgICAgICAgICAgY2xvbmVbal0gPSBjbG9uZVtqXS5zbGljZSgpLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgcGllY2VzLnB1c2goY2xvbmUpO1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUyID0gcGllY2VzW2ldLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGNsb25lMiA9IGNsb25lMi5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHBpZWNlcy5wdXNoKGNsb25lMik7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZTMgPSBjbG9uZS5zbGljZSgpO1xyXG4gICAgICAgICAgICBjbG9uZTMgPSBjbG9uZTMucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBwaWVjZXMucHVzaChjbG9uZTMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBpZWNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBwaWVjZXNbaV0uc2l6ZSA9IHsgdzogcGllY2VzW2ldWzBdLmxlbmd0aCwgaDogcGllY2VzW2ldLmxlbmd0aCB9O1xyXG4gICAgICAgICAgICBwaWVjZXNbaV0uZXhpdHMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwaWVjZXNbaV0uc2l6ZS5oOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGggPSAwOyBoIDwgcGllY2VzW2ldLnNpemUudzsgaCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpZWNlc1tpXVtqXVtoXSA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaWVjZXNbaV0uZXhpdHMucHVzaCh7IHg6IGgsIHk6IGogfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbWFwQ2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgbWFwQ2FudmFzLndpZHRoID0gbWFwV2lkdGg7XHJcbiAgICAgICAgbWFwQ2FudmFzLmhlaWdodCA9IG1hcFdpZHRoO1xyXG5cclxuICAgICAgICAvLyBUZW1wIGR1cmluZyBkZXZlbG9wbWVudFxyXG4gICAgICAgIG1hcENhbnZhcy5zdHlsZS53aWR0aCA9ICcxMDI0cHgnO1xyXG4gICAgICAgIG1hcENhbnZhcy5zdHlsZS5oZWlnaHQgPSAnMTAyNHB4JztcclxuICAgICAgICBtYXBDYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1hcENhbnZhcyk7XHJcbiAgICAgICAgLy8gRU5EXHJcblxyXG4gICAgICAgIHZhciBtYXBDb250ZXh0ID0gbWFwQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMClcIjtcclxuICAgICAgICBtYXBDb250ZXh0LmZpbGxSZWN0KDAsIDAsIG1hcFdpZHRoLCBtYXBXaWR0aCk7XHJcblxyXG4gICAgICAgIGxldCBmaXJzdCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGFkZFJvb20gPSAoZXhpdCwgc3BlY2lhbCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGllY2U7XHJcbiAgICAgICAgICAgIGxldCBleGl0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY2xlYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHRhcmdldFg7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRZO1xyXG4gICAgICAgICAgICBsZXQgdHJpZXMgPSAyNTtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcGllY2UgPSBwaWVjZXNbcm5kKHBpZWNlcy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHEgPSAwOyBxIDwgcGllY2UuZXhpdHMubGVuZ3RoOyBxKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NhbGNhbGF0ZSBuZXcgcG9zaXRpb24gc28gdGhhdCB0aGUgJzJzJyBnbyBvbiB0b3Agb2YgZWFjaG90aGVyLCBidXQgdGlsZXMgbm90IG92ZXJsYXBcclxuICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZXkgb3ZlcmxhcCB0cnkgYSBkaWZmZXJlbnQgJzInXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpc24ndCBhIDIsIHRyeSBhbm90aGVyIHBpZWNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCA9IGV4aXQueCAtIHBpZWNlLmV4aXRzW3FdLng7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSA9IGV4aXQueSAtIHBpZWNlLmV4aXRzW3FdLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZ0RhdGEgPSBtYXBDb250ZXh0LmdldEltYWdlRGF0YSh0YXJnZXRYLCB0YXJnZXRZLCBwaWVjZS5zaXplLncsIHBpZWNlLnNpemUuaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXIgPSBpbWdEYXRhLmRhdGEuZXZlcnkoZCA9PiBkID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdHJpZXMtLTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodHJpZXMgPiAwICYmICFjbGVhcik7XHJcbiAgICAgICAgICAgIGlmICghY2xlYXIpIHtcclxuICAgICAgICAgICAgICAgIHBpZWNlID0gW1sxXV07XHJcbiAgICAgICAgICAgICAgICBwaWVjZS5leGl0cyA9IFt7fV07XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRYID0gZXhpdC54O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WSA9IGV4aXQueTtcclxuICAgICAgICAgICAgICAgIHEgPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCIjNDAwXCI7XHJcbiAgICAgICAgICAgIGlmICghZmlyc3QpIG1hcENvbnRleHQuZmlsbFJlY3QodGFyZ2V0WCArIHBpZWNlLmV4aXRzW3FdLnggfHwgMCwgdGFyZ2V0WSArIHBpZWNlLmV4aXRzW3FdLnkgfHwgMCwgMSwgMSk7XHJcbiAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gIWZpcnN0ID8gXCIjNDAwXCIgOiBcIiM2MDBcIjtcclxuICAgICAgICAgICAgaWYgKHNwZWNpYWwgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCIjRTAwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwZWNpYWwgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCIjQTAwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgcGllY2UuZm9yRWFjaCgoaSwgcHkpID0+IHtcclxuICAgICAgICAgICAgICAgIGkuZm9yRWFjaCgoaiwgcHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsUmVjdCh0YXJnZXRYICsgcHgsIHRhcmdldFkgKyBweSwgMSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXRzLnB1c2goeyB4OiB0YXJnZXRYICsgcHgsIHk6IHRhcmdldFkgKyBweSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4aXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9vcHMgPSBkZXB0aDtcclxuICAgICAgICBsZXQgZXhpdHMgPSBbeyB4OiBtYXBXaWR0aCAvIDIsIHk6IG1hcFdpZHRoIC8gMiB9XTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3BzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5ld0V4aXRzID0gW107XHJcbiAgICAgICAgICAgIGxldCBzcGVjaWFsO1xyXG4gICAgICAgICAgICBleGl0cy5mb3JFYWNoKChleGl0LCBpbmQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IGxvb3BzIC0gMSAmJiBpbmQgPT0gZXhpdHMubGVuZ3RoIC0gfn4oZXhpdHMubGVuZ3RoIC8gMykpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpID09IGxvb3BzIC0gMSAmJiBpbmQgPT0gfn4oZXhpdHMubGVuZ3RoIC8gMykpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsID0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBxID0gYWRkUm9vbShleGl0LCBzcGVjaWFsKTtcclxuICAgICAgICAgICAgICAgIG5ld0V4aXRzID0gbmV3RXhpdHMuY29uY2F0KHEpO1xyXG4gICAgICAgICAgICAgICAgc3BlY2lhbCA9IDA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBleGl0cyA9IG5ld0V4aXRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1hcENvbnRleHQ7XHJcbiAgICB9XHJcblxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21hcGdlbi5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2dhbWVtYW5hZ2VyJywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgc3RhdGU6IHsgdmFsdWU6ICdpbnQnLCBkZWZhdWx0OiAwIH1cclxuICAgICAgICAvLyAwID09IHBsYXllclxyXG4gICAgICAgIC8vIDEgPT0gZW5lbXlcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyJyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhJyk7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwZ2VvJykuY29tcG9uZW50cy5tYXA7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW21lc3NhZ2VdJykuY29tcG9uZW50cy5tZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnJvdCA9IDA7XHJcbiAgICAgICAgd2luZG93LkdNID0gdGhpcztcclxuICAgIH0sXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmRhdGEuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllcicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29tcG9uZW50cy5wbGF5ZXIubW92ZShkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW5lbXknKTtcclxuICAgICAgICAgICAgICAgIGxldCBtb2JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW21vYl0nKTtcclxuICAgICAgICAgICAgICAgIG1vYnMuZm9yRWFjaChkID0+IGQuY29tcG9uZW50cy5tb2IubW92ZSgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2FtZW1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdtb2InLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICB4OiB7IHZhbHVlOiAnZmxvYXQnIH0sXHJcbiAgICAgICAgeTogeyB2YWx1ZTogJ2Zsb2F0JyB9LFxyXG4gICAgICAgIGhlYWx0aDogeyB2YWx1ZTogJ2ludCcgfVxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbjtcclxuICAgIH0sXHJcbiAgICBtb3ZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQSogd291bGQgYmUgbmljZS4uLiBmb3Igbm93LCBqdXN0IG1vdmUgcmFuZG9tLi4uXHJcbiAgICAgICAgbGV0IHR4LCB0eSwgYywgcyA9IHRoaXM7XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB0eCA9IHJuZCgzKSAtIDE7XHJcbiAgICAgICAgICAgIHR5ID0gcm5kKDMpIC0gMTtcclxuICAgICAgICAgICAgYyA9IEdNLm1hcC5nZXRQaXgocy5kYXRhLnggKyB0eCwgcy5kYXRhLnkgKyB0eSk7XHJcbiAgICAgICAgfSB3aGlsZSAoYy5kYXRhWzBdID09IDApXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG9sZCA9IEdNLm1hcC5nZXRQaXgocy5kYXRhLngsIHMuZGF0YS55KTtcclxuICAgICAgICBvbGQuZGF0YVsyXSA9IDA7XHJcbiAgICAgICAgR00ubWFwLnB1dFBpeChvbGQsIHMuZGF0YS54LCBzLmRhdGEueSk7XHJcbiAgICAgICAgYy5kYXRhWzJdID0gMHg4ODtcclxuICAgICAgICBzLmRhdGEueCArPSB0eDtcclxuICAgICAgICBzLmRhdGEueSArPSB0eTtcclxuICAgICAgICBHTS5tYXAucHV0UGl4KGMsIHMuZGF0YS54LCBzLmRhdGEueSk7XHJcbiAgICAgICAgbGV0IGNvb3JkcyA9IHsgeDogcy5wb3MuZGF0YS54LCB6OiBzLnBvcy5kYXRhLnogfTtcclxuICAgICAgICB2YXIgdHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKVxyXG4gICAgICAgICAgICAudG8oeyB4OiBzLnBvcy5kYXRhLnggKyB0eCwgejogcy5wb3MuZGF0YS56ICsgdHkgfSwgNDAwICsgcm5kKDQwMCkpXHJcbiAgICAgICAgICAgIC5kZWxheShybmQoMjUwKSlcclxuICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluT3V0KVxyXG4gICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7Y29vcmRzLnh9IC4yNSAke2Nvb3Jkcy56fWApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LiAgICAgICBcclxuICAgIH1cclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9iLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgncGxheWVyJywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgaGVhbHRoOiB7IHZhbHVlOiAnaW50JywgZGVmYXVsdDogMTAgfVxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmZvdW5kUGllY2VzID0gMDtcclxuICAgIH0sXHJcbiAgICBtb3ZlOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHZhciBzID0gdGhpcztcclxuICAgICAgICBpZiAoR00uZGF0YS5zdGF0ZSAhPSAwKSByZXR1cm47XHJcbiAgICAgICAgdmFyIGNvb3JkcyA9IHMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhO1xyXG4gICAgICAgIHZhciBhID0gbmV3IFRIUkVFLlZlY3RvcjMoZGF0YS54LCBkYXRhLnksIDApOyAgICAgICAgICAgICAgICAgICAgICAvLyAwLDBcclxuICAgICAgICB2YXIgYiA9IG5ldyBUSFJFRS5WZWN0b3IzKGNvb3Jkcy54LCBjb29yZHMueiwgMCk7ICAgICAgICAgICAgICAgICAgLy8gMSwwXHJcbiAgICAgICAgY29vcmRzLnIgPSBHTS5jYW1lcmEucm90O1xyXG4gICAgICAgIGlmIChhLmRpc3RhbmNlVG8oYikgPiAxLjkgfHwgYS5kaXN0YW5jZVRvKGIpIDwgLjIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBjID0gR00ubWFwLmdldFBpeChkYXRhLnggKyBzaXplIC8gMiwgZGF0YS55ICsgc2l6ZSAvIDIpO1xyXG5cclxuICAgICAgICBpZiAoYy5kYXRhWzFdID4gMCkgeyAvLyBpdGVtIGluIG5leHQgcG9zaXRpb25cclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Ike2RhdGEueCArIHNpemUgLyAyfS0ke2RhdGEueSArIHNpemUgLyAyfWApLmNvbXBvbmVudHMuaXRlbS5nZXQoKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1zZyA9IGBGb3VuZCAke3Aubn1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocC50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTogLy8gaGVhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMuZGF0YS5oZWFsdGggPSBNYXRoLm1heChzLmRhdGEuaGVhbHRoKyssIDEwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBgXFxuSGVhbHRoID0gJHtzLmRhdGEuaGVhbHRofS8xMGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiAvLyBzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMzogLy8gc2hpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OiAvLyBwbGFuZSBwaWVjZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3VuZFBpZWNlcysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IGBcXG5Pbmx5ICR7NSAtIHRoaXMuZm91bmRQaWVjZXN9IHBpZWNlcyBsZWZ0YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBHTS5tZXNzYWdlLndyaXRlKG1zZyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0d2VlbiA9IG5ldyBUV0VFTi5Ud2Vlbihjb29yZHMpIC8vIENyZWF0ZSBhIG5ldyB0d2VlbiB0aGF0IG1vZGlmaWVzICdjb29yZHMnLlxyXG4gICAgICAgICAgICAudG8oeyB4OiBkYXRhLngsIHo6IGRhdGEueSB9LCAxMDAwKSAvLyBNb3ZlIHRvICgzMDAsIDIwMCkgaW4gMSBzZWNvbmQuXHJcbiAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5Jbk91dCkgLy8gVXNlIGFuIGVhc2luZyBmdW5jdGlvbiB0byBtYWtlIHRoZSBhbmltYXRpb24gc21vb3RoLlxyXG4gICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24gKCkgeyAvLyBDYWxsZWQgYWZ0ZXIgdHdlZW4uanMgdXBkYXRlcyAnY29vcmRzJy5cclxuICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke2Nvb3Jkcy54fSAuMjUgJHtjb29yZHMuen1gKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgR00uZGF0YS5zdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBHTS51cGRhdGUoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7IC8vIFN0YXJ0IHRoZSB0d2VlbiBpbW1lZGlhdGVseS5cclxuICAgIH1cclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcGxheWVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnaXRlbScsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIHg6IHsgdmFsdWU6ICdmbG9hdCcgfSxcclxuICAgICAgICB5OiB7IHZhbHVlOiAnZmxvYXQnIH0sXHJcbiAgICAgICAgcHJvcHM6IHsgdmFsdWU6ICdvYmplY3QnIH1cclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb247XHJcbiAgICB9LFxyXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKFwiYmlsbGJvYXJkLXRleHR1cmVcIiwgeyBpbmRleDogcy5kYXRhLnByb3BzLnMsIGxvb2t1cDogcy5kYXRhLnByb3BzLmkgfSk7XHJcbiAgICAgICAgbGV0IGNvb3JkcyA9IHMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhO1xyXG4gICAgICAgIGNvb3Jkcy50ID0gMTtcclxuICAgICAgICBsZXQgdHggPSB0aGlzLmRhdGEueCwgdHkgPSB0aGlzLmRhdGEueTtcclxuICAgICAgICBsZXQgcGl4ID0gR00ubWFwLmdldFBpeCh0eCwgdHkpO1xyXG4gICAgICAgIHBpeC5kYXRhWzFdID0gMDtcclxuICAgICAgICBHTS5tYXAucHV0UGl4KHBpeCwgdHgsIHR5KTtcclxuICAgICAgICAgdmFyIHAgPSBuZXcgUHJvbWlzZShyID0+IHtcclxuICAgICAgICAgICAgdmFyIHQxID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcykgXHJcbiAgICAgICAgICAgICAgICAudG8oeyB5OiBjb29yZHMueSArIDEsIHQ6IDAgfSwgMzUwKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLk91dClcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHsgeDogY29vcmRzLngsIHk6IGNvb3Jkcy55LCB6OiBjb29yZHMueiB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHZhciB0MiA9IG5ldyBUV0VFTi5Ud2Vlbihjb29yZHMpXHJcbiAgICAgICAgICAgICAgICAudG8oeyB5OiBjb29yZHMueSAtIC41LCB0OiAwIH0sIDM1MClcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5JbikgXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24gKCkgeyBcclxuICAgICAgICAgICAgICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7IHg6IGNvb3Jkcy54LCB5OiBjb29yZHMueSwgejogY29vcmRzLnogfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uQ29tcGxldGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzLmVsKTtcclxuICAgICAgICAgICAgICAgICAgICByKHMuZGF0YS5wcm9wcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0MS5jaGFpbih0Mikuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2l0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnbWVzc2FnZScsIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmVsLmNvbXBvbmVudHMudGV4dDtcclxuICAgIH0sXHJcbiAgICB3cml0ZTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAodGhpcy50KSB0aGlzLnQuc3RvcCgpO1xyXG5cclxuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgndGV4dCcsIHsgdmFsdWU6IG1lc3NhZ2UsIG9wYWNpdHk6IDAuOCB9KTtcclxuICAgICAgICB2YXIgZCA9IHsgbzogMC44IH07XHJcbiAgICAgICAgdGhpcy50ID0gbmV3IFRXRUVOLlR3ZWVuKGQpXHJcbiAgICAgICAgICAgIC50byh7IG86IDAgfSwgMjUwKVxyXG4gICAgICAgICAgICAuZGVsYXkoMjAwMClcclxuICAgICAgICAgICAgLm9uVXBkYXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd0ZXh0JywgeyBvcGFjaXR5OiBkLm8gfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tZXNzYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtYXBHZW4gPSByZXF1aXJlKFwiLi9tYXBnZW5cIik7XHJcblxyXG53aW5kb3cuc2l6ZSA9IDEyODtcclxuY29uc3QgZGVwdGggPSA3O1xyXG5cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdtYXAnLCB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tYXBDb250ZXh0ID0gbWFwR2VuLmdvKHNpemUsIGRlcHRoKTtcclxuICAgICAgICBsZXQgd29ybGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIik7XHJcbiAgICAgICAgbGV0IHdvcmxkRGF0YSA9IHRoaXMubWFwQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgc2l6ZSwgc2l6ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB3ZHAgPSAoaSArIHNpemUgKiBqKSAqIDQ7XHJcbiAgICAgICAgICAgICAgICBpZiAod29ybGREYXRhLmRhdGFbd2RwXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuY2xhc3NMaXN0LmFkZChcImZsb29yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdID09IDEwMikgcGxhbmUuc2V0QXR0cmlidXRlKFwibXl0ZXh0dXJlXCIsIFwiaW5kZXg6MTE7bG9va3VwOjExXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHdvcmxkRGF0YS5kYXRhW3dkcF0gPT0gMTcwKSBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJpbmRleDoxMjtsb29rdXA6MTBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod29ybGREYXRhLmRhdGFbd2RwXSA9PSAyMzgpIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjEyO2xvb2t1cDo5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKHdvcmxkRGF0YS5kYXRhW3dkcF09PTEwMikgcGxhbmUuc2V0QXR0cmlidXRlKFwibXl0ZXh0dXJlXCIsIFwiaW5kZXg6MTE7bG9va3VwOjhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjA7bG9va3VwOlwiICsgfn4oKGkgKiA1KSAvIChqICogMikgKiAzKSAlIDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0vLyArIHJuZCg2KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHggPSBpIC0gKHNpemUgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeSA9IGogLSAoc2l6ZSAvIDIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJzcmM6ICNteS10ZXh0dXJlO2luZGV4OjRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdNLnBsYXllci5jb21wb25lbnRzLnBsYXllci5tb3ZlKHsgeCwgeSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNjZW5lRWwuY29tcG9uZW50cy5nYW1lbWFuYWdlci5tb3ZlUGxheWVyKHsgeCwgeSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3h9IDAgJHt5fWApO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAndm94ZWwnKTtcclxuICAgICAgICAgICAgICAgICAgICB3b3JsZC5hcHBlbmRDaGlsZChwbGFuZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQod29ybGQpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5hZGRPYmpzKCkpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5hZGRJdGVtcygpKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuYWRkTW9icygpKTsgICAgICAgIFxyXG4gICAgfSxcclxuICAgIGdldFBpeDogZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBDb250ZXh0LmdldEltYWdlRGF0YSh4LCB5LCAxLCAxKTtcclxuICAgIH0sXHJcbiAgICBwdXRQaXg6IGZ1bmN0aW9uIChjLCB4LCB5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFwQ29udGV4dC5wdXRJbWFnZURhdGEoYywgeCwgeSk7XHJcbiAgICB9LFxyXG4gICAgcmFuZG9tUGxhY2U6IGZ1bmN0aW9uIChtaW5EaXN0YW5jZSA9IDApIHtcclxuICAgICAgICBsZXQgeCwgeSwgYztcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHggPSB3aW5kb3cucm5kKHNpemUpO1xyXG4gICAgICAgICAgICB5ID0gd2luZG93LnJuZChzaXplKTtcclxuICAgICAgICAgICAgYyA9IHRoaXMuZ2V0UGl4KHgsIHkpO1xyXG4gICAgICAgIH0gd2hpbGUgKGMuZGF0YS5ldmVyeShwID0+IHAgPT0gMCkpO1xyXG4gICAgICAgIHJldHVybiB7IHgsIHksIGMgfTtcclxuICAgIH0sXHJcbiAgICBnZXRXZWlnaHRlZDogZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgICAgICBsZXQgZiA9IGZhbHNlLCBpdGVtO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaXRlbSA9IGxpc3Rbcm5kKGxpc3QubGVuZ3RoKV07XHJcbiAgICAgICAgICAgIGYgPSBybmQoMTAwKSA8IGl0ZW0uYztcclxuICAgICAgICB9IHdoaWxlICghZilcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0sXHJcbiAgICBhZGRJdGVtczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpLCB0eCwgdHk7XHJcbiAgICAgICAgICAgIGxldCBwID0gdGhpcy5yYW5kb21QbGFjZSgpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZ2V0V2VpZ2h0ZWQoRC5pdGVtcyk7XHJcbiAgICAgICAgICAgIGl0ZW0ubWFwID0gcDtcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAocC5jLmRhdGFbMV0gIT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIHAuYy5kYXRhWzFdID0gMHg0MTtcclxuICAgICAgICAgICAgdGhpcy5wdXRQaXgocC5jLCBwLngsIHAueSk7XHJcblxyXG4gICAgICAgICAgICB0eCA9IHAueCAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICB0eSA9IHAueSAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICB2YXIgZCA9IChuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSkuZGlzdGFuY2VUbyhuZXcgVEhSRUUuVmVjdG9yMih0eCwgdHkpKTtcclxuXHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKFwiYmlsbGJvYXJkLXRleHR1cmVcIiwgeyBpbmRleDogMyB9KTsvLyB7IGluZGV4OiBpdGVtLnMsIGxvb2t1cDogaXRlbS5pIH0pO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0eH0gLjI1ICR7dHl9YCk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ2l0ZW0nLCB7IHg6IHAueCwgeTogcC55LCBwcm9wczogaXRlbSB9KTtcclxuICAgICAgICAgICAgYi5pZCA9IGBiJHtwLnh9LSR7cC55fWA7XHJcbiAgICAgICAgICAgIGIuZGF0YSA9IGl0ZW07XHJcbiAgICAgICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9LFxyXG4gICAgYWRkTW9iczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpLCB0eCwgdHk7XHJcbiAgICAgICAgICAgIGxldCBtb2IgPSB0aGlzLmdldFdlaWdodGVkKEQubW9icyksIHAsIGQ7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHAgPSB0aGlzLnJhbmRvbVBsYWNlKCk7XHJcbiAgICAgICAgICAgICAgICB0eCA9IHAueCAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgdHkgPSBwLnkgLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgICAgIGQgPSAobmV3IFRIUkVFLlZlY3RvcjIoMCwgMCkpLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjIodHgsIHR5KSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKG1vYi5tID49IGQpO1xyXG4gICAgICAgICAgICBwLmMuZGF0YVsyXSA9IDB4ODg7XHJcbiAgICAgICAgICAgIHRoaXMucHV0UGl4KHAuYywgcC54LCBwLnkpO1xyXG5cclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtdGV4dHVyZVwiLCB7IGluZGV4OiAyLCBsb29rdXA6IG1vYi5pIH0pO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0eH0gLjI1ICR7dHl9YCk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21vYicsIHsgeDogcC54LCB5OiBwLnksIGhlYWx0aDogcm5kKG1vYi5oWzFdKSArIG1vYi5oWzBdIH0pO1xyXG4gICAgICAgICAgICBiLmlkID0gYGUke3AueH0tJHtwLnl9YDtcclxuICAgICAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0sXHJcbiAgICBhZGRPYmpzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG9ianMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIiksIHR4LCB0eSwgcCwgZDtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcCA9IHRoaXMucmFuZG9tUGxhY2UoKTtcclxuICAgICAgICAgICAgICAgIHR4ID0gcC54IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgICAgICB0eSA9IHAueSAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgZCA9IChuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSkuZGlzdGFuY2VUbyhuZXcgVEhSRUUuVmVjdG9yMih0eCwgdHkpKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoMjUgPj0gZCk7XHJcblxyXG4gICAgICAgICAgICBwLmMuZGF0YVsxXSA9IDB4RUU7XHJcbiAgICAgICAgICAgIHRoaXMucHV0UGl4KHAuYywgcC54LCBwLnkpO1xyXG5cclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtdGV4dHVyZVwiLCB7IGluZGV4OiBELm9ianNbaV0ucyB9KTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7dHh9IC4yNSAke3R5fWApO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAnc3ByJyk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdpdGVtJywgeyB4OiBwLngsIHk6IHAueSwgcHJvcHM6IEQub2Jqc1tpXSB9KTtcclxuICAgICAgICAgICAgYi5pZCA9IGBiJHtwLnh9LSR7cC55fWA7XHJcbiAgICAgICAgICAgIG9ianMuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpzO1xyXG4gICAgfVxyXG59KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9