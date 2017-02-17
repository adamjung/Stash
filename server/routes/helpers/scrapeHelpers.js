const mapImgsTextsToItems = function(images, descriptions) {
  if (images.length !== descriptions.length) {
    return 'null';
  }

  var result = [];
  for (let i = 0; i < images.length; i++) {
    result.push({'image': images[i].image, 
                 'link': descriptions[i].link,
                 'text': descriptions[i].text,
                 'brand': descriptions[i].brand,
                 'price': descriptions[i].price
                });
  }

  return result;
}

module.exports = {
  mapImgsTextsToItems: mapImgsTextsToItems,
}