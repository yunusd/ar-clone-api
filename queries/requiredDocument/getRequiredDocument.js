module.exports = async (...args) => {
    const [, params, context, ] = args;
    const requiredDocument = await context.models.RequiredDocument.findByPk(params.id);
    return requiredDocument;
};