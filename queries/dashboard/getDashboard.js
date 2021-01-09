const {
    date
} = require('joi');
const lodash = require('lodash');
const {
    AccessDeniedError
} = require('sequelize');

module.exports = async (...args) => {
    const [, params, context, ] = args;

    // if (!context.user.user_roles.some(function (user_role) {
    //         return user_role.role.name == "admin";
    //     })) {
    //     throw new AccessDeniedError("Current user must be admin!")
    // }

    // TODO : buraya bakılacak
    let users = await context.models.User.findAll({
        include: {
            model: context.models.User_Role,
            as: "user_roles",
            include: {
                model: context.models.Role,
                as: "role"
            }
        },
        include: {
            model: context.models.Status,
            as: "status"
        },
    });
    users = JSON.parse(JSON.stringify(users, null, 4));

    let activeUsers = lodash.filter(users, function (x) {
        if (x.status != null) {
            return x.status.name != "active";
        }
    });


    let offers = await context.models.Offer.findAll({
        include: {
            model: context.models.User,
            as: "user"
        },
        include: {
            model: context.models.Service,
            as: "service"
        },
    });
    offers = JSON.parse(JSON.stringify(offers, null, 4));

    const currentDay = new Date();
    let oneDayMs = 86400000;
    let todayOfferCount =0;
    let lastDayOfferCount =0;

    if (offers.length > 0) {
        for (let index = 0; index < offers.length; index++) {
            const offer = offers[index];
            if (new Date(offer.createdAt) >= new Date(currentDay - oneDayMs)) {
                todayOfferCount ++;
            }
            if (new Date(offer.createdAt) >= new Date(currentDay - (oneDayMs * 2)) && new Date(offer.createdAt) <= new Date(currentDay) - new Date(oneDayMs)) {
                lastDayOfferCount ++;
            }
        }
    }
    let services = await context.models.Service.findAll({
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
    services = JSON.parse(JSON.stringify(services, null, 4));

    let lastDayServiceCount = 0; 
    let todayServiceCount = 0;

    if (services.length > 0) {
        for (let index = 0; index < services.length; index++) {
            const service = services[index];
            if (new Date(service.createdAt) >= new Date(currentDay - oneDayMs)) {
                todayServiceCount ++;
            }
            if (new Date(service.createdAt) >= new Date(currentDay - (oneDayMs * 2)) && new Date(service.createdAt) <= new Date(currentDay) - new Date(oneDayMs)) {
                lastDayServiceCount ++;
            }
        }
    }
   

    const dashboard = {
        activeUsers: activeUsers,
        offers: offers,
        services: services,
        lastDayOfferCount: lastDayOfferCount,
        todayOfferCount: todayOfferCount,
        lastDayServiceCount: lastDayServiceCount,
        todayServiceCount: todayServiceCount
    };

    return dashboard;
};