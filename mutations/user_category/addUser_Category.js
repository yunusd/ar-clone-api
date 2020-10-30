module.exports = async (_, args, context) => {
    const user_category = await context.models.User_Category.create({
        ...args,
    });
    return user_category;
};