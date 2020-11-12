const getQuestion = require('./getQuestion');
const getQuestions = require('./getQuestions');
const getQuestionsByCategoryId = require('./getQuestionsByCategoryId');

module.exports = {
  Query: {
    getQuestion,
    getQuestions,
    getQuestionsByCategoryId,
  },
};