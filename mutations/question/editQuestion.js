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

    const question = await context.models.Question.findByPk(args.id, {
      include: {
        model: context.models.QuestionOption,
        as: "options"
      },
    });












    args.type = args.options.length == 2 ? "trueFalse" : args.options.length > 2 && args.options.length < 5 ? "singleChoice" : "dropDown";
    const updateDquestion = await context.models.Question.update({
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

    updateDquestion[1].dataValues.options = [];
    for (let index = 0; index < args.options.length; index++) {
      const option = args.options[index];
      await editQuestionOptionValidation.validateAsync(option, {
        abortEarly: false
      });

      if (option.id == null) {
        const newOption = await context.models.QuestionOption.create({
          text: option.text,
          price: option.price,
          questionId: updateDquestion[1].id
        })
        updateDquestion.dataValues[1].options.push(newOption[1].dataValues)
      } else {
        if (!question.options.find(option)) {
          await context.models.QuestionOption.destroy({
            where: {
              id: args.id,
            }
          });
        }
        const updatedOption = await context.models.QuestionOption.update({
          text: option.text,
          price: option.price,
          questionId: updateDquestion[1].id,
        }, {
          where: {
            id: option.id
          },
          returning: true,
          plain: true
        });
        updateDquestion[1].dataValues.options.push(updatedOption[1].dataValues);
      }

    }

    return question[1].dataValues;
  } catch (error) {
    throw new EmptyResultError("Question not found!");
  }
};