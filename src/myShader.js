
AFRAME.registerComponent('material-texture', {
  schema: { color: { type: 'color' }, src:{type:'map'} },
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
        index: { value: 0 },
        DiffuseTexture: { value: new THREE.ImageUtils.loadTexture('./lost.png') },
        color: { value: new THREE.Color(data.color) },
        spriteDimensions: { value: { x: 8.0, y: 1.0 } },
        repeat: { value: { x: 8.0, y: 8.0 } }
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
      mesh.material = this.material;
    }
  },
  /**
   * On each frame, update the 'time' uniform in the shaders.
   */
  tick: function (t) {
    this.material.uniforms.time.value = t / 1000;
  }
})