exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("shopItems", function (table) {
      table.increments('id').primary(); // integer id
      table.string('url');
      table.string('shop');
      table.string('image');
      table.string('text');
      table.string('brand');
      table.string('price');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("shopItems"),
  ]);
};
