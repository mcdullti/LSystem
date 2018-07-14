const THREE = require('three/build/three.js');
const glslify = require('glslify');

import PostEffectBlur from './PostEffectBlur.js';

export default class Floor {
  constructor(resolution) {
    this.mirrorCamera = new THREE.PerspectiveCamera(30, resolution.x / resolution.y, 1, 15000);
    this.mirrorRender = new THREE.WebGLRenderTarget(resolution.x, resolution.y);
    this.textureMatrix = new THREE.Matrix4();
    this.uniforms = {
      time: {
        type: 'f',
        value: 0
      },
      texture: {
        type: 't',
        value: this.mirrorRender.texture
      },
      textureMatrix: {
        type: 'm4',
        value: this.textureMatrix
      },
    };
    this.renderBack1 = new THREE.WebGLRenderTarget(resolution.x, resolution.y);
    this.renderBack2 = new THREE.WebGLRenderTarget(resolution.x, resolution.y);
    this.postEffectBlurX = new PostEffectBlur(this.renderBack1.texture, 1, 0, 4);
    this.postEffectBlurY = new PostEffectBlur(this.renderBack2.texture, 0, 1, 4);

    this.mirrorCamera.up.set(0, -1, 0);
    this.obj = this.createObj();
  }
  add(scene, sceneBack) {
    sceneBack.add(this.obj);
    scene.add(this.postEffectBlurX.obj);
    scene.add(this.postEffectBlurY.obj);
  }
  createObj() {
    const mesh = new THREE.Mesh(
      new THREE.PlaneBufferGeometry(1000, 2000),
      new THREE.RawShaderMaterial({
        uniforms: this.uniforms,
        vertexShader: glslify('../../../../glsl/sketch/butterfly/floor.vs'),
        fragmentShader: glslify('../../../../glsl/sketch/butterfly/floor.fs'),
        transparent: true
      })
    );
    mesh.rotation.set(-0.5 * Math.PI, 0, 0);
    return mesh;
  }
  updateTextureMatrix() {
    this.textureMatrix.set(
      0.5, 0.0, 0.0, 0.5,
      0.0, 0.5, 0.0, 0.5,
      0.0, 0.0, 1.0, 0.0,
      0.0, 0.0, 0.0, 1.0
    );
    this.textureMatrix.multiply(this.mirrorCamera.projectionMatrix);
    this.textureMatrix.multiply(this.mirrorCamera.matrixWorldInverse);
  }
  render(renderer, scene, sceneBack, camera, time) {
    this.uniforms.time.value += time;
    this.updateTextureMatrix();
    this.obj.visible = false;
    renderer.render(sceneBack, this.mirrorCamera, this.renderBack1);
    this.obj.visible = true;
    this.postEffectBlurX.render(renderer, scene, camera, this.renderBack2);
    this.postEffectBlurY.render(renderer, scene, camera, this.mirrorRender);
  }
  resize(resolution) {
    this.mirrorCamera.aspect = resolution.x / resolution.y;
    this.mirrorCamera.updateProjectionMatrix();
    this.mirrorRender.setSize(resolution.x, resolution.y);
    this.renderBack1.setSize(resolution.x, resolution.y);
    this.renderBack2.setSize(resolution.x, resolution.y);
    this.postEffectBlurX.resize(resolution);
    this.postEffectBlurY.resize(resolution);
  }
}
