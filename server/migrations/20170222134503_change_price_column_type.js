
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('items', function(t){
      t.dropColumn('price');
    }),
    knex.schema.table('items', function(t){
      t.string('price');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('items', function(t){
      t.dropColumn('price');
    }),
    knex.schema.table('items', function(t){
      t.integer('price');
    })
  ]);
};
