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