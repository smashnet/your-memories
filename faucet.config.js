module.exports = {
    sass: [
      {
        source: './src/ui/scss/index.scss',
        target: './public/css/app.css',
      },
    ],
    js: [
      {
        source: './src/ui/js/index.js',
        target: './public/js/app.js',
      },
    ],
    static: [
      {
        source: './node_modules/@fortawesome/fontawesome-free/webfonts',
        target: './public/webfonts',
      }
    ],
  };
  