const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {

    try {
        const comment = await context.models.Comment.update({
            ...args
        }, {
            where: {
                id: args.id
            },
            returning: true,
            plain: true
        });
        return comment[1].dataValues;
    } catch (error) {
        throw new EmptyResultError("Comment not found!");
    }
};