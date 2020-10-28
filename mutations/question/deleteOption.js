
const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    const option = await context.models.QuestionOption.findByPk(args.id);

    const deletedQuestionOption = await context.models.QuestionOption.destroy({
      where: {
        id: args.id,
      }
    });
    return deletedQuestionOption ? option : new EmptyResultError("Option not found!");;
  } catch (error) {
    throw new Error(error);
  }
};