const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
    try {
        const rule = await context.models.Rule.update({
            ...args
        }, {
            where: {
                id: args.id
            },
            returning: true,
            plain: true
        });
        return rule[1].dataValues;
    } catch (error) {
        throw new EmptyResultError("Rule not found!");
    }
};