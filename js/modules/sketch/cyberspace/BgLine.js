const THREE = require('three');
const glslify = require('glslify');
const MathEx = require('js-util/MathEx');

export default class BgLine {
  constructor() {
    this.uniforms = {
      time: {
        type: 'f',
        value: 0
      },
      wave1: {
        type: 'f',
        value: 0
      },
      wave2: {
        type: 'f',
        value: 0
      },
      wave3: {
        type: 'f',
        value: 0
      },
      wave4: {
        type: 'f',
        value: 0
      },
    };
    this.obj = null;
  }
  createObj(radius, wave1, wave2, wave3, wave4) {
    // Define Geometry
    const geometry = new THREE.SphereBufferGeometry(radius, 64, 64);

    // Define Material
    const material = new THREE.RawShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: glslify('../../../../glsl/sketch/cyberspace/bgLine.vs'),
      fragmentShader: glslify('../../../../glsl/sketch/cyberspace/bgLine.fs'),
      transparent: true,
      depthWrite: false,
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
    });
    this.uniforms.wave1.value = wave1;
    this.uniforms.wave2.value = wave2;
    this.uniforms.wave3.value = wave3;
    this.uniforms.wave4.value = wave4;

    // Create Object3D
    this.obj = new THREE.Mesh(geometry, material);
  }
  render(time, rotateX, rotateY, rotateZ) {
    this.uniforms.time.value += time;
    this.obj.rotation.set(rotateX, this.uniforms.time.value * rotateY, rotateZ);
  }
}
