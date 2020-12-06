module.exports = async (...args) => {
    const [, params, context, ] = args;
    const requiredDocuments = await context.models.RequiredDocument.findAll({
        where: {
            categoryId: params.categoryId
        }
    });
    return requiredDocuments;
};