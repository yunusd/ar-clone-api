const addCity = require('./addCity');
const editCity = require('./editCity');
const deleteCity = require('./deleteCity');

module.exports = {
  Mutation: {
    addCity,
    editCity,
    deleteCity,
  },
};