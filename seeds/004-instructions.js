exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('instructions').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('instructions').insert([
                { step_number: 1, steps: 'get the bread out the bag, dude!', recipe_id: 2 },
                { step_number: 2, steps: 'slap your peanut butter on one slice of bread', recipe_id: 2 },
                { step_number: 3, steps: 'squish you jelly on the other slice', recipe_id: 2 },
                { step_number: 4, steps: 'splat those breads together and eat that thing!', recipe_id: 2 },
                { step_number: 1, steps: 'grab a big bowl fo this salad and get out and wash those little tomatoes, my fiend. then dump those into the bowl.', recipe_id: 3 },
                { step_number: 2, steps: 'wash and cut the lettuce and spinach into manageable size... dont go crazy now!', recipe_id: 3 },
                { step_number: 3, steps: 'open that can of olives and dump it in the bowl with the tomatoes and spinach and lettuce.', recipe_id: 3 },
                { step_number: 4, steps: 'grab that ceasar dressing and dump a happy amount on your salad.. eat them greens!', recipe_id: 3 },

            ]);
        });
};