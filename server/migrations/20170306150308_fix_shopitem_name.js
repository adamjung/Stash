exports.up = function(knex, Promise) {
  return knex.schema.renameTable("shopItems", "shop_items");
};

exports.down = function(knex, Promise) {
  return knex.schema.renameTable("shop_items", "shopItems");
};
