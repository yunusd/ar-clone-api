module.exports = async (...args) => {
    const [, params, context, ] = args;
    const documents = await context.models.Document.findAll({
        where: {
            user_categoryId: params.user_categoryId
        }
    });
    return documents;
};