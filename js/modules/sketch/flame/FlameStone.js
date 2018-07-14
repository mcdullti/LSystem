const THREE = require('three');
const glslify = require('glslify');
const MathEx = require('js-util/MathEx');

export default class FlameStone {
  constructor() {
    this.uniforms = {
      time: {
        type: 'f',
        value: 0
      },
    };
    this.num = 5000;
    this.obj = null;
  }
  createObj() {
    // Define Geometries
    const geometry = new THREE.InstancedBufferGeometry();
    const baseGeometry = new THREE.BoxBufferGeometry(16, 800, 200);

    // Copy attributes of the base Geometry to the instancing Geometry
    geometry.copy(baseGeometry);

    // Define attributes of the instancing geometry
    const instancePositions = new THREE.InstancedBufferAttribute(new Float32Array(this.num * 3), 3, 1);
    const scales = new THREE.InstancedBufferAttribute(new Float32Array(this.num), 1, 1);
    const rotates = new THREE.InstancedBufferAttribute(new Float32Array(this.num), 1, 1);
    const speeds = new THREE.InstancedBufferAttribute(new Float32Array(this.num), 1, 1);
    for ( var i = 0, ul = this.num; i < ul; i++ ) {
      const radian = MathEx.radians(MathEx.randomArbitrary(0, 360));
      const radius = MathEx.randomArbitrary(1000, 7000);
      const scale = (7000 - radius) / 7000 * 0.75 + 0.25;
      const speed = MathEx.randomArbitrary(0.1, 0.4);
      instancePositions.setXYZ(
        i,
        radius,
        MathEx.randomArbitrary(-10000, -100),
        0,
      );
      scales.setXYZ(i, scale);
      rotates.setXYZ(i, i);
      speeds.setXYZ(i, speed);
    }
    geometry.addAttribute('instancePosition', instancePositions);
    geometry.addAttribute('scale', scales);
    geometry.addAttribute('rotate', rotates);
    geometry.addAttribute('speed', speeds);

    // Define Material
    const material = new THREE.RawShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: glslify('../../../../glsl/sketch/flame/flameStone.vs'),
      fragmentShader: glslify('../../../../glsl/sketch/flame/flameStone.fs'),
      flatShading: true,
    });

    // Create Object3D
    this.obj = new THREE.Mesh(geometry, material);
  }
  render(time) {
    this.uniforms.time.value += time;
  }
}
