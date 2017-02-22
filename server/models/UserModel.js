const Model = require('objection').Model;

class User extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'users';
  }

  // This object defines the relations to other models.
  static get relationMappings() {
    return {
      owner: {
        relation: Model.HasManyRelation,
        modelClass: __dirname + '/ItemModel',
        join: {
          from: 'users.id',
          to: 'items.userId'
        }
      }
    }
  }
}

module.exports = User;