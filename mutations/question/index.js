const addQuestion = require('./addQuestion');
const editQuestion = require('./editQuestion');
const deleteQuestion = require('./deleteQuestion');

module.exports = {
  Mutation: {
    addQuestion,
    editQuestion,
    deleteQuestion,
  },
};