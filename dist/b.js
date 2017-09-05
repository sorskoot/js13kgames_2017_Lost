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
	        let size = 32;
	        let depth = 4;
	        this.mapContext = mapGen.go(size, depth);
	        let world = document.createElement("a-entity")
	        let worldData = this.mapContext.getImageData(0, 0, size, size);
	        for (let i = 0; i < size; i++) {
	            for (let j = 0; j < size; j++) {
	                if (worldData.data[(i + size * j) * 4] != 0) {
	
	                    let plane = document.createElement("a-entity")
	                    plane.classList.add("floor");
	
	                    plane.setAttribute("mytexture", "src: #my-texture;index:0;lookup:" + rnd(6));
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
	
	        //Temp during development
	        // mapCanvas.style.width = '1024px';
	        // mapCanvas.style.height = '1024px';
	        // mapCanvas.style.imageRendering = 'pixelated';
	        // document.body.appendChild(mapCanvas);
	        // document.body.style.backgroundColor = '#000';
	        //END
	
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
	            mapContext.fillStyle = "#4A4";
	            if (!first) mapContext.fillRect(targetX + piece.exits[q].x || 0, targetY + piece.exits[q].y || 0, 1, 1);
	            mapContext.fillStyle = !first ? "#888" : "#A44";
	            if (special === 1) {
	                mapContext.fillStyle = "#F0F";
	            }
	            if (special === 2) {
	                mapContext.fillStyle = "#0FF";
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
	    init:function(){
	        this.player = document.getElementById('player');
	    },
	    movePlayer:function(data){
	        var s = this;
	        var coords = s.player.components.position.data;        
	        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
	        .to({ x: data.x, z: data.y }, 1000) // Move to (300, 200) in 1 second.
	        .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
	        .onUpdate(function() { // Called after tween.js updates 'coords'.
	            // Move 'box' to the position described by 'coords' with a CSS translation.
	            //box.style.setProperty('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px)');
	            s.player.setAttribute('position',`${coords.x} .25 ${coords.z}`);
	        })
	        .start(); // Start the tween immediately.
	
	    }
	});
	


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTFlMjMwNzRjMGY4YTQwMWQzMDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9teVNoYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmlsbGJvYXJkU2hhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcGNvbXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21hcGdlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZW1hbmFnZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxhQUFZLGNBQWM7QUFDMUIsY0FBYTtBQUNiLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZSxhQUFhO0FBQzVCLGlCQUFnQix5QkFBeUI7QUFDekMsMEJBQXlCLGtCQUFrQjtBQUMzQyxrQkFBaUIsb0JBQW9CO0FBQ3JDLGlCQUFnQixxQ0FBcUM7QUFDckQsNEJBQTJCLFNBQVMsa0JBQWtCLEVBQUU7QUFDeEQsa0JBQWlCLFNBQVMsaUJBQWlCLEVBQUU7QUFDN0Msb0JBQW1CLFdBQVc7QUFDOUIsa0JBQWlCLFlBQVk7QUFDN0Isc0JBQXFCLGtCQUFrQjtBQUN2QyxvQkFBbUIsa0NBQWtDO0FBQ3JELGdCQUFlLHdDQUF3QztBQUN2RCxz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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLHdCQUF3QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxrQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFvQyxtQ0FBbUM7QUFDdkU7QUFDQSxrQkFBaUI7QUFDakIsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHVCQUFzQixtQ0FBbUM7QUFDekQsd0JBQXVCLFdBQVc7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCOzs7Ozs7QUM1T0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSx3RDtBQUNBO0FBQ0EsY0FBYSx1QkFBdUI7QUFDcEM7QUFDQSwrQkFBOEI7QUFDOUI7QUFDQTtBQUNBLGlEQUFnRCxTQUFTLE9BQU8sU0FBUztBQUN6RSxVQUFTO0FBQ1Qsa0JBQWlCOztBQUVqQjtBQUNBLEVBQUMiLCJmaWxlIjoiYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUxZTIzMDc0YzBmOGE0MDFkMzA2IiwicmVxdWlyZSgnLi9nbG9iYWwnKVxyXG5yZXF1aXJlKCcuL215U2hhZGVyJyk7XHJcbnJlcXVpcmUoJy4vYmlsbGJvYXJkU2hhZGVyJyk7XHJcbnJlcXVpcmUoJy4vbWFwY29tcCcpO1xyXG5yZXF1aXJlKCcuL2dhbWVtYW5hZ2VyJyk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGdsb2JhbCBUSFJFRSwgQUZSQU1FICovXHJcbkFGUkFNRS5yZWdpc3RlckNvbXBvbmVudCgnbXl0ZXh0dXJlJywge1xyXG4gIHNjaGVtYToge1xyXG4gICAgY29sb3I6XHJcbiAgICB7XHJcbiAgICAgIHR5cGU6ICdjb2xvcidcclxuICAgIH0sXHJcbiAgICBpbmRleDogeyB0eXBlOiAnaW50JyB9LFxyXG4gICAgbG9va3VwOiB7IHR5cGU6ICdpbnQnLCBkZWZhdWx0OiAwIH1cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwgdXNpbmcgdGhlIHR3byBzaGFkZXJzIGRlZmluZWRcclxuICAgKiBpbiB2ZXJ0ZXguZ2xzbCBhbmQgZnJhZ21lbnQuZ2xzbC5cclxuICAgKi9cclxuICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgdmFyIGZyYWdtZW50U2hhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYWdtZW50JykudGV4dENvbnRlbnQ7XHJcbiAgICB2YXIgdmVydGV4U2hhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcnRleCcpLnRleHRDb250ZW50O1xyXG5cclxuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgIHRpbWU6IHsgdmFsdWU6IDAuMCB9LFxyXG4gICAgICAgIGluZGV4OiB7IHZhbHVlOiB0aGlzLmRhdGEuaW5kZXggfSxcclxuICAgICAgICBEaWZmdXNlVGV4dHVyZTogeyB2YWx1ZTogd2luZG93LnQgfSxcclxuICAgICAgICBMb29rdXA6IHsgdmFsdWU6IHdpbmRvdy5wYWwgfSxcclxuICAgICAgICBjb2xvcjogeyB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKGRhdGEuY29sb3IpIH0sXHJcbiAgICAgICAgc3ByaXRlRGltZW5zaW9uczogeyB2YWx1ZTogeyB4OiAxNi4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIHJlcGVhdDogeyB2YWx1ZTogeyB4OiAxLjAsIHk6IDEuMCB9IH0sXHJcbiAgICAgICAgZm9nU3RhcnQ6IHsgdmFsdWU6IDUgfSxcclxuICAgICAgICBmb2dFbmQ6IHsgdmFsdWU6IDE1IH0sXHJcbiAgICAgICAgbG9va3VwSW5kZXg6e3ZhbHVlOmRhdGEubG9va3VwfSxcclxuICAgICAgICBmb2dDb2xvcjogeyB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKDAsIDAsIDApIH0sXHJcbiAgICAgICAgdGludDogeyB2YWx1ZTogbmV3IFRIUkVFLkNvbG9yKDI1NSwgMjU1LCAyNTUpIH0sXHJcbiAgICAgICAgdGludEFtb3VudDogeyB2YWx1ZTogMCB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHZlcnRleFNoYWRlcixcclxuICAgICAgZnJhZ21lbnRTaGFkZXJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hcHBseVRvTWVzaCgpO1xyXG4gICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdtb2RlbC1sb2FkZWQnLCAoKSA9PiB0aGlzLmFwcGx5VG9NZXNoKCkpO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogVXBkYXRlIHRoZSBTaGFkZXJNYXRlcmlhbCB3aGVuIGNvbXBvbmVudCBkYXRhIGNoYW5nZXMuXHJcbiAgICovXHJcbiAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLmluZGV4LnZhbHVlID0gdGhpcy5kYXRhLmluZGV4O1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5sb29rdXBJbmRleC52YWx1ZT10aGlzLmRhdGEubG9va3VwO1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQXBwbHkgdGhlIG1hdGVyaWFsIHRvIHRoZSBjdXJyZW50IGVudGl0eS5cclxuICAgKi9cclxuICBhcHBseVRvTWVzaDogZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgbWVzaCA9IHRoaXMuZWwuZ2V0T2JqZWN0M0QoJ21lc2gnKTtcclxuICAgIGlmIChtZXNoKSB7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnggPSArdGhpcy5lbC5nZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiKSB8fCAxO1xyXG4gICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlcGVhdC52YWx1ZS55ID0gK3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpIHx8IDE7XHJcbiAgICAgIG1lc2gubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogT24gZWFjaCBmcmFtZSwgdXBkYXRlIHRoZSAndGltZScgdW5pZm9ybSBpbiB0aGUgc2hhZGVycy5cclxuICAgKi9cclxuICAvLyB0aWNrOiBmdW5jdGlvbiAodCkge1xyXG4gIC8vICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50aW1lLnZhbHVlID0gdCAvIDEwMDA7IFxyXG4gIC8vIH1cclxufSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9teVNoYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBnbG9iYWwgVEhSRUUsIEFGUkFNRSAqL1xyXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2JpbGxib2FyZC10ZXh0dXJlJywge1xyXG4gIHNjaGVtYToge1xyXG4gICAgaW5kZXg6e3R5cGU6J2ludCd9LFxyXG4gICAgbG9va3VwOiB7IHR5cGU6ICdpbnQnLCBkZWZhdWx0OiAwIH1cclxuICB9LFxyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7ICAgIFxyXG4gICAgdmFyIGZyYWdtZW50U2hhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYWdtZW50JykudGV4dENvbnRlbnQ7XHJcbiAgICB2YXIgdmVydGV4U2hhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZlcnRleC1iaWxsYm9hcmQnKS50ZXh0Q29udGVudDtcclxuICAgIFxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgaW5kZXg6IHsgdmFsdWU6IHRoaXMuZGF0YS5pbmRleCB9LFxyXG4gICAgICAgIERpZmZ1c2VUZXh0dXJlOiB7IHZhbHVlOiB3aW5kb3cudH0sXHJcbiAgICAgICAgY29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcihkYXRhLmNvbG9yKSB9LFxyXG4gICAgICAgIHNwcml0ZURpbWVuc2lvbnM6IHsgdmFsdWU6IHsgeDogMTYuMCwgeTogMS4wIH0gfSxcclxuICAgICAgICByZXBlYXQ6IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LCAgICBcclxuICAgICAgICBsb29rdXBJbmRleDp7dmFsdWU6ZGF0YS5sb29rdXB9LFxyXG4gICAgICAgIGZvZ1N0YXJ0Ont2YWx1ZToxMH0sXHJcbiAgICAgICAgZm9nRW5kOnt2YWx1ZToxNX0sXHJcbiAgICAgICAgYWxwaGF0ZXN0Ont2YWx1ZTowLjk1fSxcclxuICAgICAgICBmb2dDb2xvcjp7dmFsdWU6IG5ldyBUSFJFRS5Db2xvcigwLDAsMCl9XHJcbiAgICAgIH0sXHJcbiAgICAgIHZlcnRleFNoYWRlcixcclxuICAgICAgZnJhZ21lbnRTaGFkZXJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLk11bHRpcGx5QmxlbmRpbmc7XHJcbiAgICB0aGlzLmFwcGx5VG9NZXNoKCk7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGVsLWxvYWRlZCcsICgpID0+IHRoaXMuYXBwbHlUb01lc2goKSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIFNoYWRlck1hdGVyaWFsIHdoZW4gY29tcG9uZW50IGRhdGEgY2hhbmdlcy5cclxuICAgKi9cclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMuaW5kZXgudmFsdWUgPSB0aGlzLmRhdGEuaW5kZXg7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBBcHBseSB0aGUgbWF0ZXJpYWwgdG8gdGhlIGN1cnJlbnQgZW50aXR5LlxyXG4gICAqL1xyXG4gIGFwcGx5VG9NZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZXNoID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgaWYgKG1lc2gpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueCA9K3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwid2lkdGhcIil8fDE7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnkgPSt0aGlzLmVsLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKXx8MTtcclxuICAgICAgbWVzaC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBPbiBlYWNoIGZyYW1lLCB1cGRhdGUgdGhlICd0aW1lJyB1bmlmb3JtIGluIHRoZSBzaGFkZXJzLlxyXG4gICAqL1xyXG4gIC8vIHRpY2s6IGZ1bmN0aW9uICh0KSB7XHJcbiAgLy8gICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0IC8gMTAwMDsgXHJcbiAgLy8gfVxyXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JpbGxib2FyZFNoYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ3aW5kb3cucm5kID0gbSA9PiB+fihNYXRoLnJhbmRvbSgpICogbSk7XHJcbndpbmRvdy50ID0gbmV3IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoJy4vbG9zdC5wbmcnKTtcclxud2luZG93LnQubWluRmlsdGVyID0gd2luZG93LnQubWFnRmlsdGVyID0gMTAwMztcclxud2luZG93LnBhbCA9IG5ldyBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCcuL3BhbGV0dGVzLnBuZycpO1xyXG53aW5kb3cucGFsLm1pbkZpbHRlciA9IHdpbmRvdy5wYWwubWFnRmlsdGVyID0gMTAwMztcclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBtYXBHZW4gPSByZXF1aXJlKFwiLi9tYXBnZW5cIik7XHJcblxyXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ21hcCcsIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgc2l6ZSA9IDMyO1xyXG4gICAgICAgIGxldCBkZXB0aCA9IDQ7XHJcbiAgICAgICAgdGhpcy5tYXBDb250ZXh0ID0gbWFwR2VuLmdvKHNpemUsIGRlcHRoKTtcclxuICAgICAgICBsZXQgd29ybGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIilcclxuICAgICAgICBsZXQgd29ybGREYXRhID0gdGhpcy5tYXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLCBzaXplKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHdvcmxkRGF0YS5kYXRhWyhpICsgc2l6ZSAqIGopICogNF0gIT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGxhbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIilcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5jbGFzc0xpc3QuYWRkKFwiZmxvb3JcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHBsYW5lLnNldEF0dHJpYnV0ZShcIm15dGV4dHVyZVwiLCBcInNyYzogI215LXRleHR1cmU7aW5kZXg6MDtsb29rdXA6XCIgKyBybmQoNikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB4ID0gaSAtIChzaXplIC8gMik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSBqIC0gKHNpemUgLyAyKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9wbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJzcmM6ICNteS10ZXh0dXJlO2luZGV4OjRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmVFbC5jb21wb25lbnRzLmdhbWVtYW5hZ2VyLm1vdmVQbGF5ZXIoeyB4LCB5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgYCR7eH0gMCAke3l9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKCdtaXhpbicsICd2b3hlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLmFwcGVuZENoaWxkKHBsYW5lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHdvcmxkKTtcclxuICAgIH1cclxufSk7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21hcGNvbXAuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbnZhciBnZW5lcmF0b3IgPSB7XHJcbiAgICBnbzogKG1hcFdpZHRoLCBkZXB0aCkgPT4ge1xyXG4gICAgICAgIHZhciBwaWVjZXMgPSBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAyLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMCwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDAsIDIsIDAsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMiwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAyLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAwLCAxLCAxXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAwLCAxLCAxXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAyLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMiwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMCwgMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAyLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsxLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIHZhciBtYXBXaWR0aCA9IDI1NjtcclxuXHJcbiAgICAgICAgbGV0IHBsID0gcGllY2VzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNsb25lID0gcGllY2VzW2ldLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2xvbmUubGVuZ3RoOyBqKyspXHJcbiAgICAgICAgICAgICAgICBjbG9uZVtqXSA9IGNsb25lW2pdLnNsaWNlKCkucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBwaWVjZXMucHVzaChjbG9uZSk7XHJcbiAgICAgICAgICAgIGxldCBjbG9uZTIgPSBwaWVjZXNbaV0uc2xpY2UoKTtcclxuICAgICAgICAgICAgY2xvbmUyID0gY2xvbmUyLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgcGllY2VzLnB1c2goY2xvbmUyKTtcclxuICAgICAgICAgICAgbGV0IGNsb25lMyA9IGNsb25lLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIGNsb25lMyA9IGNsb25lMy5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHBpZWNlcy5wdXNoKGNsb25lMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGllY2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBpZWNlc1tpXS5zaXplID0geyB3OiBwaWVjZXNbaV1bMF0ubGVuZ3RoLCBoOiBwaWVjZXNbaV0ubGVuZ3RoIH07XHJcbiAgICAgICAgICAgIHBpZWNlc1tpXS5leGl0cyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBpZWNlc1tpXS5zaXplLmg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaCA9IDA7IGggPCBwaWVjZXNbaV0uc2l6ZS53OyBoKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGllY2VzW2ldW2pdW2hdID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpZWNlc1tpXS5leGl0cy5wdXNoKHsgeDogaCwgeTogaiB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtYXBDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICBtYXBDYW52YXMud2lkdGggPSBtYXBXaWR0aDtcclxuICAgICAgICBtYXBDYW52YXMuaGVpZ2h0ID0gbWFwV2lkdGg7XHJcblxyXG4gICAgICAgIC8vVGVtcCBkdXJpbmcgZGV2ZWxvcG1lbnRcclxuICAgICAgICAvLyBtYXBDYW52YXMuc3R5bGUud2lkdGggPSAnMTAyNHB4JztcclxuICAgICAgICAvLyBtYXBDYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMjRweCc7XHJcbiAgICAgICAgLy8gbWFwQ2FudmFzLnN0eWxlLmltYWdlUmVuZGVyaW5nID0gJ3BpeGVsYXRlZCc7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYXBDYW52YXMpO1xyXG4gICAgICAgIC8vIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwMDAnO1xyXG4gICAgICAgIC8vRU5EXHJcblxyXG4gICAgICAgIHZhciBtYXBDb250ZXh0ID0gbWFwQ2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSBcInJnYmEoMCwgMCwgMCwgMClcIjtcclxuICAgICAgICBtYXBDb250ZXh0LmZpbGxSZWN0KDAsIDAsIG1hcFdpZHRoLCBtYXBXaWR0aCk7XHJcblxyXG4gICAgICAgIGxldCBmaXJzdCA9IHRydWU7XHJcbiAgICAgICAgdmFyIGFkZFJvb20gPSAoZXhpdCwgc3BlY2lhbCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGllY2U7XHJcbiAgICAgICAgICAgIGxldCBleGl0cyA9IFtdO1xyXG4gICAgICAgICAgICBsZXQgY2xlYXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHRhcmdldFg7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRZO1xyXG4gICAgICAgICAgICBsZXQgdHJpZXMgPSAyNTtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcGllY2UgPSBwaWVjZXNbcm5kKHBpZWNlcy5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHEgPSAwOyBxIDwgcGllY2UuZXhpdHMubGVuZ3RoOyBxKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NhbGNhbGF0ZSBuZXcgcG9zaXRpb24gc28gdGhhdCB0aGUgJzJzJyBnbyBvbiB0b3Agb2YgZWFjaG90aGVyLCBidXQgdGlsZXMgbm90IG92ZXJsYXBcclxuICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZXkgb3ZlcmxhcCB0cnkgYSBkaWZmZXJlbnQgJzInXHJcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpc24ndCBhIDIsIHRyeSBhbm90aGVyIHBpZWNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WCA9IGV4aXQueCAtIHBpZWNlLmV4aXRzW3FdLng7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0WSA9IGV4aXQueSAtIHBpZWNlLmV4aXRzW3FdLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltZ0RhdGEgPSBtYXBDb250ZXh0LmdldEltYWdlRGF0YSh0YXJnZXRYLCB0YXJnZXRZLCBwaWVjZS5zaXplLncsIHBpZWNlLnNpemUuaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXIgPSBpbWdEYXRhLmRhdGEuZXZlcnkoZCA9PiBkID09PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGVhcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdHJpZXMtLTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodHJpZXMgPiAwICYmICFjbGVhcik7XHJcbiAgICAgICAgICAgIGlmICghY2xlYXIpIHtcclxuICAgICAgICAgICAgICAgIHBpZWNlID0gW1sxXV07XHJcbiAgICAgICAgICAgICAgICBwaWVjZS5leGl0cyA9IFt7fV07XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRYID0gZXhpdC54O1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0WSA9IGV4aXQueTtcclxuICAgICAgICAgICAgICAgIHEgPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCIjNEE0XCI7XHJcbiAgICAgICAgICAgIGlmICghZmlyc3QpIG1hcENvbnRleHQuZmlsbFJlY3QodGFyZ2V0WCArIHBpZWNlLmV4aXRzW3FdLnggfHwgMCwgdGFyZ2V0WSArIHBpZWNlLmV4aXRzW3FdLnkgfHwgMCwgMSwgMSk7XHJcbiAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gIWZpcnN0ID8gXCIjODg4XCIgOiBcIiNBNDRcIjtcclxuICAgICAgICAgICAgaWYgKHNwZWNpYWwgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCIjRjBGXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwZWNpYWwgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIG1hcENvbnRleHQuZmlsbFN0eWxlID0gXCIjMEZGXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgcGllY2UuZm9yRWFjaCgoaSwgcHkpID0+IHtcclxuICAgICAgICAgICAgICAgIGkuZm9yRWFjaCgoaiwgcHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsUmVjdCh0YXJnZXRYICsgcHgsIHRhcmdldFkgKyBweSwgMSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXRzLnB1c2goeyB4OiB0YXJnZXRYICsgcHgsIHk6IHRhcmdldFkgKyBweSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGV4aXRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgbG9vcHMgPSBkZXB0aDtcclxuICAgICAgICBsZXQgZXhpdHMgPSBbeyB4OiBtYXBXaWR0aCAvIDIsIHk6IG1hcFdpZHRoIC8gMiB9XTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3BzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5ld0V4aXRzID0gW107XHJcbiAgICAgICAgICAgIGxldCBzcGVjaWFsO1xyXG4gICAgICAgICAgICBleGl0cy5mb3JFYWNoKChleGl0LCBpbmQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09IGxvb3BzIC0gMSAmJiBpbmQgPT0gZXhpdHMubGVuZ3RoIC0gfn4oZXhpdHMubGVuZ3RoIC8gMykpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpID09IGxvb3BzIC0gMSAmJiBpbmQgPT0gfn4oZXhpdHMubGVuZ3RoIC8gMykpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsID0gMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBxID0gYWRkUm9vbShleGl0LCBzcGVjaWFsKTtcclxuICAgICAgICAgICAgICAgIG5ld0V4aXRzID0gbmV3RXhpdHMuY29uY2F0KHEpO1xyXG4gICAgICAgICAgICAgICAgc3BlY2lhbCA9IDA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBleGl0cyA9IG5ld0V4aXRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1hcENvbnRleHQ7XHJcbiAgICB9XHJcblxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdG9yO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21hcGdlbi5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJBRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ2dhbWVtYW5hZ2VyJywge1xyXG4gICAgaW5pdDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXllcicpO1xyXG4gICAgfSxcclxuICAgIG1vdmVQbGF5ZXI6ZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgdmFyIHMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBjb29yZHMgPSBzLnBsYXllci5jb21wb25lbnRzLnBvc2l0aW9uLmRhdGE7ICAgICAgICBcclxuICAgICAgICB2YXIgdHdlZW4gPSBuZXcgVFdFRU4uVHdlZW4oY29vcmRzKSAvLyBDcmVhdGUgYSBuZXcgdHdlZW4gdGhhdCBtb2RpZmllcyAnY29vcmRzJy5cclxuICAgICAgICAudG8oeyB4OiBkYXRhLngsIHo6IGRhdGEueSB9LCAxMDAwKSAvLyBNb3ZlIHRvICgzMDAsIDIwMCkgaW4gMSBzZWNvbmQuXHJcbiAgICAgICAgLmVhc2luZyhUV0VFTi5FYXNpbmcuUXVhZHJhdGljLk91dCkgLy8gVXNlIGFuIGVhc2luZyBmdW5jdGlvbiB0byBtYWtlIHRoZSBhbmltYXRpb24gc21vb3RoLlxyXG4gICAgICAgIC5vblVwZGF0ZShmdW5jdGlvbigpIHsgLy8gQ2FsbGVkIGFmdGVyIHR3ZWVuLmpzIHVwZGF0ZXMgJ2Nvb3JkcycuXHJcbiAgICAgICAgICAgIC8vIE1vdmUgJ2JveCcgdG8gdGhlIHBvc2l0aW9uIGRlc2NyaWJlZCBieSAnY29vcmRzJyB3aXRoIGEgQ1NTIHRyYW5zbGF0aW9uLlxyXG4gICAgICAgICAgICAvL2JveC5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgY29vcmRzLnggKyAncHgsICcgKyBjb29yZHMueSArICdweCknKTtcclxuICAgICAgICAgICAgcy5wbGF5ZXIuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsYCR7Y29vcmRzLnh9IC4yNSAke2Nvb3Jkcy56fWApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnN0YXJ0KCk7IC8vIFN0YXJ0IHRoZSB0d2VlbiBpbW1lZGlhdGVseS5cclxuXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2FtZW1hbmFnZXIuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==