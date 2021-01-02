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


module.exports = async (_, args, context) => {

  try {

    const findQuestion = await context.models.Question.findByPk(args.id, {
      include: {
        model: context.models.QuestionOption,
        as: "options"
      },
    });

    args.type = args.options.length == 2 ? "trueFalse" : args.options.length > 2 && args.options.length < 5 ? "singleChoice" : "dropDown";
    const updatedQuestion = await context.models.Question.update({
      ...args
    }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    // gelen options yok ise db içersindeki options silinmesi
    if (args.options.length < 1) {
      if (findQuestion.dataValues.options.length > 0) {
        for (let index = 0; index < findQuestion.dataValues.options.length; index++) {
          const element = findQuestion.dataValues.options[index];
          await context.models.QuestionOption.destroy({
            where: {
              id: element.dataValues.id
            }
          });
        }
      }
    }

    if (findQuestion.dataValues.options.length > 0) {
      if (args.options.length > 0) {
        let removeList = lodash.filter(findQuestion.dataValues.options, function (option) {
          return args.options.some(function (y) {
            return option.dataValues.id == y.id
          }) == true ? null : option;
        });
        let updateList = lodash.filter(args.options, function (option) {          
          if (option.id != null) {            
            return findQuestion.dataValues.options.some(function (x) {
              return x.dataValues.id == option.id
            })
          }
        });

        if (removeList.length > 0) {
          for (let index = 0; index < removeList.length; index++) {
            const element = removeList[index];
            await context.models.QuestionOption.destroy({
              where: {
                id: element.dataValues.id
              }
            });
          }
        }
        if (updateList.length > 0) {
          for (let index = 0; index < updateList.length; index++) {
            const element = updateList[index];
            await context.models.QuestionOption.update({
              ...element
            }, {
              where: {
                id: element.id
              },
              returning: true,
              plain: true
            });
          }
        }
      }
    }
    if (args.options.length > 0) {
      let inputOptions = lodash.filter(args.options, function (x) {
        return x.id == null;
      });
      if (inputOptions.length > 0) {
        for (let index = 0; index < inputOptions.length; index++) {
          let element = inputOptions[index];
          element.questionId = args.id;
          await context.models.QuestionOption.create({
            ...element
          });
        }
      }
    }

    const question = await context.models.Question.findByPk(args.id, {
      include: {
        model: context.models.QuestionOption,
        as: "options"
      },
    });

    return question.dataValues;

  } catch (error) {
    console.log(error)
    throw new EmptyResultError("Question not found!");
  }
};