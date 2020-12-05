module.exports = async (...args) => {
    const [, params, context, ] = args;
    const document = await context.models.Dcoument.findByPk(params.id);
    return document;
};