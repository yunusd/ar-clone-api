
const { EmptyResultError } = require('sequelize');
const deleteLang = require('../../helpers/deleteLanguageObject');

module.exports = async (_, args, context) => {
  try {
    let question = await context.models.Question.findByPk(args.id);

    const deletedQuestion = await context.models.Question.destroy({
      where: {
        id: args.id,
      }
    });
    question = JSON.parse(JSON.stringify(question, null, 4));

    await deleteLang({
      model: question,
      questionId: question.id
    })
    return deletedQuestion ? question : new EmptyResultError("Question not found!");;
  } catch (error) {
    throw new Error(error);
  }
};