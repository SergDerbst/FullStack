'use strict';

var bodyParser = require('body-parser'),
    express = require('express'),
    path = require('path'),
    app = express(),
    routes = require('./routes/index'),
    port = 3000,
    //MongoDbConnector = require('./modules/mongoDbConnector'),
    //mongoDb = new MongoDbConnector(app),
    init = function() {
        app.set('views', path.join(__dirname, 'views'));
        app.set('view engine', 'jade');
        app.use(bodyParser.urlencoded({ extended: true}));
        app.use(bodyParser.json());
        app.use(express.static(__dirname + '/public'));
        app.use('/', routes);
    };

init();
app.listen(port, function() {
    console.log('Your app is running...');
});