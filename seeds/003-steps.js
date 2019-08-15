exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        { recipe_id: 1, steps: "Throw that meat on the grill" }
      ]);
    });
};
