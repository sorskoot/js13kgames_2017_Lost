require('./myShader.js');
require('./comp-map');
const mapGen = require("./map2");

window.globalGeo = new THREE.Geometry();

AFRAME.registerGeometry('vox',{
    schema: {
        height: {default: 1, min: 0},
        width: {default: 1, min: 0}
      },    
      init: function (data) {
        //this.geometry =  new THREE.PlaneGeometry(data.width, data.height, 1,1);
        this.geometry = new THREE.Geometry();
        this.geometry.fromBufferGeometry(  new THREE.PlaneBufferGeometry(data.width, data.height, 1,1))
        //globalGeo.merge(this.geometry);
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
                    // if (Math.random() > .5) {
                    //     plane.setAttribute("material-texture", "src: #my-texture;index:0");
                    // }
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
