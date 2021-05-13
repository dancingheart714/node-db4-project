const db = require('../data/db-config');

const getRecipesById = (recipes_id) => {
  return db('recipes')
    .select('*')
    .join('ingredients as i', 'q.ingredient_id', 'i.id')
    .where('q.recipes_id', recipes_id)
    .select('i.recipe_id', 'q.quantity', 'i.ingredient_name')
    .where('recipe_id', recipe_id)
    .select('*');
};

module.exports = { getRecipesById };
