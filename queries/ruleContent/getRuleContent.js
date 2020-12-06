module.exports = async (...args) => {
    const [, params, context, ] = args;
    const ruleContent = await context.models.RuleContent.findByPk(params.id, {
        include: {
            model: context.models.Calendar,
            as: "calendars"
        }
    });
    return ruleContent;
};