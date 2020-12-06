module.exports = async (_, args, context) => {

    const ruleContent = await context.models.RuleContent.create({
        ruleId: args.ruleId,
        questionId: args.questionId,
        questionOptionId: args.questionOptionId,
        addressId: args.addressId,
        calendars: args.calendars
    }, {
        include: {
            model: context.models.Calendar,
            as: "calendars"
        }

    });
    await ruleContent.save();

    return ruleContent
};