window.rnd = m => ~~(Math.random() * m);
window.t = new THREE.ImageUtils.loadTexture('./lost.png');
window.t.minFilter = window.t.magFilter = 1003;
window.pal = new THREE.ImageUtils.loadTexture('./palettes.png');
window.pal.minFilter = window.pal.magFilter = 1003;

