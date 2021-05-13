exports.seed = async function (knex) {
  await knex('instructions')([
    {
      instruction_id: '1',
      instruction: 'shape the beef into 1/4 inch patties',
      recipe_id: '1',
    },
    {
      instruction_id: '2',
      instruction: 'place on grill and cook until no longer pink in center',
      recipe_id: '1',
    },
    { instruction_id: '3', instruction: 'place on bun', recipe_id: '1' },
    {
      instruction_id: '4',
      instruction: 'add mayonnaise, ketchup, mustard and pickles',
      recipe_id: '1',
    },

    {
      instruction_id: '5',
      instruction:
        'place milk and ice cream in a blender; blend till mixed and enjoy',
      recipe_id: '2',
    },

    {
      instruction_id: '6',
      instruction: 'peel potatoes and slice into uniform sticks',
      recipe_id: '3',
    },
    {
      instruction_id: '7',
      instruction: 'pour oil into a deep fryer or deep skillet',
      recipe_id: '3',
    },
    {
      instruction_id: '8',
      instruction:
        'using a thermometer to determine the temperature, heat the oil to 400 degrees',
      recipe_id: '3',
    },
    {
      instruction_id: '9',
      instruction:
        'place potatoes into oil and cook until crispy; remove and drain',
      recipe_id: '3',
    },
    {
      instruction_id: '10',
      instruction:
        'place fries in a paper bag, sprinkle with salt, shake bag to distribute salt and coat the fries evenly...enjoy!',
      recipe_id: '3',
    },
  ]);
};
