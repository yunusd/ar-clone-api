const {
  EmptyResultError
} = require('sequelize');
const lodash = require('lodash');
const { func } = require('joi');

module.exports = async (_, args, context) => {
  try {
    const findCategory = await context.models.Category.findByPk(args.id, {
      include: [{
        model: context.models.RequiredDocument,
        as: "requiredDocuments"
      }, ]
    });
    if (!findCategory) {
      throw new EmptyResultError("Category not found!");
    }
    let updatedCategory = await context.models.Category.update({
      ...args
    }, {
      where: {
        id: args.id
      },
      returning: true,
      plain: true
    });
    // gelen requireddocument yok ise db içersindeki requireddocumentların silinmesi
    if (args.requiredDocuments.length < 1) {
      if (findCategory.dataValues.requiredDocuments.length > 0) {
        for (let index = 0; index < findCategory.dataValues.requiredDocuments.length; index++) {
          const element = findCategory.dataValues.requiredDocuments[index];
          console.log(element)
          await context.models.RequiredDocument.destroy(element);
        }
      }
    }


    if (findCategory.dataValues.requiredDocuments.length > 0) {
      if (args.requiredDocuments.length > 0) {       
         let removeList = lodash.filter(findCategory.dataValues.requiredDocuments, function (reqDoc) {          
            return args.requiredDocuments.some(function (y) {
             return reqDoc.dataValues.id == y.id
            }) == true ? null : reqDoc;
        });
        if (removeList.length > 0) {
          console.log("test")
          for (let index = 0; index < removeList.length; index++) {
            const element = removeList[index];
            await context.models.RequiredDocument.destroy({
              where: {
                id: element.dataValues.id
              }
            });
          }
        }
      }
    }

    if (args.requiredDocuments.length > 0) {
      let inputReqDoc = lodash.filter(args.requiredDocuments, function (x) {
        return x.id == null;
      });
      if (inputReqDoc.length > 0) {
        for (let index = 0; index < inputReqDoc.length; index++) {
          let element = inputReqDoc[index];
          element.categoryId = args.id;
          var test = await context.models.RequiredDocument.create({
            ...element
          });
        }
      }

    }
    const getCategory = await context.models.Category.findByPk(args.id, {
      include: [{
        model: context.models.RequiredDocument,
        as: "requiredDocuments"
      }, ]
    });

    return getCategory.dataValues;
  } catch (error) {
    console.log(error)
    throw new EmptyResultError("Category not found!");
  }
};