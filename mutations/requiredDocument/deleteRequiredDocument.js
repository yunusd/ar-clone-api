const {
    EmptyResultError
} = require('sequelize');
const deleteLang = require('../../helpers/deleteLanguageObject');

module.exports = async (_, args, context) => {
    try {
        let requiredDocument = await context.models.RequiredDocument.findByPk(args.id);

        const deletedRequiredDocument = await context.models.RequiredDocument.destroy({
            where: {
                id: args.id,
            }
        });

        requiredDocument = JSON.parse(JSON.stringify(requiredDocument, null, 4));

        await deleteLang({
          model: requiredDocument,
          requiredDocumentId: requiredDocument.id
        })
        return deletedRequiredDocument ? requiredDocument : new EmptyResultError("Required Document not found!");
    } catch (error) {
        throw new Error(error);
    }
};