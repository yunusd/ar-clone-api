
const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const question = await context.models.Question.findByPk(args.id);

    const deletedQuestion = await context.models.Question.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedQuestion ? question : new EmptyResultError("Question not found!");;
  } catch (error) {
    throw new Error(error);
  }
};