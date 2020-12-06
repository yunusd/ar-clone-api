module.exports = async (...args) => {
    const [, params, context, ] = args;
    const ruleContents = await context.models.RuleContent.findAll({
        where: {
            ruleId: params.ruleId
        },
        include: {
            model: context.models.Calendar,
            as: "calendars"
        }
    });
    return ruleContents;
};