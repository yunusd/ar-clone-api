const {
    EmptyResultError
} = require('sequelize');
const {
    AccessDeniedError
} = require('sequelize');

module.exports = async (_, args, context) => {

    var user = await context.models.User.findByPk(args.id, {
        include: {
            model: context.models.Status,
            as: "status"
        }
    })
    user = JSON.parse(JSON.stringify(user, null, 4));

    if (user.statusId != args.statusId) {
        if (!context.user.user_roles.some(function (user_role) {
                return user_role.role.name == "admin"
            })) {
            throw new AccessDeniedError("User cannot change own Status!");
        }
    }

    try {
        const user = await context.models.User.update({
            ...args
        }, {
            where: {
                id: args.id
            },
            returning: true,
            plain: true
        });
        return user[1].dataValues;
    } catch (error) {
        throw new EmptyResultError("User not found!");
    }
};