const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
    try {
        const ruleContent = await context.models.RuleContent.update({
            ...args
        }, {
            where: {
                id: args.id
            },
            returning: true,
            plain: true
        });
        return ruleContent[1].dataValues;
    } catch (error) {
        throw new EmptyResultError("Rule Content not found!");
    }
};