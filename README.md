# Brunch app


This is brunch skeleton for starting a project in **WebGL** with 
[Three.js](http://threejs.org/) and [ES2016](https://babeljs.io/docs/en/learn/).


## Getting started

* Install (if you don't have them):
  * [Node.js](http://nodejs.org): `brew install node` on OS X
  * [Brunch](http://brunch.io): `npm install -g brunch`
* Create a new project :
  * Deploy with brunch :
    * `brunch new myapp --skeleton https://github.com/seigler/brunch-threejs` - create new project
  * Or use git to clone the brunch-threejs repository :
    * `git clone https://github.com/Jeremboo/brunch-threejs`
* Download dependencies :
    * `npm run deploy` or `npm install && npm start`


## How to use

* `npm start` or `brunch watch --server` to watch the project with continuous rebuild.
* `npm run prod` or `brunch build --production` to build minified project for production.


## More

* **Like brunch basic skeleton :**
  * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
  * Place static files you want to be copied from `app/assets/` to `public/`.

* **Specific to this skeleton :**

  * You can use this dir `/app/js/components/` for your THREE.object3D components. For my part, I create one component for each 3D object. There is an example of a 3D object in this dir (`Example.js`) to show how you can create a THREE.object3D with ES2015.

  * `/app/js/shaders` contains fragments and vertex `.glsl` files. If you need to use some `.glsl` file for build a `ShaderMaterial`, you can import these files. Look at `Example.js` for more details.

  * The directory `/app/js/core/` contains:
      * `Webgl.js` initializes the 3D scene and the camera.
      * `Loop.js` manages frame animation for each update of 3Dobjects.
      * `props.js` contains all variables of settings to be uses in all other files. It's specially created to be used by [dat.gui](https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage)

  * `/app/js/main.js` puts these together to animate a 3D object.

  * I also added [EffectComposer](https://threejs.org/examples/#webgl_postprocessing) for post processing.


## Thanks to

   - [Jérémie Boulay](http://jeremieboulay.fr/portfolio/) whose [threejs skeleton](https://github.com/Jeremboo/brunch-threejs-es2015) I forked to get this one.

   - [Valentin Daguenet](http://vdaguenet.fr/) and his repository [Threejs-starter-kit](https://github.com/vdaguenet/threejs-starter-kit).

   - [Florian Zumbrunn](http://www.floz.fr/) for his starter kit during his Three.js workshop at Gobelins, l'école de l'image.
