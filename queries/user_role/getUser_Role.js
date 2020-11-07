module.exports = async (...args) => {
    const [, params, context, ] = args;
    const user_role = await context.models.User_Role.findByPk(params.id, {
        include: [{
                model: context.models.User,
                as: "user"
            },
            {
                model: context.models.Role,
                as: "role"
            },

        ]
    });
    return user_role;
};