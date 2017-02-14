const Model = require('objection').Model;

class Item extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'Item';
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: __dirname + '/User',
        join: {
          from: 'Item.userId',
          to: 'User.id'
        }
      }
    }
  }
}

module.exports = Item;