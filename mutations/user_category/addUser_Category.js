const { AccessDeniedError } = require('sequelize');

module.exports = async (_, args, context) => {

    // TODO : User subsribe olup olmadığı kontrol edilecek.
    // TODO : UI tarafında eğer ihtiyaç var ise user_Category documanları da insert edilecek.

    let user = await context.models.User.findByPk(context.userId,{
        include:{
            model : context.models.Status,
            as : "status"
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


    const category = await context.models.Category.findByPk(params.categoryId, {
        include: {
            model: context.models.RequiredDocument,
            as: "requiredDocuments"
        }
    });

    if (category.dataValues.requiredDocuments.length > 0) {

        const defaultStatus = await context.models.Status.findOne({
            where: {
                name: "pending"
            }
        });
        if (defaultStatus == null) {
            insertStatus = await context.models.Status.create({
                name: "pending"
            });
            args.statusId = insertStatus.id;
        } else {
            args.statusId = defaultStatus.dataValues.id;
        }
    }
    else
    {
        const defaultStatus = await context.models.Status.findOne({
            where: {
                name: "approved"
            }
        });
        if (defaultStatus == null) {
            insertStatus = await context.models.Status.create({
                name: "approved"
            });
            args.statusId = insertStatus.id;
        } else {
            args.statusId = defaultStatus.dataValues.id;
        }
    }

    const user_category = await context.models.User_Category.create({
        ...args,
    });
    return user_category;
};