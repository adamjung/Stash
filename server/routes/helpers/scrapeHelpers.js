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

const mapShopTextToItems = function(items, shop) {
  var result = [];
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    result.push({
      'image': item.image,
      'link': item.link,
      'text': item.text,
      'brand': item.brand,
      'price': item.price,
      'shop': shop
    });
  }
  return result;
}

module.exports = {
  mapImgsTextsToItems: mapImgsTextsToItems,
  mapShopTextToItems: mapShopTextToItems,
}