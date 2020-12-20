const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
    try {
        const calendar = await context.models.Calendar.update({
            ...args
        }, {
            where: {
                id: args.id
            },
            returning: true,
            plain: true
        });
        return calendar[1].dataValues;
    } catch (error) {
        throw new EmptyResultError("Calendar not found!");
    }
};