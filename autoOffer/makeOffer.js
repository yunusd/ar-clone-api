const {
    func
} = require('joi');
const lodash = require('lodash');
const models = require('../db/models');

module.exports = async (args) => {

    try {
        // TODO burada rulelara uygun bir durum oluşursa offer atılacak. servis create de çağıralacak

        const service = await models.Service.findByPk(args.serviceId, {
            include: {
                model: context.models.Address,
                as: "address"
            }
        });

        const user_categories = await models.User_Category.findAll({
            where: {
                categoryId: service.categoryId
            },
            include: {
                model: models.Status,
                as: "status",
                where: {
                    name: "active"
                }
            },
            include: {
                model: models.Rule,
                as: "rules",
                include: {
                    model: models.RuleContent,
                    as: "contents",
                    include: {
                        model: models.Calendar,
                        as: "calendars"
                    },
                    include: {
                        model: models.Address,
                        as: "address",
                        include: {
                            model: models.City,
                            as: "city"
                        },
                        include: {
                            model: models.State,
                            as: "state"
                        },
                        include: {
                            model: models.Country,
                            as: "country"
                        }
                    }
                }
            }
        });
        lodash.forEach(user_categories, function (user_category) {

            lodash.forEach(user_category.rules, function (rule) {

                lodash.forEach(rule.contents, function (content) {

                    if (content.cityId != null ? content.cityId == service.address.cityId : false && content.countryId != null ? content.countryId == service.address.countryId : false && content.stateId != null ? content.stateId == service.address.stateId : false) {

                        lodash.forEach(content.calendars, function (calendar) {
                            if (calendar.startDate != null ? calendar.startDate == service.calendar.startDate : false && calendar.endDate != null ? calendar.endDate == service.calendar.endDate : false && calendar.dayOfWeek != null ? calendar.dayOfWeek == service.calendar.dayOfWeek : false && calendar.startHour != null ? calendar.startHour == service.calendar.startHour : false && calendar.endHour != null ? calendar.endHour <= service.calendar.endHour : false && rule.minServicePrice != null ? rule.minServicePrice <= service.price : null && rule.maxServicePrice != null ? rule.maxServicePrice >= service.price : false) {

                                var newOffer =  models.Offer.create(
                                    serviceId = args.serviceId,
                                    price = rule.makeOfferPrice,
                                    userId = user_category.userId
                                );
                                // TODO bildirim atılmalı

                            };
                        });

                    };

                });

            });

        });
        return true;

    } catch (error) {
        return error;

    }


};