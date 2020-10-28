const getQuestion = require('./getQuestion');
const getQuestions = require('./getQuestions');
const getQuestionByCategoryId = require('./getQuestionByCategoryId');

module.exports = {
  Query: {
    getQuestion,
    getQuestions,
    getQuestionByCategoryId,
  },
};