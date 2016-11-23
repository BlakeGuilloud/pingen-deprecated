
exports.up = function(knex, Promise) {
  return Promise.resolve(
    knex.schema.createTableIfNotExists('Users', (table) => {
      table.increments();
      table.string('externalId');
    })
  )
};

exports.down = function(knex, Promise) {
  return Promise.resolve(
    knex.schema.dropTable('Users')
  )
  .catch((err) => console.log(err));
};
