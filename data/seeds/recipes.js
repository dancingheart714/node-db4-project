exports.seed = async function (knex) {
  await knex('recipes').insert([
    { recipe_id: '1', recipe_name: 'Cheeseburger' },
    { recipe_id: '2', recipe_name: 'Milkshake' },
    { recipe_id: '3', recipe_name: 'French Fries' },
  ]);
};
