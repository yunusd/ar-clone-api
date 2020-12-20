module.exports = async (...args) => {
    const [, params, context, ] = args;
    const offer_contents = await context.models.Offer_Contents.findAll({
        where: {
            offerId: params.offerId
        }
    });
    return offer_contents;
};