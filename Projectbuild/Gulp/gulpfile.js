const gulp = require("gulp");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const less = require("gulp-less");
const cssClean = require("gulp-clean-css");
const htmlMin = require('gulp-htmlmin');
const livereload = require('gulp-livereload');
const {series, parallel} = require('gulp');
const watch = require('gulp-watch');
const connect = require('gulp-connect');
const open = require('open');

//js文件合并
/*gulp.task("concatJs", function () {
    return gulp.src("js/!*.js")
        .pipe(concat('all.js'))
        .pipe(gulp.dest("js/"))
        .pipe(livereload());
});*/
function concatJs() {
    return gulp.src("js/*.js")
        .pipe(concat('all.js'))
        .pipe(gulp.dest("dist/"))
        .pipe(livereload())
        .pipe(connect.reload());
}

//css文件合并和压缩
/*gulp.task("concatCss", function () {
    return gulp.src("css/!*.css")
        .pipe(concat('build.css'))
        .pipe(cssClean({compatibility: 'ie8'}))//兼容ie8
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest("dist/"))
        .pipe(livereload());
});*/
function concatCss() {
    return gulp.src("css/*.css")
        .pipe(cssClean({compatibility: 'ie8'}))//兼容ie8
        .pipe(concat('build.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("dist/"))
        .pipe(livereload())
        .pipe(connect.reload());
}

//压缩JS
/*gulp.task("uglifyJs",function (){
    return gulp.src("js/all.js")
        .pipe(uglify())
        .pipe(rename("all.min.js"))
        .pipe(gulp.dest("dist"))
        .pipe(livereload());
})*/
function uglifyJs() {
    return gulp.src("dist/all.js")
        .pipe(uglify())
        .pipe(rename("all.min.js"))
        .pipe(gulp.dest("dist"))
        .pipe(livereload())
        .pipe(connect.reload());
}

//编译less文件
/*gulp.task("AutoLess", function () {
    return gulp.src("less/!*.less")
        .pipe(less())
        .pipe(gulp.dest("css"))
        .pipe(livereload());
});*/
function AutoLess() {
    return gulp.src("less/*.less")
        .pipe(less())
        .pipe(gulp.dest("css"))
        .pipe(livereload())
        .pipe(connect.reload());
}

//压缩html文件
/*gulp.task('htmlMin',function (){
    return gulp.src('*.html')
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
        .pipe(livereload());
})*/
function htmlMinT() {
    return gulp.src('*.html')
        .pipe(htmlMin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
        .pipe(livereload())  //实时监听管道
        .pipe(connect.reload()); //微型服务器实时监听管道
}

/*gulp.task('watch',function () {
    livereload.listen()
    watch(['css/!*.css','less/!*.less']).on("all",series(AutoLess,concatCss,concatJs,uglifyJs,htmlMinT))
});*/
//实现监听使用gulp插件
function My_watch() {
    livereload.listen();
    watch(['css/*.css', 'less/*.less', 'js/*.js'], series(AutoLess, concatCss, concatJs, uglifyJs, htmlMinT))//.on("all")
}

//设计一个微型服务器并实时监听
function connectT() {
    //启动监听
    livereload.listen();
    //配置微型服务器
    connect.server({
        root: "dist/",
        port: 5000,
        livereload: true
    })
    //自动打开一个网页
    open("http://localhost:5000/")
    //实现监听不使用插件的方法
    gulp.watch(['js/*.js', 'css/*.css', 'less/*.less']).on("all", series(AutoLess, concatCss, concatJs, uglifyJs, htmlMinT))
}

//series同步执行
//parallel异步执行
exports.default = series(concatJs, uglifyJs, AutoLess, concatCss, htmlMinT, connectT)
exports.My_watch = My_watch
