const express = require('express');
const app = express();
const db = require('./db.js');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const objection = require('objection');
const Model = objection.Model;

Model.knex(db);

app.set('port', 8080);

// serve static files and lib modules
app.use(express.static(path.join(__dirname, '../client/')));
app.use(express.static(path.join(__dirname, '../node_modules')));

// middle ware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
const scrapeRoutes = require('./routes/scrapeRoutes.js')(app);
// const closetRoutes = require('./routes/closetRoutes.js')(app);

// start listening to requests on port 8000
app.listen(app.get('port'), function() {
  console.log('listening on', app.get('port'));
});

module.exports = app;