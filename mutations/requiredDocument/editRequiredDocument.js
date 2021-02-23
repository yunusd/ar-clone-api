const {
    EmptyResultError
} = require('sequelize');
const editLanguage = require('../../helpers/editLanguageObject');

module.exports = async (_, args, context) => {
    try {
        let requiredDocument = await context.models.RequiredDocument.update({
            ...args
        }, {
            where: {
                id: args.id
            },
            returning: true,
            plain: true
        });
        requiredDocument = JSON.parse(JSON.stringify(requiredDocument[1], null, 4));

        await editLanguage({
          model: requiredDocument,
          requiredDocumentId : requiredDocument.id,
        });
        return requiredDocument;
    } catch (error) {
        throw new EmptyResultError("Required Document not found!");
    }
};