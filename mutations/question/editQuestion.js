const {editQuestionValidation} = require('../../validation/question')

module.exports = async (_, args, context) => {
  await editQuestionValidation.validateAsync(args, {abortEarly: false});
  try {
    args.type = args.options.length == 2 ? "trueFalse" : args.options.length > 2 && args.options.length < 5 ? "singleChoice" : "dropDown";
    const question = await context.models.Question.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return question[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Question not found!");
  }
};