

module.exports = async (...args) => {

    const [, params, context, ] = args;


    const userCount = await context.models.User.count();

    const usersTotalProfit = await context.models.Offer.sum("price",{
        where: {
            isWinnerOffer: true
        }
    });

    const usersTotalOffer = await context.models.Offer.count();
    const usersTotalService = await context.models.Service.count();

    const statistics = {
        userCount,
        usersTotalProfit,
        usersTotalService,
        usersTotalOffer
    }

    return statistics;

};