//configuration of gulp tasks

var dirs = {
        appDir: './app',
        distDir: './dist',
        frontend: {
            imagesDir: '/main/public/images',
            libDir: '/main/public/lib',
            publicDir: '/main/public',
            scriptsDir: '/main/public/js',
            stylesDir: '/main/public/css',
            viewsDir: '/main/views'
        },
        backend: {
            scriptsDir: '/main'
        }
    };

module.exports = {
    browserSync: {
        server: {
            baseDir: dirs.distDir + dirs.frontend.publicDir
        },
        files: [dirs.publicDir + '/**', '!' + dirs.distDir + '/**.map']
    },
    browserify: {
        bundleName: 'app.js',
        dest: dirs.distDir + dirs.frontend.scriptsDir,
        entryPoint: dirs.appDir + dirs.frontend.scriptsDir + '/app.js'
    },
    images: {
        src: dirs.appDir + dirs.frontend.imagesDir + '/**',
        dest: dirs.distDir + dirs.frontend.imagesDir
    },
    jshint: {
        src: [
            dirs.appDir + dirs.backend.scriptsDir + '/**/*.js',
            '!' + dirs.appDir + dirs.frontend.libDir + '/**/*.js'
        ]
    },
    styles: {
        src: dirs.appDir + dirs.frontend.stylesDir + '/**/*.{sass, scss}',
        dest: dirs.distDir + dirs.frontend.stylesDir
    },
    views: {
        src: dirs.appDir + dirs.frontend.viewsDir + '/**/*.jade',
        dest: dirs.distDir + dirs.frontend.viewsDir
    },
    server: {
        run: {
            fileToRun: dirs.distDir + dirs.backend.scriptsDir + '/server.js',
            filesToWatch: dirs.distDir + dirs.backend.scriptsDir + '/**'
        },
        scripts: {
            src: [
                dirs.appDir + dirs.backend.scriptsDir + '/**/*.js',
                dirs.appDir + '!' + dirs.frontend.scriptsDir
            ],
            dest: dirs.distDir + dirs.backend.scriptsDir
        }
    }
};