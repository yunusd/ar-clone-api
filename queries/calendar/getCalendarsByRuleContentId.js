module.exports = async (...args) => {
    const [, , context, ] = args;
    const calendars = await context.models.Calendar.findAll({
        where: {
            ruleContentId: params.ruleContentId
        }
    });
    return calendars;
};