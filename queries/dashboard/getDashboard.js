const Dashboard = require("../../types/Dashboard");
const lodash = require('lodash');

module.exports = async (...args) => {
    const [, params, context, ] = args;

    // TODO : buraya bakılacak
    const users = await context.models.User.findAll({
        include: {
            model: context.models.User_Role,
            as: "user_roles",include:{model:context.models.Role,as:"role"}
        },
        include: {
            model: context.models.Status,
            as: "status"
        },
    });
    const activeUsers = lodash.filter(users, x => x.dataValues.status.name === 'active');

    const offers = await context.models.Offer.findAll({
        include: {
            model: context.models.User,
            as: "user"
        },
        include: {
            model: context.models.Service,
            as: "service"
        },
    });
    const currentDay = Date();
    // önceki gün içi sorgusu    const lastDayOfferCount = lodash.filter(offers, x => x.createdAt <= '2020-11-06 01:35:15').length;
    const lastDayOfferCount = lodash.filter(offers, x => x.createdAt <= currentDay.getDate() -1 <= currentDay.getDate()).length;
    // bu gün var olan saat sorgusu
    const todayOfferCount = lodash.filter(offers, x => x.createdAt >= currentDay.getDate()).length;

    const services = await context.models.Service.findAll({
        include: {
            model: context.models.Address,
            as: "address"
        },
        include: {
            model: context.models.Offer,
            as: "offers"
        },
        order: [
            ['id', 'DESC'],
        ],
    });
    const lastDayServiceCount = 0;//  lodash.filter(services, x => x.createdAt <= '').length;
    const todayServiceCount = 0;//lodash.filter(services, x => x.createdAt <= '').length;

    const dashboard = {
        activeUsers : activeUsers,
        offers : offers,
        services : services,
        lastDayOfferCount : lastDayOfferCount,
        todayOfferCount : todayOfferCount,
        lastDayServiceCount : lastDayServiceCount,
        todayServiceCount : todayServiceCount
    };

    return dashboard;
};