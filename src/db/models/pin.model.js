import path from 'path';
import { Model } from 'objection';

function Pin() {
  Model.apply(this, arguments);
}

Model.extend(Pin);

Pin.tableName = 'Pins';

Pin.jsonSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    userId: { type: 'integer' },
    pin: { type: 'string' },
    timestamp: { type: 'integer' },
  }
}

Pin.relationMappings = {
  user: {
    relation: Model.BelongsToOneRelation,
    modelClass: path.join(__dirname, './user.model'),
    join: {
      from: 'Pins.userId',
      to: 'Users.id',
    },
  },
};

export default Pin;
