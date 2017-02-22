const Item = require('../models/ItemModel');

module.exports = function(app) {
  // for a user, get all their items
  app.get('/items/:userId', function(req, res, next) {
    Item
    .query()
    .where('userId', '=', req.params.userId)
    .skipUndefined()
    .then(function(items) { res.send(items); })
    .catch(next);
  });

  // post an item in a user's closet
  app.post('/items', function(req, res, next) {
    Item
    .query()
    .insertAndFetch(req.body)
    .then(function(item) { res.send(item); })
    .catch(next);
  });

  // remove an item in a user's closet
  app.delete('/items/:itemId', function (req, res, next) {
    User
    .query()
    .deleteById(req.params.itemId)
    .then(function () { res.send({}); })
    .catch(next);
  });
}