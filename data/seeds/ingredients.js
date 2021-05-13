exports.seed = async function (knex) {
  await knex('ingredients')([
    { name: 'ground beef', ingredient_id: 1 },
    { name: 'cheese', ingredient_id: 2 },
    { name: 'bun', ingredient_id: 3 },
    { name: 'mayonnaise', ingredient_id: 4 },
    { name: 'ketchup', ingredient_id: 5 },
    { name: 'mustard', ingredient_id: 6 },
    { name: 'pickes', ingredient_id: 7 },

    { name: 'milk', ingredient_id: 8 },
    { name: 'ice cream', ingredient_id: 9 },
    { name: 'chocolate syrup', ingredient_id: 10 },

    { name: 'potatoes', ingredient_id: 11 },
    { name: 'oil', ingredient_id: 12 },
    { name: 'salt', ingredient_id: 13 },
  ]);
};
