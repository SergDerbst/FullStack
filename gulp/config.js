//configuration of gulp tasks

var dirs = {
        appDir: './app',
        distDir: './dist',
        frontend: {
            imagesDir: '/main/public/images',
            libDir: '/main/public/lib',
            scriptsDir: '/main/public/js',
            stylesDir: '/main/public/css',
            viewsDir: '/views'
        },
        backend: {
            scriptsDir: '/main'
        }
    };

module.exports = {
    //listening port for browsersync
    serverport: 5000,
    frontend: {
        browserSync: {
            server: {
                baseDir: [dirs.distDir, dirs.appDir]
            },
            files: [dirs.distDir + '/**', '!' + dirs.distDir + '/**.map']
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
        libs: {
            src: dirs.appDir + dirs.frontend.libDir + '/**/*.js',
            dest: dirs.distDir + dirs.frontend.libDir
        },
        styles: {
            src: dirs.appDir + dirs.frontend.stylesDir + '/**/*.{sass, scss}',
            dest: dirs.distDir + dirs.frontend.stylesDir
        },
        views: {
            src: dirs.appDir + dirs.frontend.viewsDir + '**/*.jade',
            dest: dirs.distDir + dirs.frontend.viewsDir
        }
    },
    backend: {
        run: {
            file: 'server.js'
        },
        scripts: {
            src: dirs.appDir + dirs.backend.scriptsDir + '**/*.js',
            dest: dirs.distDir + dirs.backend.scriptsDir
        }
    }
};