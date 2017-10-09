var gulp = require("gulp"),
  prefixer = require("gulp-autoprefixer"),
  minifyCss = require("gulp-minify-css"),
  sass = require("gulp-sass"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  rename = require("gulp-rename"),
  replace = require("gulp-replace"),
  htmlmin = require("gulp-htmlmin");
var browserSync = require("browser-sync").create();

var scsssource = ["./sass/*.scss", "./sass/!_*.scss"],
  scssdest = "./css",
  csssource = ["./css/*.css"],
  cssdest = "./dest/css",
  jssource = ["js/*.js"],
  jsdest = "./dest/js",
  imgsource = ["./images/**/*"],
  imgdest = "./dest/images",
  htmlsource = ["pages/*.html", "index.html"];

gulp.task("sass", function() {
  gulp
    .src(scsssource)
    .pipe(
      sass({
        style: "nested",
        lineNumbers: true
      })
    )
    //.pipe(autoprefixer({
    // browers:['> 5%']
    //}))
    .pipe(
      minifyCss({
        advanced: true,
        keepBreaks: true
      })
    )
    .pipe(gulp.dest(scssdest))
    .pipe(browserSync.stream());
});
// 压缩css
gulp.task("minifyCss", function() {
  gulp
    .src(csssource)
    //将图片url改为dest/css目录到dest/images的路径
    // .pipe(
    //   replace(/url\s?\(.*?images\/(.*?)['"]?\s*\)/g, 'url("../dest/images/$1")')
    // )
    .pipe(concat("tongbu.css"))
    .pipe(gulp.dest(cssdest))
    .pipe(
      rename({
        suffix: ".min"
      })
    )
    .on("error", function(e) {
      console.log(e);
      this.end();
    })
    .pipe(
      minifyCss({
        advanced: true,
        keepBreaks: true
      })
    )
    .on("error", function(e) {
      console.log(e);
      this.end();
    })
    .pipe(gulp.dest(cssdest))
    .on("error", function(e) {
      console.log(e);
      this.end();
    })
    .pipe(browserSync.stream());
});

//压缩，合并 js
gulp.task("minifyjs", function() {
  return (gulp
      .src(jssource) //需要操作的文件
      .pipe(concat("tongbu.js")) //合并所有js到main.js
      .on("error", function(e) {
        console.log(e);
        this.end();
      })
      .pipe(gulp.dest(jsdest)) //输出到文件夹
      .on("error", function(e) {
        console.log(e);
        this.end();
      })
      .pipe(
        rename({
          suffix: ".min"
        })
      ) //rename压缩后的文件名
      .on("error", function(e) {
        console.log(e);
        this.end();
      })
      // .pipe(uglify()) //压缩
      .pipe(
        uglify({
          mangle: false, //类型：Boolean 默认：true 是否修改变量名
          compress: true //类型：Boolean 默认：true 是否完全压缩
          // preserveComments: 'all' //保留所有注释
        })
      )
      .on("error", function(e) {
        console.log(e);
        this.end();
      })
      .pipe(gulp.dest(jsdest)) //输出
      .on("error", function(e) {
        console.log(e);
        this.end();
      })
      .pipe(browserSync.stream()) );
});

gulp.task("htmlmin", function() {
  gulp.src(htmlsource).pipe(browserSync.stream());
});

//将图片拷贝到目标目录
gulp.task("copyImages", function(done) {
  return gulp.src(imgsource).pipe(gulp.dest(imgdest));
});

// watch
gulp.task("watch", function() {
  browserSync.init({
    server: "./"
  });
  gulp.watch(scsssource, ["sass"]);
  gulp.watch(csssource, ["minifyCss"]);
  gulp.watch(jssource, ["minifyjs"]);
  gulp.watch(htmlsource, ["htmlmin"]);
});

// default
gulp.task("build", ["minifyCss", "minifyjs", "sass", "htmlmin"], function() {
  gulp.start("watch", "copyImages", "htmlmin");
});
