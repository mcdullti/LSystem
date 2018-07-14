const THREE = require('three/build/three.js');
const glslify = require('glslify');
const MathEx = require('js-util/MathEx');
const debounce = require('js-util/debounce');

import force3 from '../../common/force3';
import Core from './Core';
import Wire from './Wire';

export default class Boxes {
  constructor() {
    this.velocity = [0, 0, 0];
    this.acceleration = [0, 0, 0];
    this.anchor = [0, 0, 0];
    this.instances = 36;
    this.core = new Core(this.instances);
    this.wire = new Wire(this.instances);
  }
  updateRotation() {
    force3.applyHook(this.velocity, this.acceleration, this.anchor, 0, 0.02);
    force3.applyDrag(this.acceleration, 0.3);
    force3.updateVelocity(this.velocity, this.acceleration, 1);
    this.core.uniforms.rotate.value = this.velocity[0];
    this.wire.uniforms.rotate.value = this.velocity[0];
  }
  rotate(delta) {
    if (!delta) return;
    this.anchor[0] -= delta * 0.05;
  }
  picked(id) {
    this.core.uniforms.pickedId.value = id;
    this.wire.uniforms.pickedId.value = id;
    if (id < this.instances && id > -1) {
      document.body.classList.add('is-picked');
    } else {
      document.body.classList.remove('is-picked');
    }
  }
  render(time) {
    this.core.uniforms.time.value += time;
    this.wire.render(time);
    this.updateRotation();
  }
}
