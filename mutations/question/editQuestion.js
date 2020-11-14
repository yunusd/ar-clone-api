const {
  editQuestionValidation
} = require('../../validation/question')
const {
  editQuestionOptionValidation
} = require('../../validation/questionOption')
const {
  EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
  await editQuestionValidation.validateAsync(args, {
    abortEarly: false
  });
  try {
    args.type = args.options.length == 2 ? "trueFalse" : args.options.length > 2 && args.options.length < 5 ? "singleChoice" : "dropDown";
    const question = await context.models.Question.update({
      name: args.name,
      description: args.description,
      type: args.type,
      categoryId: args.categoryId
    }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });

    question[1].dataValues.options = [];
    for (let index = 0; index < args.options.length; index++) {
      const option = args.options[index];
      await editQuestionOptionValidation.validateAsync(option, {
        abortEarly: false
      });
      if (option.id == null) {
        const newOption = await context.models.QuestionOption.create({
          text: option.text,
          price: option.price,
          questionId: question[1].id
        })
        question.dataValues[1].options.push(newOption[1].dataValues)
      } else {
        const updatedOption = await context.models.QuestionOption.update({
          text: option.text,
          price: option.price,
          questionId: question[1].id,
        }, {
          where: {
            id: option.id
          },
          returning: true,
          plain: true
        });
        question[1].dataValues.options.push(updatedOption[1].dataValues);
      }

    }

    return question[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Question not found!");
  }
};