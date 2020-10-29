const addState = require('./addState');
const editState = require('./editState');
const deleteState = require('./deleteState');

module.exports = {
  Mutation: {
    addState,
    editState,
    deleteState,
  },
};