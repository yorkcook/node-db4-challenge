exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("quantity")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("quantity").insert([
        { recipe_id: 1, quantity: "10 pounds", ingredient_id: 1 }
      ]);
    });
};
