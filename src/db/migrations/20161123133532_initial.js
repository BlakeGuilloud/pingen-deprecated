
exports.up = function(knex, Promise) {
  return Promise.resolve(
    knex.schema
    .createTableIfNotExists('Users', (table) => {
      table.increments();
      table.string('externalId');
    }).createTableIfNotExists('Pins', (table) => {
      table.increments();
      table.string('userId');
      table.string('pin');
      table.bigInteger('timestamp');
    })
  )
};

exports.down = function(knex, Promise) {
  return Promise.resolve(
    knex.schema.dropTable('Users')
  ).then(() => knex.schema.dropTable('Pins'))
  .catch((err) => console.log(err));
};
