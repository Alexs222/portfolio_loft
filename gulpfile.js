const gulp = require('gulp');
const pug = require('gulp-pug');

const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const moduleImporter = require("sass-module-importer");
const autoprefixer = require("gulp-autoprefixer");

const del = require('del');

const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const svgSprite = require('gulp-svg-sprite');
const sassInlineSvg = require('gulp-sass-inline-svg');

const browserSync = require('browser-sync').create();

const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

const paths = {
    root: './build',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug'
    },
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'build/assets/styles/'
    },    
    images: {
        src: 'src/images/**/*.*',
        dest: 'build/assets/images/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'build/assets/scripts/'
    },
    fonts: {
        src: 'src/fonts/**/*.*',
        dest: 'build/assets/fonts/'
    }
}

// pug
gulp.task('templates', function () {
    return gulp.src(paths.templates.pages)
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(paths.root));
});

// scss
gulp.task('styles', function () {
    return gulp.src('./src/styles/app.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            importer: moduleImporter()
        }))
        .pipe(autoprefixer({
                browsers: ["last 3 versions"],
                cascade: false
            })
        )

        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest))
});

// переносим шрифты
gulp.task('fonts', function () {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
});

// очистка
gulp.task('clean', function () {
    return del(paths.root);
});

// webpack
gulp.task('scripts', function () {
    return gulp.src('src/scripts/app.js')
        .pipe(plumber())
        .pipe(gulpWebpack(webpackConfig, webpack)) 
        .pipe(gulp.dest(paths.scripts.dest));
});

// галповский вотчер
gulp.task('watch', function () {
    gulp.watch(paths.styles.src, gulp.series('styles'));
    gulp.watch(paths.templates.src, gulp.series('templates'));
    gulp.watch(paths.images.src, gulp.series('images'));
    gulp.watch(paths.scripts.src, gulp.series('scripts'));
    gulp.watch(paths.fonts.src, gulp.series('fonts'));
});

// локальный сервер + livereload (встроенный)
gulp.task('server', function () {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
});

// просто переносим картинки без svg
gulp.task('images', function () {
    return gulp.src(['src/images/**/*.*', '!src/images/icons/*.*'])
        .pipe(gulp.dest(paths.images.dest));
});

// svg sprite
gulp.task('svg', done => {
    const prettySvgs = () => {
        return gulp
            .src(`src/images/icons/*.svg`)
            .pipe(
                svgmin({
                    js2svg: {
                        pretty: true
                    }
                })
            )
            .pipe(
               cheerio({
                    run($) {
                        $("[fill], [stroke], [style], [width], [height]")
                            .removeAttr("fill")
                            .removeAttr("stroke")
                            .removeAttr("style")
                            .removeAttr("width")
                            .removeAttr("height");
                    },
                    parserOptions: { xmlMode: true }
                })
            )
            .pipe(replace("&gt;", ">"));
    };

    prettySvgs()
        .pipe(
            svgSprite({
                mode: {
                    symbol: {
                        sprite: "../sprite.svg"
                    }
                }
            })
        )
        .pipe(gulp.dest(`build/assets/images/icons`));

    prettySvgs().pipe(
        sassInlineSvg({
            destDir: `src/styles/icons/`
        })
    );

    done();
});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('styles', 'templates', 'images', 'scripts', 'fonts', 'svg'),
    gulp.parallel('watch', 'server')
));