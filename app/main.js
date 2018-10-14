import Webgl from 'js/core/Webgl';
import loop from 'js/core/Loop';
import props from 'js/core/props';
import {setUpDat} from 'js/core/props';
import Example from 'js/components/Example';


// ##
// INIT
const webgl = new Webgl(window.innerWidth, window.innerHeight);
document.body.appendChild(webgl.dom);
// - Add object update to loop
loop.add(webgl.onUpdate);

// ##
// EXAMPLE LIGHT
const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(1, 1, 1);
webgl.add(light);

// ##
// EXAMPLE BOX
const example = new Example();
webgl.add(example);
loop.add(example.onUpdate);

// ##
// Dat.GUI
setUpDat();

// ##
// RENDERER
loop.start();


// ##
// ON RESIZE / ORIENTATION CHANGE
function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;

  webgl.onResize(w, h);
}

window.addEventListener('resize', onResize);
window.addEventListener('orientationchange', onResize);
