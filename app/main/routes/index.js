'use strict';

var express = require('express'),
    router = express.Router(),
    apiCmsEditor = require('./api/cms/editor');

//home page
router.get('/', function(req, res) {
    res.render('index', {title: 'My Super App'});
});

//partials
router.get('/partials/*', function(req, res) {
    console.log(req.originalUrl);
    res.render(req.originalUrl.substring(1));
});

//api
router.use('/api', router);
apiCmsEditor(router);

module.exports = router;