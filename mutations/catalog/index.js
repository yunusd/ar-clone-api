const addCatalog = require('./addCatalog');
const editCatalog = require('./editCatalog');
const deleteCatalog = require('./deleteCatalog');

module.exports = {
  Mutation: {
    addCatalog,
    editCatalog,
    deleteCatalog,
  },
};