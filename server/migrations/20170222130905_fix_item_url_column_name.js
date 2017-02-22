
exports.up = function(knex, Promise) {
  return knex.schema.table('items', function(t){
    t.renameColumn('url', 'link');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('items', function(t){
    t.renameColumn('link', 'url');
  });
};
