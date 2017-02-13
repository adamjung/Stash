var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var itemsController = require('./items/itemsController.js');

var app = express();

app.use(express.static('../client/'));
app.use(express.static('../'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// connect to mongo database
mongoose.connect('mongodb://localhost/raxxx/');

app.get('/items/', itemsController.scrapeNewItems);
app.get('/closet/', itemsController.getCloset);
app.post('/closet/', itemsController.postCloset);

// start listening to requests on port 8000
app.listen(8080);
console.log('listening on port 8080');

// export our app for testing and flexibility, required by index.js
module.exports = app;