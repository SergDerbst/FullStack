'use strict';

var bodyParser = require('body-parser'),
    express = require('express'),
    path = require('path'),
    app = express(),
    router = express.Router(),
    port = 3000,
    //MongoDbConnector = require('./modules/mongoDbConnector'),
    //mongoDb = new MongoDbConnector(app),
    init = function() {
        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'jade');
        app.use(bodyParser.urlencoded({ extended: true}));
        app.use(bodyParser.json());
        app.use(express.static(__dirname + '/public'));
        app.use('/api', router);
        app.get('/', function(req, res) {
            res.render('index', {title: 'My Super App'});
        });
        app.get('/partials/:name', function(req, res) {
            res.render('partials' + req.params.name);
        });
    };

init();
app.listen(port, function() {
    console.log('Your app is running...');
});