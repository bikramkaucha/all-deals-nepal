const { src, dest, watch, series, parallel } = require('gulp');
const sass         = require('gulp-sass')(require('sass'));
const babel        = require('gulp-babel');
const browserify   = require('browserify');
const babelify     = require('babelify');
const source       = require('vinyl-source-stream');
const buffer       = require('vinyl-buffer');
const uglify       = require('gulp-uglify');
const cleanCSS     = require('gulp-clean-css');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const rename       = require('gulp-rename');
const imagemin     = require('gulp-imagemin');
const webp         = require('gulp-webp');
const cache        = require('gulp-cache');
const browserSync  = require('browser-sync').create();
const del          = require('del');

// ─── Paths ────────────────────────────────────────────────────────────────────
const paths = {
  scss: {
    src:   'src/scss/**/*.scss',
    entry: 'src/scss/main.scss',
    critical: 'src/scss/critical.scss',
    dest:  './',
  },
  js: {
    src:   'src/js/**/*.js',
    entry: 'src/js/main.js',
    dest:  'dist/js',
  },
  images: {
    src:  'src/images/raw/**/*.{jpg,jpeg,png,gif,svg}',
    dest: 'dist/images',
  },
  webp: {
    // only raster images — SVGs don't need WebP conversion
    src:  'src/images/raw/**/*.{jpg,jpeg,png}',
    dest: 'dist/images',
  },
  fonts: {
    src:  'src/fonts/**/*.{woff,woff2,ttf,otf,eot,svg}',
    dest: 'dist/fonts',
  },
  html: {
    src: '*.html',
  },
};

// ─── Clean ────────────────────────────────────────────────────────────────────
function clean() {
  return del([
    'dist/',
    'main.css',
    'main.min.css',
    'main.min.css.map',
  ]);
}

// ─── SCSS ─────────────────────────────────────────────────────────────────────
function styles() {
  return src(paths.scss.entry)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(dest(paths.scss.dest))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.scss.dest))
    .pipe(browserSync.stream());
}

// ─── critcal style ───────────────────────────────────────────────────────────────────────
function criticalStyles() {
  return src(paths.scss.critical)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(dest('./'))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('./'))
    .pipe(browserSync.stream());
}
// ─── JS ───────────────────────────────────────────────────────────────────────

function scripts() {
  return browserify({ entries: paths.js.entry, debug: true })
    .transform(babelify, { presets: [['@babel/preset-env', { targets: '> 0.25%, not dead' }]], sourceMaps: true })
    .bundle()
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(dest(paths.js.dest))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.js.dest))
    .pipe(browserSync.stream());
}

// ─── Images ───────────────────────────────────────────────────────────────────
// Optimise JPG / PNG / GIF / SVG → dist/images
// Results are cached so unchanged images are skipped on re-runs
function images() {
  return src(paths.images.src)
    .pipe(cache(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 80, progressive: true }),  // 80% quality, good balance
      imagemin.optipng({ optimizationLevel: 5 }),            // 0 (fast) – 7 (max)
      imagemin.svgo({
        plugins: [
          { removeViewBox: false },   // keep viewBox for responsive SVGs
          { cleanupIDs: false },      // keep IDs (needed for sprite references)
        ],
      }),
    ])))
    .pipe(dest(paths.images.dest));
}

// Convert raster images to WebP alongside the originals
// Browsers that support WebP can load these; others fall back to jpg/png
function toWebP() {
  return src(paths.webp.src)
    .pipe(webp({ quality: 80 }))     // matches mozjpeg quality above
    .pipe(dest(paths.webp.dest));
}

// ─── Fonts ────────────────────────────────────────────────────────────────────
// Fonts just get copied — no transformation needed.
// woff2 is already compressed; ttf/otf are converted at design time.
// Place your @font-face declarations in src/scss/base/_fonts.scss
function fonts() {
  return src(paths.fonts.src)
    .pipe(dest(paths.fonts.dest));
}

// Clear the gulp-cache (run: npx gulp clearCache)
function clearCache(done) {
  cache.clearAll();
  done();
}

// ─── BrowserSync ──────────────────────────────────────────────────────────────
function serve(done) {
  browserSync.init({
    server: { baseDir: './' },
    notify: true,
    open: true,
    port: 3000,
  }, done);
}

function reload(done) {
  browserSync.reload();
  done();
}

// ─── Watch ────────────────────────────────────────────────────────────────────
function watchFiles() {
  watch(paths.scss.src,  parallel(styles, criticalStyles));
  watch(paths.js.src,     series(scripts, reload));
  watch(paths.images.src, series(images, toWebP, reload));
  watch(paths.fonts.src,  series(fonts, reload));
  watch(paths.html.src,   reload);
}

// ─── Exports ──────────────────────────────────────────────────────────────────
exports.clean      = clean;
exports.styles     = styles;
exports.scripts    = scripts;
exports.images     = images;
exports.webp       = toWebP;
exports.fonts      = fonts;
exports.clearCache = clearCache;

// npm run build → clean, then compile everything in parallel
// fix 2 — one single exports.build with everything
exports.build = series(
  clean,
  parallel(styles, criticalStyles, scripts, fonts),
  images,
  toWebP,
);
// npm run dev → compile everything, start server, watch
exports.watch = series(
  parallel(styles, criticalStyles, scripts, fonts, images),
  toWebP,
  serve,
  watchFiles,
);

exports.default = exports.watch;