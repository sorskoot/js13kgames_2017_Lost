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
	const mapGen = __webpack_require__(3);
	
	
	AFRAME.registerGeometry('mapgeo', {
	    schema: {},
	    init: function (data) {
	        //this.geometry =  new THREE.PlaneGeometry(data.width, data.height, 1,1);
	        
	        let size = 64;
	        let depth = 8;
	        this.mapContext = mapGen.go(size, depth);
	
	        var globalGeo = new THREE.Geometry();
	        // let world = document.createElement("a-entity")
	        let worldData = this.mapContext.getImageData(0, 0, size, size);
	
	        for (let i = 0; i < size; i++) {
	            for (let j = 0; j < size; j++) {
	                if (worldData.data[(i + size * j) * 4] != 0) {
	                    var geo = new THREE.PlaneGeometry(1, 1)
	                    geo.rotateX(-Math.PI/2);
	                    geo.translate(i - (size / 2), 0, j - (size / 2));                   
	                    globalGeo.merge(geo);
	                }
	            }
	        }
	        // globalGeo.computeBoundingBox();        
	        // globalGeo.mergeVertices();
	        // globalGeo.computeFaceNormals();
	        // globalGeo.computeVertexNormals();
	        this.geometry = globalGeo;
	
	    }
	});
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
	                     
	                    plane.setAttribute("mytexture", "src: #my-texture;index:0;lookup:"+rnd(6));
	                     
	                      plane.addEventListener('click', function () {
	                         plane.setAttribute("mytexture", "src: #my-texture;index:4");
	                       });
	                    //   plane.addEventListener('mouseleave', function () {
	                    //     plane.setAttribute("mytexture", "tintAmount:0.5");
	                    //   });
	                      
	                    plane.setAttribute('position', `${i - (size / 2)} 0 ${j - (size / 2)}`);
	                    plane.setAttribute('mixin', 'voxel');
	                    world.appendChild(plane);
	                }
	            }
	        }
	        
	        this.el.appendChild(world);
	        
	        // let sky = document.createElement('a-sky')
	        // sky.setAttribute("src", "#sky");
	        // sky.setAttribute('material',)
	        // primitive:sphere;radius:50;segmentsWidth:64;segmentsHeight:32
	        // this.el.sceneEl.appendChild(sky);
	    }
	});


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
	        spriteDimensions: { value: { x: 8.0, y: 1.0 } },
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
	        spriteDimensions: { value: { x: 8.0, y: 1.0 } },
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

	window.rnd = m => ~~(Math.random() * m);
	window.t = new THREE.ImageUtils.loadTexture('./lost.png');
	window.t.minFilter = window.t.magFilter = 1003;
	window.pal = new THREE.ImageUtils.loadTexture('./palettes.png');
	window.pal.minFilter = window.pal.magFilter = 1003;
	


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWZiNjdkYjcyM2Q2OTZiYzYzOGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9teVNoYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmlsbGJvYXJkU2hhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9tYXAyLmpzIiwid2VicGFjazovLy8uL3NyYy9nbG9iYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsZUFBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBdUIsVUFBVTtBQUNqQyw0QkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QixVQUFVO0FBQ2pDLDRCQUEyQixVQUFVO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUEsdUVBQXNFLFFBQVE7O0FBRTlFO0FBQ0EsNEVBQTJFO0FBQzNFLHlCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsMkJBQTBCOztBQUUxQix1REFBc0QsZUFBZSxLQUFLLGVBQWU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsVUFBVSxpQkFBaUI7QUFDdkQ7QUFDQTtBQUNBLEVB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QkFBdUIsbUJBQW1CO0FBQzFDLCtCQUE4QjtBQUM5QjtBQUNBLDRCQUEyQixzQkFBc0I7QUFDakQsZ0NBQStCLHNCQUFzQjtBQUNyRDtBQUNBLCtDQUE4QyxhQUFhO0FBQzNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBK0Isd0JBQXdCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7QUFDQTtBQUNBLGtDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUNBQW9DLG1DQUFtQztBQUN2RTtBQUNBLGtCQUFpQjtBQUNqQixjQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsdUJBQXNCLG1DQUFtQztBQUN6RCx3QkFBdUIsV0FBVztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNEI7Ozs7OztBQzVPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZmI2N2RiNzIzZDY5NmJjNjM4YiIsInJlcXVpcmUoJy4vZ2xvYmFsJylcclxucmVxdWlyZSgnLi9teVNoYWRlcicpO1xyXG5yZXF1aXJlKCcuL2JpbGxib2FyZFNoYWRlcicpO1xyXG5jb25zdCBtYXBHZW4gPSByZXF1aXJlKFwiLi9tYXAyXCIpO1xyXG5cclxuXHJcbkFGUkFNRS5yZWdpc3Rlckdlb21ldHJ5KCdtYXBnZW8nLCB7XHJcbiAgICBzY2hlbWE6IHt9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvL3RoaXMuZ2VvbWV0cnkgPSAgbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoZGF0YS53aWR0aCwgZGF0YS5oZWlnaHQsIDEsMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHNpemUgPSA2NDtcclxuICAgICAgICBsZXQgZGVwdGggPSA4O1xyXG4gICAgICAgIHRoaXMubWFwQ29udGV4dCA9IG1hcEdlbi5nbyhzaXplLCBkZXB0aCk7XHJcblxyXG4gICAgICAgIHZhciBnbG9iYWxHZW8gPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuICAgICAgICAvLyBsZXQgd29ybGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYS1lbnRpdHlcIilcclxuICAgICAgICBsZXQgd29ybGREYXRhID0gdGhpcy5tYXBDb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBzaXplLCBzaXplKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh3b3JsZERhdGEuZGF0YVsoaSArIHNpemUgKiBqKSAqIDRdICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZ2VvID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMSwgMSlcclxuICAgICAgICAgICAgICAgICAgICBnZW8ucm90YXRlWCgtTWF0aC5QSS8yKTtcclxuICAgICAgICAgICAgICAgICAgICBnZW8udHJhbnNsYXRlKGkgLSAoc2l6ZSAvIDIpLCAwLCBqIC0gKHNpemUgLyAyKSk7ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbEdlby5tZXJnZShnZW8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGdsb2JhbEdlby5jb21wdXRlQm91bmRpbmdCb3goKTsgICAgICAgIFxyXG4gICAgICAgIC8vIGdsb2JhbEdlby5tZXJnZVZlcnRpY2VzKCk7XHJcbiAgICAgICAgLy8gZ2xvYmFsR2VvLmNvbXB1dGVGYWNlTm9ybWFscygpO1xyXG4gICAgICAgIC8vIGdsb2JhbEdlby5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xyXG4gICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBnbG9iYWxHZW87XHJcblxyXG4gICAgfVxyXG59KTtcclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdtYXAnLCB7XHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHNpemUgPSAzMjtcclxuICAgICAgICBsZXQgZGVwdGggPSA0O1xyXG4gICAgICAgIHRoaXMubWFwQ29udGV4dCA9IG1hcEdlbi5nbyhzaXplLCBkZXB0aCk7XHJcbiAgICAgICAgbGV0IHdvcmxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpXHJcbiAgICAgICAgbGV0IHdvcmxkRGF0YSA9IHRoaXMubWFwQ29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgc2l6ZSwgc2l6ZSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh3b3JsZERhdGEuZGF0YVsoaSArIHNpemUgKiBqKSAqIDRdICE9IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBsYW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImEtZW50aXR5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuY2xhc3NMaXN0LmFkZChcImZsb29yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJzcmM6ICNteS10ZXh0dXJlO2luZGV4OjA7bG9va3VwOlwiK3JuZCg2KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJzcmM6ICNteS10ZXh0dXJlO2luZGV4OjRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBwbGFuZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBwbGFuZS5zZXRBdHRyaWJ1dGUoXCJteXRleHR1cmVcIiwgXCJ0aW50QW1vdW50OjAuNVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIGAke2kgLSAoc2l6ZSAvIDIpfSAwICR7aiAtIChzaXplIC8gMil9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhbmUuc2V0QXR0cmlidXRlKCdtaXhpbicsICd2b3hlbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmxkLmFwcGVuZENoaWxkKHBsYW5lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmVsLmFwcGVuZENoaWxkKHdvcmxkKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBsZXQgc2t5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYS1za3knKVxyXG4gICAgICAgIC8vIHNreS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIjc2t5XCIpO1xyXG4gICAgICAgIC8vIHNreS5zZXRBdHRyaWJ1dGUoJ21hdGVyaWFsJywpXHJcbiAgICAgICAgLy8gcHJpbWl0aXZlOnNwaGVyZTtyYWRpdXM6NTA7c2VnbWVudHNXaWR0aDo2NDtzZWdtZW50c0hlaWdodDozMlxyXG4gICAgICAgIC8vIHRoaXMuZWwuc2NlbmVFbC5hcHBlbmRDaGlsZChza3kpO1xyXG4gICAgfVxyXG59KTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFsIFRIUkVFLCBBRlJBTUUgKi9cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdteXRleHR1cmUnLCB7XHJcbiAgc2NoZW1hOiB7XHJcbiAgICBjb2xvcjpcclxuICAgIHtcclxuICAgICAgdHlwZTogJ2NvbG9yJ1xyXG4gICAgfSxcclxuICAgIGluZGV4OiB7IHR5cGU6ICdpbnQnIH0sXHJcbiAgICBsb29rdXA6IHsgdHlwZTogJ2ludCcsIGRlZmF1bHQ6IDAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCB1c2luZyB0aGUgdHdvIHNoYWRlcnMgZGVmaW5lZFxyXG4gICAqIGluIHZlcnRleC5nbHNsIGFuZCBmcmFnbWVudC5nbHNsLlxyXG4gICAqL1xyXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZnJhZ21lbnQnKS50ZXh0Q29udGVudDtcclxuICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVydGV4JykudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgdGltZTogeyB2YWx1ZTogMC4wIH0sXHJcbiAgICAgICAgaW5kZXg6IHsgdmFsdWU6IHRoaXMuZGF0YS5pbmRleCB9LFxyXG4gICAgICAgIERpZmZ1c2VUZXh0dXJlOiB7IHZhbHVlOiB3aW5kb3cudCB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LFxyXG4gICAgICAgIGNvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoZGF0YS5jb2xvcikgfSxcclxuICAgICAgICBzcHJpdGVEaW1lbnNpb25zOiB7IHZhbHVlOiB7IHg6IDguMCwgeTogMS4wIH0gfSxcclxuICAgICAgICByZXBlYXQ6IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIGZvZ1N0YXJ0OiB7IHZhbHVlOiA1IH0sXHJcbiAgICAgICAgZm9nRW5kOiB7IHZhbHVlOiAxNSB9LFxyXG4gICAgICAgIGxvb2t1cEluZGV4Ont2YWx1ZTpkYXRhLmxvb2t1cH0sXHJcbiAgICAgICAgZm9nQ29sb3I6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigwLCAwLCAwKSB9LFxyXG4gICAgICAgIHRpbnQ6IHsgdmFsdWU6IG5ldyBUSFJFRS5Db2xvcigyNTUsIDI1NSwgMjU1KSB9LFxyXG4gICAgICAgIHRpbnRBbW91bnQ6IHsgdmFsdWU6IDAgfVxyXG4gICAgICB9LFxyXG4gICAgICB2ZXJ0ZXhTaGFkZXIsXHJcbiAgICAgIGZyYWdtZW50U2hhZGVyXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYXBwbHlUb01lc2goKTtcclxuICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW9kZWwtbG9hZGVkJywgKCkgPT4gdGhpcy5hcHBseVRvTWVzaCgpKTtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0aGUgU2hhZGVyTWF0ZXJpYWwgd2hlbiBjb21wb25lbnQgZGF0YSBjaGFuZ2VzLlxyXG4gICAqL1xyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5pbmRleC52YWx1ZSA9IHRoaXMuZGF0YS5pbmRleDtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMubG9va3VwSW5kZXgudmFsdWU9dGhpcy5kYXRhLmxvb2t1cDtcclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIEFwcGx5IHRoZSBtYXRlcmlhbCB0byB0aGUgY3VycmVudCBlbnRpdHkuXHJcbiAgICovXHJcbiAgYXBwbHlUb01lc2g6IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IG1lc2ggPSB0aGlzLmVsLmdldE9iamVjdDNEKCdtZXNoJyk7XHJcbiAgICBpZiAobWVzaCkge1xyXG4gICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnJlcGVhdC52YWx1ZS54ID0gK3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikgfHwgMTtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueSA9ICt0aGlzLmVsLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKSB8fCAxO1xyXG4gICAgICBtZXNoLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcclxuICAgIH1cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIE9uIGVhY2ggZnJhbWUsIHVwZGF0ZSB0aGUgJ3RpbWUnIHVuaWZvcm0gaW4gdGhlIHNoYWRlcnMuXHJcbiAgICovXHJcbiAgLy8gdGljazogZnVuY3Rpb24gKHQpIHtcclxuICAvLyAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudGltZS52YWx1ZSA9IHQgLyAxMDAwOyBcclxuICAvLyB9XHJcbn0pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbXlTaGFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZ2xvYmFsIFRIUkVFLCBBRlJBTUUgKi9cclxuQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdiaWxsYm9hcmQtdGV4dHVyZScsIHtcclxuICBzY2hlbWE6IHtcclxuICAgIGluZGV4Ont0eXBlOidpbnQnfSxcclxuICAgIGxvb2t1cDogeyB0eXBlOiAnaW50JywgZGVmYXVsdDogMCB9XHJcbiAgfSxcclxuICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhOyAgICBcclxuICAgIHZhciBmcmFnbWVudFNoYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFnbWVudCcpLnRleHRDb250ZW50O1xyXG4gICAgdmFyIHZlcnRleFNoYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJ0ZXgtYmlsbGJvYXJkJykudGV4dENvbnRlbnQ7XHJcbiAgICBcclxuICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgIHRpbWU6IHsgdmFsdWU6IDAuMCB9LFxyXG4gICAgICAgIGluZGV4OiB7IHZhbHVlOiB0aGlzLmRhdGEuaW5kZXggfSxcclxuICAgICAgICBEaWZmdXNlVGV4dHVyZTogeyB2YWx1ZTogd2luZG93LnR9LFxyXG4gICAgICAgIGNvbG9yOiB7IHZhbHVlOiBuZXcgVEhSRUUuQ29sb3IoZGF0YS5jb2xvcikgfSxcclxuICAgICAgICBzcHJpdGVEaW1lbnNpb25zOiB7IHZhbHVlOiB7IHg6IDguMCwgeTogMS4wIH0gfSxcclxuICAgICAgICByZXBlYXQ6IHsgdmFsdWU6IHsgeDogMS4wLCB5OiAxLjAgfSB9LFxyXG4gICAgICAgIExvb2t1cDogeyB2YWx1ZTogd2luZG93LnBhbCB9LCAgICBcclxuICAgICAgICBsb29rdXBJbmRleDp7dmFsdWU6ZGF0YS5sb29rdXB9LFxyXG4gICAgICAgIGZvZ1N0YXJ0Ont2YWx1ZToxMH0sXHJcbiAgICAgICAgZm9nRW5kOnt2YWx1ZToxNX0sXHJcbiAgICAgICAgYWxwaGF0ZXN0Ont2YWx1ZTowLjk1fSxcclxuICAgICAgICBmb2dDb2xvcjp7dmFsdWU6IG5ldyBUSFJFRS5Db2xvcigwLDAsMCl9XHJcbiAgICAgIH0sXHJcbiAgICAgIHZlcnRleFNoYWRlcixcclxuICAgICAgZnJhZ21lbnRTaGFkZXJcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tYXRlcmlhbC5ibGVuZGluZyA9IFRIUkVFLk11bHRpcGx5QmxlbmRpbmc7XHJcbiAgICB0aGlzLmFwcGx5VG9NZXNoKCk7XHJcbiAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vZGVsLWxvYWRlZCcsICgpID0+IHRoaXMuYXBwbHlUb01lc2goKSk7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIFNoYWRlck1hdGVyaWFsIHdoZW4gY29tcG9uZW50IGRhdGEgY2hhbmdlcy5cclxuICAgKi9cclxuICB1cGRhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMuaW5kZXgudmFsdWUgPSB0aGlzLmRhdGEuaW5kZXg7XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBBcHBseSB0aGUgbWF0ZXJpYWwgdG8gdGhlIGN1cnJlbnQgZW50aXR5LlxyXG4gICAqL1xyXG4gIGFwcGx5VG9NZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZXNoID0gdGhpcy5lbC5nZXRPYmplY3QzRCgnbWVzaCcpO1xyXG4gICAgaWYgKG1lc2gpIHtcclxuICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy5yZXBlYXQudmFsdWUueCA9K3RoaXMuZWwuZ2V0QXR0cmlidXRlKFwid2lkdGhcIil8fDE7XHJcbiAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMucmVwZWF0LnZhbHVlLnkgPSt0aGlzLmVsLmdldEF0dHJpYnV0ZShcImhlaWdodFwiKXx8MTtcclxuICAgICAgbWVzaC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcbiAgICB9XHJcbiAgfSxcclxuICAvKipcclxuICAgKiBPbiBlYWNoIGZyYW1lLCB1cGRhdGUgdGhlICd0aW1lJyB1bmlmb3JtIGluIHRoZSBzaGFkZXJzLlxyXG4gICAqL1xyXG4gIC8vIHRpY2s6IGZ1bmN0aW9uICh0KSB7XHJcbiAgLy8gICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0IC8gMTAwMDsgXHJcbiAgLy8gfVxyXG59KVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2JpbGxib2FyZFNoYWRlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxudmFyIGdlbmVyYXRvciA9IHtcclxuICAgIGdvOiAobWFwV2lkdGgsIGRlcHRoKSA9PiB7XHJcbiAgICAgICAgdmFyIHBpZWNlcyA9IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDIsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAwLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMSwgMSwgMSwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMCwgMiwgMCwgMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAyLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDAsIDAsIDEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDAsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDIsIDBdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMSwgMSwgMSwgMSwgMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMSwgMCwgMF0sXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgMCwgMiwgMCwgMF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwXSxcclxuICAgICAgICAgICAgICAgIFswLCAwLCAyLCAwLCAwLCAwLCAwLCAwLCAyLCAwLCAwXSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDIsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICAgICAgWzAsIDAsIDIsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDBdLFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgLy8gdmFyIG1hcFdpZHRoID0gMjU2O1xyXG5cclxuICAgICAgICBsZXQgcGwgPSBwaWVjZXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGw7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUgPSBwaWVjZXNbaV0uc2xpY2UoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjbG9uZS5sZW5ndGg7IGorKylcclxuICAgICAgICAgICAgICAgIGNsb25lW2pdID0gY2xvbmVbal0uc2xpY2UoKS5yZXZlcnNlKCk7XHJcbiAgICAgICAgICAgIHBpZWNlcy5wdXNoKGNsb25lKTtcclxuICAgICAgICAgICAgbGV0IGNsb25lMiA9IHBpZWNlc1tpXS5zbGljZSgpO1xyXG4gICAgICAgICAgICBjbG9uZTIgPSBjbG9uZTIucmV2ZXJzZSgpO1xyXG4gICAgICAgICAgICBwaWVjZXMucHVzaChjbG9uZTIpO1xyXG4gICAgICAgICAgICBsZXQgY2xvbmUzID0gY2xvbmUuc2xpY2UoKTtcclxuICAgICAgICAgICAgY2xvbmUzID0gY2xvbmUzLnJldmVyc2UoKTtcclxuICAgICAgICAgICAgcGllY2VzLnB1c2goY2xvbmUzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwaWVjZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcGllY2VzW2ldLnNpemUgPSB7IHc6IHBpZWNlc1tpXVswXS5sZW5ndGgsIGg6IHBpZWNlc1tpXS5sZW5ndGggfTtcclxuICAgICAgICAgICAgcGllY2VzW2ldLmV4aXRzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGllY2VzW2ldLnNpemUuaDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBoID0gMDsgaCA8IHBpZWNlc1tpXS5zaXplLnc7IGgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZXNbaV1bal1baF0gPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGllY2VzW2ldLmV4aXRzLnB1c2goeyB4OiBoLCB5OiBqIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG1hcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIG1hcENhbnZhcy53aWR0aCA9IG1hcFdpZHRoO1xyXG4gICAgICAgIG1hcENhbnZhcy5oZWlnaHQgPSBtYXBXaWR0aDtcclxuXHJcbiAgICAgICAgLy9UZW1wIGR1cmluZyBkZXZlbG9wbWVudFxyXG4gICAgICAgIC8vIG1hcENhbnZhcy5zdHlsZS53aWR0aCA9ICcxMDI0cHgnO1xyXG4gICAgICAgIC8vIG1hcENhbnZhcy5zdHlsZS5oZWlnaHQgPSAnMTAyNHB4JztcclxuICAgICAgICAvLyBtYXBDYW52YXMuc3R5bGUuaW1hZ2VSZW5kZXJpbmcgPSAncGl4ZWxhdGVkJztcclxuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1hcENhbnZhcyk7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzAwMCc7XHJcbiAgICAgICAgLy9FTkRcclxuXHJcbiAgICAgICAgdmFyIG1hcENvbnRleHQgPSBtYXBDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICBtYXBDb250ZXh0LmZpbGxTdHlsZSA9IFwicmdiYSgwLCAwLCAwLCAwKVwiO1xyXG4gICAgICAgIG1hcENvbnRleHQuZmlsbFJlY3QoMCwgMCwgbWFwV2lkdGgsIG1hcFdpZHRoKTtcclxuXHJcbiAgICAgICAgbGV0IGZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICB2YXIgYWRkUm9vbSA9IChleGl0LCBzcGVjaWFsKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwaWVjZTtcclxuICAgICAgICAgICAgbGV0IGV4aXRzID0gW107XHJcbiAgICAgICAgICAgIGxldCBjbGVhciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0WDtcclxuICAgICAgICAgICAgbGV0IHRhcmdldFk7XHJcbiAgICAgICAgICAgIGxldCB0cmllcyA9IDI1O1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBwaWVjZSA9IHBpZWNlc1tybmQocGllY2VzLmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcSA9IDA7IHEgPCBwaWVjZS5leGl0cy5sZW5ndGg7IHErKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY2FsY2FsYXRlIG5ldyBwb3NpdGlvbiBzbyB0aGF0IHRoZSAnMnMnIGdvIG9uIHRvcCBvZiBlYWNob3RoZXIsIGJ1dCB0aWxlcyBub3Qgb3ZlcmxhcFxyXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhleSBvdmVybGFwIHRyeSBhIGRpZmZlcmVudCAnMidcclxuICAgICAgICAgICAgICAgICAgICAvL2lmIHRoZXJlIGlzbid0IGEgMiwgdHJ5IGFub3RoZXIgcGllY2VcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRYID0gZXhpdC54IC0gcGllY2UuZXhpdHNbcV0ueDtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRZID0gZXhpdC55IC0gcGllY2UuZXhpdHNbcV0ueTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW1nRGF0YSA9IG1hcENvbnRleHQuZ2V0SW1hZ2VEYXRhKHRhcmdldFgsIHRhcmdldFksIHBpZWNlLnNpemUudywgcGllY2Uuc2l6ZS5oKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhciA9IGltZ0RhdGEuZGF0YS5ldmVyeShkID0+IGQgPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0cmllcy0tO1xyXG4gICAgICAgICAgICB9IHdoaWxlICh0cmllcyA+IDAgJiYgIWNsZWFyKTtcclxuICAgICAgICAgICAgaWYgKCFjbGVhcikge1xyXG4gICAgICAgICAgICAgICAgcGllY2UgPSBbWzFdXTtcclxuICAgICAgICAgICAgICAgIHBpZWNlLmV4aXRzID0gW3t9XTtcclxuICAgICAgICAgICAgICAgIHRhcmdldFggPSBleGl0Lng7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRZID0gZXhpdC55O1xyXG4gICAgICAgICAgICAgICAgcSA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSBcIiM0QTRcIjtcclxuICAgICAgICAgICAgaWYgKCFmaXJzdCkgbWFwQ29udGV4dC5maWxsUmVjdCh0YXJnZXRYICsgcGllY2UuZXhpdHNbcV0ueCB8fCAwLCB0YXJnZXRZICsgcGllY2UuZXhpdHNbcV0ueSB8fCAwLCAxLCAxKTtcclxuICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSAhZmlyc3QgPyBcIiM4ODhcIiA6IFwiI0E0NFwiO1xyXG4gICAgICAgICAgICBpZiAoc3BlY2lhbCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSBcIiNGMEZcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3BlY2lhbCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgbWFwQ29udGV4dC5maWxsU3R5bGUgPSBcIiMwRkZcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBwaWVjZS5mb3JFYWNoKChpLCBweSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaS5mb3JFYWNoKChqLCBweCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqID09PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXBDb250ZXh0LmZpbGxSZWN0KHRhcmdldFggKyBweCwgdGFyZ2V0WSArIHB5LCAxLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGogPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdHMucHVzaCh7IHg6IHRhcmdldFggKyBweCwgeTogdGFyZ2V0WSArIHB5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZXhpdHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBsb29wcyA9IGRlcHRoO1xyXG4gICAgICAgIGxldCBleGl0cyA9IFt7IHg6IG1hcFdpZHRoIC8gMiwgeTogbWFwV2lkdGggLyAyIH1dO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9vcHM7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbmV3RXhpdHMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IHNwZWNpYWw7XHJcbiAgICAgICAgICAgIGV4aXRzLmZvckVhY2goKGV4aXQsIGluZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gbG9vcHMgLSAxICYmIGluZCA9PSBleGl0cy5sZW5ndGggLSB+fihleGl0cy5sZW5ndGggLyAzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gbG9vcHMgLSAxICYmIGluZCA9PSB+fihleGl0cy5sZW5ndGggLyAzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWwgPSAyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHEgPSBhZGRSb29tKGV4aXQsIHNwZWNpYWwpO1xyXG4gICAgICAgICAgICAgICAgbmV3RXhpdHMgPSBuZXdFeGl0cy5jb25jYXQocSk7XHJcbiAgICAgICAgICAgICAgICBzcGVjaWFsID0gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV4aXRzID0gbmV3RXhpdHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWFwQ29udGV4dDtcclxuICAgIH1cclxuXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0b3I7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFwMi5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ3aW5kb3cucm5kID0gbSA9PiB+fihNYXRoLnJhbmRvbSgpICogbSk7XHJcbndpbmRvdy50ID0gbmV3IFRIUkVFLkltYWdlVXRpbHMubG9hZFRleHR1cmUoJy4vbG9zdC5wbmcnKTtcclxud2luZG93LnQubWluRmlsdGVyID0gd2luZG93LnQubWFnRmlsdGVyID0gMTAwMztcclxud2luZG93LnBhbCA9IG5ldyBUSFJFRS5JbWFnZVV0aWxzLmxvYWRUZXh0dXJlKCcuL3BhbGV0dGVzLnBuZycpO1xyXG53aW5kb3cucGFsLm1pbkZpbHRlciA9IHdpbmRvdy5wYWwubWFnRmlsdGVyID0gMTAwMztcclxuXHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9