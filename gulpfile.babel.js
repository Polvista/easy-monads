import gulp from 'gulp';
import {rollup} from 'rollup';
import babel from 'rollup-plugin-babel';

gulp.task('default', ['build', 'copy']);

gulp.task('build', () => {
    return rollup({
        entry: 'index.js',
        plugins: [
            babel({
                babelrc: false,
                "presets":[
                    [ "es2015", { "modules": false } ]
                ],
                "plugins": ["external-helpers"]
            })
        ]
    }).then(bundle => bundle.write({
        format: 'es',
        dest: 'build/index.js'
    }));
});

gulp.task('copy', () => {
    gulp.src(['index.d.ts', 'package.json', 'LICENSE', 'README.md'])
        .pipe(gulp.dest('build'));
});