module.exports = async (...args) => {
    const [, params, context, ] = args;
    const rule = await context.models.Rule.findByPk(params.id, {
        include: {
            model: context.models.RuleContent,
            as: "contents",
            include: {
                model: context.models.Calendar,
                as: "calendars"
            }
        }
    });
    return rule;
};