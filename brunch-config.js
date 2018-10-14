module.exports = {
  files: {
    javascripts: {
      joinTo: 'app.js',
    },
    stylesheets: {
      joinTo: 'app.css',
    },
    templates: {
      joinTo: 'app.js',
    },
  },
  npm: {
    globals: {
      THREE: 'three-full',
      dat: 'dat.gui',
    },
  },
};
