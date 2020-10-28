const addCategory = require('./addCategory');
const editCategory = require('./editCategory');
const deleteCategory = require('./deleteCategory');

module.exports = {
  Mutation: {
    addCategory,
    editCategory,
    deleteCategory,
  },
};