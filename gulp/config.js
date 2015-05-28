//configuration of gulp tasks

var appDir = './app',
    distDir = './dist',
    nodeModulesDir = './node_modules',
    mainDir = '/main',
    publicDir = '/public',
    backend = {
        scriptsDir: mainDir
    },
    frontend = {
        imagesDir: mainDir + publicDir + '/images',
        publicDir: mainDir + publicDir,
        scriptsDir: mainDir + publicDir + '/js',
        stylesDir: mainDir + publicDir + '/css',
        viewsDir: mainDir + '/views'
    },
    nodeModules = {
        fontAwesomeFonts: '/font-awesome/fonts/**.*',
        fontAwesomeScss: '/font-awesome/scss/'
    };

module.exports = {
    browserSync: {
        server: {
            baseDir: distDir + frontend.publicDir
        },
        files: [frontend.publicDir + '/**', '!' + distDir + '/**.map']
    },
    browserify: {
        bundleName: 'app.js',
        dest: distDir + frontend.scriptsDir,
        entryPoint: appDir + frontend.scriptsDir + '/app.js'
    },
    icons: {
        src: nodeModulesDir + nodeModules.fontAwesomeFonts,
        dest: distDir + frontend.publicDir + '/fonts'
    },
    images: {
        src: appDir + frontend.imagesDir + '/**',
        dest: distDir + frontend.imagesDir
    },
    jshint: {
        src: [
            appDir + backend.scriptsDir + '/**/*.js',
        ]
    },
    scripts: {
        src: appDir + frontend.scriptsDir + '/**/*.js'
    },
    styles: {
        appSrc: appDir + frontend.stylesDir + '/application.scss',
        fontSrc: nodeModulesDir + nodeModules.fontAwesomeScss,
        cssDest: distDir + frontend.stylesDir,
        mapsDest: './maps'
    },
    views: {
        src: appDir + frontend.viewsDir + '/**/*.jade',
        dest: distDir + frontend.viewsDir
    },
    server: {
        run: {
            fileToRun: distDir + backend.scriptsDir + '/server.js',
            filesToWatch: distDir + backend.scriptsDir + '/**'
        },
        scripts: {
            src: [
                appDir + backend.scriptsDir + '/**/*.js',
                appDir + '!' + frontend.scriptsDir
            ],
            dest: distDir + backend.scriptsDir
        }
    }
};