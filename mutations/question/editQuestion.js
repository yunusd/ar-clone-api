const {
  editQuestionValidation
} = require('../../validation/question')
const {
  editQuestionOptionValidation
} = require('../../validation/questionOption')
const {
  EmptyResultError
} = require('sequelize');
const lodash = require('lodash');

//TODO: hatalar var bakılacak (cevapları güncelleme kontrol edilecek.)

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
    const updatedQuestion = await context.models.Question.update({
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


    updatedQuestion[1].dataValues.options = [];

    for (let index = 0; index < args.options.length; index++) {
      const inputOption = args.options[index];
      await editQuestionOptionValidation.validateAsync(inputOption, {
        abortEarly: false
      });
      if (inputOption.id == null) {
        const newOption = await context.models.QuestionOption.create({
          text: inputOption.text,
          price: inputOption.price,
          questionId: updatedQuestion[1].dataValues.id
        })
        updatedQuestion[1].dataValues.options.push(newOption.dataValues[1])
      } else {
        const updatedOption = await context.models.QuestionOption.update({
          text: inputOption.text,
          price: inputOption.price,
          questionId: updatedQuestion[1].dataValues.id,
        }, {
          where: {
            id: inputOption.id
          },
          returning: true,
          plain: true
        });
        updatedQuestion[1].dataValues.options.push(updatedOption[1].dataValues);
      }
    }

    for (let index = 0; index < question.options.length; index++) {
      const haveOption = question.options[index];
      const anyRemoveOption = lodash.find(args.options, x => x.id == haveOption.id) 
      if (anyRemoveOption == null) {
        const deletedOption = await context.models.QuestionOption.destroy({
          where: {
            id: haveOption.id,
          }
        });
      }

    }


    return updatedQuestion[1].dataValues;
  } catch (error) {
    console.log(error)
    throw new EmptyResultError("Question not found!");
  }
};