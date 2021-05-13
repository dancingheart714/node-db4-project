exports.up = async function (knex) {
  await knex.schema
    .createTable('recipes', (tbl) => {
      tbl.increments('recipe_id');
      tbl.string('recipe_name').notNull().unique();
    })

    .createTable('ingredients', (tbl) => {
      tbl.increments('ingredient_id');
      tbl.string('ingredient_name').notNull();
      tbl
        .integer('recipe_id')
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('CASCADE');
    })

    .createTable('instructions', (tbl) => {
      tbl.increments('instruction_id');
      tbl.string('instruction').notNull().unique();
      tbl
        .integer('recipe_id')
        .references('recipe_id')
        .inTable('recipes')
        .onDelete('CASCADE');
    })

    .createTable('quantities', (tbl) => {
      tbl.increments('quantity_id');
      tbl.string('quantity').notNull();
      tbl
        .integer('recipe_id')
        .reference('recipe_id')
        .inTable('recipes')
        .onDelete('CASCADE');

      tbl
        .integer('ingredient_id')
        .reference('recipe_id')
        .inTable('ingredients')
        .onDelete('CASCADE');
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists('quantities')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
