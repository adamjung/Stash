// const url = require('url');
// const dbot = require('../config/diffbot.js');
const request = require('request-promise');
const helpers = require('./helpers/scrapeHelpers');
const ShopItem = require('../models/ShopItemModel');

const newUrls = {
  haven : "http://shop.havenshop.ca/collections/new-arrivals",
  ssense : "https://www.ssense.com/en-us/men",
  mrPorter : "https://www.mrporter.com/en-us/mens/whats-new",
  antonioli : "https://www.antonioli.eu/en/US/men/section/new-arrivals",
  maasandstacks : "https://maasandstacks.com/collections/all"
};

module.exports = function(app) {
  app.get('/newItems/:site', function(req, res, next) {
    ShopItem
    .query()
    .select('shop_items.id',
            'shop_items.link',
            'shop_items.image',
            'shop_items.text',
            'shop_items.brand',
            'shop_items.price')
    .where('shop', '=', req.params.site)
    .then(function(items) {
      res.json(items);
    })
    .catch(function(error) {
      console.log('error', res.statusCode,error);
      res.sendStatus(res.statusCode);
    })
  });

  // scrape site and update entries in table
  app.post('/newItems/:site', function(req, res, next) {
    var dbk = process.env.DBOT_KEY; //|| dbot.DBK;
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
          var insert = helpers.mapShopTextToItems(items, site);
          // clear items in db
          ShopItem
          .query()
          .delete()
          .where('shop', '=', site)
          .then(function(deleted) {
            // post array of objects into db
            ShopItem
            .query()
            .insert(insert)
            .then(function(success) {
              res.send(success);
            })
          })
        }
      })
      .catch(function(error) {
        console.log('error', res.statusCode, error);
        res.sendStatus(res.statusCode);
      });
    }
  });
}