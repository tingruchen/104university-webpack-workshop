const { task, src, dest, watch, parallel, series } = require('gulp');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const sass = require('gulp-sass');
// const inlineCss = require('gulp-inline-css');
const changed = require('gulp-changed');

const source = './source';
const dist = './templates';

// Static server
function serve() {
  browserSync.init({
    server: {
      baseDir: './templates',
    },
  });
}

function reload() {
  browserSync.reload();
}

function runWatch() {
  watch([`${dist}/**/*.html`]).on('change', reload);
  watch(`${source}/scss/**/*.scss`, series('sass'))
  // watch(`${source}/pug/*.pug`, series('pug'));
  // watch(`${source}/scss/**/*.scss`, series('sass','pug','inline-css'))
  // watch(`${source}/pug/*.pug`, series('pug','inline-css'));
}

task('sass', () => {
  return src(`${source}/scss/**/*.scss`)
    .pipe(sass())
    .pipe(dest(`${dist}/css/`))
    .pipe(browserSync.stream())
});

// task('pug', () => {
//   return src(`${source}/pug/*.pug`)
//     // .pipe(changed(`${dist}/html/`, { extension: 'html' }))
//     .pipe(pug({ pretty:'\t' }))
//     .pipe(dest(`${dist}/html/`));
// });

// task('inline-css', () => {
//   return src(`${dist}/html/*.html`)
//   .pipe(changed(`${dist}/html/`, { extension: 'html' }))
//   .pipe(inlineCss())
//   .pipe(dest(`${dist}/html/`));
// });

exports.default = parallel(serve, runWatch);
