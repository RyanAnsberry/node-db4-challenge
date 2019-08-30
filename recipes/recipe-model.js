const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
};

function find() {
    return db('recipes');
}
  
function findById(id) {
    return db('recipes').where({ id }).first();
}

function add(recipe) {
    return db('recipes').insert(recipe)
    .then(ids => {
        return findById(ids[0]);
    });
}

function update(changes, id) {
    return db('recipes')
    .where({ id })
    .update(changes)
    .then(count => {
        if (count > 0) {
            return findById(id)
            .then(recipe => {
                return recipe;
            });
        } else {
            return null;
        }
    })
}

function remove(id) {
    return findById(id)
    .then(recipe => {
        return db('recipes').where({ id }).del()
        .then(count => {
            if (count > 0) {
                 return recipe;
            } else {
                return null;
            }
        })
    })
}