const addAddress = require('./addAddress');
const editAddress = require('./editAddress');
const deleteAddress = require('./deleteAddress');

module.exports = {
  Mutation: {
    addAddress,
    editAddress,
    deleteAddress,
  },
};