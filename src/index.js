window.t = new THREE.ImageUtils.loadTexture('./lost.png');

require('./myShader.js');
require('./billboardShader');
const mapGen = require("./map2");


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
                     if (Math.random() > .5) {
                         plane.setAttribute("mytexture", "src: #my-texture;index:0");
                     }
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
