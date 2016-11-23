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
    pin: { type: 'string' },
    timestamp: { type: 'integer' },
  }
}

export default User;
