import path from 'path';
import { Model } from 'objection';

function User() {
  Model.apply(this, arguments);
}

Model.extend(User);

User.tableName = 'Users';

User.jsonSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    externalId: { type: 'string' },
  },
};

User.relationMappings = {
  pin: {
    relation: Model.BelongsToOneRelation,
    modelClass: path.join(__dirname, './pin.model'),
    join: {
      from: 'Users.id',
      to: 'Pins.userId',
    },
  }
};

export default User;
