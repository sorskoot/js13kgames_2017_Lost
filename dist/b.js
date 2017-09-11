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
	__webpack_require__(15);


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
	            m: 0, // minimal distance from start
	            c: 10, // change of the item spawning
	        }, {
	            t: 2, // subtype : sword",
	            n: "a diamond sword", //name
	            d: 10, // damage
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
	                setTimeout(() => {
	                    this.data.state = 0;
	                }, 250);
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
/* 9 */
/***/ (function(module, exports) {

	AFRAME.registerComponent('player', {
	    schema: {
	        health: { value: 'int', default: 15 }
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
	        c = GM.map.getPix(data.x + size / 2, data.y + size / 2);
	        if (c.data[2] > 0) { // mob in next position
	            let mob = document.querySelector(`#e${data.x + size / 2}-${data.y + size / 2}`).components.mob;
	            let sprcoord = { x: 0, z: 0 };
	            var tween = new TWEEN.Tween(sprcoord) // Create a new tween that modifies 'coords'.
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
	                                s.data.health = Math.min(s.data.health++, 15);
	                                msg += `\nHealth = ${s.data.health}/15`;
	                                break;
	                            case 2: // sword
	                                if (p.d > this.attack) this.attack = p.d;
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
	                .onComplete(() => {
	                    GM.data.state = 1;
	                    GM.update();
	                })
	                .start(); // Start the tween immediately.
	        }
	    },
	    hit: function (amount) {
	        let ent = document.createElement('a-entity');
	        ent.setAttribute('billboard-texture', { index: 14, lookup: 5 });
	        ent.setAttribute('mixin', 'spr');
	        ent.setAttribute('auto-destroy', '');
	        this.el.appendChild(ent);
	
	        this.data.health -= amount;
	        if (this.data.health <= 0) {
	            this.sprite.setAttribute('billboard-texture', { index: 15});
	            GM.data.state = 3;            
	            GM.message.write(`Game Over`);        
	        }
	        else {
	            GM.message.write(`Ouch\nHealth = ${this.data.health}/15`);
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
	                    if (worldData.data[wdp] == 102) plane.setAttribute("mytexture", "index:11;lookup:8");
	                    else if (worldData.data[wdp] == 170) plane.setAttribute("mytexture", "index:12;lookup:10");
	                    else if (worldData.data[wdp] == 238) plane.setAttribute("mytexture", "index:12;lookup:9");
	                    else {
	                        plane.setAttribute("mytexture", "index:0;lookup:" + ~~((i * 5) / (j * 2) * 3) % 5);
	                    }
	                    let x = i - (size / 2);
	                    let y = j - (size / 2);
	
	                    plane.addEventListener('click', function () {
	                        GM.player.components.player.move({ x, y });
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


/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
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


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWRmMmZiYmE5NDZmNmI1Y2RlMjciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215U2hhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9iaWxsYm9hcmRTaGFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcGdlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2F1dG9kZXN0cm95LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNM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QTtBQUNBO0FBQ0EsRUFBQzs7Ozs7Ozs7O0FDNUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBc0I7QUFDdEI7QUFDQSxrQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0EsOEJBQTZCO0FBQzdCLG1EQUFrRCxnQ0FBZ0M7QUFDbEYsY0FBYTtBQUNiO0FBQ0E7QUFDQSxjQUFhO0FBQ2Isc0JBQXFCO0FBQ3JCO0FBQ0EsRUFBQyIsImZpbGUiOiJiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNWRmMmZiYmE5NDZmNmI1Y2RlMjciLCJyZXF1aXJlKCcuL2dsb2JhbCcpO1xyXG5yZXF1aXJlKCcuL2RhdGEnKTtcclxucmVxdWlyZSgnLi9teVNoYWRlcicpO1xyXG5yZXF1aXJlKCcuL2JpbGxib2FyZFNoYWRlcicpO1xyXG5yZXF1aXJlKCcuL21hcCcpO1xyXG5yZXF1aXJlKCcuL2dhbWVtYW5hZ2VyJyk7XHJcbnJlcXVpcmUoJy4vbW9iJyk7XHJcbnJlcXVpcmUoJy4vcGxheWVyJyk7XHJcbnJlcXVpcmUoJy4vaXRlbScpO1xyXG5yZXF1aXJlKCcuL21lc3NhZ2UnKTtcclxucmVxdWlyZSgnLi9hdXRvZGVzdHJveScpO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ3aW5kb3cucm5kID0gbSA9PiB+fihNYXRoLnJhbmRvbSgpICogbSk7XHJcbndpbmRvdy50ID0gbmV3IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoJy4vbG9zdC5wbmcnKTtcclxud2luZG93LnQubWluRmlsdGVyID0gd2luZG93LnQubWFnRmlsdGVyID0gMTAwMztcclxud2luZG93LnBhbCA9IG5ldyBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCcuL3BhbGV0dGVzLnBuZycpO1xyXG53aW5kb3cucGFsLm1pbkZpbHRlciA9IHdpbmRvdy5wYWwubWFnRmlsdGVyID0gMTAwMztcclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ3aW5kb3cuRCA9IHtcclxuICAgIHBsYXllcjoge1xyXG4gICAgICAgIHQ6IDEsICAvLyB0eXBlIDogcGxheWVyXHJcbiAgICAgICAgczogMiwgIC8vIHNwcml0ZTogMiAgICBcclxuICAgICAgICBoOiAxMCwgLy8gc3RhcnQgaGVhbHRoXHJcbiAgICB9LCBtb2JzOiBbe1xyXG4gICAgICAgIGg6IFszLCAyXSwgLy8gaGVhbHRoOiBiZXR3ZWVuIDIgYW5kIDVcclxuICAgICAgICBkOiBbMSwgMV0sIC8vZGFtYWdlIGJldHdlZW4gMSBhbmQgMlxyXG4gICAgICAgIGk6IDYsICAvLyBjb2xvciBpbmRleCA4XHJcbiAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgYzogNzAgLy8gY2hhbmdlPTcwJVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBoOiBbNCwgNF0sIC8vIGhlYWx0aDogYmV0d2VlbiA0IGFuZCA4XHJcbiAgICAgICAgZDogWzMsIDJdLCAvL2RhbWFnZSBiZXR3ZWVuIDIgYW5kIDVcclxuICAgICAgICBpOiA3LCAvLyBjb2xvciBpbmRleCA4XHJcbiAgICAgICAgbTogMTAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgIGM6IDIwIC8vY2hhbmdlIDMwJSAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGg6IFs2LCA2XSwgLy8gaGVhbHRoOiBiZXR3ZWVuIDYgYW5kIDEyXHJcbiAgICAgICAgZDogWzUsIDRdLCAvL2RhbWFnZSBiZXR3ZWVuIDQgYW5kIDlcclxuICAgICAgICBpOiA5LCAgLy8gY29sb3IgaW5kZXggOFxyXG4gICAgICAgIG06IDMwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICBjOiAxMCAvLyBjaGFuZ2UgMTAlXHJcbiAgICB9XSxcclxuICAgIGZsb29yczogW3tcclxuICAgICAgICB0OiAzLCAvLyB0eXBlOiBmbG9vclxyXG4gICAgICAgIGI6IDEsIC8vIGJpb21lOiAxXHJcbiAgICAgICAgczogWzFdLFxyXG4gICAgICAgIGk6IFsyLCA1XVxyXG4gICAgfV0sXHJcbiAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdDogMSxcclxuICAgICAgICAgICAgbjogXCJhIGhlYXJ0XCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBzOiAxMywgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogLTEsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDcwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDIsIC8vIHN1YnR5cGUgOiBzd29yZFwiLFxyXG4gICAgICAgICAgICBuOiBcImFuIGlyb24gc3dvcmRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGQ6IDMsIC8vIGRhbWFnZVxyXG4gICAgICAgICAgICBzOiA1LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAxLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAyMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcblxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMiwgLy8gc3VidHlwZSA6IHN3b3JkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYSBnb2xkZW4gc3dvcmRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGQ6IDYsIC8vIGRhbWFnZVxyXG4gICAgICAgICAgICBzOiA1LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAyMywgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogMTAsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMiwgLy8gc3VidHlwZSA6IHN3b3JkXCIsXHJcbiAgICAgICAgICAgIG46IFwiYSBkaWFtb25kIHN3b3JkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBkOiAxMCwgLy8gZGFtYWdlXHJcbiAgICAgICAgICAgIHM6IDUsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDI0LCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAyLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDMsIC8vIHN1YnR5cGUgOiBzaGllbGRcIixcclxuICAgICAgICAgICAgbjogXCJhbiBpcm9uIHNoaWVsZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgYjogMiwgLy8gYmxvY2sgdmFsdWVcclxuICAgICAgICAgICAgczogNCwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMCwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogMjAsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMywgLy8gc3VidHlwZSA6IHNoaWVsZFwiLFxyXG4gICAgICAgICAgICBuOiBcImEgZ29sZGVuIHNoaWVsZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgYjogNCwgLy8gYmxvY2sgdmFsdWVcclxuICAgICAgICAgICAgczogNCwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMjMsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDEwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDMsIC8vIHN1YnR5cGUgOiBzaGllbGRcIixcclxuICAgICAgICAgICAgbjogXCJhIGRpYW1vbmQgc2hpZWxkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBiOiA3LCAvLyBibG9jayB2YWx1ZVxyXG4gICAgICAgICAgICBzOiA0LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAyNCwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogNSwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfV0sXHJcbiAgICBvYmpzOiBbeyAvL29iamVjdGl2ZXNcclxuICAgICAgICB0OiA4LCAvLyBpdGVtIHR5cGUgPSA4XHJcbiAgICAgICAgcDogMSwgLy8gcGllY2UgPTFcclxuICAgICAgICBuOiBcInlvdXIgcGxhbmUncyBjYWJpblwiLFxyXG4gICAgICAgIHM6IDZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDIsXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgbGVmdCB3aW5nXCIsXHJcbiAgICAgICAgczogN1xyXG4gICAgfSx7XHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDMsXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgYm9keVwiLFxyXG4gICAgICAgIHM6IDhcclxuICAgIH0se1xyXG4gICAgICAgIHQ6IDgsIC8vIGl0ZW0gdHlwZSA9IDhcclxuICAgICAgICBwOiA0LFxyXG4gICAgICAgIG46IFwieW91ciBwbGFuZSdzIHJpZ2h0IHdpbmdcIixcclxuICAgICAgICBzOiA5XHJcbiAgICB9LHtcclxuICAgICAgICB0OiA4LCAvLyBpdGVtIHR5cGUgPSA4XHJcbiAgICAgICAgcDogNSxcclxuICAgICAgICBuOiBcInlvdXIgcGxhbmUncyB0aHJ1c3RlclwiLFxyXG4gICAgICAgIHM6IDEwXHJcbiAgICB9XVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWwgVEhSRUUsIEFGUkFNRSAqL1xyXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ215dGV4dHVyZScsIHtcclxuICBzY2hlbWE6IHtcclxuICAgIGNvbG9yOlxyXG4gICAge1xyXG4gICAgICB0eXBlOiAnY29sb3InXHJcbiAgICB9LFxyXG4gICAgaW5kZXg6IHsgdHlwZTogJ2ludCcgfSxcclxuICAgIGxvb2t1cDogeyB0eXBlOiAnaW50JywgZGVmYXVsdDogMCB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsIHVzaW5nIHRoZSB0d28gc2hhZGVycyBkZWZpbmVkXHJcbiAgICogaW4gdmVydGV4Lmdsc2wgYW5kIGZyYWdtZW50Lmdsc2wuXHJcbiAgICovXHJcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgIHZhciBmcmFnbWVudFNoYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFnbWVudCcpLnRleHRDb250ZW50O1xyXG4gICAgdmFyIHZlcnRleFNoYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJ0ZXgnKS50ZXh0Q29udGVudDtcclxuXHJcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICB0aW1lOiB7IHZhbHVlOiAwLjAgfSxcclxuICAgICAgICBpbmRleDogeyB2YWx1ZTogdGhpcy5kYXRhLmluZGV4IH0sXHJcbiAgICAgICAgRGlmZnVzZVRleHR1cmU6IHsgdmFsdWU6IHdpbmRvdy50IH0sXHJcbiAgICAgICAgTG9va3VwOiB7IHZhbHVlOiB3aW5kb3cucGFsIH0sXHJcbiAgICAgICAgY29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcihkYXRhLmNvbG9yKSB9LFxyXG4gICAgICAgIHNwcml0ZURpbWVuc2lvbnM6IHsgdmFsdWU6IHsgeDogMTYuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICByZXBlYXQ6IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIGZvZ1N0YXJ0OiB7IHZhbHVlOiA1IH0sXHJcbiAgICAgICAgZm9nRW5kOiB7IHZhbHVlOiAxNSB9LFxyXG4gICAgICAgIGxvb2t1cEluZGV4Ont2YWx1ZTpkYXRhLmxvb2t1cH0sXHJcbiAgICAgICAgZm9nQ29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigwLCAwLCAwKSB9LFxyXG4gICAgICAgIHRpbnQ6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigyNTUsIDI1NSwgMjU1KSB9LFxyXG4gICAgICAgIHRpbnRBbW91bnQ6IHsgdmFsdWU6IDAgfVxyXG4gICAgICB9LFxyXG4gICAgICB2ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgIGZyYWdtZW50U2hhZGVyXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYXBwbHlUb01lc2goKTtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kZWwtbG9hZGVkJywgKCkgPT4gdGhpcy5hcHBseVRvTWVzaCgpKTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgU2hhZGVyTWF0ZXJpYWwgd2hlbiBjb21wb25lbnQgZGF0YSBjaGFuZ2VzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5pbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5pbmRleDtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMubG9va3VwSW5kZXgudmFsdWU9dGhpcy5kYXRhLmxvb2t1cDtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IHRoZSBtYXRlcmlhbCB0byB0aGUgY3VycmVudCBlbnRpdHkuXHJcbiAgICovXHJcbiAgYXBwbHlUb01lc2g6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG1lc2ggPSB0aGlzLmVsLmdldE9iamVjdDNEKCdtZXNoJyk7XHJcbiAgICBpZiAobWVzaCkge1xyXG4gICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlcGVhdC52YWx1ZS54ID0gK3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikgfHwgMTtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueSA9ICt0aGlzLmVsLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKSB8fCAxO1xyXG4gICAgICBtZXNoLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuICAgIH1cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIE9uIGVhY2ggZnJhbWUsIHVwZGF0ZSB0aGUgJ3RpbWUnIHVuaWZvcm0gaW4gdGhlIHNoYWRlcnMuXHJcbiAgICovXHJcbiAgLy8gdGljazogZnVuY3Rpb24gKHQpIHtcclxuICAvLyAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudGltZS52YWx1ZSA9IHQgLyAxMDAwOyBcclxuICAvLyB9XHJcbn0pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbXlTaGFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFsIFRIUkVFLCBBRlJBTUUgKi9cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdiaWxsYm9hcmQtdGV4dHVyZScsIHtcclxuICBzY2hlbWE6IHtcclxuICAgIGluZGV4Ont0eXBlOidpbnQnfSxcclxuICAgIGxvb2t1cDogeyB0eXBlOiAnaW50JywgZGVmYXVsdDogLTEgfVxyXG4gIH0sXHJcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTsgICAgXHJcbiAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhZ21lbnQnKS50ZXh0Q29udGVudDtcclxuICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVydGV4LWJpbGxib2FyZCcpLnRleHRDb250ZW50O1xyXG4gICAgXHJcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICB0aW1lOiB7IHZhbHVlOiAwLjAgfSxcclxuICAgICAgICBpbmRleDogeyB2YWx1ZTogdGhpcy5kYXRhLmluZGV4IH0sXHJcbiAgICAgICAgRGlmZnVzZVRleHR1cmU6IHsgdmFsdWU6IHdpbmRvdy50fSxcclxuICAgICAgICBjb2xvcjogeyB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKGRhdGEuY29sb3IpIH0sXHJcbiAgICAgICAgc3ByaXRlRGltZW5zaW9uczogeyB2YWx1ZTogeyB4OiAxNi4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIHJlcGVhdDogeyB2YWx1ZTogeyB4OiAxLjAsIHk6IDEuMCB9IH0sXHJcbiAgICAgICAgTG9va3VwOiB7IHZhbHVlOiB3aW5kb3cucGFsIH0sICAgIFxyXG4gICAgICAgIGxvb2t1cEluZGV4Ont2YWx1ZTpkYXRhLmxvb2t1cH0sXHJcbiAgICAgICAgZm9nU3RhcnQ6e3ZhbHVlOjV9LFxyXG4gICAgICAgIGZvZ0VuZDp7dmFsdWU6MTV9LFxyXG4gICAgICAgIGFscGhhdGVzdDp7dmFsdWU6MC45NX0sXHJcbiAgICAgICAgZm9nQ29sb3I6e3ZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMCwwLDApfVxyXG4gICAgICB9LFxyXG4gICAgICB2ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgIGZyYWdtZW50U2hhZGVyXHJcbiAgICB9KTtcclxuICAgIHRoaXMubWF0ZXJpYWwuYmxlbmRpbmcgPSBUSFJFRS5NdWx0aXBseUJsZW5kaW5nO1xyXG4gICAgdGhpcy5hcHBseVRvTWVzaCgpO1xyXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb2RlbC1sb2FkZWQnLCAoKSA9PiB0aGlzLmFwcGx5VG9NZXNoKCkpO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRoZSBTaGFkZXJNYXRlcmlhbCB3aGVuIGNvbXBvbmVudCBkYXRhIGNoYW5nZXMuXHJcbiAgICovXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLmluZGV4LnZhbHVlID0gdGhpcy5kYXRhLmluZGV4O1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5sb29rdXBJbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5sb29rdXA7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBBcHBseSB0aGUgbWF0ZXJpYWwgdG8gdGhlIGN1cnJlbnQgZW50aXR5LlxyXG4gICAqL1xyXG4gIGFwcGx5VG9NZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZXNoID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgaWYgKG1lc2gpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueCA9K3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwid2lkdGhcIil8fDE7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnkgPSt0aGlzLmVsLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKXx8MTtcclxuICAgICAgbWVzaC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBPbiBlYWNoIGZyYW1lLCB1cGRhdGUgdGhlICd0aW1lJyB1bmlmb3JtIGluIHRoZSBzaGFkZXJzLlxyXG4gICAqL1xyXG4gIC8vIHRpY2s6IGZ1bmN0aW9uICh0KSB7XHJcbiAgLy8gICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0IC8gMTAwMDsgXHJcbiAgLy8gfVxyXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JpbGxib2FyZFNoYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxudmFyIGdlbmVyYXRvciA9IHtcclxuICAgIGdvOiAobWFwV2lkdGgsIGRlcHRoKSA9PiB7XHJcbiAgICAgICAgdmFyIHBpZWNlcyA9IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDIsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAwLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMiwgMCwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDIsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gdmFyIG1hcFdpZHRoID0gMjU2O1xyXG5cclxuICAgICAgICBsZXQgcGwgPSBwaWVjZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGw7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUgPSBwaWVjZXNbaV0uc2xpY2UoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjbG9uZS5sZW5ndGg7IGorKylcclxuICAgICAgICAgICAgICAgIGNsb25lW2pdID0gY2xvbmVbal0uc2xpY2UoKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHBpZWNlcy5wdXNoKGNsb25lKTtcclxuICAgICAgICAgICAgbGV0IGNsb25lMiA9IHBpZWNlc1tpXS5zbGljZSgpO1xyXG4gICAgICAgICAgICBjbG9uZTIgPSBjbG9uZTIucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBwaWVjZXMucHVzaChjbG9uZTIpO1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUzID0gY2xvbmUuc2xpY2UoKTtcclxuICAgICAgICAgICAgY2xvbmUzID0gY2xvbmUzLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgcGllY2VzLnB1c2goY2xvbmUzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaWVjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcGllY2VzW2ldLnNpemUgPSB7IHc6IHBpZWNlc1tpXVswXS5sZW5ndGgsIGg6IHBpZWNlc1tpXS5sZW5ndGggfTtcclxuICAgICAgICAgICAgcGllY2VzW2ldLmV4aXRzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGllY2VzW2ldLnNpemUuaDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IHBpZWNlc1tpXS5zaXplLnc7IGgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZXNbaV1bal1baF0gPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2VzW2ldLmV4aXRzLnB1c2goeyB4OiBoLCB5OiBqIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG1hcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIG1hcENhbnZhcy53aWR0aCA9IG1hcFdpZHRoO1xyXG4gICAgICAgIG1hcENhbnZhcy5oZWlnaHQgPSBtYXBXaWR0aDtcclxuXHJcbiAgICAgICAgLy8gVGVtcCBkdXJpbmcgZGV2ZWxvcG1lbnRcclxuICAgICAgICBtYXBDYW52YXMuc3R5bGUud2lkdGggPSAnMTAyNHB4JztcclxuICAgICAgICBtYXBDYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMjRweCc7XHJcbiAgICAgICAgbWFwQ2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXBDYW52YXMpO1xyXG4gICAgICAgIC8vIEVORFxyXG5cclxuICAgICAgICB2YXIgbWFwQ29udGV4dCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDApXCI7XHJcbiAgICAgICAgbWFwQ29udGV4dC5maWxsUmVjdCgwLCAwLCBtYXBXaWR0aCwgbWFwV2lkdGgpO1xyXG5cclxuICAgICAgICBsZXQgZmlyc3QgPSB0cnVlO1xyXG4gICAgICAgIHZhciBhZGRSb29tID0gKGV4aXQsIHNwZWNpYWwpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBpZWNlO1xyXG4gICAgICAgICAgICBsZXQgZXhpdHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRYO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WTtcclxuICAgICAgICAgICAgbGV0IHRyaWVzID0gMjU7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHBpZWNlID0gcGllY2VzW3JuZChwaWVjZXMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBxID0gMDsgcSA8IHBpZWNlLmV4aXRzLmxlbmd0aDsgcSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCA9IGV4aXQueCAtIHBpZWNlLmV4aXRzW3FdLng7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSA9IGV4aXQueSAtIHBpZWNlLmV4aXRzW3FdLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZ0RhdGEgPSBtYXBDb250ZXh0LmdldEltYWdlRGF0YSh0YXJnZXRYLCB0YXJnZXRZLCBwaWVjZS5zaXplLncsIHBpZWNlLnNpemUuaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXIgPSBpbWdEYXRhLmRhdGEuZXZlcnkoZCA9PiBkID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdHJpZXMtLTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodHJpZXMgPiAwICYmICFjbGVhcik7XHJcbiAgICAgICAgICAgIGlmICghY2xlYXIpIHtcclxuICAgICAgICAgICAgICAgIHBpZWNlID0gW1sxXV07XHJcbiAgICAgICAgICAgICAgICBwaWVjZS5leGl0cyA9IFt7fV07XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRYID0gZXhpdC54O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WSA9IGV4aXQueTtcclxuICAgICAgICAgICAgICAgIHEgPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gIWZpcnN0ID8gXCIjNDAwXCIgOiBcIiM2MDBcIjtcclxuICAgICAgICAgICAgaWYgKCFmaXJzdCkgbWFwQ29udGV4dC5maWxsUmVjdCh0YXJnZXRYICsgcGllY2UuZXhpdHNbcV0ueCB8fCAwLCB0YXJnZXRZICsgcGllY2UuZXhpdHNbcV0ueSB8fCAwLCAxLCAxKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzcGVjaWFsID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwiI0UwMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGVjaWFsID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwiI0EwMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBpZWNlLmZvckVhY2goKGksIHB5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpLmZvckVhY2goKGosIHB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsUmVjdCh0YXJnZXRYICsgcHgsIHRhcmdldFkgKyBweSwgMSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXRzLnB1c2goeyB4OiB0YXJnZXRYICsgcHgsIHk6IHRhcmdldFkgKyBweSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4aXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9vcHMgPSBkZXB0aDtcclxuICAgICAgICBsZXQgZXhpdHMgPSBbeyB4OiBtYXBXaWR0aCAvIDIsIHk6IG1hcFdpZHRoIC8gMiB9XTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3BzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5ld0V4aXRzID0gW107XHJcbiAgICAgICAgICAgIGxldCBzcGVjaWFsO1xyXG4gICAgICAgICAgICBleGl0cy5mb3JFYWNoKChleGl0LCBpbmQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IGxvb3BzIC0gMSAmJiBpbmQgPT0gZXhpdHMubGVuZ3RoIC0gfn4oZXhpdHMubGVuZ3RoIC8gMykpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpID09IGxvb3BzIC0gMSAmJiBpbmQgPT0gfn4oZXhpdHMubGVuZ3RoIC8gMykpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsID0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBxID0gYWRkUm9vbShleGl0LCBzcGVjaWFsKTtcclxuICAgICAgICAgICAgICAgIG5ld0V4aXRzID0gbmV3RXhpdHMuY29uY2F0KHEpO1xyXG4gICAgICAgICAgICAgICAgc3BlY2lhbCA9IDA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBleGl0cyA9IG5ld0V4aXRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1hcENvbnRleHQ7XHJcbiAgICB9XHJcblxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21hcGdlbi5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2dhbWVtYW5hZ2VyJywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgc3RhdGU6IHsgdmFsdWU6ICdpbnQnLCBkZWZhdWx0OiAwIH1cclxuICAgICAgICAvLyAwID09IHBsYXllclxyXG4gICAgICAgIC8vIDEgPT0gZW5lbXlcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyJyk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FtZXJhJyk7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwZ2VvJykuY29tcG9uZW50cy5tYXA7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW21lc3NhZ2VdJykuY29tcG9uZW50cy5tZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnJvdCA9IDA7XHJcbiAgICAgICAgd2luZG93LkdNID0gdGhpcztcclxuICAgIH0sXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmRhdGEuc3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXllcicpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY29tcG9uZW50cy5wbGF5ZXIubW92ZShkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW5lbXknKTtcclxuICAgICAgICAgICAgICAgIGxldCBtb2JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW21vYl0nKTtcclxuICAgICAgICAgICAgICAgIG1vYnMuZm9yRWFjaChkID0+IGQuY29tcG9uZW50cy5tb2IubW92ZSgpKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5zdGF0ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9LCAyNTApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dhbWVtYW5hZ2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnbW9iJywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgeDogeyB2YWx1ZTogJ2Zsb2F0JyB9LFxyXG4gICAgICAgIHk6IHsgdmFsdWU6ICdmbG9hdCcgfSxcclxuICAgICAgICBoZWFsdGg6IHsgdmFsdWU6ICdpbnQnIH0sXHJcbiAgICAgICAgZGFtYWdlOiB7IHZhbHVlOiAnaW50JyB9XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zID0gdGhpcy5lbC5jb21wb25lbnRzLnBvc2l0aW9uO1xyXG4gICAgfSxcclxuICAgIG1vdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBBKiB3b3VsZCBiZSBuaWNlLi4uIGZvciBub3csIGp1c3QgbW92ZSByYW5kb20uLi5cclxuICAgICAgICBpZiAodGhpcy5kYXRhLmhlYWx0aCA8PSAwKSByZXR1cm47XHJcbiAgICAgICAgbGV0IHR4LCB0eSwgYywgcyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHBwID0gR00ucGxheWVyLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YTtcclxuICAgICAgICB2YXIgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHBwLngsIHBwLnosIDApOyAgICAgICAgICAgICAgICAgICAgICAvLyAwLDBcclxuICAgICAgICB2YXIgYiA9IG5ldyBUSFJFRS5WZWN0b3IzKHRoaXMucG9zLmRhdGEueCwgdGhpcy5wb3MuZGF0YS56LCAwKTtcclxuICAgICAgICBpZiAoYS5kaXN0YW5jZVRvKGIpIDwgMS45KSB7Ly8gcGxheWVyIGlzIG5leHQgdG8gdGhlIG1vYiBhdHRhY2tcclxuICAgICAgICAgICAgdHggPSBhLnggLSBiLng7XHJcbiAgICAgICAgICAgIHR5ID0gYS55IC0gYi55O1xyXG4gICAgICAgICAgICBsZXQgY29vcmRzID0geyB4OiBzLnBvcy5kYXRhLngsIHo6IHMucG9zLmRhdGEueiB9O1xyXG4gICAgICAgICAgICB2YXIgdHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKSAvLyBDcmVhdGUgYSBuZXcgdHdlZW4gdGhhdCBtb2RpZmllcyAnY29vcmRzJy5cclxuICAgICAgICAgICAgICAgIC50byh7IHg6IHMucG9zLmRhdGEueCArIHR4LCB6OiBzLnBvcy5kYXRhLnogKyB0eSB9LCA1MDApIC8vIE1vdmUgdG8gKDMwMCwgMjAwKSBpbiAxIHNlY29uZC5cclxuICAgICAgICAgICAgICAgIC55b3lvKHRydWUpLnJlcGVhdCgxKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluT3V0KSAvLyBVc2UgYW4gZWFzaW5nIGZ1bmN0aW9uIHRvIG1ha2UgdGhlIGFuaW1hdGlvbiBzbW9vdGguXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24gKCkgeyAvLyBDYWxsZWQgYWZ0ZXIgdHdlZW4uanMgdXBkYXRlcyAnY29vcmRzJy5cclxuICAgICAgICAgICAgICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHtjb29yZHMueH0gLjI1ICR7Y29vcmRzLnp9YCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uQ29tcGxldGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vc2hvdyBzcGxhdFxyXG4gICAgICAgICAgICAgICAgICAgIEdNLnBsYXllci5jb21wb25lbnRzLnBsYXllci5oaXQodGhpcy5kYXRhLmRhbWFnZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7IC8vIFN0YXJ0IHRoZSB0d2VlbiBpbW1lZGlhdGVseS4gICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHsgLy9tb3ZlXHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHR4ID0gcm5kKDMpIC0gMTtcclxuICAgICAgICAgICAgICAgIHR5ID0gcm5kKDMpIC0gMTtcclxuICAgICAgICAgICAgICAgIGMgPSBHTS5tYXAuZ2V0UGl4KHMuZGF0YS54ICsgdHgsIHMuZGF0YS55ICsgdHkpO1xyXG4gICAgICAgICAgICB9IHdoaWxlIChjLmRhdGFbMF0gPT0gMClcclxuXHJcbiAgICAgICAgICAgIGxldCBvbGQgPSBHTS5tYXAuZ2V0UGl4KHMuZGF0YS54LCBzLmRhdGEueSk7XHJcbiAgICAgICAgICAgIG9sZC5kYXRhWzJdID0gMDtcclxuICAgICAgICAgICAgR00ubWFwLnB1dFBpeChvbGQsIHMuZGF0YS54LCBzLmRhdGEueSk7XHJcbiAgICAgICAgICAgIGMuZGF0YVsyXSA9IDB4ODg7XHJcbiAgICAgICAgICAgIHMuZGF0YS54ICs9IHR4O1xyXG4gICAgICAgICAgICBzLmRhdGEueSArPSB0eTtcclxuICAgICAgICAgICAgR00ubWFwLnB1dFBpeChjLCBzLmRhdGEueCwgcy5kYXRhLnkpO1xyXG4gICAgICAgICAgICBsZXQgY29vcmRzID0geyB4OiBzLnBvcy5kYXRhLngsIHo6IHMucG9zLmRhdGEueiB9O1xyXG4gICAgICAgICAgICB2YXIgdHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKVxyXG4gICAgICAgICAgICAgICAgLnRvKHsgeDogcy5wb3MuZGF0YS54ICsgdHgsIHo6IHMucG9zLmRhdGEueiArIHR5IH0sIDQwMCArIHJuZCg0MDApKVxyXG4gICAgICAgICAgICAgICAgLmRlbGF5KHJuZCgyNTApKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluT3V0KVxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHtjb29yZHMueH0gLjI1ICR7Y29vcmRzLnp9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5pZCA9IGBlJHtjb29yZHMueCArIHNpemUgLyAyfS0ke2Nvb3Jkcy56ICsgc2l6ZSAvIDJ9YDtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGl0OiBmdW5jdGlvbiAoYW1vdW50KSB7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5oZWFsdGggLT0gYW1vdW50O1xyXG4gICAgICAgIGxldCBlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhLWVudGl0eScpO1xyXG4gICAgICAgIGVudC5zZXRBdHRyaWJ1dGUoJ2JpbGxib2FyZC10ZXh0dXJlJywgeyBpbmRleDogMTQsIGxvb2t1cDogMTIgfSk7XHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAnc3ByJyk7XHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnYXV0by1kZXN0cm95JywgJycpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZW50KTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmhlYWx0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwuaWQgPSAnJztcclxuICAgICAgICAgICAgbGV0IHBpeCA9IEdNLm1hcC5nZXRQaXgodGhpcy5kYXRhLngsIHRoaXMuZGF0YS55KTtcclxuICAgICAgICAgICAgcGl4LmRhdGFbMl0gPSAwO1xyXG4gICAgICAgICAgICBHTS5tYXAucHV0UGl4KHBpeCwgdGhpcy5kYXRhLngsIHRoaXMuZGF0YS55KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgnYXV0by1kZXN0cm95JywgJycpO1xyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9iLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgncGxheWVyJywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgaGVhbHRoOiB7IHZhbHVlOiAnaW50JywgZGVmYXVsdDogMTUgfVxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmZvdW5kUGllY2VzID0gMDtcclxuICAgICAgICB0aGlzLmF0dGFjayA9IDE7XHJcbiAgICAgICAgdGhpcy5kZWZlbnNlID0gMDtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGF5ZXItc3ByaXRlJyk7XHJcbiAgICB9LFxyXG4gICAgbW92ZTogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICB2YXIgcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKEdNLmRhdGEuc3RhdGUgIT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBjb29yZHMgPSBzLmVsLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YTtcclxuICAgICAgICB2YXIgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKGRhdGEueCwgZGF0YS55LCAwKTsgICAgICAgICAgICAgICAgICAgICAgLy8gMCwwXHJcbiAgICAgICAgdmFyIGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhjb29yZHMueCwgY29vcmRzLnosIDApOyAgICAgICAgICAgICAgICAgIC8vIDEsMFxyXG4gICAgICAgIGNvb3Jkcy5yID0gR00uY2FtZXJhLnJvdDtcclxuICAgICAgICBpZiAoYS5kaXN0YW5jZVRvKGIpID4gMS45IHx8IGEuZGlzdGFuY2VUbyhiKSA8IC4yKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgYyA9IEdNLm1hcC5nZXRQaXgoZGF0YS54ICsgc2l6ZSAvIDIsIGRhdGEueSArIHNpemUgLyAyKTtcclxuICAgICAgICBpZiAoYy5kYXRhWzJdID4gMCkgeyAvLyBtb2IgaW4gbmV4dCBwb3NpdGlvblxyXG4gICAgICAgICAgICBsZXQgbW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Uke2RhdGEueCArIHNpemUgLyAyfS0ke2RhdGEueSArIHNpemUgLyAyfWApLmNvbXBvbmVudHMubW9iO1xyXG4gICAgICAgICAgICBsZXQgc3ByY29vcmQgPSB7IHg6IDAsIHo6IDAgfTtcclxuICAgICAgICAgICAgdmFyIHR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKHNwcmNvb3JkKSAvLyBDcmVhdGUgYSBuZXcgdHdlZW4gdGhhdCBtb2RpZmllcyAnY29vcmRzJy5cclxuICAgICAgICAgICAgICAgIC50byh7IHg6IGEueCAtIGIueCwgejogYS55IC0gYi55IH0sIDUwMCkgLy8gTW92ZSB0byAoMzAwLCAyMDApIGluIDEgc2Vjb25kLlxyXG4gICAgICAgICAgICAgICAgLnlveW8odHJ1ZSlcclxuICAgICAgICAgICAgICAgIC5yZXBlYXQoMSlcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5Jbk91dCkgLy8gVXNlIGFuIGVhc2luZyBmdW5jdGlvbiB0byBtYWtlIHRoZSBhbmltYXRpb24gc21vb3RoLlxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKCgpID0+IHsgLy8gQ2FsbGVkIGFmdGVyIHR3ZWVuLmpzIHVwZGF0ZXMgJ2Nvb3JkcycuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcHJpdGUuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3NwcmNvb3JkLnh9IDAgJHtzcHJjb29yZC56fWApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2IuaGl0KHRoaXMuYXR0YWNrICsgcm5kKDIpKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgR00uZGF0YS5zdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdNLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpOyAvLyBTdGFydCB0aGUgdHdlZW4gaW1tZWRpYXRlbHkuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGMuZGF0YVsxXSA+IDApIHsgLy8gaXRlbSBpbiBuZXh0IHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYiR7ZGF0YS54ICsgc2l6ZSAvIDJ9LSR7ZGF0YS55ICsgc2l6ZSAvIDJ9YCkuY29tcG9uZW50cy5pdGVtLmdldCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtc2cgPSBgRm91bmQgJHtwLm59YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwLnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTogLy8gaGVhcnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzLmRhdGEuaGVhbHRoID0gTWF0aC5taW4ocy5kYXRhLmhlYWx0aCsrLCAxNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IGBcXG5IZWFsdGggPSAke3MuZGF0YS5oZWFsdGh9LzE1YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMjogLy8gc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocC5kID4gdGhpcy5hdHRhY2spIHRoaXMuYXR0YWNrID0gcC5kO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiAvLyBzaGllbGRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IC8vIHBsYW5lIHBpZWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3VuZFBpZWNlcysrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBgXFxuT25seSAkezUgLSB0aGlzLmZvdW5kUGllY2VzfSBwaWVjZXMgbGVmdGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgR00ubWVzc2FnZS53cml0ZShtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgdHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKSAvLyBDcmVhdGUgYSBuZXcgdHdlZW4gdGhhdCBtb2RpZmllcyAnY29vcmRzJy5cclxuICAgICAgICAgICAgICAgIC50byh7IHg6IGRhdGEueCwgejogZGF0YS55IH0sIDEwMDApIC8vIE1vdmUgdG8gKDMwMCwgMjAwKSBpbiAxIHNlY29uZC5cclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5Jbk91dCkgLy8gVXNlIGFuIGVhc2luZyBmdW5jdGlvbiB0byBtYWtlIHRoZSBhbmltYXRpb24gc21vb3RoLlxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uICgpIHsgLy8gQ2FsbGVkIGFmdGVyIHR3ZWVuLmpzIHVwZGF0ZXMgJ2Nvb3JkcycuXHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7Y29vcmRzLnh9IC4yNSAke2Nvb3Jkcy56fWApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBHTS5kYXRhLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgICAgICBHTS51cGRhdGUoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LlxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaXQ6IGZ1bmN0aW9uIChhbW91bnQpIHtcclxuICAgICAgICBsZXQgZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1lbnRpdHknKTtcclxuICAgICAgICBlbnQuc2V0QXR0cmlidXRlKCdiaWxsYm9hcmQtdGV4dHVyZScsIHsgaW5kZXg6IDE0LCBsb29rdXA6IDUgfSk7XHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAnc3ByJyk7XHJcbiAgICAgICAgZW50LnNldEF0dHJpYnV0ZSgnYXV0by1kZXN0cm95JywgJycpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQoZW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLmhlYWx0aCAtPSBhbW91bnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5oZWFsdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZS5zZXRBdHRyaWJ1dGUoJ2JpbGxib2FyZC10ZXh0dXJlJywgeyBpbmRleDogMTV9KTtcclxuICAgICAgICAgICAgR00uZGF0YS5zdGF0ZSA9IDM7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEdNLm1lc3NhZ2Uud3JpdGUoYEdhbWUgT3ZlcmApOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBHTS5tZXNzYWdlLndyaXRlKGBPdWNoXFxuSGVhbHRoID0gJHt0aGlzLmRhdGEuaGVhbHRofS8xNWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvcGxheWVyLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnaXRlbScsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIHg6IHsgdmFsdWU6ICdmbG9hdCcgfSxcclxuICAgICAgICB5OiB7IHZhbHVlOiAnZmxvYXQnIH0sXHJcbiAgICAgICAgcHJvcHM6IHsgdmFsdWU6ICdvYmplY3QnIH1cclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb247XHJcbiAgICB9LFxyXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHMgPSB0aGlzO1xyXG4gICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKFwiYmlsbGJvYXJkLXRleHR1cmVcIiwgeyBpbmRleDogcy5kYXRhLnByb3BzLnMsIGxvb2t1cDogcy5kYXRhLnByb3BzLmkgfSk7XHJcbiAgICAgICAgbGV0IGNvb3JkcyA9IHMuZWwuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhO1xyXG4gICAgICAgIGNvb3Jkcy50ID0gMTtcclxuICAgICAgICBsZXQgdHggPSB0aGlzLmRhdGEueCwgdHkgPSB0aGlzLmRhdGEueTtcclxuICAgICAgICBsZXQgcGl4ID0gR00ubWFwLmdldFBpeCh0eCwgdHkpO1xyXG4gICAgICAgIHBpeC5kYXRhWzFdID0gMDtcclxuICAgICAgICBHTS5tYXAucHV0UGl4KHBpeCwgdHgsIHR5KTtcclxuICAgICAgICAgdmFyIHAgPSBuZXcgUHJvbWlzZShyID0+IHtcclxuICAgICAgICAgICAgdmFyIHQxID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcykgXHJcbiAgICAgICAgICAgICAgICAudG8oeyB5OiBjb29yZHMueSArIDEsIHQ6IDAgfSwgMzUwKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLk91dClcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHsgeDogY29vcmRzLngsIHk6IGNvb3Jkcy55LCB6OiBjb29yZHMueiB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHZhciB0MiA9IG5ldyBUV0VFTi5Ud2Vlbihjb29yZHMpXHJcbiAgICAgICAgICAgICAgICAudG8oeyB5OiBjb29yZHMueSAtIC41LCB0OiAwIH0sIDM1MClcclxuICAgICAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5JbikgXHJcbiAgICAgICAgICAgICAgICAub25VcGRhdGUoZnVuY3Rpb24gKCkgeyBcclxuICAgICAgICAgICAgICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCB7IHg6IGNvb3Jkcy54LCB5OiBjb29yZHMueSwgejogY29vcmRzLnogfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLm9uQ29tcGxldGUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzLmVsKTtcclxuICAgICAgICAgICAgICAgICAgICByKHMuZGF0YS5wcm9wcyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0MS5jaGFpbih0Mikuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2l0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnbWVzc2FnZScsIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmVsLmNvbXBvbmVudHMudGV4dDtcclxuICAgIH0sXHJcbiAgICB3cml0ZTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAodGhpcy50KSB0aGlzLnQuc3RvcCgpO1xyXG5cclxuICAgICAgICB0aGlzLmVsLnNldEF0dHJpYnV0ZSgndGV4dCcsIHsgdmFsdWU6IG1lc3NhZ2UsIG9wYWNpdHk6IDAuOCB9KTtcclxuICAgICAgICB2YXIgZCA9IHsgbzogMC44IH07XHJcbiAgICAgICAgdGhpcy50ID0gbmV3IFRXRUVOLlR3ZWVuKGQpXHJcbiAgICAgICAgICAgIC50byh7IG86IDAgfSwgMjUwKVxyXG4gICAgICAgICAgICAuZGVsYXkoMjAwMClcclxuICAgICAgICAgICAgLm9uVXBkYXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd0ZXh0JywgeyBvcGFjaXR5OiBkLm8gfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tZXNzYWdlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtYXBHZW4gPSByZXF1aXJlKFwiLi9tYXBnZW5cIik7XHJcblxyXG53aW5kb3cuc2l6ZSA9IDEyODtcclxuY29uc3QgZGVwdGggPSA3O1xyXG5cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdtYXAnLCB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tYXBDb250ZXh0ID0gbWFwR2VuLmdvKHNpemUsIGRlcHRoKTtcclxuICAgICAgICBsZXQgd29ybGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIik7XHJcbiAgICAgICAgbGV0IHdvcmxkRGF0YSA9IHRoaXMubWFwQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgc2l6ZSwgc2l6ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB3ZHAgPSAoaSArIHNpemUgKiBqKSAqIDQ7XHJcbiAgICAgICAgICAgICAgICBpZiAod29ybGREYXRhLmRhdGFbd2RwXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuY2xhc3NMaXN0LmFkZChcImZsb29yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdID09IDEwMikgcGxhbmUuc2V0QXR0cmlidXRlKFwibXl0ZXh0dXJlXCIsIFwiaW5kZXg6MTE7bG9va3VwOjhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod29ybGREYXRhLmRhdGFbd2RwXSA9PSAxNzApIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjEyO2xvb2t1cDoxMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdID09IDIzOCkgcGxhbmUuc2V0QXR0cmlidXRlKFwibXl0ZXh0dXJlXCIsIFwiaW5kZXg6MTI7bG9va3VwOjlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjA7bG9va3VwOlwiICsgfn4oKGkgKiA1KSAvIChqICogMikgKiAzKSAlIDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGkgLSAoc2l6ZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gaiAtIChzaXplIC8gMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBHTS5wbGF5ZXIuY29tcG9uZW50cy5wbGF5ZXIubW92ZSh7IHgsIHkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt4fSAwICR7eX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3ZveGVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQuYXBwZW5kQ2hpbGQocGxhbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHdvcmxkKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuYWRkT2JqcygpKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuYWRkSXRlbXMoKSk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmFkZE1vYnMoKSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UGl4OiBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcENvbnRleHQuZ2V0SW1hZ2VEYXRhKHgsIHksIDEsIDEpO1xyXG4gICAgfSxcclxuICAgIHB1dFBpeDogZnVuY3Rpb24gKGMsIHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBDb250ZXh0LnB1dEltYWdlRGF0YShjLCB4LCB5KTtcclxuICAgIH0sXHJcbiAgICByYW5kb21QbGFjZTogZnVuY3Rpb24gKG1pbkRpc3RhbmNlID0gMCkge1xyXG4gICAgICAgIGxldCB4LCB5LCBjO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeCA9IHdpbmRvdy5ybmQoc2l6ZSk7XHJcbiAgICAgICAgICAgIHkgPSB3aW5kb3cucm5kKHNpemUpO1xyXG4gICAgICAgICAgICBjID0gdGhpcy5nZXRQaXgoeCwgeSk7XHJcbiAgICAgICAgfSB3aGlsZSAoYy5kYXRhLmV2ZXJ5KHAgPT4gcCA9PSAwKSk7XHJcbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgYyB9O1xyXG4gICAgfSxcclxuICAgIGdldFdlaWdodGVkOiBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgICAgIGxldCBmID0gZmFsc2UsIGl0ZW07XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpdGVtID0gbGlzdFtybmQobGlzdC5sZW5ndGgpXTtcclxuICAgICAgICAgICAgZiA9IHJuZCgxMDApIDwgaXRlbS5jO1xyXG4gICAgICAgIH0gd2hpbGUgKCFmKVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSxcclxuICAgIGFkZEl0ZW1zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTUwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIiksIHR4LCB0eTtcclxuICAgICAgICAgICAgbGV0IHAgPSB0aGlzLnJhbmRvbVBsYWNlKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRXZWlnaHRlZChELml0ZW1zKTtcclxuICAgICAgICAgICAgaXRlbS5tYXAgPSBwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHAuYy5kYXRhWzFdICE9IDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBwLmMuZGF0YVsxXSA9IDB4NDE7XHJcbiAgICAgICAgICAgIHRoaXMucHV0UGl4KHAuYywgcC54LCBwLnkpO1xyXG5cclxuICAgICAgICAgICAgdHggPSBwLnggLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgdHkgPSBwLnkgLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgdmFyIGQgPSAobmV3IFRIUkVFLlZlY3RvcjIoMCwgMCkpLmRpc3RhbmNlVG8obmV3IFRIUkVFLlZlY3RvcjIodHgsIHR5KSk7XHJcblxyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZShcImJpbGxib2FyZC10ZXh0dXJlXCIsIHsgaW5kZXg6IDMgfSk7Ly8geyBpbmRleDogaXRlbS5zLCBsb29rdXA6IGl0ZW0uaSB9KTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7dHh9IC4yNSAke3R5fWApO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAnc3ByJyk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdpdGVtJywgeyB4OiBwLngsIHk6IHAueSwgcHJvcHM6IGl0ZW0gfSk7XHJcbiAgICAgICAgICAgIGIuaWQgPSBgYiR7cC54fS0ke3AueX1gO1xyXG4gICAgICAgICAgICBiLmRhdGEgPSBpdGVtO1xyXG4gICAgICAgICAgICBpdGVtcy5hcHBlbmRDaGlsZChiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSxcclxuICAgIGFkZE1vYnM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgaXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKSwgdHgsIHR5O1xyXG4gICAgICAgICAgICBsZXQgbW9iID0gdGhpcy5nZXRXZWlnaHRlZChELm1vYnMpLCBwLCBkO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBwID0gdGhpcy5yYW5kb21QbGFjZSgpO1xyXG4gICAgICAgICAgICAgICAgdHggPSBwLnggLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgICAgIHR5ID0gcC55IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgICAgICBkID0gKG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApKS5kaXN0YW5jZVRvKG5ldyBUSFJFRS5WZWN0b3IyKHR4LCB0eSkpO1xyXG4gICAgICAgICAgICB9IHdoaWxlIChtb2IubSA+PSBkKTtcclxuICAgICAgICAgICAgcC5jLmRhdGFbMl0gPSAweDg4O1xyXG4gICAgICAgICAgICB0aGlzLnB1dFBpeChwLmMsIHAueCwgcC55KTtcclxuXHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKFwiYmlsbGJvYXJkLXRleHR1cmVcIiwgeyBpbmRleDogMiwgbG9va3VwOiBtb2IuaSB9KTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7dHh9IC4yNSAke3R5fWApO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAnc3ByJyk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtb2InLCB7XHJcbiAgICAgICAgICAgICAgICB4OiBwLngsIHk6IHAueSxcclxuICAgICAgICAgICAgICAgIGhlYWx0aDogcm5kKG1vYi5oWzFdKSArIG1vYi5oWzBdLFxyXG4gICAgICAgICAgICAgICAgZGFtYWdlOiBybmQobW9iLmRbMV0pICsgbW9iLmRbMF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGIuaWQgPSBgZSR7cC54fS0ke3AueX1gO1xyXG4gICAgICAgICAgICBpdGVtcy5hcHBlbmRDaGlsZChiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfSxcclxuICAgIGFkZE9ianM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgb2JqcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKSwgdHgsIHR5LCBwLCBkO1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBwID0gdGhpcy5yYW5kb21QbGFjZSgpO1xyXG4gICAgICAgICAgICAgICAgdHggPSBwLnggLSBzaXplIC8gMjtcclxuICAgICAgICAgICAgICAgIHR5ID0gcC55IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgICAgICBkID0gKG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApKS5kaXN0YW5jZVRvKG5ldyBUSFJFRS5WZWN0b3IyKHR4LCB0eSkpO1xyXG4gICAgICAgICAgICB9IHdoaWxlICgyNSA+PSBkKTtcclxuXHJcbiAgICAgICAgICAgIHAuYy5kYXRhWzFdID0gMHhFRTtcclxuICAgICAgICAgICAgdGhpcy5wdXRQaXgocC5jLCBwLngsIHAueSk7XHJcblxyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZShcImJpbGxib2FyZC10ZXh0dXJlXCIsIHsgaW5kZXg6IEQub2Jqc1tpXS5zIH0pO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0eH0gLjI1ICR7dHl9YCk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ2l0ZW0nLCB7IHg6IHAueCwgeTogcC55LCBwcm9wczogRC5vYmpzW2ldIH0pO1xyXG4gICAgICAgICAgICBiLmlkID0gYGIke3AueH0tJHtwLnl9YDtcclxuICAgICAgICAgICAgb2Jqcy5hcHBlbmRDaGlsZChiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICB9XHJcbn0pO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnYXV0by1kZXN0cm95Jywge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHR3ZWVuIGFuZCBkZXN0cm95XHJcbiAgICAgICAgdmFyIG0gPSB0aGlzLmVsLmdldE9iamVjdDNEKCdtZXNoJyk7XHJcbiAgICAgICAgaWYgKG0pIG0ubWF0ZXJpYWwuZGVwdGhUZXN0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG9sZHggPSB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YS54IHx8IDAsXHJcbiAgICAgICAgICAgIG9sZHkgPSB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YS55IHx8IDAsXHJcbiAgICAgICAgICAgIG9sZHogPSB0aGlzLmVsLmNvbXBvbmVudHMucG9zaXRpb24uZGF0YS56IHx8IDAsXHJcbiAgICAgICAgICAgIGNvb3JkcyA9IHsgeTogb2xkeSB9XHJcbiAgICAgICAgdmFyIHR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcykgLy8gQ3JlYXRlIGEgbmV3IHR3ZWVuIHRoYXQgbW9kaWZpZXMgJ2Nvb3JkcycuXHJcbiAgICAgICAgICAgIC50byh7IHk6IG9sZHkgLSAuMjUgfSwgNTAwKSAvLyBNb3ZlIHRvICgzMDAsIDIwMCkgaW4gMSBzZWNvbmQuXHJcbiAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5JbikgLy8gVXNlIGFuIGVhc2luZyBmdW5jdGlvbiB0byBtYWtlIHRoZSBhbmltYXRpb24gc21vb3RoLlxyXG4gICAgICAgICAgICAub25VcGRhdGUoKCkgPT4geyAvLyBDYWxsZWQgYWZ0ZXIgdHdlZW4uanMgdXBkYXRlcyAnY29vcmRzJy5cclxuICAgICAgICAgICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHsgeDogb2xkeCwgeTogY29vcmRzLnksIHo6IG9sZHogfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7IC8vIFN0YXJ0IHRoZSB0d2VlbiBpbW1lZGlhdGVseS5cclxuICAgIH1cclxufSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2F1dG9kZXN0cm95LmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9