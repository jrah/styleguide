// # main

var gulp = require('gulp');

// # plugins

var sass =  require('gulp-ruby-sass'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload

// # declare location variables

// ## Sass
var srcDir = 'src/';
var scssDir = srcDir + 'scss/';



// ## CSS theme location
var cssDir  = 'css';


// # browser-sync server

gulp.task('browser-sync', function() {
  browserSync({
    proxy: "http://192.168.10.10/styleguide"
  });
});


// # sass compile
gulp.task('sass', function() {
  // locates Sass
  return gulp.src(scssDir + '*.scss')
  // source maps none is true
  .pipe(sass({'sourcemap=none': true}))
    // outputs CSS
   .pipe(gulp.dest(cssDir))
   .pipe(notify("Sass has compiled!"))
   // reloads the browser
   .pipe(reload({stream:true}));
});


// compile sass, watch directory for browser sync
gulp.task('default', ['sass','browser-sync'], function () {
  // watch sass directory
  gulp.watch(scssDir + '**/**/*.scss', ['sass']);
  gulp.watch('index.html', ['sass']);

});