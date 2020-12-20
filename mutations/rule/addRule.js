module.exports = async (_, args, context) => {

    const rule = await context.models.Rule.create({
        name: args.name,
        contents: args.contents
    }, {
        include: {
            model: context.models.RuleContent,
            as: "contents",
            include: {
                model: context.models.Calendar,
                as: "calendars"
            }
        }
    });
    await rule.save();

    return rule;
};