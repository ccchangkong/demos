var gulp = require('gulp');

// 引入组件
var less = require('gulp-less'),            // less
    minifycss = require('gulp-minify-css'), // CSS压缩
    uglify = require('gulp-uglify'),        // js压缩
    concat = require('gulp-concat'),        // 合并文件
    rename = require('gulp-rename'),        // 重命名
    git = require('gulp-git'),              //git
    clean = require('gulp-clean');          //清空文件夹

// less解析
gulp.task('build-less', function(){

  gulp.src('./javis/static/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('./javis/static/build/css/'))
});

// 合并、压缩、重命名css
gulp.task('stylesheets',['build-less'], function() {
    // 注意这里通过数组的方式写入两个地址,仔细看第一个地址是css目录下的全部css文件,第二个地址是css目录下的areaMap.css文件,但是它前面加了!,这个和.gitignore的写法类似,就是排除掉这个文件.
  gulp.src(['./src/css/*.css','!./src/css/areaMap.css'])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('./dist/css'));
});


gulp.task('csss', function() {
  gulp.src(['./src/css/*.css','!./src/css/areaMap.css'])
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('./dist/css'));
});

// 合并，压缩js文件
gulp.task('jss', function() {
  gulp.src('./src/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

// 清空图片、样式、js
gulp.task('clean', function() {
  return gulp.src(['./dist/css/all.css','./dist/css/all.min.css'], {read: false})
    .pipe(clean({force: true}));
});

// 将bower的库文件对应到指定位置
gulp.task('carry',function(){






  gulp.src('./src/brower/*')
      .pipe(gulp.dest('./dist/brower/'));

  gulp.src('./src/img/*')
      .pipe(gulp.dest('./dist/img/'));      

});

// 定义develop任务在日常开发中使用
gulp.task('develop',function(){
  gulp.run('carry','csss','jss');

  gulp.watch('./javis/static/less/*.less', ['build-less']);
});

// 定义一个prod任务作为发布或者运行时使用
gulp.task('prod',function(){
  gulp.run('carry','csss','jss');

  // 监听.less文件,一旦有变化,立刻调用build-less任务执行
  gulp.watch('./src/less/*.less', ['build-less']);
});

// gulp命令默认启动的就是default认为,这里将clean任务作为依赖,也就是先执行一次clean任务,流程再继续.
gulp.task('default',['clean'], function() {
  gulp.run('develop');
});