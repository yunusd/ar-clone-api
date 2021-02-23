const { EmptyResultError } = require('sequelize');
const editLanguage = require('../../helpers/editLanguageObject');

module.exports = async (_, args, context) => {
  await editQuestionOptionValidation.validateAsync(args, {abortEarly: false});

  try {
    let option = await context.models.QuestionOption.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    option = JSON.parse(JSON.stringify(option[1], null, 4));

    await editLanguage({
      model: option,
      questionOptionId : option.id,
    });

    return option;
  } catch (error) {
    throw new EmptyResultError("Option not found!");
  }
};