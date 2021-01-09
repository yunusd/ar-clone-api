const { round } = require('lodash');
const {
    AccessDeniedError
} = require('sequelize');

module.exports = async (_, args, context) => {

    // TODO : User subsribe olup olmadığı kontrol edilecek.
    // TODO : UI tarafında eğer ihtiyaç var ise user_Category documanları da insert edilecek.

    let user = await context.models.User.findByPk(context.userId, {
        include: {
            model: context.models.Status,
            as: "status"
        }
    });
    user = JSON.parse(JSON.stringify(user, null, 4));
    if (user.status.name != "active") {
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
        let getDefaultStatus = await context.models.Status.findOne({
            where: {
                name: "pending"
            }
        });
        getDefaultStatus = JSON.parse(JSON.stringify(getDefaultStatus, null, 4));

        args.statusId = getDefaultStatus.id;
    } else {
        let getDefaultStatus = await context.models.Status.findOne({
            where: {
                name: "approved"
            }
        });
        getDefaultStatus = JSON.parse(JSON.stringify(getDefaultStatus, null, 4));

        args.statusId = getDefaultStatus.id;
    }

    const user_category = await context.models.User_Category.create({
        ...args,
    });
    return user_category;
};