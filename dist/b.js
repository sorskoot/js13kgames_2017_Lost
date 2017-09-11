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
	        } while (c.data.every(d => d == 0))
	        s.data.x += tx;
	        s.data.y += ty;
	        let coords = { x: s.pos.data.x, z: s.pos.data.z };
	        var tween = new TWEEN.Tween(coords)
	            .to({ x: s.pos.data.x + tx, z: s.pos.data.z + ty }, 400+rnd(400))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTM1NTAzOTY3MmI4OGEyODg0MDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215U2hhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9iaWxsYm9hcmRTaGFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcGdlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFD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QXFCO0FBQ3RFLDJDQUEwQyxHQUFHLE9BQU8sR0FBRztBQUN2RDtBQUNBLHFDQUFvQyxtQ0FBbUM7QUFDdkUsd0JBQXVCLElBQUksR0FBRyxJQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyIsImZpbGUiOiJiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTM1NTAzOTY3MmI4OGEyODg0MDEiLCJyZXF1aXJlKCcuL2dsb2JhbCcpO1xyXG5yZXF1aXJlKCcuL2RhdGEnKTtcclxucmVxdWlyZSgnLi9teVNoYWRlcicpO1xyXG5yZXF1aXJlKCcuL2JpbGxib2FyZFNoYWRlcicpO1xyXG5yZXF1aXJlKCcuL21hcCcpO1xyXG5yZXF1aXJlKCcuL2dhbWVtYW5hZ2VyJyk7XHJcbnJlcXVpcmUoJy4vbW9iJyk7XHJcbnJlcXVpcmUoJy4vcGxheWVyJyk7XHJcbnJlcXVpcmUoJy4vaXRlbScpO1xyXG5yZXF1aXJlKCcuL21lc3NhZ2UnKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwid2luZG93LnJuZCA9IG0gPT4gfn4oTWF0aC5yYW5kb20oKSAqIG0pO1xyXG53aW5kb3cudCA9IG5ldyBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCcuL2xvc3QucG5nJyk7XHJcbndpbmRvdy50Lm1pbkZpbHRlciA9IHdpbmRvdy50Lm1hZ0ZpbHRlciA9IDEwMDM7XHJcbndpbmRvdy5wYWwgPSBuZXcgVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSgnLi9wYWxldHRlcy5wbmcnKTtcclxud2luZG93LnBhbC5taW5GaWx0ZXIgPSB3aW5kb3cucGFsLm1hZ0ZpbHRlciA9IDEwMDM7XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwid2luZG93LkQgPSB7XHJcbiAgICBwbGF5ZXI6IHtcclxuICAgICAgICB0OiAxLCAgLy8gdHlwZSA6IHBsYXllclxyXG4gICAgICAgIHM6IDIsICAvLyBzcHJpdGU6IDIgICAgXHJcbiAgICAgICAgaDogMTAsIC8vIHN0YXJ0IGhlYWx0aFxyXG4gICAgfSwgbW9iczogW3tcclxuICAgICAgICBoOiBbMiwgM10sIC8vIGhlYWx0aDogYmV0d2VlbiAyIGFuZCA1XHJcbiAgICAgICAgaTogNiwgIC8vIGNvbG9yIGluZGV4IDhcclxuICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICBjOiA3MCAvLyBjaGFuZ2U9NzAlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGg6IFs0LCA0XSwgLy8gaGVhbHRoOiBiZXR3ZWVuIDQgYW5kIDhcclxuICAgICAgICBpOiA3LCAvLyBjb2xvciBpbmRleCA4XHJcbiAgICAgICAgbTogMTAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgIGM6IDIwIC8vY2hhbmdlIDMwJSAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGg6IFs2LCA2XSwgLy8gaGVhbHRoOiBiZXR3ZWVuIDYgYW5kIDEyXHJcbiAgICAgICAgaTogOSwgIC8vIGNvbG9yIGluZGV4IDhcclxuICAgICAgICBtOiAzMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgYzogMTAgLy8gY2hhbmdlIDEwJVxyXG4gICAgfV0sXHJcbiAgICBmbG9vcnM6IFt7XHJcbiAgICAgICAgdDogMywgLy8gdHlwZTogZmxvb3JcclxuICAgICAgICBiOiAxLCAvLyBiaW9tZTogMVxyXG4gICAgICAgIHM6IFsxXSxcclxuICAgICAgICBpOiBbMiwgNV1cclxuICAgIH1dLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHQ6IDEsXHJcbiAgICAgICAgICAgIG46IFwiYSBoZWFydFwiLCAvL25hbWVcclxuICAgICAgICAgICAgczogMTMsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IC0xLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiA3MCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAyLCAvLyBzdWJ0eXBlIDogc3dvcmRcIixcclxuICAgICAgICAgICAgbjogXCJhbiBpcm9uIHN3b3JkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBkOiA1LCAvLyBkYW1hZ2VcclxuICAgICAgICAgICAgczogNSwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMSwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogMjAsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG5cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDIsIC8vIHN1YnR5cGUgOiBzd29yZFwiLFxyXG4gICAgICAgICAgICBuOiBcImEgZ29sZGVuIHN3b3JkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBkOiA1LCAvLyBkYW1hZ2VcclxuICAgICAgICAgICAgczogNSwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMjMsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDEwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDIsIC8vIHN1YnR5cGUgOiBzd29yZFwiLFxyXG4gICAgICAgICAgICBuOiBcImEgZGlhbW9uZCBzd29yZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgZDogNSwgLy8gZGFtYWdlXHJcbiAgICAgICAgICAgIHM6IDUsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDI0LCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAyLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDMsIC8vIHN1YnR5cGUgOiBzaGllbGRcIixcclxuICAgICAgICAgICAgbjogXCJhbiBpcm9uIHNoaWVsZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgYjogMiwgLy8gYmxvY2sgdmFsdWVcclxuICAgICAgICAgICAgczogNCwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMCwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogMjAsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMywgLy8gc3VidHlwZSA6IHNoaWVsZFwiLFxyXG4gICAgICAgICAgICBuOiBcImEgZ29sZGVuIHNoaWVsZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgYjogNCwgLy8gYmxvY2sgdmFsdWVcclxuICAgICAgICAgICAgczogNCwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMjMsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDEwLCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDMsIC8vIHN1YnR5cGUgOiBzaGllbGRcIixcclxuICAgICAgICAgICAgbjogXCJhIGRpYW1vbmQgc2hpZWxkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBiOiA3LCAvLyBibG9jayB2YWx1ZVxyXG4gICAgICAgICAgICBzOiA0LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAyNCwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogNSwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfV0sXHJcbiAgICBvYmpzOiBbeyAvL29iamVjdGl2ZXNcclxuICAgICAgICB0OiA4LCAvLyBpdGVtIHR5cGUgPSA4XHJcbiAgICAgICAgcDogMSwgLy8gcGllY2UgPTFcclxuICAgICAgICBuOiBcInlvdXIgcGxhbmUncyBjYWJpblwiLFxyXG4gICAgICAgIHM6IDZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDIsXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgbGVmdCB3aW5nXCIsXHJcbiAgICAgICAgczogN1xyXG4gICAgfSx7XHJcbiAgICAgICAgdDogOCwgLy8gaXRlbSB0eXBlID0gOFxyXG4gICAgICAgIHA6IDMsXHJcbiAgICAgICAgbjogXCJ5b3VyIHBsYW5lJ3MgYm9keVwiLFxyXG4gICAgICAgIHM6IDhcclxuICAgIH0se1xyXG4gICAgICAgIHQ6IDgsIC8vIGl0ZW0gdHlwZSA9IDhcclxuICAgICAgICBwOiA0LFxyXG4gICAgICAgIG46IFwieW91ciBwbGFuZSdzIHJpZ2h0IHdpbmdcIixcclxuICAgICAgICBzOiA5XHJcbiAgICB9LHtcclxuICAgICAgICB0OiA4LCAvLyBpdGVtIHR5cGUgPSA4XHJcbiAgICAgICAgcDogNSxcclxuICAgICAgICBuOiBcInlvdXIgcGxhbmUncyB0aHJ1c3RlclwiLFxyXG4gICAgICAgIHM6IDEwXHJcbiAgICB9XVxyXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWwgVEhSRUUsIEFGUkFNRSAqL1xyXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ215dGV4dHVyZScsIHtcclxuICBzY2hlbWE6IHtcclxuICAgIGNvbG9yOlxyXG4gICAge1xyXG4gICAgICB0eXBlOiAnY29sb3InXHJcbiAgICB9LFxyXG4gICAgaW5kZXg6IHsgdHlwZTogJ2ludCcgfSxcclxuICAgIGxvb2t1cDogeyB0eXBlOiAnaW50JywgZGVmYXVsdDogMCB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsIHVzaW5nIHRoZSB0d28gc2hhZGVycyBkZWZpbmVkXHJcbiAgICogaW4gdmVydGV4Lmdsc2wgYW5kIGZyYWdtZW50Lmdsc2wuXHJcbiAgICovXHJcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgIHZhciBmcmFnbWVudFNoYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFnbWVudCcpLnRleHRDb250ZW50O1xyXG4gICAgdmFyIHZlcnRleFNoYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJ0ZXgnKS50ZXh0Q29udGVudDtcclxuXHJcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICB0aW1lOiB7IHZhbHVlOiAwLjAgfSxcclxuICAgICAgICBpbmRleDogeyB2YWx1ZTogdGhpcy5kYXRhLmluZGV4IH0sXHJcbiAgICAgICAgRGlmZnVzZVRleHR1cmU6IHsgdmFsdWU6IHdpbmRvdy50IH0sXHJcbiAgICAgICAgTG9va3VwOiB7IHZhbHVlOiB3aW5kb3cucGFsIH0sXHJcbiAgICAgICAgY29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcihkYXRhLmNvbG9yKSB9LFxyXG4gICAgICAgIHNwcml0ZURpbWVuc2lvbnM6IHsgdmFsdWU6IHsgeDogMTYuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICByZXBlYXQ6IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIGZvZ1N0YXJ0OiB7IHZhbHVlOiA1IH0sXHJcbiAgICAgICAgZm9nRW5kOiB7IHZhbHVlOiAxNSB9LFxyXG4gICAgICAgIGxvb2t1cEluZGV4Ont2YWx1ZTpkYXRhLmxvb2t1cH0sXHJcbiAgICAgICAgZm9nQ29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigwLCAwLCAwKSB9LFxyXG4gICAgICAgIHRpbnQ6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigyNTUsIDI1NSwgMjU1KSB9LFxyXG4gICAgICAgIHRpbnRBbW91bnQ6IHsgdmFsdWU6IDAgfVxyXG4gICAgICB9LFxyXG4gICAgICB2ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgIGZyYWdtZW50U2hhZGVyXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYXBwbHlUb01lc2goKTtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kZWwtbG9hZGVkJywgKCkgPT4gdGhpcy5hcHBseVRvTWVzaCgpKTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgU2hhZGVyTWF0ZXJpYWwgd2hlbiBjb21wb25lbnQgZGF0YSBjaGFuZ2VzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5pbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5pbmRleDtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMubG9va3VwSW5kZXgudmFsdWU9dGhpcy5kYXRhLmxvb2t1cDtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IHRoZSBtYXRlcmlhbCB0byB0aGUgY3VycmVudCBlbnRpdHkuXHJcbiAgICovXHJcbiAgYXBwbHlUb01lc2g6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG1lc2ggPSB0aGlzLmVsLmdldE9iamVjdDNEKCdtZXNoJyk7XHJcbiAgICBpZiAobWVzaCkge1xyXG4gICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlcGVhdC52YWx1ZS54ID0gK3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikgfHwgMTtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueSA9ICt0aGlzLmVsLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKSB8fCAxO1xyXG4gICAgICBtZXNoLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuICAgIH1cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIE9uIGVhY2ggZnJhbWUsIHVwZGF0ZSB0aGUgJ3RpbWUnIHVuaWZvcm0gaW4gdGhlIHNoYWRlcnMuXHJcbiAgICovXHJcbiAgLy8gdGljazogZnVuY3Rpb24gKHQpIHtcclxuICAvLyAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudGltZS52YWx1ZSA9IHQgLyAxMDAwOyBcclxuICAvLyB9XHJcbn0pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbXlTaGFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFsIFRIUkVFLCBBRlJBTUUgKi9cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdiaWxsYm9hcmQtdGV4dHVyZScsIHtcclxuICBzY2hlbWE6IHtcclxuICAgIGluZGV4Ont0eXBlOidpbnQnfSxcclxuICAgIGxvb2t1cDogeyB0eXBlOiAnaW50JywgZGVmYXVsdDogLTEgfVxyXG4gIH0sXHJcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTsgICAgXHJcbiAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhZ21lbnQnKS50ZXh0Q29udGVudDtcclxuICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVydGV4LWJpbGxib2FyZCcpLnRleHRDb250ZW50O1xyXG4gICAgXHJcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICB0aW1lOiB7IHZhbHVlOiAwLjAgfSxcclxuICAgICAgICBpbmRleDogeyB2YWx1ZTogdGhpcy5kYXRhLmluZGV4IH0sXHJcbiAgICAgICAgRGlmZnVzZVRleHR1cmU6IHsgdmFsdWU6IHdpbmRvdy50fSxcclxuICAgICAgICBjb2xvcjogeyB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKGRhdGEuY29sb3IpIH0sXHJcbiAgICAgICAgc3ByaXRlRGltZW5zaW9uczogeyB2YWx1ZTogeyB4OiAxNi4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIHJlcGVhdDogeyB2YWx1ZTogeyB4OiAxLjAsIHk6IDEuMCB9IH0sXHJcbiAgICAgICAgTG9va3VwOiB7IHZhbHVlOiB3aW5kb3cucGFsIH0sICAgIFxyXG4gICAgICAgIGxvb2t1cEluZGV4Ont2YWx1ZTpkYXRhLmxvb2t1cH0sXHJcbiAgICAgICAgZm9nU3RhcnQ6e3ZhbHVlOjEwfSxcclxuICAgICAgICBmb2dFbmQ6e3ZhbHVlOjE1fSxcclxuICAgICAgICBhbHBoYXRlc3Q6e3ZhbHVlOjAuOTV9LFxyXG4gICAgICAgIGZvZ0NvbG9yOnt2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKDAsMCwwKX1cclxuICAgICAgfSxcclxuICAgICAgdmVydGV4U2hhZGVyLFxyXG4gICAgICBmcmFnbWVudFNoYWRlclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1hdGVyaWFsLmJsZW5kaW5nID0gVEhSRUUuTXVsdGlwbHlCbGVuZGluZztcclxuICAgIHRoaXMuYXBwbHlUb01lc2goKTtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kZWwtbG9hZGVkJywgKCkgPT4gdGhpcy5hcHBseVRvTWVzaCgpKTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgU2hhZGVyTWF0ZXJpYWwgd2hlbiBjb21wb25lbnQgZGF0YSBjaGFuZ2VzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5pbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5pbmRleDtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMubG9va3VwSW5kZXgudmFsdWUgPSB0aGlzLmRhdGEubG9va3VwO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQXBwbHkgdGhlIG1hdGVyaWFsIHRvIHRoZSBjdXJyZW50IGVudGl0eS5cclxuICAgKi9cclxuICBhcHBseVRvTWVzaDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWVzaCA9IHRoaXMuZWwuZ2V0T2JqZWN0M0QoJ21lc2gnKTtcclxuICAgIGlmIChtZXNoKSB7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnggPSt0aGlzLmVsLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpfHwxO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlcGVhdC52YWx1ZS55ID0rdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIil8fDE7XHJcbiAgICAgIG1lc2gubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogT24gZWFjaCBmcmFtZSwgdXBkYXRlIHRoZSAndGltZScgdW5pZm9ybSBpbiB0aGUgc2hhZGVycy5cclxuICAgKi9cclxuICAvLyB0aWNrOiBmdW5jdGlvbiAodCkge1xyXG4gIC8vICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50aW1lLnZhbHVlID0gdCAvIDEwMDA7IFxyXG4gIC8vIH1cclxufSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9iaWxsYm9hcmRTaGFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbnZhciBnZW5lcmF0b3IgPSB7XHJcbiAgICBnbzogKG1hcFdpZHRoLCBkZXB0aCkgPT4ge1xyXG4gICAgICAgIHZhciBwaWVjZXMgPSBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAyLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMCwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDIsIDAsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAyLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAwLCAxLCAxXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAyLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMiwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMCwgMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAyLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIHZhciBtYXBXaWR0aCA9IDI1NjtcclxuXHJcbiAgICAgICAgbGV0IHBsID0gcGllY2VzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lID0gcGllY2VzW2ldLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2xvbmUubGVuZ3RoOyBqKyspXHJcbiAgICAgICAgICAgICAgICBjbG9uZVtqXSA9IGNsb25lW2pdLnNsaWNlKCkucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBwaWVjZXMucHVzaChjbG9uZSk7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZTIgPSBwaWVjZXNbaV0uc2xpY2UoKTtcclxuICAgICAgICAgICAgY2xvbmUyID0gY2xvbmUyLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgcGllY2VzLnB1c2goY2xvbmUyKTtcclxuICAgICAgICAgICAgbGV0IGNsb25lMyA9IGNsb25lLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGNsb25lMyA9IGNsb25lMy5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHBpZWNlcy5wdXNoKGNsb25lMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGllY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBpZWNlc1tpXS5zaXplID0geyB3OiBwaWVjZXNbaV1bMF0ubGVuZ3RoLCBoOiBwaWVjZXNbaV0ubGVuZ3RoIH07XHJcbiAgICAgICAgICAgIHBpZWNlc1tpXS5leGl0cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBpZWNlc1tpXS5zaXplLmg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBwaWVjZXNbaV0uc2l6ZS53OyBoKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGllY2VzW2ldW2pdW2hdID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlc1tpXS5leGl0cy5wdXNoKHsgeDogaCwgeTogaiB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBtYXBDYW52YXMud2lkdGggPSBtYXBXaWR0aDtcclxuICAgICAgICBtYXBDYW52YXMuaGVpZ2h0ID0gbWFwV2lkdGg7XHJcblxyXG4gICAgICAgIC8vIFRlbXAgZHVyaW5nIGRldmVsb3BtZW50XHJcbiAgICAgICAgbWFwQ2FudmFzLnN0eWxlLndpZHRoID0gJzEwMjRweCc7XHJcbiAgICAgICAgbWFwQ2FudmFzLnN0eWxlLmhlaWdodCA9ICcxMDI0cHgnO1xyXG4gICAgICAgIG1hcENhbnZhcy5zdHlsZS5pbWFnZVJlbmRlcmluZyA9ICdwaXhlbGF0ZWQnO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFwQ2FudmFzKTtcclxuICAgICAgICAvLyBFTkRcclxuXHJcbiAgICAgICAgdmFyIG1hcENvbnRleHQgPSBtYXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAwKVwiO1xyXG4gICAgICAgIG1hcENvbnRleHQuZmlsbFJlY3QoMCwgMCwgbWFwV2lkdGgsIG1hcFdpZHRoKTtcclxuXHJcbiAgICAgICAgbGV0IGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICB2YXIgYWRkUm9vbSA9IChleGl0LCBzcGVjaWFsKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwaWVjZTtcclxuICAgICAgICAgICAgbGV0IGV4aXRzID0gW107XHJcbiAgICAgICAgICAgIGxldCBjbGVhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WDtcclxuICAgICAgICAgICAgbGV0IHRhcmdldFk7XHJcbiAgICAgICAgICAgIGxldCB0cmllcyA9IDI1O1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBwaWVjZSA9IHBpZWNlc1tybmQocGllY2VzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcSA9IDA7IHEgPCBwaWVjZS5leGl0cy5sZW5ndGg7IHErKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2FsY2FsYXRlIG5ldyBwb3NpdGlvbiBzbyB0aGF0IHRoZSAnMnMnIGdvIG9uIHRvcCBvZiBlYWNob3RoZXIsIGJ1dCB0aWxlcyBub3Qgb3ZlcmxhcFxyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhleSBvdmVybGFwIHRyeSBhIGRpZmZlcmVudCAnMidcclxuICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzbid0IGEgMiwgdHJ5IGFub3RoZXIgcGllY2VcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRYID0gZXhpdC54IC0gcGllY2UuZXhpdHNbcV0ueDtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZID0gZXhpdC55IC0gcGllY2UuZXhpdHNbcV0ueTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nRGF0YSA9IG1hcENvbnRleHQuZ2V0SW1hZ2VEYXRhKHRhcmdldFgsIHRhcmdldFksIHBpZWNlLnNpemUudywgcGllY2Uuc2l6ZS5oKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhciA9IGltZ0RhdGEuZGF0YS5ldmVyeShkID0+IGQgPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0cmllcy0tO1xyXG4gICAgICAgICAgICB9IHdoaWxlICh0cmllcyA+IDAgJiYgIWNsZWFyKTtcclxuICAgICAgICAgICAgaWYgKCFjbGVhcikge1xyXG4gICAgICAgICAgICAgICAgcGllY2UgPSBbWzFdXTtcclxuICAgICAgICAgICAgICAgIHBpZWNlLmV4aXRzID0gW3t9XTtcclxuICAgICAgICAgICAgICAgIHRhcmdldFggPSBleGl0Lng7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRZID0gZXhpdC55O1xyXG4gICAgICAgICAgICAgICAgcSA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSBcIiM0MDBcIjtcclxuICAgICAgICAgICAgaWYgKCFmaXJzdCkgbWFwQ29udGV4dC5maWxsUmVjdCh0YXJnZXRYICsgcGllY2UuZXhpdHNbcV0ueCB8fCAwLCB0YXJnZXRZICsgcGllY2UuZXhpdHNbcV0ueSB8fCAwLCAxLCAxKTtcclxuICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSAhZmlyc3QgPyBcIiM0MDBcIiA6IFwiIzYwMFwiO1xyXG4gICAgICAgICAgICBpZiAoc3BlY2lhbCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSBcIiNFMDBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BlY2lhbCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSBcIiNBMDBcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwaWVjZS5mb3JFYWNoKChpLCBweSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaS5mb3JFYWNoKChqLCBweCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxSZWN0KHRhcmdldFggKyBweCwgdGFyZ2V0WSArIHB5LCAxLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdHMucHVzaCh7IHg6IHRhcmdldFggKyBweCwgeTogdGFyZ2V0WSArIHB5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZXhpdHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb29wcyA9IGRlcHRoO1xyXG4gICAgICAgIGxldCBleGl0cyA9IFt7IHg6IG1hcFdpZHRoIC8gMiwgeTogbWFwV2lkdGggLyAyIH1dO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcHM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbmV3RXhpdHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHNwZWNpYWw7XHJcbiAgICAgICAgICAgIGV4aXRzLmZvckVhY2goKGV4aXQsIGluZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gbG9vcHMgLSAxICYmIGluZCA9PSBleGl0cy5sZW5ndGggLSB+fihleGl0cy5sZW5ndGggLyAzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gbG9vcHMgLSAxICYmIGluZCA9PSB+fihleGl0cy5sZW5ndGggLyAzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHEgPSBhZGRSb29tKGV4aXQsIHNwZWNpYWwpO1xyXG4gICAgICAgICAgICAgICAgbmV3RXhpdHMgPSBuZXdFeGl0cy5jb25jYXQocSk7XHJcbiAgICAgICAgICAgICAgICBzcGVjaWFsID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV4aXRzID0gbmV3RXhpdHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFwQ29udGV4dDtcclxuICAgIH1cclxuXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0b3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFwZ2VuLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnZ2FtZW1hbmFnZXInLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICBzdGF0ZTogeyB2YWx1ZTogJ2ludCcsIGRlZmF1bHQ6IDAgfVxyXG4gICAgICAgIC8vIDAgPT0gcGxheWVyXHJcbiAgICAgICAgLy8gMSA9PSBlbmVteVxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXInKTtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW1lcmEnKTtcclxuICAgICAgICB0aGlzLm1hcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXBnZW8nKS5jb21wb25lbnRzLm1hcDtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbWVzc2FnZV0nKS5jb21wb25lbnRzLm1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEucm90ID0gMDtcclxuICAgICAgICB3aW5kb3cuR00gPSB0aGlzO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKGQpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YS5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5jb21wb25lbnRzLnBsYXllci5tb3ZlKGQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlbmVteScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbW9iXScpO1xyXG4gICAgICAgICAgICAgICAgbW9icy5mb3JFYWNoKGQgPT4gZC5jb21wb25lbnRzLm1vYi5tb3ZlKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnN0YXRlID0gMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nYW1lbWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ21vYicsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIHg6IHsgdmFsdWU6ICdmbG9hdCcgfSxcclxuICAgICAgICB5OiB7IHZhbHVlOiAnZmxvYXQnIH0sXHJcbiAgICAgICAgaGVhbHRoOiB7IHZhbHVlOiAnaW50JyB9XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zID0gdGhpcy5lbC5jb21wb25lbnRzLnBvc2l0aW9uO1xyXG4gICAgfSxcclxuICAgIG1vdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBBKiB3b3VsZCBiZSBuaWNlLi4uIGZvciBub3csIGp1c3QgbW92ZSByYW5kb20uLi5cclxuICAgICAgICBsZXQgdHgsIHR5LCBjLCBzID0gdGhpcztcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHR4ID0gcm5kKDMpIC0gMTtcclxuICAgICAgICAgICAgdHkgPSBybmQoMykgLSAxO1xyXG4gICAgICAgICAgICBjID0gR00ubWFwLmdldFBpeChzLmRhdGEueCArIHR4LCBzLmRhdGEueSArIHR5KTtcclxuICAgICAgICB9IHdoaWxlIChjLmRhdGEuZXZlcnkoZCA9PiBkID09IDApKVxyXG4gICAgICAgIHMuZGF0YS54ICs9IHR4O1xyXG4gICAgICAgIHMuZGF0YS55ICs9IHR5O1xyXG4gICAgICAgIGxldCBjb29yZHMgPSB7IHg6IHMucG9zLmRhdGEueCwgejogcy5wb3MuZGF0YS56IH07XHJcbiAgICAgICAgdmFyIHR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcylcclxuICAgICAgICAgICAgLnRvKHsgeDogcy5wb3MuZGF0YS54ICsgdHgsIHo6IHMucG9zLmRhdGEueiArIHR5IH0sIDQwMCtybmQoNDAwKSlcclxuICAgICAgICAgICAgLmRlbGF5KHJuZCgyNTApKVxyXG4gICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuSW5PdXQpXHJcbiAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHtjb29yZHMueH0gLjI1ICR7Y29vcmRzLnp9YCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpOyAvLyBTdGFydCB0aGUgdHdlZW4gaW1tZWRpYXRlbHkuICAgICAgIFxyXG4gICAgfVxyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2IuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdwbGF5ZXInLCB7XHJcbiAgICBzY2hlbWE6IHtcclxuICAgICAgICBoZWFsdGg6IHsgdmFsdWU6ICdpbnQnLCBkZWZhdWx0OiAxMCB9XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZm91bmRQaWVjZXMgPSAwO1xyXG4gICAgfSxcclxuICAgIG1vdmU6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyIHMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChHTS5kYXRhLnN0YXRlICE9IDApIHJldHVybjtcclxuICAgICAgICB2YXIgY29vcmRzID0gcy5lbC5jb21wb25lbnRzLnBvc2l0aW9uLmRhdGE7XHJcbiAgICAgICAgdmFyIGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhkYXRhLngsIGRhdGEueSwgMCk7ICAgICAgICAgICAgICAgICAgICAgIC8vIDAsMFxyXG4gICAgICAgIHZhciBiID0gbmV3IFRIUkVFLlZlY3RvcjMoY29vcmRzLngsIGNvb3Jkcy56LCAwKTsgICAgICAgICAgICAgICAgICAvLyAxLDBcclxuICAgICAgICBjb29yZHMuciA9IEdNLmNhbWVyYS5yb3Q7XHJcbiAgICAgICAgaWYgKGEuZGlzdGFuY2VUbyhiKSA+IDEuOSB8fCBhLmRpc3RhbmNlVG8oYikgPCAuMilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGMgPSBHTS5tYXAuZ2V0UGl4KGRhdGEueCArIHNpemUgLyAyLCBkYXRhLnkgKyBzaXplIC8gMik7XHJcblxyXG4gICAgICAgIGlmIChjLmRhdGFbMV0gPiAwKSB7IC8vIGl0ZW0gaW4gbmV4dCBwb3NpdGlvblxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjYiR7ZGF0YS54ICsgc2l6ZSAvIDJ9LSR7ZGF0YS55ICsgc2l6ZSAvIDJ9YCkuY29tcG9uZW50cy5pdGVtLmdldCgpXHJcbiAgICAgICAgICAgICAgICAudGhlbihwID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbXNnID0gYEZvdW5kICR7cC5ufWA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwLnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiAvLyBoZWFydFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5kYXRhLmhlYWx0aCA9IE1hdGgubWF4KHMuZGF0YS5oZWFsdGgrKywgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnICs9IGBcXG5IZWFsdGggPSAke3MuZGF0YS5oZWFsdGh9LzEwYDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IC8vIHN3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiAvLyBzaGllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDg6IC8vIHBsYW5lIHBpZWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvdW5kUGllY2VzKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gYFxcbk9ubHkgJHs1IC0gdGhpcy5mb3VuZFBpZWNlc30gcGllY2VzIGxlZnRgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEdNLm1lc3NhZ2Uud3JpdGUobXNnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcykgLy8gQ3JlYXRlIGEgbmV3IHR3ZWVuIHRoYXQgbW9kaWZpZXMgJ2Nvb3JkcycuXHJcbiAgICAgICAgICAgIC50byh7IHg6IGRhdGEueCwgejogZGF0YS55IH0sIDEwMDApIC8vIE1vdmUgdG8gKDMwMCwgMjAwKSBpbiAxIHNlY29uZC5cclxuICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluT3V0KSAvLyBVc2UgYW4gZWFzaW5nIGZ1bmN0aW9uIHRvIG1ha2UgdGhlIGFuaW1hdGlvbiBzbW9vdGguXHJcbiAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7IC8vIENhbGxlZCBhZnRlciB0d2Vlbi5qcyB1cGRhdGVzICdjb29yZHMnLlxyXG4gICAgICAgICAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7Y29vcmRzLnh9IC4yNSAke2Nvb3Jkcy56fWApO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAub25Db21wbGV0ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBHTS5kYXRhLnN0YXRlID0gMTtcclxuICAgICAgICAgICAgICAgIEdNLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LlxyXG4gICAgfVxyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wbGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdpdGVtJywge1xyXG4gICAgc2NoZW1hOiB7XHJcbiAgICAgICAgeDogeyB2YWx1ZTogJ2Zsb2F0JyB9LFxyXG4gICAgICAgIHk6IHsgdmFsdWU6ICdmbG9hdCcgfSxcclxuICAgICAgICBwcm9wczogeyB2YWx1ZTogJ29iamVjdCcgfVxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvcyA9IHRoaXMuZWwuY29tcG9uZW50cy5wb3NpdGlvbjtcclxuICAgIH0sXHJcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgcyA9IHRoaXM7XHJcbiAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtdGV4dHVyZVwiLCB7IGluZGV4OiBzLmRhdGEucHJvcHMucywgbG9va3VwOiBzLmRhdGEucHJvcHMuaSB9KTtcclxuICAgICAgICBsZXQgY29vcmRzID0gcy5lbC5jb21wb25lbnRzLnBvc2l0aW9uLmRhdGE7XHJcbiAgICAgICAgY29vcmRzLnQgPSAxO1xyXG4gICAgICAgIGxldCB0eCA9IHRoaXMuZGF0YS54LCB0eSA9IHRoaXMuZGF0YS55O1xyXG4gICAgICAgIGxldCBwaXggPSBHTS5tYXAuZ2V0UGl4KHR4LCB0eSk7XHJcbiAgICAgICAgcGl4LmRhdGFbMV0gPSAwO1xyXG4gICAgICAgIEdNLm1hcC5wdXRQaXgocGl4LCB0eCwgdHkpO1xyXG4gICAgICAgICB2YXIgcCA9IG5ldyBQcm9taXNlKHIgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdDEgPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKSBcclxuICAgICAgICAgICAgICAgIC50byh7IHk6IGNvb3Jkcy55ICsgMSwgdDogMCB9LCAzNTApXHJcbiAgICAgICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuT3V0KVxyXG4gICAgICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uICgpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgeyB4OiBjb29yZHMueCwgeTogY29vcmRzLnksIHo6IGNvb3Jkcy56IH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdmFyIHQyID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcylcclxuICAgICAgICAgICAgICAgIC50byh7IHk6IGNvb3Jkcy55IC0gLjUsIHQ6IDAgfSwgMzUwKVxyXG4gICAgICAgICAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLkluKSBcclxuICAgICAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7IFxyXG4gICAgICAgICAgICAgICAgICAgIHMuZWwuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIHsgeDogY29vcmRzLngsIHk6IGNvb3Jkcy55LCB6OiBjb29yZHMueiB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAub25Db21wbGV0ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcy5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHMuZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHIocy5kYXRhLnByb3BzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHQxLmNoYWluKHQyKS5zdGFydCgpOyAvLyBTdGFydCB0aGUgdHdlZW4gaW1tZWRpYXRlbHkuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9XHJcblxyXG5cclxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaXRlbS5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdtZXNzYWdlJywge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRoaXMuZWwuY29tcG9uZW50cy50ZXh0O1xyXG4gICAgfSxcclxuICAgIHdyaXRlOiBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnQpIHRoaXMudC5zdG9wKCk7XHJcblxyXG4gICAgICAgIHRoaXMuZWwuc2V0QXR0cmlidXRlKCd0ZXh0JywgeyB2YWx1ZTogbWVzc2FnZSwgb3BhY2l0eTogMC44IH0pO1xyXG4gICAgICAgIHZhciBkID0geyBvOiAwLjggfTtcclxuICAgICAgICB0aGlzLnQgPSBuZXcgVFdFRU4uVHdlZW4oZClcclxuICAgICAgICAgICAgLnRvKHsgbzogMCB9LCAyNTApXHJcbiAgICAgICAgICAgIC5kZWxheSgyMDAwKVxyXG4gICAgICAgICAgICAub25VcGRhdGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zZXRBdHRyaWJ1dGUoJ3RleHQnLCB7IG9wYWNpdHk6IGQubyB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21lc3NhZ2UuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IG1hcEdlbiA9IHJlcXVpcmUoXCIuL21hcGdlblwiKTtcclxuXHJcbndpbmRvdy5zaXplID0gMTI4O1xyXG5jb25zdCBkZXB0aCA9IDc7XHJcblxyXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ21hcCcsIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1hcENvbnRleHQgPSBtYXBHZW4uZ28oc2l6ZSwgZGVwdGgpO1xyXG4gICAgICAgIGxldCB3b3JsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKTtcclxuICAgICAgICBsZXQgd29ybGREYXRhID0gdGhpcy5tYXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLCBzaXplKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdkcCA9IChpICsgc2l6ZSAqIGopICogNDtcclxuICAgICAgICAgICAgICAgIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGxhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIilcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5jbGFzc0xpc3QuYWRkKFwiZmxvb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdvcmxkRGF0YS5kYXRhW3dkcF0gPT0gMTAyKSBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJpbmRleDoxMTtsb29rdXA6MTFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod29ybGREYXRhLmRhdGFbd2RwXSA9PSAxNzApIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjEyO2xvb2t1cDoxMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdID09IDIzOCkgcGxhbmUuc2V0QXR0cmlidXRlKFwibXl0ZXh0dXJlXCIsIFwiaW5kZXg6MTI7bG9va3VwOjlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAod29ybGREYXRhLmRhdGFbd2RwXT09MTAyKSBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJpbmRleDoxMTtsb29rdXA6OFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKFwibXl0ZXh0dXJlXCIsIFwiaW5kZXg6MDtsb29rdXA6XCIgKyB+figoaSAqIDUpIC8gKGogKiAyKSAqIDMpICUgNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfS8vICsgcm5kKDYpKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGkgLSAoc2l6ZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gaiAtIChzaXplIC8gMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3BsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcInNyYzogI215LXRleHR1cmU7aW5kZXg6NFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgR00ucGxheWVyLmNvbXBvbmVudHMucGxheWVyLm1vdmUoeyB4LCB5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuc2NlbmVFbC5jb21wb25lbnRzLmdhbWVtYW5hZ2VyLm1vdmVQbGF5ZXIoeyB4LCB5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7eH0gMCAke3l9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKCdtaXhpbicsICd2b3hlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLmFwcGVuZENoaWxkKHBsYW5lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh3b3JsZCk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmFkZE9ianMoKSk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmFkZEl0ZW1zKCkpO1xyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQodGhpcy5hZGRNb2JzKCkpOyAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgZ2V0UGl4OiBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcENvbnRleHQuZ2V0SW1hZ2VEYXRhKHgsIHksIDEsIDEpO1xyXG4gICAgfSxcclxuICAgIHB1dFBpeDogZnVuY3Rpb24gKGMsIHgsIHkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBDb250ZXh0LnB1dEltYWdlRGF0YShjLCB4LCB5KTtcclxuICAgIH0sXHJcbiAgICByYW5kb21QbGFjZTogZnVuY3Rpb24gKG1pbkRpc3RhbmNlID0gMCkge1xyXG4gICAgICAgIGxldCB4LCB5LCBjO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeCA9IHdpbmRvdy5ybmQoc2l6ZSk7XHJcbiAgICAgICAgICAgIHkgPSB3aW5kb3cucm5kKHNpemUpO1xyXG4gICAgICAgICAgICBjID0gdGhpcy5nZXRQaXgoeCwgeSk7XHJcbiAgICAgICAgfSB3aGlsZSAoYy5kYXRhLmV2ZXJ5KHAgPT4gcCA9PSAwKSk7XHJcbiAgICAgICAgcmV0dXJuIHsgeCwgeSwgYyB9O1xyXG4gICAgfSxcclxuICAgIGdldFdlaWdodGVkOiBmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgICAgIGxldCBmID0gZmFsc2UsIGl0ZW07XHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICBpdGVtID0gbGlzdFtybmQobGlzdC5sZW5ndGgpXTtcclxuICAgICAgICAgICAgZiA9IHJuZCgxMDApIDwgaXRlbS5jO1xyXG4gICAgICAgIH0gd2hpbGUgKCFmKVxyXG4gICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgfSxcclxuICAgIGFkZEl0ZW1zOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTUwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIiksIHR4LCB0eTtcclxuICAgICAgICAgICAgbGV0IHAgPSB0aGlzLnJhbmRvbVBsYWNlKCk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5nZXRXZWlnaHRlZChELml0ZW1zKTtcclxuICAgICAgICAgICAgaXRlbS5tYXAgPSBwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChwLmMuZGF0YVsxXSAhPSAwKSBjb250aW51ZTtcclxuICAgICAgICAgICAgcC5jLmRhdGFbMV0gPSAweDQxO1xyXG4gICAgICAgICAgICB0aGlzLnB1dFBpeChwLmMsIHAueCwgcC55KTtcclxuXHJcbiAgICAgICAgICAgIHR4ID0gcC54IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgIHR5ID0gcC55IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgIHZhciBkID0gKG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApKS5kaXN0YW5jZVRvKG5ldyBUSFJFRS5WZWN0b3IyKHR4LCB0eSkpO1xyXG5cclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtdGV4dHVyZVwiLCB7IGluZGV4OiAzIH0pOy8vIHsgaW5kZXg6IGl0ZW0ucywgbG9va3VwOiBpdGVtLmkgfSk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3R4fSAuMjUgJHt0eX1gKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3NwcicpO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnaXRlbScsIHsgeDogcC54LCB5OiBwLnksIHByb3BzOiBpdGVtIH0pO1xyXG4gICAgICAgICAgICBiLmlkID0gYGIke3AueH0tJHtwLnl9YDtcclxuICAgICAgICAgICAgYi5kYXRhID0gaXRlbTtcclxuICAgICAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0sXHJcbiAgICBhZGRNb2JzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTUwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIiksIHR4LCB0eTtcclxuICAgICAgICAgICAgbGV0IG1vYiA9IHRoaXMuZ2V0V2VpZ2h0ZWQoRC5tb2JzKSwgcCwgZDtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcCA9IHRoaXMucmFuZG9tUGxhY2UoKTtcclxuICAgICAgICAgICAgICAgIHR4ID0gcC54IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgICAgICB0eSA9IHAueSAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgZCA9IChuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSkuZGlzdGFuY2VUbyhuZXcgVEhSRUUuVmVjdG9yMih0eCwgdHkpKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAobW9iLm0gPj0gZCk7XHJcbiAgICAgICAgICAgIHRoaXMucHV0UGl4KHAuYywgcC54LCBwLnkpO1xyXG5cclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtdGV4dHVyZVwiLCB7IGluZGV4OiAyLCBsb29rdXA6IG1vYi5pIH0pO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0eH0gLjI1ICR7dHl9YCk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21vYicsIHsgeDogcC54LCB5OiBwLnksIGhlYWx0aDogcm5kKG1vYi5oWzFdKSArIG1vYi5oWzBdIH0pO1xyXG4gICAgICAgICAgICBiLmlkID0gYGUke3AueH0tJHtwLnl9YDtcclxuICAgICAgICAgICAgaXRlbXMuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH0sXHJcbiAgICBhZGRPYmpzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IG9ianMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIiksIHR4LCB0eSwgcCwgZDtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcCA9IHRoaXMucmFuZG9tUGxhY2UoKTtcclxuICAgICAgICAgICAgICAgIHR4ID0gcC54IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgICAgICB0eSA9IHAueSAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgZCA9IChuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSkuZGlzdGFuY2VUbyhuZXcgVEhSRUUuVmVjdG9yMih0eCwgdHkpKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAoMjUgPj0gZCk7XHJcblxyXG4gICAgICAgICAgICBwLmMuZGF0YVsxXSA9IDB4RUU7XHJcbiAgICAgICAgICAgIHRoaXMucHV0UGl4KHAuYywgcC54LCBwLnkpO1xyXG5cclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtdGV4dHVyZVwiLCB7IGluZGV4OiBELm9ianNbaV0ucyB9KTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7dHh9IC4yNSAke3R5fWApO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnbWl4aW4nLCAnc3ByJyk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdpdGVtJywgeyB4OiBwLngsIHk6IHAueSwgcHJvcHM6IEQub2Jqc1tpXSB9KTtcclxuICAgICAgICAgICAgYi5pZCA9IGBiJHtwLnh9LSR7cC55fWA7XHJcbiAgICAgICAgICAgIG9ianMuYXBwZW5kQ2hpbGQoYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmpzO1xyXG4gICAgfVxyXG59KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9