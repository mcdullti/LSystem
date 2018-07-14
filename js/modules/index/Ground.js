const THREE = require('three/build/three.js');
const glslify = require('glslify');
const MathEx = require('js-util/MathEx');

export default class Ground {
  constructor() {
    this.uniforms = {
      time: {
        type: 'f',
        value: 0
      },
    };
    this.obj = this.createObj();
    this.obj.position.set(0, -200, 0);
    this.obj.rotation.set(MathEx.radians(-90), 0, 0);
  }
  createObj() {
    return new THREE.Mesh(
      new THREE.PlaneBufferGeometry(1024, 1024, 32, 32),
      new THREE.RawShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: glslify('../../../glsl/index/ground.vs'),
        fragmentShader: glslify('../../../glsl/index/ground.fs'),
        transparent: true,
        wireframe: true
      })
    )
  }
  render(time) {
    this.uniforms.time.value += time;
  }
}
