const Model = require('objection').Model;

class Item extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'items';
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/UserModel',
        join: {
          from: 'items.userId',
          to: 'users.id'
        }
      }
    }
  }
}

module.exports = Item;