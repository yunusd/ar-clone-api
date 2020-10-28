const addOffer = require('./addOffer');
const editOffer = require('./editOffer');
const deleteOffer = require('./deleteOffer');

module.exports = {
  Mutation: {
    addOffer,
    editOffer,
    deleteOffer,
  },
};