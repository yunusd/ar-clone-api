const {
    required
} = require("joi");
const user = require("../../db/models/user");

const lodash = require("lodash");

module.exports = async (...args) => {
    const [, params, context, ] = args;
    let user = await context.models.User.findByPk(context.user.id, {
        include: [{
                model: context.models.Address,
                as: "address"
            },
            {
                model: context.models.Catalog,
                as: "userServiceCatalog"
            },
            {
                model: context.models.User_Category,
                as: "userServiceCategories",
                include: [{
                        model: context.models.Status,
                        as: "status"
                    },
                    {
                        model: context.models.Document,
                        as: "documents"
                    }
                ]
            },
            {
                model: context.models.Status,
                as: "status"
            },
            {
                model: context.models.User_Role,
                as: "user_roles",
                include: [{
                    model: context.models.Role,
                    as: "role"
                }]
            },
            {
                model: context.models.Offer,
                as: "offers",
            }
        ]
    }, );
    user = JSON.parse(JSON.stringify(user, null, 4));

    if (user.offers.length > 0) {
        user.winnerOffers = lodash.filter(user.offers, function (offer) {
            return offer.isWinnerOffer == true;
        })

    }

    return user;
};