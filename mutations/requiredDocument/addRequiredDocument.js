const createLanguage = require('../../helpers/generateLanguageObject');

module.exports = async (_, args, context) => {

    let requiredDocument = await context.models.RequiredDocument.create({
        ...args
    });

    requiredDocument = JSON.parse(JSON.stringify(requiredDocument, null, 4));

    await createLanguage({
        model: requiredDocument,
        requiredDocumentId: requiredDocument.id
    });

    return requiredDocument;
};