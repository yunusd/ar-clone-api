const models = require('../db/models');

module.exports = async function (args) {

    try {


        let typeList = ["name", "description", "question", "answer", "text"];
        var objectProp = Object.entries(args.model);
        objectProp.forEach(async function (prop) {
            if (typeList.includes(prop[0])) {              
                let lang = await models.Language.findOne({
                    where: {
                        type: prop[0],
                        catalogId: args.catalogId != null ? args.catalogId : null,
                        categoryId: args.categoryId != null ? args.categoryId : null,
                        faqId: args.faqId != null ? args.faqId : null,
                        questionId: args.categoryId != null ? args.questionId : null,
                        questionOptionId: args.categoryId != null ? args.questionOptionId : null,
                        cityId: args.cityId != null ? args.cityId : null,
                        stateId: args.stateId != null ? args.stateId : null,
                        countryId: args.countryId != null ? args.countryId : null,
                        requiredDocumentId: args.requiredDocumentId != null ? args.requiredDocumentId : null,
                    }
                });
                lang = JSON.parse(JSON.stringify(lang, null, 4));
                console.log(lang)
                if (lang) {
                    await models.Language.destroy({
                        where: {
                            id: lang.id
                        }
                    });
                }
            }
        });



    } catch (error) {
        console.log(error)
    }


};