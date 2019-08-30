exports.seed = function(knex, Promise) {
    return knex('recipes').insert([
        { recipe_name: 'Scrambled Eggs' },
        { recipe_name: 'PB&J Sandwich' },
        { recipe_name: 'Fried Eggs' },
        { recipe_name: 'Buttered Toast' },
        { recipe_name: 'Tuna Salad' }
    ]);
};