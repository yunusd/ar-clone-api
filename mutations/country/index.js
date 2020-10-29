const addCountry = require('./addCountry');
const editCountry = require('./editCountry');
const deleteCountry = require('./deleteCountry');

module.exports = {
  Mutation: {
    addCountry,
    editCountry,
    deleteCountry,
  },
};