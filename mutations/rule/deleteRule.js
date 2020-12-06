const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
    try {
        const rule = await context.models.Rule.findByPk(args.id);

        const deletedRule = await context.models.Rule.destroy({
            where: {
                id: args.id,
            }
        });
        return deletedRule ? rule : new EmptyResultError("Rule not found!");;
    } catch (error) {
        throw new Error(error);
    }
};