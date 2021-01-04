const {
    AccessDeniedError
} = require('sequelize');

module.exports = async (_, args, context) => {


    const user = context.user;

    let isAnyWinnerOffer = await context.models.Offer.findAll({
        where: {
            userId: user.id,
            isWinnerOffer: true
        }
    });
    isAnyWinnerOffer = JSON.parse(JSON.stringify(isAnyWinnerOffer, null, 4));

    if (isAnyWinnerOffer.length < 1) {
        throw AccessDeniedError("Current user cannot comment !")
    }

    const comment = await context.models.Comment.create({
        ...args,
    });
    return comment;
};