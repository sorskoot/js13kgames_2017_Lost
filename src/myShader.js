/* global THREE, AFRAME */
var texture = new THREE.ImageUtils.loadTexture('./lost.png') ;

AFRAME.registerComponent('material-texture', {
  schema: { color: { type: 'color' }, src:{type:'map'},index:{type:'int'} },
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
       // DiffuseTexture: { value: texture},
        color: { value: new THREE.Color(data.color) },
        spriteDimensions: { value: { x: 8.0, y: 1.0 } },
        repeat: { value: { x: 1.0, y: 1.0 } },
        fogStart:{value:0.0},
        fogEnd:{value:10.0},
        fogColor:{value: new THREE.Color(0,0,0)}
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
    // this.material.uniforms.color.value.set(this.data.color);
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