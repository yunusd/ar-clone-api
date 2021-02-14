const {
    EmptyResultError
} = require('sequelize');
const {
    AccessDeniedError
} = require('sequelize');

module.exports = async (_, args, context) => {

    var user = await context.models.User.findByPk(args.id, {
        include: [{
            model: context.models.Offer,
            as: "offers"
        }]
    })

    user = JSON.parse(JSON.stringify(user, null, 4));

    if (args.status != null && user.status != args.status) {
        if (!context.user.user_roles.some(function (user_role) {
                return user_role.role.name == "admin"
            })) {
            throw new AccessDeniedError("User cannot change own Status!");
        }
    }

    try {
        let updatedUser = await context.models.User.update({
            ...args
        }, {
            where: {
                id: args.id
            },
            returning: true,
            plain: true
        });
        updatedUser[1].dataValues.profit = 0;
        if (user.offers.length > 0) {
            user.winnerOffers = lodash.filter(user.offers, function (offer) {
                if (offer.isWinnerOffer == true) {
                    updatedUser[1].dataValues.profit += offer.price
                    return offer;
                }
            })
        }
        return updatedUser[1].dataValues;
    } catch (error) {
        throw new EmptyResultError("User not found!");
    }
};