const {
    AccessDeniedError
} = require('sequelize');

module.exports = async (_, args, context) => {
    const user = context.user;

    let getUser_Categories = await context.models.User_Category.findAll({
        where: {
            userId: user.id
        },
        include: [{
                model: context.models.Rule,
                as: "rules",
                include: {
                    model: context.models.RuleContent,
                    as: "contents",
                    include: {
                        model: context.models.Calendar,
                        as: "calendars"
                    }
                }
            }, {
                model: context.models.Category,
                as: "category"
            },
            {
                model: context.models.Status,
                as: "status"
            },
        ]
    });

    getUser_Categories = JSON.parse(JSON.stringify(getUser_Categories, null, 4));

    if (!getUser_Categories.some(function (x) {
            return x.rules.some(function (y) {
                return y.id == args.ruleId;
            }) && x.status.name == "active"
        })) {
        throw AccessDeniedError("Current user cannot add any rule content !")
    }

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