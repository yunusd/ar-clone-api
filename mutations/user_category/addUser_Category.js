module.exports = async (_, args, context) => {
    const userCategories = await context.models.User_Category.findAll({
        where: {
            userId: params.userId
        }
    });
    if (userCategories.count >= 3) {
        return new Error("User allready have 3 service!");
    }
    //TODO User status kontrol edilecek

    const category = await context.models.Category.findByPk(params.categoryId, {
        include: {
            model: context.models.RequiredDocument,
            as: "requiredDocuments"
        }
    });

    if (category.dataValues.requiredDocuments.count > 0) {

        const defaultStatus = await context.models.Status.findOne({
            where: {
                name: "pending"
            }
        });
        if (defaultStatus == null) {
            insertStatus = await context.models.Status.create({
                name: "pending"
            });
            args.statusId = inserStatus.id;
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
            args.statusId = inserStatus.id;
        } else {
            args.statusId = defaultStatus.dataValues.id;
        }
    }

    const user_category = await context.models.User_Category.create({
        ...args,
    });
    return user_category;
};