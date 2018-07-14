const THREE = require('three');
const glslify = require('glslify');
const MathEx = require('js-util/MathEx');

export default class Mesh {
  constructor() {
    this.uniforms = {
      time: {
        type: 'f',
        value: 0
      },
    };
    this.obj = null;
  }
  createObj() {
    // Define Geometry
    const geometry = new THREE.BoxBufferGeometry(100, 100, 100);

    // Define Material
    const material = new THREE.RawShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: glslify('../../../../glsl/sketch/xxx/mesh.vs'),
      fragmentShader: glslify('../../../../glsl/sketch/xxx/mesh.fs'),
    });

    // Create Object3D
    this.obj = new THREE.Mesh(geometry, material);
  }
  render(time) {
    this.uniforms.time.value += time;
  }
}
