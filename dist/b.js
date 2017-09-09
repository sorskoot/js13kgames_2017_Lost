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
	__webpack_require__(9)


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
	        c:70 // change=70%
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
	            n: "heart", //name
	            s: 13, //sprite
	            i: -1, // palette index
	            m: 0, // minimal distance from start
	            c: 70, // change of the item spawning
	        }, {
	            t: 2, // subtype : sword",
	            n: "iron Sword", //name
	            d: 5, // damage
	            s: 5, //sprite
	            i: 1, // palette index
	            m: 0, // minimal distance from start
	            c: 20, // change of the item spawning
	            
	        }, {
	            t: 2, // subtype : sword",
	            n: "Golden Sword", //name
	            d: 5, // damage
	            s: 5, //sprite
	            i: 23, // palette index
	            m: 0, // minimal distance from start
	            c: 10, // change of the item spawning
	        }, {
	            t: 2, // subtype : sword",
	            n: "diamond Sword", //name
	            d: 5, // damage
	            s: 5, //sprite
	            i: 24, // palette index
	            m: 0, // minimal distance from start
	            c: 2, // change of the item spawning
	        }, {
	            t: 3, // subtype : shield",
	            n: "iron shield", //name
	            b: 2, // block value
	            s: 4, //sprite
	            i: 0, // palette index
	            m: 0, // minimal distance from start
	            c: 20, // change of the item spawning
	        }, {
	            t: 3, // subtype : shield",
	            n: "golden shield", //name
	            b: 4, // block value
	            s: 4, //sprite
	            i: 23 , // palette index
	            m: 0, // minimal distance from start
	            c: 10, // change of the item spawning
	        }, {
	            t: 3, // subtype : shield",
	            n: "diamond shield", //name
	            b: 7, // block value
	            s: 4, //sprite
	            i: 24, // palette index
	            m: 0, // minimal distance from start
	            c: 5, // change of the item spawning
	        }],
	    objectives: [{
	
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
	
	const size = 128;
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
	                        GM.movePlayer({ x, y });
	                        //this.sceneEl.components.gamemanager.movePlayer({ x, y });
	                    });
	
	                    plane.setAttribute('position', `${x} 0 ${y}`);
	                    plane.setAttribute('mixin', 'voxel');
	                    world.appendChild(plane);
	                }
	            }
	        }
	
	        this.el.appendChild(world);
	        this.el.appendChild(this.addItems());
	        this.el.appendChild(this.addMobs());
	    },
	    getPix: function (x, y) {
	        return this.mapContext.getImageData(x, y, 1, 1)
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
	            // 0x4X are bags
	            //     0x41 = heart                         
	            //     0x42 = sword iron
	            //     0x43 = sword gold
	            //     0x44 = sword diamond                         
	            //     0x45 = shield iron                           
	            //     0x46 = shield gold
	            //     0x47 = shield diamond                        
	            p.c.data[1] = 0x41;
	            this.mapContext.putImageData(p.c, p.x, p.y);
	
	            tx = p.x - size / 2;
	            ty = p.y - size / 2;
	            var d = (new THREE.Vector2(0, 0)).distanceTo(new THREE.Vector2(tx, ty));
	
	            b.setAttribute("billboard-texture", { index: item.s, lookup: item.i });
	            b.setAttribute('position', `${tx} .25 ${ty}`);
	            b.setAttribute('mixin', 'spr');
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
	
	            //  let ind = rnd(3);
	            let mob = this.getWeighted(D.mobs), p, d;
	            do {
	                p = this.randomPlace();
	                tx = p.x - size / 2;
	                ty = p.y - size / 2;
	                d = (new THREE.Vector2(0, 0)).distanceTo(new THREE.Vector2(tx, ty));
	            } while (mob.m >= d);
	            // 0x4X are Enemies
	            //     0x41 = Green
	            //     0x42 = Purple
	            //       p.c.data[2] = 0x41 + ind;
	            this.mapContext.putImageData(p.c, p.x, p.y);
	
	            b.setAttribute("billboard-texture", { index: 2, lookup: mob.i });
	            b.setAttribute('position', `${tx} .25 ${ty}`);
	            b.setAttribute('mixin', 'spr');
	            b.setAttribute('mob', { x: p.x, y: p.y, health: rnd(mob.h[1]) + mob.h[0] });
	            b.id = `e${p.x}-${p.y}`;
	            items.appendChild(b);
	        }
	        return items;
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
	        this.camera.rot = 0;
	        window.GM = this;
	    },
	    update: function () {
	        switch (this.data.state) {
	            case 0:
	                console.log('player');
	                break;
	            case 1:
	                console.log('enemy');
	                let mobs = document.querySelectorAll('[mob]');
	                mobs.forEach(d => d.components.mob.move());
	                this.data.state = 0;
	                break;
	        }
	    },
	    movePlayer: function (data) {
	        var s = this;
	        if (s.data.state != 0) return;
	        var coords = s.player.components.position.data;
	        var a = new THREE.Vector3(data.x, data.y, 0);                      // 0,0
	        var b = new THREE.Vector3(coords.x, coords.z, 0);                  // 1,0
	        coords.r = GM.camera.rot;
	        if (a.distanceTo(b) > 1.5 || a.distanceTo(b) < .2)
	            return;
	
	        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
	            .to({ x: data.x, z: data.y }, 1000) // Move to (300, 200) in 1 second.
	            .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
	            .onUpdate(function () { // Called after tween.js updates 'coords'.
	                s.player.setAttribute('position', `${coords.x} .25 ${coords.z}`);
	
	            })
	            .onComplete(function () {
	                s.data.state = 1;
	                s.update();
	            })
	            .start(); // Start the tween immediately.
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
	            .to({ x: s.pos.data.x + tx, z: s.pos.data.z + ty }, 1000)
	            .easing(TWEEN.Easing.Quadratic.Out)
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
	
	});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2M2ZjJmODY4YjRjNGFjZDYzOTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL215U2hhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9iaWxsYm9hcmRTaGFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcGNvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcGdlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vYi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7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QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEI7Ozs7OztBQzNPQTtBQUNBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFxRDtBQUNyRCwwREFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWlCLHVCQUF1QjtBQUN4QztBQUNBLG9DQUFtQztBQUNuQyxzREFBcUQsU0FBUyxPQUFPLFNBQVM7O0FBRTlFLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2Isc0JBQXFCO0FBQ3JCO0FBQ0EsRUFBQzs7Ozs7Ozs7Ozs7O0FDakREO0FBQ0E7QUFDQSxhQUFZLGlCQUFpQjtBQUM3QixhQUFZLGlCQUFpQjtBQUM3QixrQkFBaUI7QUFDakIsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLHVCQUFzQjtBQUN0QjtBQUNBLGtCQUFpQiw2Q0FBNkM7QUFDOUQ7QUFDQTtBQUNBLGtEQUFpRCxTQUFTLE9BQU8sU0FBUztBQUMxRSxjQUFhO0FBQ2Isc0JBQXFCO0FBQ3JCO0FBQ0EsRUFBQyxFOzs7Ozs7QUM1QkQ7O0FBRUEsRUFBQyxFIiwiZmlsZSI6ImIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjYzZmMmY4NjhiNGM0YWNkNjM5NCIsInJlcXVpcmUoJy4vZ2xvYmFsJyk7XHJcbnJlcXVpcmUoJy4vZGF0YScpO1xyXG5yZXF1aXJlKCcuL215U2hhZGVyJyk7XHJcbnJlcXVpcmUoJy4vYmlsbGJvYXJkU2hhZGVyJyk7XHJcbnJlcXVpcmUoJy4vbWFwY29tcCcpO1xyXG5yZXF1aXJlKCcuL2dhbWVtYW5hZ2VyJyk7XHJcbnJlcXVpcmUoJy4vbW9iJyk7XHJcbnJlcXVpcmUoJy4vcGxheWVyJylcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwid2luZG93LnJuZCA9IG0gPT4gfn4oTWF0aC5yYW5kb20oKSAqIG0pO1xyXG53aW5kb3cudCA9IG5ldyBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCcuL2xvc3QucG5nJyk7XHJcbndpbmRvdy50Lm1pbkZpbHRlciA9IHdpbmRvdy50Lm1hZ0ZpbHRlciA9IDEwMDM7XHJcbndpbmRvdy5wYWwgPSBuZXcgVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSgnLi9wYWxldHRlcy5wbmcnKTtcclxud2luZG93LnBhbC5taW5GaWx0ZXIgPSB3aW5kb3cucGFsLm1hZ0ZpbHRlciA9IDEwMDM7XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwid2luZG93LkQgPSB7XHJcbiAgICBwbGF5ZXI6IHtcclxuICAgICAgICB0OiAxLCAgLy8gdHlwZSA6IHBsYXllclxyXG4gICAgICAgIHM6IDIsICAvLyBzcHJpdGU6IDIgICAgXHJcbiAgICAgICAgaDogMTAsIC8vIHN0YXJ0IGhlYWx0aFxyXG4gICAgfSwgbW9iczogW3tcclxuICAgICAgICBoOiBbMiwgM10sIC8vIGhlYWx0aDogYmV0d2VlbiAyIGFuZCA1XHJcbiAgICAgICAgaTogNiwgIC8vIGNvbG9yIGluZGV4IDhcclxuICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICBjOjcwIC8vIGNoYW5nZT03MCVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaDogWzQsIDRdLCAvLyBoZWFsdGg6IGJldHdlZW4gNCBhbmQgOFxyXG4gICAgICAgIGk6IDcsIC8vIGNvbG9yIGluZGV4IDhcclxuICAgICAgICBtOiAxMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgYzogMjAgLy9jaGFuZ2UgMzAlICAgICAgICBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaDogWzYsIDZdLCAvLyBoZWFsdGg6IGJldHdlZW4gNiBhbmQgMTJcclxuICAgICAgICBpOiA5LCAgLy8gY29sb3IgaW5kZXggOFxyXG4gICAgICAgIG06IDMwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICBjOiAxMCAvLyBjaGFuZ2UgMTAlXHJcbiAgICB9XSxcclxuICAgIGZsb29yczogW3tcclxuICAgICAgICB0OiAzLCAvLyB0eXBlOiBmbG9vclxyXG4gICAgICAgIGI6IDEsIC8vIGJpb21lOiAxXHJcbiAgICAgICAgczogWzFdLFxyXG4gICAgICAgIGk6IFsyLCA1XVxyXG4gICAgfV0sXHJcbiAgICBpdGVtczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdDogMSxcclxuICAgICAgICAgICAgbjogXCJoZWFydFwiLCAvL25hbWVcclxuICAgICAgICAgICAgczogMTMsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IC0xLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiA3MCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAyLCAvLyBzdWJ0eXBlIDogc3dvcmRcIixcclxuICAgICAgICAgICAgbjogXCJpcm9uIFN3b3JkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBkOiA1LCAvLyBkYW1hZ2VcclxuICAgICAgICAgICAgczogNSwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMSwgLy8gcGFsZXR0ZSBpbmRleFxyXG4gICAgICAgICAgICBtOiAwLCAvLyBtaW5pbWFsIGRpc3RhbmNlIGZyb20gc3RhcnRcclxuICAgICAgICAgICAgYzogMjAsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIHQ6IDIsIC8vIHN1YnR5cGUgOiBzd29yZFwiLFxyXG4gICAgICAgICAgICBuOiBcIkdvbGRlbiBTd29yZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgZDogNSwgLy8gZGFtYWdlXHJcbiAgICAgICAgICAgIHM6IDUsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDIzLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAxMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAyLCAvLyBzdWJ0eXBlIDogc3dvcmRcIixcclxuICAgICAgICAgICAgbjogXCJkaWFtb25kIFN3b3JkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBkOiA1LCAvLyBkYW1hZ2VcclxuICAgICAgICAgICAgczogNSwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMjQsIC8vIHBhbGV0dGUgaW5kZXhcclxuICAgICAgICAgICAgbTogMCwgLy8gbWluaW1hbCBkaXN0YW5jZSBmcm9tIHN0YXJ0XHJcbiAgICAgICAgICAgIGM6IDIsIC8vIGNoYW5nZSBvZiB0aGUgaXRlbSBzcGF3bmluZ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgdDogMywgLy8gc3VidHlwZSA6IHNoaWVsZFwiLFxyXG4gICAgICAgICAgICBuOiBcImlyb24gc2hpZWxkXCIsIC8vbmFtZVxyXG4gICAgICAgICAgICBiOiAyLCAvLyBibG9jayB2YWx1ZVxyXG4gICAgICAgICAgICBzOiA0LCAvL3Nwcml0ZVxyXG4gICAgICAgICAgICBpOiAwLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAyMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAzLCAvLyBzdWJ0eXBlIDogc2hpZWxkXCIsXHJcbiAgICAgICAgICAgIG46IFwiZ29sZGVuIHNoaWVsZFwiLCAvL25hbWVcclxuICAgICAgICAgICAgYjogNCwgLy8gYmxvY2sgdmFsdWVcclxuICAgICAgICAgICAgczogNCwgLy9zcHJpdGVcclxuICAgICAgICAgICAgaTogMjMgLCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiAxMCwgLy8gY2hhbmdlIG9mIHRoZSBpdGVtIHNwYXduaW5nXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB0OiAzLCAvLyBzdWJ0eXBlIDogc2hpZWxkXCIsXHJcbiAgICAgICAgICAgIG46IFwiZGlhbW9uZCBzaGllbGRcIiwgLy9uYW1lXHJcbiAgICAgICAgICAgIGI6IDcsIC8vIGJsb2NrIHZhbHVlXHJcbiAgICAgICAgICAgIHM6IDQsIC8vc3ByaXRlXHJcbiAgICAgICAgICAgIGk6IDI0LCAvLyBwYWxldHRlIGluZGV4XHJcbiAgICAgICAgICAgIG06IDAsIC8vIG1pbmltYWwgZGlzdGFuY2UgZnJvbSBzdGFydFxyXG4gICAgICAgICAgICBjOiA1LCAvLyBjaGFuZ2Ugb2YgdGhlIGl0ZW0gc3Bhd25pbmdcclxuICAgICAgICB9XSxcclxuICAgIG9iamVjdGl2ZXM6IFt7XHJcblxyXG4gICAgfV1cclxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFsIFRIUkVFLCBBRlJBTUUgKi9cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdteXRleHR1cmUnLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBjb2xvcjpcclxuICAgIHtcclxuICAgICAgdHlwZTogJ2NvbG9yJ1xyXG4gICAgfSxcclxuICAgIGluZGV4OiB7IHR5cGU6ICdpbnQnIH0sXHJcbiAgICBsb29rdXA6IHsgdHlwZTogJ2ludCcsIGRlZmF1bHQ6IDAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCB1c2luZyB0aGUgdHdvIHNoYWRlcnMgZGVmaW5lZFxyXG4gICAqIGluIHZlcnRleC5nbHNsIGFuZCBmcmFnbWVudC5nbHNsLlxyXG4gICAqL1xyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhZ21lbnQnKS50ZXh0Q29udGVudDtcclxuICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVydGV4JykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgaW5kZXg6IHsgdmFsdWU6IHRoaXMuZGF0YS5pbmRleCB9LFxyXG4gICAgICAgIERpZmZ1c2VUZXh0dXJlOiB7IHZhbHVlOiB3aW5kb3cudCB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LFxyXG4gICAgICAgIGNvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoZGF0YS5jb2xvcikgfSxcclxuICAgICAgICBzcHJpdGVEaW1lbnNpb25zOiB7IHZhbHVlOiB7IHg6IDE2LjAsIHk6IDEuMCB9IH0sXHJcbiAgICAgICAgcmVwZWF0OiB7IHZhbHVlOiB7IHg6IDEuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICBmb2dTdGFydDogeyB2YWx1ZTogNSB9LFxyXG4gICAgICAgIGZvZ0VuZDogeyB2YWx1ZTogMTUgfSxcclxuICAgICAgICBsb29rdXBJbmRleDp7dmFsdWU6ZGF0YS5sb29rdXB9LFxyXG4gICAgICAgIGZvZ0NvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMCwgMCwgMCkgfSxcclxuICAgICAgICB0aW50OiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMjU1LCAyNTUsIDI1NSkgfSxcclxuICAgICAgICB0aW50QW1vdW50OiB7IHZhbHVlOiAwIH1cclxuICAgICAgfSxcclxuICAgICAgdmVydGV4U2hhZGVyLFxyXG4gICAgICBmcmFnbWVudFNoYWRlclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFwcGx5VG9NZXNoKCk7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGVsLWxvYWRlZCcsICgpID0+IHRoaXMuYXBwbHlUb01lc2goKSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIFNoYWRlck1hdGVyaWFsIHdoZW4gY29tcG9uZW50IGRhdGEgY2hhbmdlcy5cclxuICAgKi9cclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMuaW5kZXgudmFsdWUgPSB0aGlzLmRhdGEuaW5kZXg7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLmxvb2t1cEluZGV4LnZhbHVlPXRoaXMuZGF0YS5sb29rdXA7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBBcHBseSB0aGUgbWF0ZXJpYWwgdG8gdGhlIGN1cnJlbnQgZW50aXR5LlxyXG4gICAqL1xyXG4gIGFwcGx5VG9NZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZXNoID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgaWYgKG1lc2gpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueCA9ICt0aGlzLmVsLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpIHx8IDE7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnkgPSArdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIikgfHwgMTtcclxuICAgICAgbWVzaC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBPbiBlYWNoIGZyYW1lLCB1cGRhdGUgdGhlICd0aW1lJyB1bmlmb3JtIGluIHRoZSBzaGFkZXJzLlxyXG4gICAqL1xyXG4gIC8vIHRpY2s6IGZ1bmN0aW9uICh0KSB7XHJcbiAgLy8gICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0IC8gMTAwMDsgXHJcbiAgLy8gfVxyXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL215U2hhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGdsb2JhbCBUSFJFRSwgQUZSQU1FICovXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnYmlsbGJvYXJkLXRleHR1cmUnLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBpbmRleDp7dHlwZTonaW50J30sXHJcbiAgICBsb29rdXA6IHsgdHlwZTogJ2ludCcsIGRlZmF1bHQ6IC0xIH1cclxuICB9LFxyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7ICAgIFxyXG4gICAgdmFyIGZyYWdtZW50U2hhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYWdtZW50JykudGV4dENvbnRlbnQ7XHJcbiAgICB2YXIgdmVydGV4U2hhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcnRleC1iaWxsYm9hcmQnKS50ZXh0Q29udGVudDtcclxuICAgIFxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgaW5kZXg6IHsgdmFsdWU6IHRoaXMuZGF0YS5pbmRleCB9LFxyXG4gICAgICAgIERpZmZ1c2VUZXh0dXJlOiB7IHZhbHVlOiB3aW5kb3cudH0sXHJcbiAgICAgICAgY29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcihkYXRhLmNvbG9yKSB9LFxyXG4gICAgICAgIHNwcml0ZURpbWVuc2lvbnM6IHsgdmFsdWU6IHsgeDogMTYuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICByZXBlYXQ6IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LCAgICBcclxuICAgICAgICBsb29rdXBJbmRleDp7dmFsdWU6ZGF0YS5sb29rdXB9LFxyXG4gICAgICAgIGZvZ1N0YXJ0Ont2YWx1ZToxMH0sXHJcbiAgICAgICAgZm9nRW5kOnt2YWx1ZToxNX0sXHJcbiAgICAgICAgYWxwaGF0ZXN0Ont2YWx1ZTowLjk1fSxcclxuICAgICAgICBmb2dDb2xvcjp7dmFsdWU6IG5ldyBUSFJFRS5Db2xvcigwLDAsMCl9XHJcbiAgICAgIH0sXHJcbiAgICAgIHZlcnRleFNoYWRlcixcclxuICAgICAgZnJhZ21lbnRTaGFkZXJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLk11bHRpcGx5QmxlbmRpbmc7XHJcbiAgICB0aGlzLmFwcGx5VG9NZXNoKCk7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGVsLWxvYWRlZCcsICgpID0+IHRoaXMuYXBwbHlUb01lc2goKSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIFNoYWRlck1hdGVyaWFsIHdoZW4gY29tcG9uZW50IGRhdGEgY2hhbmdlcy5cclxuICAgKi9cclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMuaW5kZXgudmFsdWUgPSB0aGlzLmRhdGEuaW5kZXg7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBBcHBseSB0aGUgbWF0ZXJpYWwgdG8gdGhlIGN1cnJlbnQgZW50aXR5LlxyXG4gICAqL1xyXG4gIGFwcGx5VG9NZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZXNoID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgaWYgKG1lc2gpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueCA9K3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwid2lkdGhcIil8fDE7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnkgPSt0aGlzLmVsLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKXx8MTtcclxuICAgICAgbWVzaC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBPbiBlYWNoIGZyYW1lLCB1cGRhdGUgdGhlICd0aW1lJyB1bmlmb3JtIGluIHRoZSBzaGFkZXJzLlxyXG4gICAqL1xyXG4gIC8vIHRpY2s6IGZ1bmN0aW9uICh0KSB7XHJcbiAgLy8gICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0IC8gMTAwMDsgXHJcbiAgLy8gfVxyXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JpbGxib2FyZFNoYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtYXBHZW4gPSByZXF1aXJlKFwiLi9tYXBnZW5cIik7XHJcblxyXG5jb25zdCBzaXplID0gMTI4O1xyXG5jb25zdCBkZXB0aCA9IDc7XHJcblxyXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ21hcCcsIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm1hcENvbnRleHQgPSBtYXBHZW4uZ28oc2l6ZSwgZGVwdGgpO1xyXG4gICAgICAgIGxldCB3b3JsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKTtcclxuICAgICAgICBsZXQgd29ybGREYXRhID0gdGhpcy5tYXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLCBzaXplKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdkcCA9IChpICsgc2l6ZSAqIGopICogNDtcclxuICAgICAgICAgICAgICAgIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGxhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIilcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5jbGFzc0xpc3QuYWRkKFwiZmxvb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdvcmxkRGF0YS5kYXRhW3dkcF0gPT0gMTAyKSBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJpbmRleDoxMTtsb29rdXA6MTFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAod29ybGREYXRhLmRhdGFbd2RwXSA9PSAxNzApIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjEyO2xvb2t1cDoxMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdID09IDIzOCkgcGxhbmUuc2V0QXR0cmlidXRlKFwibXl0ZXh0dXJlXCIsIFwiaW5kZXg6MTI7bG9va3VwOjlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiAod29ybGREYXRhLmRhdGFbd2RwXT09MTAyKSBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJpbmRleDoxMTtsb29rdXA6OFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKFwibXl0ZXh0dXJlXCIsIFwiaW5kZXg6MDtsb29rdXA6XCIgKyB+figoaSAqIDUpIC8gKGogKiAyKSAqIDMpICUgNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfS8vICsgcm5kKDYpKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGkgLSAoc2l6ZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gaiAtIChzaXplIC8gMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3BsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcInNyYzogI215LXRleHR1cmU7aW5kZXg6NFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgR00ubW92ZVBsYXllcih7IHgsIHkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5zY2VuZUVsLmNvbXBvbmVudHMuZ2FtZW1hbmFnZXIubW92ZVBsYXllcih7IHgsIHkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt4fSAwICR7eX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3ZveGVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQuYXBwZW5kQ2hpbGQocGxhbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHdvcmxkKTtcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHRoaXMuYWRkSXRlbXMoKSk7XHJcbiAgICAgICAgdGhpcy5lbC5hcHBlbmRDaGlsZCh0aGlzLmFkZE1vYnMoKSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UGl4OiBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcENvbnRleHQuZ2V0SW1hZ2VEYXRhKHgsIHksIDEsIDEpXHJcbiAgICB9LFxyXG4gICAgcmFuZG9tUGxhY2U6IGZ1bmN0aW9uIChtaW5EaXN0YW5jZSA9IDApIHtcclxuICAgICAgICBsZXQgeCwgeSwgYztcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHggPSB3aW5kb3cucm5kKHNpemUpO1xyXG4gICAgICAgICAgICB5ID0gd2luZG93LnJuZChzaXplKTtcclxuICAgICAgICAgICAgYyA9IHRoaXMuZ2V0UGl4KHgsIHkpO1xyXG4gICAgICAgIH0gd2hpbGUgKGMuZGF0YS5ldmVyeShwID0+IHAgPT0gMCkpO1xyXG4gICAgICAgIHJldHVybiB7IHgsIHksIGMgfTtcclxuICAgIH0sXHJcbiAgICBnZXRXZWlnaHRlZDogZnVuY3Rpb24gKGxpc3QpIHtcclxuICAgICAgICBsZXQgZiA9IGZhbHNlLCBpdGVtO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgaXRlbSA9IGxpc3Rbcm5kKGxpc3QubGVuZ3RoKV07XHJcbiAgICAgICAgICAgIGYgPSBybmQoMTAwKSA8IGl0ZW0uYztcclxuICAgICAgICB9IHdoaWxlICghZilcclxuICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0sXHJcbiAgICBhZGRJdGVtczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpLCB0eCwgdHk7XHJcbiAgICAgICAgICAgIGxldCBwID0gdGhpcy5yYW5kb21QbGFjZSgpO1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuZ2V0V2VpZ2h0ZWQoRC5pdGVtcyk7XHJcbiAgICAgICAgICAgIC8vIDB4NFggYXJlIGJhZ3NcclxuICAgICAgICAgICAgLy8gICAgIDB4NDEgPSBoZWFydCAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgIDB4NDIgPSBzd29yZCBpcm9uXHJcbiAgICAgICAgICAgIC8vICAgICAweDQzID0gc3dvcmQgZ29sZFxyXG4gICAgICAgICAgICAvLyAgICAgMHg0NCA9IHN3b3JkIGRpYW1vbmQgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vICAgICAweDQ1ID0gc2hpZWxkIGlyb24gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgIDB4NDYgPSBzaGllbGQgZ29sZFxyXG4gICAgICAgICAgICAvLyAgICAgMHg0NyA9IHNoaWVsZCBkaWFtb25kICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHAuYy5kYXRhWzFdID0gMHg0MTtcclxuICAgICAgICAgICAgdGhpcy5tYXBDb250ZXh0LnB1dEltYWdlRGF0YShwLmMsIHAueCwgcC55KTtcclxuXHJcbiAgICAgICAgICAgIHR4ID0gcC54IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgIHR5ID0gcC55IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgIHZhciBkID0gKG5ldyBUSFJFRS5WZWN0b3IyKDAsIDApKS5kaXN0YW5jZVRvKG5ldyBUSFJFRS5WZWN0b3IyKHR4LCB0eSkpO1xyXG5cclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoXCJiaWxsYm9hcmQtdGV4dHVyZVwiLCB7IGluZGV4OiBpdGVtLnMsIGxvb2t1cDogaXRlbS5pIH0pO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt0eH0gLjI1ICR7dHl9YCk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdtaXhpbicsICdzcHInKTtcclxuICAgICAgICAgICAgYi5pZCA9IGBiJHtwLnh9LSR7cC55fWA7XHJcbiAgICAgICAgICAgIGIuZGF0YSA9IGl0ZW07XHJcbiAgICAgICAgICAgIGl0ZW1zLmFwcGVuZENoaWxkKGIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9LFxyXG4gICAgYWRkTW9iczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLWVudGl0eVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpLCB0eCwgdHk7XHJcblxyXG4gICAgICAgICAgICAvLyAgbGV0IGluZCA9IHJuZCgzKTtcclxuICAgICAgICAgICAgbGV0IG1vYiA9IHRoaXMuZ2V0V2VpZ2h0ZWQoRC5tb2JzKSwgcCwgZDtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcCA9IHRoaXMucmFuZG9tUGxhY2UoKTtcclxuICAgICAgICAgICAgICAgIHR4ID0gcC54IC0gc2l6ZSAvIDI7XHJcbiAgICAgICAgICAgICAgICB0eSA9IHAueSAtIHNpemUgLyAyO1xyXG4gICAgICAgICAgICAgICAgZCA9IChuZXcgVEhSRUUuVmVjdG9yMigwLCAwKSkuZGlzdGFuY2VUbyhuZXcgVEhSRUUuVmVjdG9yMih0eCwgdHkpKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAobW9iLm0gPj0gZCk7XHJcbiAgICAgICAgICAgIC8vIDB4NFggYXJlIEVuZW1pZXNcclxuICAgICAgICAgICAgLy8gICAgIDB4NDEgPSBHcmVlblxyXG4gICAgICAgICAgICAvLyAgICAgMHg0MiA9IFB1cnBsZVxyXG4gICAgICAgICAgICAvLyAgICAgICBwLmMuZGF0YVsyXSA9IDB4NDEgKyBpbmQ7XHJcbiAgICAgICAgICAgIHRoaXMubWFwQ29udGV4dC5wdXRJbWFnZURhdGEocC5jLCBwLngsIHAueSk7XHJcblxyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZShcImJpbGxib2FyZC10ZXh0dXJlXCIsIHsgaW5kZXg6IDIsIGxvb2t1cDogbW9iLmkgfSk7XHJcbiAgICAgICAgICAgIGIuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke3R4fSAuMjUgJHt0eX1gKTtcclxuICAgICAgICAgICAgYi5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3NwcicpO1xyXG4gICAgICAgICAgICBiLnNldEF0dHJpYnV0ZSgnbW9iJywgeyB4OiBwLngsIHk6IHAueSwgaGVhbHRoOiBybmQobW9iLmhbMV0pICsgbW9iLmhbMF0gfSk7XHJcbiAgICAgICAgICAgIGIuaWQgPSBgZSR7cC54fS0ke3AueX1gO1xyXG4gICAgICAgICAgICBpdGVtcy5hcHBlbmRDaGlsZChiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG59KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFwY29tcC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxudmFyIGdlbmVyYXRvciA9IHtcclxuICAgIGdvOiAobWFwV2lkdGgsIGRlcHRoKSA9PiB7XHJcbiAgICAgICAgdmFyIHBpZWNlcyA9IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDIsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAwLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMiwgMCwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDIsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gdmFyIG1hcFdpZHRoID0gMjU2O1xyXG5cclxuICAgICAgICBsZXQgcGwgPSBwaWVjZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGw7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUgPSBwaWVjZXNbaV0uc2xpY2UoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjbG9uZS5sZW5ndGg7IGorKylcclxuICAgICAgICAgICAgICAgIGNsb25lW2pdID0gY2xvbmVbal0uc2xpY2UoKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHBpZWNlcy5wdXNoKGNsb25lKTtcclxuICAgICAgICAgICAgbGV0IGNsb25lMiA9IHBpZWNlc1tpXS5zbGljZSgpO1xyXG4gICAgICAgICAgICBjbG9uZTIgPSBjbG9uZTIucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBwaWVjZXMucHVzaChjbG9uZTIpO1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUzID0gY2xvbmUuc2xpY2UoKTtcclxuICAgICAgICAgICAgY2xvbmUzID0gY2xvbmUzLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgcGllY2VzLnB1c2goY2xvbmUzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaWVjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcGllY2VzW2ldLnNpemUgPSB7IHc6IHBpZWNlc1tpXVswXS5sZW5ndGgsIGg6IHBpZWNlc1tpXS5sZW5ndGggfTtcclxuICAgICAgICAgICAgcGllY2VzW2ldLmV4aXRzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGllY2VzW2ldLnNpemUuaDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IHBpZWNlc1tpXS5zaXplLnc7IGgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZXNbaV1bal1baF0gPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2VzW2ldLmV4aXRzLnB1c2goeyB4OiBoLCB5OiBqIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG1hcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIG1hcENhbnZhcy53aWR0aCA9IG1hcFdpZHRoO1xyXG4gICAgICAgIG1hcENhbnZhcy5oZWlnaHQgPSBtYXBXaWR0aDtcclxuXHJcbiAgICAgICAgLy8gVGVtcCBkdXJpbmcgZGV2ZWxvcG1lbnRcclxuICAgICAgICBtYXBDYW52YXMuc3R5bGUud2lkdGggPSAnMTAyNHB4JztcclxuICAgICAgICBtYXBDYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMjRweCc7XHJcbiAgICAgICAgbWFwQ2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXBDYW52YXMpO1xyXG4gICAgICAgIC8vIEVORFxyXG5cclxuICAgICAgICB2YXIgbWFwQ29udGV4dCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDApXCI7XHJcbiAgICAgICAgbWFwQ29udGV4dC5maWxsUmVjdCgwLCAwLCBtYXBXaWR0aCwgbWFwV2lkdGgpO1xyXG5cclxuICAgICAgICBsZXQgZmlyc3QgPSB0cnVlO1xyXG4gICAgICAgIHZhciBhZGRSb29tID0gKGV4aXQsIHNwZWNpYWwpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBpZWNlO1xyXG4gICAgICAgICAgICBsZXQgZXhpdHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRYO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WTtcclxuICAgICAgICAgICAgbGV0IHRyaWVzID0gMjU7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHBpZWNlID0gcGllY2VzW3JuZChwaWVjZXMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBxID0gMDsgcSA8IHBpZWNlLmV4aXRzLmxlbmd0aDsgcSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jYWxjYWxhdGUgbmV3IHBvc2l0aW9uIHNvIHRoYXQgdGhlICcycycgZ28gb24gdG9wIG9mIGVhY2hvdGhlciwgYnV0IHRpbGVzIG5vdCBvdmVybGFwXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGV5IG92ZXJsYXAgdHJ5IGEgZGlmZmVyZW50ICcyJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXNuJ3QgYSAyLCB0cnkgYW5vdGhlciBwaWVjZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggPSBleGl0LnggLSBwaWVjZS5leGl0c1txXS54O1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFkgPSBleGl0LnkgLSBwaWVjZS5leGl0c1txXS55O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWdEYXRhID0gbWFwQ29udGV4dC5nZXRJbWFnZURhdGEodGFyZ2V0WCwgdGFyZ2V0WSwgcGllY2Uuc2l6ZS53LCBwaWVjZS5zaXplLmgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyID0gaW1nRGF0YS5kYXRhLmV2ZXJ5KGQgPT4gZCA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRyaWVzLS07XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRyaWVzID4gMCAmJiAhY2xlYXIpO1xyXG4gICAgICAgICAgICBpZiAoIWNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICBwaWVjZSA9IFtbMV1dO1xyXG4gICAgICAgICAgICAgICAgcGllY2UuZXhpdHMgPSBbe31dO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WCA9IGV4aXQueDtcclxuICAgICAgICAgICAgICAgIHRhcmdldFkgPSBleGl0Lnk7XHJcbiAgICAgICAgICAgICAgICBxID0gMDtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwiIzQwMFwiO1xyXG4gICAgICAgICAgICBpZiAoIWZpcnN0KSBtYXBDb250ZXh0LmZpbGxSZWN0KHRhcmdldFggKyBwaWVjZS5leGl0c1txXS54IHx8IDAsIHRhcmdldFkgKyBwaWVjZS5leGl0c1txXS55IHx8IDAsIDEsIDEpO1xyXG4gICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9ICFmaXJzdCA/IFwiIzQwMFwiIDogXCIjNjAwXCI7XHJcbiAgICAgICAgICAgIGlmIChzcGVjaWFsID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwiI0UwMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGVjaWFsID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwiI0EwMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBpZWNlLmZvckVhY2goKGksIHB5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpLmZvckVhY2goKGosIHB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFJlY3QodGFyZ2V0WCArIHB4LCB0YXJnZXRZICsgcHksIDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0cy5wdXNoKHsgeDogdGFyZ2V0WCArIHB4LCB5OiB0YXJnZXRZICsgcHkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBleGl0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvb3BzID0gZGVwdGg7XHJcbiAgICAgICAgbGV0IGV4aXRzID0gW3sgeDogbWFwV2lkdGggLyAyLCB5OiBtYXBXaWR0aCAvIDIgfV07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb29wczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdFeGl0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgc3BlY2lhbDtcclxuICAgICAgICAgICAgZXhpdHMuZm9yRWFjaCgoZXhpdCwgaW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBsb29wcyAtIDEgJiYgaW5kID09IGV4aXRzLmxlbmd0aCAtIH5+KGV4aXRzLmxlbmd0aCAvIDMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY2lhbCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBsb29wcyAtIDEgJiYgaW5kID09IH5+KGV4aXRzLmxlbmd0aCAvIDMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY2lhbCA9IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcSA9IGFkZFJvb20oZXhpdCwgc3BlY2lhbCk7XHJcbiAgICAgICAgICAgICAgICBuZXdFeGl0cyA9IG5ld0V4aXRzLmNvbmNhdChxKTtcclxuICAgICAgICAgICAgICAgIHNwZWNpYWwgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZXhpdHMgPSBuZXdFeGl0cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYXBDb250ZXh0O1xyXG4gICAgfVxyXG5cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRvcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYXBnZW4uanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdnYW1lbWFuYWdlcicsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIHN0YXRlOiB7IHZhbHVlOiAnaW50JywgZGVmYXVsdDogMCB9XHJcbiAgICAgICAgLy8gMCA9PSBwbGF5ZXJcclxuICAgICAgICAvLyAxID09IGVuZW15XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcicpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbWVyYScpO1xyXG4gICAgICAgIHRoaXMubWFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcGdlbycpLmNvbXBvbmVudHMubWFwO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnJvdCA9IDA7XHJcbiAgICAgICAgd2luZG93LkdNID0gdGhpcztcclxuICAgIH0sXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YS5zdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGxheWVyJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VuZW15Jyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbW9icyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1ttb2JdJyk7XHJcbiAgICAgICAgICAgICAgICBtb2JzLmZvckVhY2goZCA9PiBkLmNvbXBvbmVudHMubW9iLm1vdmUoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEuc3RhdGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdmVQbGF5ZXI6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgdmFyIHMgPSB0aGlzO1xyXG4gICAgICAgIGlmIChzLmRhdGEuc3RhdGUgIT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHZhciBjb29yZHMgPSBzLnBsYXllci5jb21wb25lbnRzLnBvc2l0aW9uLmRhdGE7XHJcbiAgICAgICAgdmFyIGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhkYXRhLngsIGRhdGEueSwgMCk7ICAgICAgICAgICAgICAgICAgICAgIC8vIDAsMFxyXG4gICAgICAgIHZhciBiID0gbmV3IFRIUkVFLlZlY3RvcjMoY29vcmRzLngsIGNvb3Jkcy56LCAwKTsgICAgICAgICAgICAgICAgICAvLyAxLDBcclxuICAgICAgICBjb29yZHMuciA9IEdNLmNhbWVyYS5yb3Q7XHJcbiAgICAgICAgaWYgKGEuZGlzdGFuY2VUbyhiKSA+IDEuNSB8fCBhLmRpc3RhbmNlVG8oYikgPCAuMilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgdHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKSAvLyBDcmVhdGUgYSBuZXcgdHdlZW4gdGhhdCBtb2RpZmllcyAnY29vcmRzJy5cclxuICAgICAgICAgICAgLnRvKHsgeDogZGF0YS54LCB6OiBkYXRhLnkgfSwgMTAwMCkgLy8gTW92ZSB0byAoMzAwLCAyMDApIGluIDEgc2Vjb25kLlxyXG4gICAgICAgICAgICAuZWFzaW5nKFRXRUVOLkVhc2luZy5RdWFkcmF0aWMuT3V0KSAvLyBVc2UgYW4gZWFzaW5nIGZ1bmN0aW9uIHRvIG1ha2UgdGhlIGFuaW1hdGlvbiBzbW9vdGguXHJcbiAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7IC8vIENhbGxlZCBhZnRlciB0d2Vlbi5qcyB1cGRhdGVzICdjb29yZHMnLlxyXG4gICAgICAgICAgICAgICAgcy5wbGF5ZXIuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke2Nvb3Jkcy54fSAuMjUgJHtjb29yZHMuen1gKTtcclxuXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5vbkNvbXBsZXRlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHMuZGF0YS5zdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LlxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nYW1lbWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ21vYicsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIHg6IHsgdmFsdWU6ICdmbG9hdCcgfSxcclxuICAgICAgICB5OiB7IHZhbHVlOiAnZmxvYXQnIH0sXHJcbiAgICAgICAgaGVhbHRoOiB7IHZhbHVlOiAnaW50JyB9XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zID0gdGhpcy5lbC5jb21wb25lbnRzLnBvc2l0aW9uO1xyXG4gICAgfSxcclxuICAgIG1vdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBBKiB3b3VsZCBiZSBuaWNlLi4uIGZvciBub3csIGp1c3QgbW92ZSByYW5kb20uLi5cclxuICAgICAgICBsZXQgdHgsIHR5LCBjLCBzID0gdGhpcztcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHR4ID0gcm5kKDMpIC0gMTtcclxuICAgICAgICAgICAgdHkgPSBybmQoMykgLSAxO1xyXG4gICAgICAgICAgICBjID0gR00ubWFwLmdldFBpeChzLmRhdGEueCArIHR4LCBzLmRhdGEueSArIHR5KTtcclxuICAgICAgICB9IHdoaWxlIChjLmRhdGEuZXZlcnkoZCA9PiBkID09IDApKVxyXG4gICAgICAgIHMuZGF0YS54ICs9IHR4O1xyXG4gICAgICAgIHMuZGF0YS55ICs9IHR5O1xyXG4gICAgICAgIGxldCBjb29yZHMgPSB7IHg6IHMucG9zLmRhdGEueCwgejogcy5wb3MuZGF0YS56IH07XHJcbiAgICAgICAgdmFyIHR3ZWVuID0gbmV3IFRXRUVOLlR3ZWVuKGNvb3JkcylcclxuICAgICAgICAgICAgLnRvKHsgeDogcy5wb3MuZGF0YS54ICsgdHgsIHo6IHMucG9zLmRhdGEueiArIHR5IH0sIDEwMDApXHJcbiAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5PdXQpXHJcbiAgICAgICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzLmVsLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHtjb29yZHMueH0gLjI1ICR7Y29vcmRzLnp9YCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpOyAvLyBTdGFydCB0aGUgdHdlZW4gaW1tZWRpYXRlbHkuICAgICAgIFxyXG4gICAgfVxyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2IuanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdwbGF5ZXInLCB7XHJcblxyXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wbGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==