'use strict';

module.exports = {
    client: 'mysql',
    connection: {
        user: 'root',
        password: '',
        database: 'pingen'
    },
    pool: {
        min: 2,
        max: 10
    },
    migrations: {
        tableName: 'knex_migrations'
    }
};