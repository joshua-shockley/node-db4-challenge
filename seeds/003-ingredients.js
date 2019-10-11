exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('ingredients').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('ingredients').insert([
                { name: 'bread' }, //1
                { name: 'peanut butter' }, //2
                { name: 'jelly' }, //3
                { name: 'chili beans' }, //4
                { name: 'ground beef' }, //5
                { name: 'cherry tomatoes' }, //6
                { name: 'onion' }, //7
                { name: 'garlic' }, //8
                { name: 'lettuce' }, //9
                { name: 'shredded cheese' }, //10
                { name: 'spinach' }, //11
                { name: 'broccoli' }, //12
                { name: 'olives' }, //13
                { name: 'artichoke' }, //14
                { name: 'ceasar dressing' } //15
            ]);
        });
};