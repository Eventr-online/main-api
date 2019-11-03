
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // dummy event
      return knex('events').insert([
        { id: 1, event: "Anthony's Party", description: "The best party ever." }
      ]);
    });
};
