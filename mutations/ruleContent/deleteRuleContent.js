const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
    try {
        const ruleContent = await context.models.RuleContent.findByPk(args.id);

        const deletedRuleContent = await context.models.RuleContent.destroy({
            where: {
                id: args.id,
            }
        });
        return deletedRuleContent ? ruleContent : new EmptyResultError("Rule Content not found!");;
    } catch (error) {
        throw new Error(error);
    }
};