exports.seed = async function (knex) {
  await knex('ingredients')([
    { ingredient_name: 'ground beef', ingredient_id: 1 },
    { ingredient_name: 'cheese', ingredient_id: 2 },
    { ingredient_name: 'bun', ingredient_id: 3 },
    { ingredient_name: 'mayonnaise', ingredient_id: 4 },
    { ingredient_name: 'ketchup', ingredient_id: 5 },
    { ingredient_name: 'mustard', ingredient_id: 6 },
    { ingredient_name: 'pickes', ingredient_id: 7 },

    { ingredient_name: 'milk', ingredient_id: 8 },
    { ingredient_name: 'ice cream', ingredient_id: 9 },
    { ingredient_name: 'chocolate syrup', ingredient_id: 10 },

    { ingredient_name: 'potatoes', ingredient_id: 11 },
    { ingredient_name: 'oil', ingredient_id: 12 },
    { ingredient_name: 'salt', ingredient_id: 13 },
  ]);
};
