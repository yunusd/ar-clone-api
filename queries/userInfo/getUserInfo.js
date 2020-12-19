module.exports = async (...args) => {
    const [, params, context, ] = args;
    const getUser = await context.models.User.findByPk(params.id, {
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
                as: "user_categories"
            },
            {
                model: context.models.Status,
                as: "status"
            },
            {
                model: context.models.User_Role,
                as: "user_roles",
                include: {
                    model: context.models.Role,
                    as: "role"
                }
            },
            {
                model: context.models.Offer,
                as: "offers"
            },
            {
                model: context.models.Service,
                as: "services"
            }
        ]
    });

    const userInfo = {
        id : getUser.id,
        name : getUser.name,
        address : getUser.address,
        user_categories : getUser.user_categories,
        user_roles : getUser.user_roles,
        status : getUser.status,
        offerCount : getUser.offers.count(),
        serviceCount : getUser.services.count()
    };


    return userInfo;
};