const Model = require('objection').Model;

class User extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'User';
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      owner: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/Item',
        join: {
          from: 'User.id',
          to: 'Item.userId'
        }
      }
    }
  }
}

module.exports = User;