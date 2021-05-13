exports.seed = async function (knex) {
  await knex('quantities')([
    {
      quantity_id: '1',
      quantity: '5',
      ingredient_id: '1',
      instruction_id: '1',
    },
    {
      quantity_id: '2',
      quantity: '5',
      ingredient_id: '2',
      instruction_id: '3',
    },
    {
      quantity_id: '3',
      quantity: '5',
      ingredient_id: '3',
      instruction_id: '3',
    },
    {
      quantity_id: '4',
      quantity: '5',
      ingredient_id: '4',
      instruction_id: '4',
    },
    {
      quantity_id: '5',
      quantity: '5',
      ingredient_id: '5',
      instruction_id: '4',
    },
    {
      quantity_id: '6',
      quantity: '5',
      ingredient_id: '6',
      instruction_id: '4',
    },
    {
      quantity_id: '7',
      quantity: '5',
      ingredient_id: '7',
      instruction_id: '4',
    },

    {
      quantity_id: '8',
      quantity: '5',
      ingredient_id: '8',
      instruction_id: '5',
    },
    {
      quantity_id: '9',
      quantity: '5',
      ingredient_id: '9',
      instruction_id: '5',
    },
    {
      quantity_id: '10',
      quantity: '5',
      ingredient_id: '10',
      instruction_id: '5',
    },

    {
      quantity_id: '11',
      quantity: '5',
      ingredient_id: '11',
      instruction_id: '6',
    },
    {
      quantity_id: '12',
      quantity: '5',
      ingredient_id: '12',
      instruction_id: '7',
    },
    {
      quantity_id: '13',
      quantity: '5',
      ingredient_id: '13',
      instruction_id: '8',
    },
  ]);
};
