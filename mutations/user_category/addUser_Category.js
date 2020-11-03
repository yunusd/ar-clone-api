
module.exports = async (_, args, context) => {
    const userCategories = await context.models.User_Category.findAll({
        where: {
            userId: params.userId
        }
    });
    if (userCategories.count >= 3) {
        return new Error("User allready have 3 service!");
    }
    const user_category = await context.models.User_Category.create({
        ...args,
    });
    return user_category;
};