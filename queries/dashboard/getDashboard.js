const Dashboard = require("../../types/Dashboard");

module.exports = async (...args) => {

    // TODO : buraya bakılacak
    const users = await context.models.User.findAll({
        include: {
            model: context.models.User_Role,
            as: "roles"
        },
        include: {
            model: context.models.Status,
            as: "status"
        },
    });
    const activeUsers = lodash.filter(users, x => x.status.name === 'active');

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
    const currentDay = new Date();
    // önceki gün içi sorgusu    const lastDayOfferCount = lodash.filter(offers, x => x.createdAt <= '2020-11-06 01:35:15').length;

    const lastDayOfferCount = lodash.filter(offers, x => x.createdAt <= currentDay.now() -1 ).length;
    // bu gün var olan saat sorgusu
    const todayOfferCount = lodash.filter(offers, x => x.createdAt <= '').length;

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
    const lastDayServiceCount = lodash.filter(services, x => x.createdAt <= '').length;
    const todayServiceCount = lodash.filter(services, x => x.createdAt <= '').length;

    const dashboard = {
        activeUsers = activeUsers,
        offers = offers,
        services = services,
        lastDayOfferCount = lastDayOfferCount,
        todayOfferCount = todayOfferCount,
        lastDayServiceCount = lastDayServiceCount,
        todayServiceCount = todayServiceCount
    };

    return dashboard;
};