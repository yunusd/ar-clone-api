const editLanguage = require('../../helpers/editLanguageObject');
const deleteLang = require('../../helpers/deleteLanguageObject');
const createLanguage = require('../../helpers/generateLanguageObject');

const {
  EmptyResultError
} = require('sequelize');
const lodash = require('lodash');


module.exports = async (_, args, context) => {

  try {

    let findQuestion = await context.models.Question.findByPk(args.id, {
      include: {
        model: context.models.QuestionOption,
        as: "options"
      },
    });
    if (!findQuestion) {
      throw new EmptyResultError("Question not found!");
    }
    findQuestion = JSON.parse(JSON.stringify(findQuestion, null, 4));

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
    var upQuestion = JSON.parse(JSON.stringify(updatedQuestion[1], null, 4));
    await editLanguage({
      model: upQuestion,
      questionId : upQuestion.id,
    });
    // gelen options yok ise db içersindeki options silinmesi
    if (args.options.length < 1) {
      if (findQuestion.options.length > 0) {
        for (let index = 0; index < findQuestion.options.length; index++) {
          const element = findQuestion.options[index];
          await context.models.QuestionOption.destroy({
            where: {
              id: element.id
            }
          });          
          await deleteLang({
            model: JSON.parse(JSON.stringify(element, null, 4)),
            questionOptionId: element.dataValues.id
          })
        }
      }
    }

    if (findQuestion.options.length > 0) {
      if (args.options.length > 0) {
        let removeList = lodash.filter(findQuestion.options, function (option) {
          return args.options.some(function (y) {
            return option.id == y.id
          }) == true ? null : option;
        });
        let updateList = lodash.filter(args.options, function (option) {          
          if (option.id != null) {            
            return findQuestion.options.some(function (x) {
              return x.id == option.id
            })
          }
        });

        if (removeList.length > 0) {
          for (let index = 0; index < removeList.length; index++) {
            const element = removeList[index];
            await context.models.QuestionOption.destroy({
              where: {
                id: element.id
              }
            });
            await deleteLang({
              model: JSON.parse(JSON.stringify(element, null, 4)),
              questionOptionId: element.dataValues.id
            })
          }
        }
        if (updateList.length > 0) {
          for (let index = 0; index < updateList.length; index++) {
            const element = updateList[index];
            var updateQuestionOption = await context.models.QuestionOption.update({
              ...element
            }, {
              where: {
                id: element.id
              },
              returning: true,
              plain: true
            });                    
            await editLanguage({
              model: JSON.parse(JSON.stringify(element, null, 4)),
              questionOptionId : element.dataValues.id,
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
          var createdOption = await context.models.QuestionOption.create({
            ...element
          });
          await createLanguage({
            model: JSON.parse(JSON.stringify(createdOption, null, 4)),
            questionOptionId: createdOption.id
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