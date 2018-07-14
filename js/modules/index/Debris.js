const THREE = require('three/build/three.js');
const glslify = require('glslify');
const MathEx = require('js-util/MathEx');

export default class Debris {
  constructor(x, y, z) {
    this.uniforms = {
      time: {
        type: 'f',
        value: 0
      },
      rotate: {
        type: 'f',
        value: Math.random() * 10
      }
    };
    this.obj = this.createObj();
    this.obj.position.set(x, y, z);
  }
  createObj() {
    return new THREE.Mesh(
      new THREE.BoxBufferGeometry(100, 100, 100),
      new THREE.RawShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: glslify('../../../glsl/index/debris.vs'),
        fragmentShader: glslify('../../../glsl/index/debris.fs'),
        transparent: true,
        wireframe: true
      })
    )
  }
  render(time) {
    this.uniforms.time.value += time;
  }
}
