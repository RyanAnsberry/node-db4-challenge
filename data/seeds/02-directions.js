exports.seed = function(knex, Promise) {
    return knex('directions').insert([
        { directions: '1. Break Eggs into bowl. \n 2. Scramble with wisk or fork. \n 3. Oil pan. \n 4. Add eggs to pan and stir frequently. \n 5. Cook to desired doneness.', recipe_id: 1 },
        { directions: '1. Spread Peanutbutter on one slice of bread. \n 2. Spread jelly on the another piece. \n 3. Sandwich both pieces together. \n 4. Enjoy.', recipe_id: 2 },
        { directions: '1. Heat nonstick pan on med-high \n 2. Add butter to pan. \n 3. Break eggs into pan. \n 4. Reduce heat and cover once egg whites are no longer clear. \n 5. Simmer until done.', recipe_id: 3 },
        { directions: '1. Insert bread into toaster. \n 2. Toast bread. \n 3. Once bread is toasted, spread soften butter onto surface.', recipe_id: 4 },
        { directions: '1. Open and drain a can of tuna. \n 2. Combine tuna, mayonaise, celery, lemon juice, and paprika in a bowl. \n 3. Eat as is or spread on bread.', recipe_id: 5 },
    ]);
};