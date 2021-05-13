exports.seed = async function (knex) {
  await knex('recipes').insert([
    { name: 'Cheeseburger' },
    { name: 'Milkshake' },
    { name: 'French Fries' },
  ]);
};
