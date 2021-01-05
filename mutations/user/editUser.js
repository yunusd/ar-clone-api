const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {

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