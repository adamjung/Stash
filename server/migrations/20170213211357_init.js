exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("items", function (table) {
      table.increments('id').primary(); // integer id
      table.string('url');
      table.string('image');
      table.string('text');
      table.string('brand');
      table.integer('price');
      table.integer('userId').unsigned().references('id').inTable('users');
    }),

    knex.schema.createTable("users", function (table) {
      table.increments('id').primary();
      table.string('username');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable("items"),
    knex.schema.dropTable("users")
  ]);
};
