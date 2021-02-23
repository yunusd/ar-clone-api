const deleteLang = require('../../helpers/deleteLanguageObject');
const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  try {
    let option = await context.models.QuestionOption.findByPk(args.id);

    const deletedQuestionOption = await context.models.QuestionOption.destroy({
      where: {
        id: args.id,
      }
    });
    option = JSON.parse(JSON.stringify(option, null, 4));

    await deleteLang({
      model: option,
      questionOptionId: option.id
    })
    return deletedQuestionOption ? option : new EmptyResultError("Option not found!");;
  } catch (error) {
    throw new Error(error);
  }
};