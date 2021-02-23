const {
  EmptyResultError
} = require('sequelize');
const lodash = require('lodash');
const editLanguage = require('../../helpers/editLanguageObject');
const deleteLang = require('../../helpers/deleteLanguageObject');
const createLanguage = require('../../helpers/generateLanguageObject');


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

    await editLanguage({
      model: JSON.parse(JSON.stringify(updatedCategory[1], null, 4)),
      categoryId : args.id,
    });

    // gelen requireddocument yok ise db içersindeki requireddocumentların silinmesi
    if (args.requiredDocuments == null || args.requiredDocuments.length < 1) {
      if (findCategory.dataValues.requiredDocuments.length > 0) {
        for (let index = 0; index < findCategory.dataValues.requiredDocuments.length; index++) {
          const element = findCategory.dataValues.requiredDocuments[index];
          console.log(element)
          await context.models.RequiredDocument.destroy({
            where: {
              id: element.dataValues.id
            }
          });
          await deleteLang({
            model: JSON.parse(JSON.stringify(element, null, 4)),
            requiredDocumentId: element.dataValues.id
          })
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
        let updateList = lodash.filter(args.requiredDocuments, function (y) {          
          if (y.id != null) {            
            return findCategory.dataValues.requiredDocuments.some(function (x) {
              return x.dataValues.id == y.id
            })
          }
        });

        if (removeList.length > 0) {
          for (let index = 0; index < removeList.length; index++) {
            const element = removeList[index];
            await context.models.RequiredDocument.destroy({
              where: {
                id: element.dataValues.id
              }
            });            
            await deleteLang({
              model: JSON.parse(JSON.stringify(element, null, 4)),
              requiredDocumentId: element.dataValues.id
            });
          }
        }
        if (updateList.length > 0) {
          for (let index = 0; index < updateList.length; index++) {
            const element = updateList[index];
            var updatedRequiredDocument =  await context.models.RequiredDocument.update({
              ...element
            }, {
              where: {
                id: element.id
              },
              returning: true,
              plain: true
            });
            await editLanguage({
              model: JSON.parse(JSON.stringify(updatedRequiredDocument[1], null, 4)),
              requiredDocumentId : element.dataValues.id,
            });
          }
        }
      }
    }

    if (args.requiredDocuments != null && args.requiredDocuments.length > 0) {
      let inputReqDoc = lodash.filter(args.requiredDocuments, function (x) {
        return x.id == null;
      });
      if (inputReqDoc.length > 0) {
        for (let index = 0; index < inputReqDoc.length; index++) {
          let element = inputReqDoc[index];
          element.categoryId = args.id;
          let reqDoc = await context.models.RequiredDocument.create({
            ...element
          });
          reqDoc = JSON.parse(JSON.stringify(reqDoc, null, 4)),
          await createLanguage({
            model: reqDoc,
            requiredDocumentId: reqDoc.id
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