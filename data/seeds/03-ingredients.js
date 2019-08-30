exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
        { ingredient_name: 'eggs' },
        { ingredient_name: 'butter' },
        { ingredient_name: 'peanut butter' },
        { ingredient_name: 'jelly' },
        { ingredient_name: 'can of tuna' },
        { ingredient_name: 'mayonaise' },
        { ingredient_name: 'paprika' },
        { ingredient_name: 'bread' },
        { ingredient_name: 'lemon' },
        { ingredient_name: 'celery' }
    ]);
};