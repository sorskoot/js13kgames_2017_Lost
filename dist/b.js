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

	__webpack_require__(4)
	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(5);
	__webpack_require__(7);


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

	/* global THREE, AFRAME */
	AFRAME.registerComponent('billboard-texture', {
	  schema: {
	    index:{type:'int'},
	    lookup: { type: 'int', default: 0 }
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
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

	window.rnd = m => ~~(Math.random() * m);
	window.t = new THREE.ImageUtils.loadTexture('./lost.png');
	window.t.minFilter = window.t.magFilter = 1003;
	window.pal = new THREE.ImageUtils.loadTexture('./palettes.png');
	window.pal.minFilter = window.pal.magFilter = 1003;
	


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	const mapGen = __webpack_require__(6);
	
	AFRAME.registerComponent('map', {
	    init: function () {
	        let size = 128;
	        let depth = 7;
	        this.mapContext = mapGen.go(size, depth);
	        let world = document.createElement("a-entity")
	        let worldData = this.mapContext.getImageData(0, 0, size, size);
	        for (let i = 0; i < size; i++) {
	            for (let j = 0; j < size; j++) {
	                let wdp = (i + size * j) * 4;
	                if (worldData.data[wdp] != 0) {
	                  
	                    let plane = document.createElement("a-entity")
	                    plane.classList.add("floor");
	                    if (worldData.data[wdp]==102) plane.setAttribute("mytexture", "index:11;lookup:11");
	                    else if (worldData.data[wdp]==170) plane.setAttribute("mytexture", "index:12;lookup:10");
	                    else if (worldData.data[wdp]==238) plane.setAttribute("mytexture", "index:12;lookup:9");
	                    //if (worldData.data[wdp]==102) plane.setAttribute("mytexture", "index:11;lookup:8");
	                    else plane.setAttribute("mytexture", "index:0;lookup:4");// + rnd(6));
	                    let x = i - (size / 2);
	                    let y = j - (size / 2);
	
	                    plane.addEventListener('click', function () {
	                        //plane.setAttribute("mytexture", "src: #my-texture;index:4");
	                        this.sceneEl.components.gamemanager.movePlayer({ x, y });
	                    });
	
	                    plane.setAttribute('position', `${x} 0 ${y}`);
	                    plane.setAttribute('mixin', 'voxel');
	                    world.appendChild(plane);
	                }
	            }
	        }
	        this.el.appendChild(world);
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
	    },
	    update: function () {
	        switch (this.data.state) {
	            case 0:
	                console.log('player');
	                break;
	            case 1:
	                console.log('enemy');
	                break;
	        }
	    },
	    movePlayer: function (data) {
	        var s = this;
	        if (s.data.state != 0) return;
	        var coords = s.player.components.position.data;
	        var a = new THREE.Vector2(data.x, data.y);
	        var b = new THREE.Vector2(coords.x, coords.z);
	        if (a.distanceTo(b) > 1)
	            return;
	        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
	            .to({ x: data.x, z: data.y }, 1000) // Move to (300, 200) in 1 second.
	            .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
	            .onUpdate(function () { // Called after tween.js updates 'coords'.
	                // Move 'box' to the position described by 'coords' with a CSS translation.
	                //box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
	                s.player.setAttribute('position', `${coords.x} .25 ${coords.z}`);
	            })
	            .onComplete(function(){
	                //s.data.state=1;
	                s.update();
	            })
	            .start(); // Start the tween immediately.
	
	    }
	});
	


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmRjNmMzMDliY2E0MTQ1ODgxZTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9teVNoYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmlsbGJvYXJkU2hhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcGNvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcGdlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZW1hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxhQUFZLGNBQWM7QUFDMUIsY0FBYTtBQUNiLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZSxhQUFhO0FBQzVCLGlCQUFnQix5QkFBeUI7QUFDekMsMEJBQXlCLGtCQUFrQjtBQUMzQyxrQkFBaUIsb0JBQW9CO0FBQ3JDLGlCQUFnQixxQ0FBcUM7QUFDckQsNEJBQTJCLFNBQVMsa0JBQWtCLEVBQUU7QUFDeEQsa0JBQWlCLFNBQVMsaUJBQWlCLEVBQUU7QUFDN0Msb0JBQW1CLFdBQVc7QUFDOUIsa0JBQWlCLFlBQVk7QUFDN0Isc0JBQXFCLGtCQUFrQjtBQUN2QyxvQkFBbUIsa0NBQWtDO0FBQ3JELGdCQUFlLHdDQUF3QztBQUN2RCxz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O0FBQ0EsRUFBQyIsImZpbGUiOiJiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmRjNmMzMDliY2E0MTQ1ODgxZTUiLCJyZXF1aXJlKCcuL2dsb2JhbCcpXHJcbnJlcXVpcmUoJy4vbXlTaGFkZXInKTtcclxucmVxdWlyZSgnLi9iaWxsYm9hcmRTaGFkZXInKTtcclxucmVxdWlyZSgnLi9tYXBjb21wJyk7XHJcbnJlcXVpcmUoJy4vZ2FtZW1hbmFnZXInKTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFsIFRIUkVFLCBBRlJBTUUgKi9cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdteXRleHR1cmUnLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBjb2xvcjpcclxuICAgIHtcclxuICAgICAgdHlwZTogJ2NvbG9yJ1xyXG4gICAgfSxcclxuICAgIGluZGV4OiB7IHR5cGU6ICdpbnQnIH0sXHJcbiAgICBsb29rdXA6IHsgdHlwZTogJ2ludCcsIGRlZmF1bHQ6IDAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCB1c2luZyB0aGUgdHdvIHNoYWRlcnMgZGVmaW5lZFxyXG4gICAqIGluIHZlcnRleC5nbHNsIGFuZCBmcmFnbWVudC5nbHNsLlxyXG4gICAqL1xyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhZ21lbnQnKS50ZXh0Q29udGVudDtcclxuICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVydGV4JykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgaW5kZXg6IHsgdmFsdWU6IHRoaXMuZGF0YS5pbmRleCB9LFxyXG4gICAgICAgIERpZmZ1c2VUZXh0dXJlOiB7IHZhbHVlOiB3aW5kb3cudCB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LFxyXG4gICAgICAgIGNvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoZGF0YS5jb2xvcikgfSxcclxuICAgICAgICBzcHJpdGVEaW1lbnNpb25zOiB7IHZhbHVlOiB7IHg6IDE2LjAsIHk6IDEuMCB9IH0sXHJcbiAgICAgICAgcmVwZWF0OiB7IHZhbHVlOiB7IHg6IDEuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICBmb2dTdGFydDogeyB2YWx1ZTogNSB9LFxyXG4gICAgICAgIGZvZ0VuZDogeyB2YWx1ZTogMTUgfSxcclxuICAgICAgICBsb29rdXBJbmRleDp7dmFsdWU6ZGF0YS5sb29rdXB9LFxyXG4gICAgICAgIGZvZ0NvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMCwgMCwgMCkgfSxcclxuICAgICAgICB0aW50OiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoMjU1LCAyNTUsIDI1NSkgfSxcclxuICAgICAgICB0aW50QW1vdW50OiB7IHZhbHVlOiAwIH1cclxuICAgICAgfSxcclxuICAgICAgdmVydGV4U2hhZGVyLFxyXG4gICAgICBmcmFnbWVudFNoYWRlclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFwcGx5VG9NZXNoKCk7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGVsLWxvYWRlZCcsICgpID0+IHRoaXMuYXBwbHlUb01lc2goKSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIFNoYWRlck1hdGVyaWFsIHdoZW4gY29tcG9uZW50IGRhdGEgY2hhbmdlcy5cclxuICAgKi9cclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMuaW5kZXgudmFsdWUgPSB0aGlzLmRhdGEuaW5kZXg7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLmxvb2t1cEluZGV4LnZhbHVlPXRoaXMuZGF0YS5sb29rdXA7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBBcHBseSB0aGUgbWF0ZXJpYWwgdG8gdGhlIGN1cnJlbnQgZW50aXR5LlxyXG4gICAqL1xyXG4gIGFwcGx5VG9NZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZXNoID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgaWYgKG1lc2gpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueCA9ICt0aGlzLmVsLmdldEF0dHJpYnV0ZShcIndpZHRoXCIpIHx8IDE7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnkgPSArdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIikgfHwgMTtcclxuICAgICAgbWVzaC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBPbiBlYWNoIGZyYW1lLCB1cGRhdGUgdGhlICd0aW1lJyB1bmlmb3JtIGluIHRoZSBzaGFkZXJzLlxyXG4gICAqL1xyXG4gIC8vIHRpY2s6IGZ1bmN0aW9uICh0KSB7XHJcbiAgLy8gICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0IC8gMTAwMDsgXHJcbiAgLy8gfVxyXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL215U2hhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGdsb2JhbCBUSFJFRSwgQUZSQU1FICovXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnYmlsbGJvYXJkLXRleHR1cmUnLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBpbmRleDp7dHlwZTonaW50J30sXHJcbiAgICBsb29rdXA6IHsgdHlwZTogJ2ludCcsIGRlZmF1bHQ6IDAgfVxyXG4gIH0sXHJcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuZGF0YTsgICAgXHJcbiAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhZ21lbnQnKS50ZXh0Q29udGVudDtcclxuICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVydGV4LWJpbGxib2FyZCcpLnRleHRDb250ZW50O1xyXG4gICAgXHJcbiAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICB0aW1lOiB7IHZhbHVlOiAwLjAgfSxcclxuICAgICAgICBpbmRleDogeyB2YWx1ZTogdGhpcy5kYXRhLmluZGV4IH0sXHJcbiAgICAgICAgRGlmZnVzZVRleHR1cmU6IHsgdmFsdWU6IHdpbmRvdy50fSxcclxuICAgICAgICBjb2xvcjogeyB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKGRhdGEuY29sb3IpIH0sXHJcbiAgICAgICAgc3ByaXRlRGltZW5zaW9uczogeyB2YWx1ZTogeyB4OiAxNi4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIHJlcGVhdDogeyB2YWx1ZTogeyB4OiAxLjAsIHk6IDEuMCB9IH0sXHJcbiAgICAgICAgTG9va3VwOiB7IHZhbHVlOiB3aW5kb3cucGFsIH0sICAgIFxyXG4gICAgICAgIGxvb2t1cEluZGV4Ont2YWx1ZTpkYXRhLmxvb2t1cH0sXHJcbiAgICAgICAgZm9nU3RhcnQ6e3ZhbHVlOjEwfSxcclxuICAgICAgICBmb2dFbmQ6e3ZhbHVlOjE1fSxcclxuICAgICAgICBhbHBoYXRlc3Q6e3ZhbHVlOjAuOTV9LFxyXG4gICAgICAgIGZvZ0NvbG9yOnt2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKDAsMCwwKX1cclxuICAgICAgfSxcclxuICAgICAgdmVydGV4U2hhZGVyLFxyXG4gICAgICBmcmFnbWVudFNoYWRlclxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1hdGVyaWFsLmJsZW5kaW5nID0gVEhSRUUuTXVsdGlwbHlCbGVuZGluZztcclxuICAgIHRoaXMuYXBwbHlUb01lc2goKTtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kZWwtbG9hZGVkJywgKCkgPT4gdGhpcy5hcHBseVRvTWVzaCgpKTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgU2hhZGVyTWF0ZXJpYWwgd2hlbiBjb21wb25lbnQgZGF0YSBjaGFuZ2VzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5pbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5pbmRleDtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IHRoZSBtYXRlcmlhbCB0byB0aGUgY3VycmVudCBlbnRpdHkuXHJcbiAgICovXHJcbiAgYXBwbHlUb01lc2g6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG1lc2ggPSB0aGlzLmVsLmdldE9iamVjdDNEKCdtZXNoJyk7XHJcbiAgICBpZiAobWVzaCkge1xyXG4gICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlcGVhdC52YWx1ZS54ID0rdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKXx8MTtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueSA9K3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpfHwxO1xyXG4gICAgICBtZXNoLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuICAgIH1cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIE9uIGVhY2ggZnJhbWUsIHVwZGF0ZSB0aGUgJ3RpbWUnIHVuaWZvcm0gaW4gdGhlIHNoYWRlcnMuXHJcbiAgICovXHJcbiAgLy8gdGljazogZnVuY3Rpb24gKHQpIHtcclxuICAvLyAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudGltZS52YWx1ZSA9IHQgLyAxMDAwOyBcclxuICAvLyB9XHJcbn0pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmlsbGJvYXJkU2hhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIndpbmRvdy5ybmQgPSBtID0+IH5+KE1hdGgucmFuZG9tKCkgKiBtKTtcclxud2luZG93LnQgPSBuZXcgVEhSRUUuSW1hZ2VVdGlscy5sb2FkVGV4dHVyZSgnLi9sb3N0LnBuZycpO1xyXG53aW5kb3cudC5taW5GaWx0ZXIgPSB3aW5kb3cudC5tYWdGaWx0ZXIgPSAxMDAzO1xyXG53aW5kb3cucGFsID0gbmV3IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoJy4vcGFsZXR0ZXMucG5nJyk7XHJcbndpbmRvdy5wYWwubWluRmlsdGVyID0gd2luZG93LnBhbC5tYWdGaWx0ZXIgPSAxMDAzO1xyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IG1hcEdlbiA9IHJlcXVpcmUoXCIuL21hcGdlblwiKTtcclxuXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnbWFwJywge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBzaXplID0gMTI4O1xyXG4gICAgICAgIGxldCBkZXB0aCA9IDc7XHJcbiAgICAgICAgdGhpcy5tYXBDb250ZXh0ID0gbWFwR2VuLmdvKHNpemUsIGRlcHRoKTtcclxuICAgICAgICBsZXQgd29ybGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIilcclxuICAgICAgICBsZXQgd29ybGREYXRhID0gdGhpcy5tYXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLCBzaXplKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdkcCA9IChpICsgc2l6ZSAqIGopICogNDtcclxuICAgICAgICAgICAgICAgIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuY2xhc3NMaXN0LmFkZChcImZsb29yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdPT0xMDIpIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjExO2xvb2t1cDoxMVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdPT0xNzApIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjEyO2xvb2t1cDoxMFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh3b3JsZERhdGEuZGF0YVt3ZHBdPT0yMzgpIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcImluZGV4OjEyO2xvb2t1cDo5XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgKHdvcmxkRGF0YS5kYXRhW3dkcF09PTEwMikgcGxhbmUuc2V0QXR0cmlidXRlKFwibXl0ZXh0dXJlXCIsIFwiaW5kZXg6MTE7bG9va3VwOjhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJpbmRleDowO2xvb2t1cDo0XCIpOy8vICsgcm5kKDYpKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGkgLSAoc2l6ZSAvIDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB5ID0gaiAtIChzaXplIC8gMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3BsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcInNyYzogI215LXRleHR1cmU7aW5kZXg6NFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2VuZUVsLmNvbXBvbmVudHMuZ2FtZW1hbmFnZXIubW92ZVBsYXllcih7IHgsIHkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBgJHt4fSAwICR7eX1gKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoJ21peGluJywgJ3ZveGVsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd29ybGQuYXBwZW5kQ2hpbGQocGxhbmUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZWwuYXBwZW5kQ2hpbGQod29ybGQpO1xyXG4gICAgfVxyXG59KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFwY29tcC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxudmFyIGdlbmVyYXRvciA9IHtcclxuICAgIGdvOiAobWFwV2lkdGgsIGRlcHRoKSA9PiB7XHJcbiAgICAgICAgdmFyIHBpZWNlcyA9IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDIsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAwLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMiwgMCwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDIsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gdmFyIG1hcFdpZHRoID0gMjU2O1xyXG5cclxuICAgICAgICBsZXQgcGwgPSBwaWVjZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGw7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUgPSBwaWVjZXNbaV0uc2xpY2UoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjbG9uZS5sZW5ndGg7IGorKylcclxuICAgICAgICAgICAgICAgIGNsb25lW2pdID0gY2xvbmVbal0uc2xpY2UoKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHBpZWNlcy5wdXNoKGNsb25lKTtcclxuICAgICAgICAgICAgbGV0IGNsb25lMiA9IHBpZWNlc1tpXS5zbGljZSgpO1xyXG4gICAgICAgICAgICBjbG9uZTIgPSBjbG9uZTIucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBwaWVjZXMucHVzaChjbG9uZTIpO1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUzID0gY2xvbmUuc2xpY2UoKTtcclxuICAgICAgICAgICAgY2xvbmUzID0gY2xvbmUzLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgcGllY2VzLnB1c2goY2xvbmUzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaWVjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcGllY2VzW2ldLnNpemUgPSB7IHc6IHBpZWNlc1tpXVswXS5sZW5ndGgsIGg6IHBpZWNlc1tpXS5sZW5ndGggfTtcclxuICAgICAgICAgICAgcGllY2VzW2ldLmV4aXRzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGllY2VzW2ldLnNpemUuaDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IHBpZWNlc1tpXS5zaXplLnc7IGgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZXNbaV1bal1baF0gPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2VzW2ldLmV4aXRzLnB1c2goeyB4OiBoLCB5OiBqIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG1hcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIG1hcENhbnZhcy53aWR0aCA9IG1hcFdpZHRoO1xyXG4gICAgICAgIG1hcENhbnZhcy5oZWlnaHQgPSBtYXBXaWR0aDtcclxuXHJcbiAgICAgICAgLy8gVGVtcCBkdXJpbmcgZGV2ZWxvcG1lbnRcclxuICAgICAgICBtYXBDYW52YXMuc3R5bGUud2lkdGggPSAnMTAyNHB4JztcclxuICAgICAgICBtYXBDYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMjRweCc7XHJcbiAgICAgICAgbWFwQ2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXBDYW52YXMpO1xyXG4gICAgICAgIC8vIEVORFxyXG5cclxuICAgICAgICB2YXIgbWFwQ29udGV4dCA9IG1hcENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCJyZ2JhKDAsIDAsIDAsIDApXCI7XHJcbiAgICAgICAgbWFwQ29udGV4dC5maWxsUmVjdCgwLCAwLCBtYXBXaWR0aCwgbWFwV2lkdGgpO1xyXG5cclxuICAgICAgICBsZXQgZmlyc3QgPSB0cnVlO1xyXG4gICAgICAgIHZhciBhZGRSb29tID0gKGV4aXQsIHNwZWNpYWwpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBpZWNlO1xyXG4gICAgICAgICAgICBsZXQgZXhpdHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGNsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRYO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WTtcclxuICAgICAgICAgICAgbGV0IHRyaWVzID0gMjU7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIHBpZWNlID0gcGllY2VzW3JuZChwaWVjZXMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBxID0gMDsgcSA8IHBpZWNlLmV4aXRzLmxlbmd0aDsgcSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jYWxjYWxhdGUgbmV3IHBvc2l0aW9uIHNvIHRoYXQgdGhlICcycycgZ28gb24gdG9wIG9mIGVhY2hvdGhlciwgYnV0IHRpbGVzIG5vdCBvdmVybGFwXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGV5IG92ZXJsYXAgdHJ5IGEgZGlmZmVyZW50ICcyJ1xyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXNuJ3QgYSAyLCB0cnkgYW5vdGhlciBwaWVjZVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFggPSBleGl0LnggLSBwaWVjZS5leGl0c1txXS54O1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFkgPSBleGl0LnkgLSBwaWVjZS5leGl0c1txXS55O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbWdEYXRhID0gbWFwQ29udGV4dC5nZXRJbWFnZURhdGEodGFyZ2V0WCwgdGFyZ2V0WSwgcGllY2Uuc2l6ZS53LCBwaWVjZS5zaXplLmgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyID0gaW1nRGF0YS5kYXRhLmV2ZXJ5KGQgPT4gZCA9PT0gMClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xlYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRyaWVzLS07XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRyaWVzID4gMCAmJiAhY2xlYXIpO1xyXG4gICAgICAgICAgICBpZiAoIWNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICBwaWVjZSA9IFtbMV1dO1xyXG4gICAgICAgICAgICAgICAgcGllY2UuZXhpdHMgPSBbe31dO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WCA9IGV4aXQueDtcclxuICAgICAgICAgICAgICAgIHRhcmdldFkgPSBleGl0Lnk7XHJcbiAgICAgICAgICAgICAgICBxID0gMDtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwiIzQwMFwiO1xyXG4gICAgICAgICAgICBpZiAoIWZpcnN0KSBtYXBDb250ZXh0LmZpbGxSZWN0KHRhcmdldFggKyBwaWVjZS5leGl0c1txXS54IHx8IDAsIHRhcmdldFkgKyBwaWVjZS5leGl0c1txXS55IHx8IDAsIDEsIDEpO1xyXG4gICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9ICFmaXJzdCA/IFwiIzQwMFwiIDogXCIjNjAwXCI7XHJcbiAgICAgICAgICAgIGlmIChzcGVjaWFsID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwiI0UwMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzcGVjaWFsID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwiI0EwMFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHBpZWNlLmZvckVhY2goKGksIHB5KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpLmZvckVhY2goKGosIHB4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFJlY3QodGFyZ2V0WCArIHB4LCB0YXJnZXRZICsgcHksIDEsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0cy5wdXNoKHsgeDogdGFyZ2V0WCArIHB4LCB5OiB0YXJnZXRZICsgcHkgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBleGl0cztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxvb3BzID0gZGVwdGg7XHJcbiAgICAgICAgbGV0IGV4aXRzID0gW3sgeDogbWFwV2lkdGggLyAyLCB5OiBtYXBXaWR0aCAvIDIgfV07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb29wczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdFeGl0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgc3BlY2lhbDtcclxuICAgICAgICAgICAgZXhpdHMuZm9yRWFjaCgoZXhpdCwgaW5kKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBsb29wcyAtIDEgJiYgaW5kID09IGV4aXRzLmxlbmd0aCAtIH5+KGV4aXRzLmxlbmd0aCAvIDMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY2lhbCA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PSBsb29wcyAtIDEgJiYgaW5kID09IH5+KGV4aXRzLmxlbmd0aCAvIDMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY2lhbCA9IDI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgcSA9IGFkZFJvb20oZXhpdCwgc3BlY2lhbCk7XHJcbiAgICAgICAgICAgICAgICBuZXdFeGl0cyA9IG5ld0V4aXRzLmNvbmNhdChxKTtcclxuICAgICAgICAgICAgICAgIHNwZWNpYWwgPSAwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZXhpdHMgPSBuZXdFeGl0cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYXBDb250ZXh0O1xyXG4gICAgfVxyXG5cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRvcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYXBnZW4uanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdnYW1lbWFuYWdlcicsIHtcclxuICAgIHNjaGVtYToge1xyXG4gICAgICAgIHN0YXRlOiB7IHZhbHVlOiAnaW50JywgZGVmYXVsdDogMCB9XHJcbiAgICAgICAgLy8gMCA9PSBwbGF5ZXJcclxuICAgICAgICAvLyAxID09IGVuZW15XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcicpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5kYXRhLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5ZXInKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZW5lbXknKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3ZlUGxheWVyOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIHZhciBzID0gdGhpcztcclxuICAgICAgICBpZiAocy5kYXRhLnN0YXRlICE9IDApIHJldHVybjtcclxuICAgICAgICB2YXIgY29vcmRzID0gcy5wbGF5ZXIuY29tcG9uZW50cy5wb3NpdGlvbi5kYXRhO1xyXG4gICAgICAgIHZhciBhID0gbmV3IFRIUkVFLlZlY3RvcjIoZGF0YS54LCBkYXRhLnkpO1xyXG4gICAgICAgIHZhciBiID0gbmV3IFRIUkVFLlZlY3RvcjIoY29vcmRzLngsIGNvb3Jkcy56KTtcclxuICAgICAgICBpZiAoYS5kaXN0YW5jZVRvKGIpID4gMSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciB0d2VlbiA9IG5ldyBUV0VFTi5Ud2Vlbihjb29yZHMpIC8vIENyZWF0ZSBhIG5ldyB0d2VlbiB0aGF0IG1vZGlmaWVzICdjb29yZHMnLlxyXG4gICAgICAgICAgICAudG8oeyB4OiBkYXRhLngsIHo6IGRhdGEueSB9LCAxMDAwKSAvLyBNb3ZlIHRvICgzMDAsIDIwMCkgaW4gMSBzZWNvbmQuXHJcbiAgICAgICAgICAgIC5lYXNpbmcoVFdFRU4uRWFzaW5nLlF1YWRyYXRpYy5PdXQpIC8vIFVzZSBhbiBlYXNpbmcgZnVuY3Rpb24gdG8gbWFrZSB0aGUgYW5pbWF0aW9uIHNtb290aC5cclxuICAgICAgICAgICAgLm9uVXBkYXRlKGZ1bmN0aW9uICgpIHsgLy8gQ2FsbGVkIGFmdGVyIHR3ZWVuLmpzIHVwZGF0ZXMgJ2Nvb3JkcycuXHJcbiAgICAgICAgICAgICAgICAvLyBNb3ZlICdib3gnIHRvIHRoZSBwb3NpdGlvbiBkZXNjcmliZWQgYnkgJ2Nvb3Jkcycgd2l0aCBhIENTUyB0cmFuc2xhdGlvbi5cclxuICAgICAgICAgICAgICAgIC8vYm94LnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyBjb29yZHMueCArICdweCwgJyArIGNvb3Jkcy55ICsgJ3B4KScpO1xyXG4gICAgICAgICAgICAgICAgcy5wbGF5ZXIuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke2Nvb3Jkcy54fSAuMjUgJHtjb29yZHMuen1gKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uQ29tcGxldGUoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vcy5kYXRhLnN0YXRlPTE7XHJcbiAgICAgICAgICAgICAgICBzLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTsgLy8gU3RhcnQgdGhlIHR3ZWVuIGltbWVkaWF0ZWx5LlxyXG5cclxuICAgIH1cclxufSk7XHJcblxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9nYW1lbWFuYWdlci5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9