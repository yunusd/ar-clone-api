module.exports = async (_, args, context) => {

    const calendar = await context.models.Calendar.create({
        ...args,
    });
    return calendar;
};