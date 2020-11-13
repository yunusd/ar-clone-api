const {editQuestionOptionValidation} = require('../../validation/questionOption')
const { EmptyResultError } = require('sequelize');

module.exports = async (_, args, context) => {
  await editQuestionOptionValidation.validateAsync(args, {abortEarly: false});

  try {
    const option = await context.models.QuestionOption.update({ ...args }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    return option[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Option not found!");
  }
};