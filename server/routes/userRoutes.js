const User = require('../models/UserModel');

module.exports = function(app) {
  // post new user to user's table
  app.post('/users', function(req, res, next) {
    User
    .query()
    .insertAndFetch(req.body)
    .then(function (user) { res.send(user); })
    .catch(next);
  });

  // delete user from table, matching on id
  app.delete('/users/:id', function (req, res, next) {
    User
    .query()
    .deleteById(req.params.id)
    .then(function () { res.send({}); })
    .catch(next);
  });
}