const config = require('./knexfile.js');  
const env = 'development';  
const db = require('knex')(config[env]);

module.exports = db;

// db.migrate.latest([config]); 