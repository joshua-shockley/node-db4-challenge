exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable();
        })
        .createTable('quantities', tbl => {
            tbl.increments();
            tbl.string('measurement', 50).notNullable();
            tbl.float('quantity', 2).notNullable();

            tbl.integer('recipe_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            tbl.integer('ingredient_id')
                .unique()
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.string('name', 128).notNullable().unique();
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.integer('step_number').notNullable();
            tbl.text('steps').notNullable();

            tbl.integer('recipe_id')
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
        .dropTableIfExists('quantities');
};