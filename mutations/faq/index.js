const addFaq = require('./addFaq');
const editFaq = require('./editFaq');
const deleteFaq = require('./deleteFaq');

module.exports = {
  Mutation: {
    addFaq,
    editFaq,
    deleteFaq,
  },
};