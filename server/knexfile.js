const path = require('path');

// Update with your config settings.
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host : 'localhost',
      port : '5432',
      user : 'TheWoo',
      password : 'fashcashstash',
      database : 'stash_dev'
    },
    migrations: {
      directory: path.join(__dirname, '../migrations'),
      tableName: 'version'
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DATABASE_URL,
      database: 'heroku_stash_db',
      user:     'jm',
      password: 'jmcmb'
    },
    migrations: {
      directory: path.join(__dirname, '../migrations'),
    }
  }
};