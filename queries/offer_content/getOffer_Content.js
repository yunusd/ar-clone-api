module.exports = async (...args) => {
    const [, params, context, ] = args;
    const offer_content = await context.models.Offer_Content.findByPk(params.id);
    return offer_content;
};