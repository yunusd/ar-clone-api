const { round } = require('lodash');
const {
    AccessDeniedError
} = require('sequelize');

module.exports = async (_, args, context) => {

    // TODO : User subsribe olup olmadığı kontrol edilecek.
    // TODO : UI tarafında eğer ihtiyaç var ise user_Category documanları da insert edilecek.

    let user = await context.models.User.findByPk(context.user.userId );
    user = JSON.parse(JSON.stringify(user, null, 4));

    if (user.status != "active") {
        return new AccessDeniedError("User must be active!");
    }

    let userCategories = await context.models.User_Category.findAll({
        where: {
            userId: params.userId
        }
    });
    userCategories = JSON.parse(JSON.stringify(userCategories, null, 4));

    if (userCategories.length >= 3) {
        return new AccessDeniedError("User allready have 3 service!");
    }


    let category = await context.models.Category.findByPk(params.categoryId, {
        include: {
            model: context.models.RequiredDocument,
            as: "requiredDocuments"
        }
    });
    category = JSON.parse(JSON.stringify(category, null, 4));

    if (category.requiredDocuments.length > 0) {        
        args.status = "verifying";
    } else {
        args.status = "approved";
    }

    const user_category = await context.models.User_Category.create({
        ...args,
    });
    return user_category;
};