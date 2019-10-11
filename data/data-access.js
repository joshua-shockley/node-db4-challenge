const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getARecipe,
    getShoppingList,
    getInstructions
}


function getRecipes() {
    return db('recipes');
}

function getARecipe(id) {
    return db('recipes').where({ id }).first()
}

function getShoppingList(recipeId) {
    return db('recipes as r')
        .where('r.id', recipeId)
        .join('quantities as q', 'r.id', '=', 'q.recipe_id')
        .join('ingredients as i', 'q.ingredient_id', '=', 'i.id')
        .select('r.name as recipe_Name', 'q.measurement', 'q.quantity as amount', 'i.name as ingredient', )

}

function getInstructions(recipeId) {
    return db('recipes as r')
        .where('r.id', recipeId)
        .join('instructions as i', 'r.id', '=', 'i.recipe_id')
        .select('r.name as making', 'i.step_number', 'i.steps')


} // in this instance since there are so many id's  put where just befor the join so the other id information doesn't conflict