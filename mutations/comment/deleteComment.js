const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
    try {
        const comment = await context.models.Comment.findByPk(args.id);

        const deletedComment = await context.models.Comment.destroy({
            where: {
                id: args.id,
            }
        });
        return deletedComment ? comment : new EmptyResultError("Comment not found!");;
    } catch (error) {
        throw new Error(error);
    }
};