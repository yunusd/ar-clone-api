const user = require("../../db/models/user");

module.exports = async (...args) => {
    const [, params, context, ] = args;
    const users = await context.models.User.findByPk(context.user.id,{
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
            as: "userServiceCategories"
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
    ]
});
console.log(args)
    return users;
};