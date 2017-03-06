const Model = require('objection').Model;

class ShopItem extends Model {
  // Table name is the only required property.
  static get tableName() {
    return "shop_items";
  }
}

module.exports = ShopItem;