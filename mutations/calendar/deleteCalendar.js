const {
    EmptyResultError
} = require('sequelize');

module.exports = async (_, args, context) => {
    try {
        const calendar = await context.models.Calendar.findByPk(args.id);

        const deletedCalendar = await context.models.Calendar.destroy({
            where: {
                id: args.id,
            }
        });
        return deletedCalendar ? calendar : new EmptyResultError("Calendar not found!");;
    } catch (error) {
        throw new Error(error);
    }
};