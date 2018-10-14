import props from 'js/core/props';

export default class Webgl {
  constructor(w, h) {
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(50, w / h, 1, 1000);
    this.camera.position.z = 10;

    this._renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    this._renderer.setPixelRatio(window.devicePixelRatio);
    this._renderer.setClearColor(0x0c171a);
    this.dom = this._renderer.domElement;

    this._passes = [
      new THREE.RenderPass(this.scene, this.camera),
      new THREE.AfterimagePass(),
    ];
    this.initPostprocessing();
    this.onResize(w, h);

    this.onUpdate = this.onUpdate.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  initPostprocessing() {
    this._composer = new THREE.EffectComposer(this._renderer);
    this._passes.forEach((effect, i) => {
      if (i == this._passes.length - 1) {
        effect.renderToScreen = true;
      }
      this._composer.addPass(effect);
    });
  }

  add(mesh) {
    this.scene.add(mesh);
  }

  onUpdate() {
    if (props.postprocessing) {
      this._composer.render(this.scene, this.camera);
    } else {
      this._renderer.render(this.scene, this.camera);
    }
  }

  onResize(w, h) {
    this.width = w;
    this.height = h;

    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();

    this._composer.setSize(w, h);
    this._renderer.setSize(w, h);
  }
}
