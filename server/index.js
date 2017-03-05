const express = require('express');
const app = express();
const db = require('./db.js');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const objection = require('objection');
const Model = objection.Model;

const favicon = require('serve-favicon');

Model.knex(db);

app.set('port', process.env.PORT || 8080);
app.use(favicon(path.join(__dirname,'public','images','favicon.ico')));
app.use(express.static(path.join(__dirname, 'public/images/')));

// serve static files and lib modules
app.use(express.static(path.join(__dirname, '../client/')));
app.use(express.static(path.join(__dirname, '../node_modules')));

// middle ware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(function (err, req, res, next) {
  if (err) {
    res.status(err.statusCode || err.status || 500).send(err.data || err.message || {});
  } else {
    next();
  }
});

// routes
const userRoutes = require('./routes/userRoutes.js')(app);
const scrapeRoutes = require('./routes/scrapeRoutes.js')(app);
const closetRoutes = require('./routes/closetRoutes.js')(app);

// start listening to requests on port
app.listen(app.get('port'), function() {
  console.log('listening on', app.get('port'));
});

module.exports = app;