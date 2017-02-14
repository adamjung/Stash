const url = require('url');
const dbot = require('../../config/diffbot.js');
const newUrls = require('../../config/newProductUrlHash.js');
const request = require('request-promise');

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
        console.log('body is', body);
        res.json(body);
      })
      .catch(function(error) {
        console.log('error', response.statusCode);
        res.send(response.statusCode);
      });
    }
  });
}