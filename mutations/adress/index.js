const addAdress = require('./addAdress');
const editAdress = require('./editAdress');
const deleteAdress = require('./deleteAdress');

module.exports = {
  Mutation: {
    addAdress,
    editAdress,
    deleteAdress,
  },
};