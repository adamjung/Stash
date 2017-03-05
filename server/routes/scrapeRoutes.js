const url = require('url');
const dbot = require('../config/diffbot.js');
const newUrls = require('../config/newProductUrlHash.js');
const request = require('request-promise');
const helpers = require('./helpers/scrapeHelpers');

module.exports = function(app) {
  app.get('/newItems/:site', function(req, res, next) {
    var site = req.params.site;
    var siteUrl = newUrls[site];

    if (siteUrl === undefined) {
      return res.send(`${site}: is an unsupported/invalid website`);
    } else {
      var options = {
        uri: `https://api.diffbot.com/v3/${site}?token=${dbot.DBK}&url=${siteUrl}`,
        json: true // Automatically parse JSON string in response 
      };
      request.get(options)
      .then(function(body) {
        var imgs = body.objects[0].images;
        var texts = body.objects[0].descriptions;
        var items = helpers.mapImgsTextsToItems(imgs, texts);

        if (items === null) {
          return res.send(500);
        } else {
          res.json(items);
        }
      })
      .catch(function(error) {
        console.log('error', res.statusCode);
        res.send(res.statusCode);
      });
    }
  });
}