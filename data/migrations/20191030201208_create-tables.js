exports.up = function(knex) {
    return (knex.schema
        .createTable('users', tbl => {
            tbl.increments('id');
            tbl.string('firstname', 128).notNullable();
            tbl.string('lastname', 128).notNullable();
            tbl.string('email', 128).notNullable().unique();
            tbl.string('password', 128).notNullable();
        })
        .createTable('events', tbl => {
            tbl.increments('id');
            tbl.string('event', 128).notNullable();
            tbl.string('description', 700).notNullable();
        })
)};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('users')
      .dropTableIfExists('events')
  };
