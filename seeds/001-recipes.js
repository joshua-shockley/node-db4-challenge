exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('recipes').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('recipes').insert([
                { name: 'chili' }, //1
                { name: 'peanut butter and jelly' }, //2
                { name: 'salad' } //3
            ]);
        });
};