exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('quantities').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('quantities').insert([
                { measurement: 'slices', quantity: 2, recipe_id: 2, ingredient_id: 1 },
                { measurement: 'tablespoon', quantity: 1, recipe_id: 2, ingredient_id: 2 },
                { measurement: 'tablespoon', quantity: 1, recipe_id: 2, ingredient_id: 3 },
                { measurement: 'cup', quantity: 1, recipe_id: 3, ingredient_id: 6 },
                { measurement: 'head', quantity: 1, recipe_id: 3, ingredient_id: 9 },
                { measurement: 'cup', quantity: 1, recipe_id: 3, ingredient_id: 11 },
                { measurement: 'can', quantity: 1, recipe_id: 3, ingredient_id: 13 },
                { measurement: 'bottle', quantity: 1, recipe_id: 3, ingredient_id: 15 }

            ]);
        });
};