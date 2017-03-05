const url = require('url');
// const dbot = require('../config/diffbot.js');
const request = require('request-promise');
const helpers = require('./helpers/scrapeHelpers');

const newUrls = {
  haven : "http://shop.havenshop.ca/collections/new-arrivals",
  ssense : "https://www.ssense.com/en-us/men",
  mrPorter : "https://www.mrporter.com/en-us/mens/whats-new",
  antonioli : "https://www.antonioli.eu/en/US/men/section/new-arrivals",
  maasandstacks : "https://maasandstacks.com/collections/all"
};

module.exports = function(app) {
  app.get('/newItems/:site', function(req, res, next) {
    var dbk = process.env.DBOT_KEY;
    var site = req.params.site;
    var siteUrl = newUrls[site];

    if (siteUrl === undefined) {
      return res.send(`${site}: is an unsupported/invalid website`);
    } else {
      var options = {
        uri: `https://api.diffbot.com/v3/${site}?token=${dbk}&url=${siteUrl}`,
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