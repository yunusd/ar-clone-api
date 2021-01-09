const {
    func
} = require('joi');
const lodash = require('lodash');
const models = require('../db/models');

module.exports = async (args) => {

    try {
        // TODO burada rulelara uygun bir durum oluşursa offer atılacak. servis create de çağıralacak

        let service = await models.Service.findByPk(args.serviceId, {
            include: [{
                    model: context.models.Address,
                    as: "address"
                },
                {
                    model: context.models.ServiceContent,
                    as: "content"
                }
            ]
        });
        service = JSON.parse(JSON.stringify(service, null, 4));

        let user_categories = await models.User_Category.findAll({
            where: {
                categoryId: service.categoryId,
                status : "active"
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
                        as: "address"
                    }
                }
            }
        });
        user_categories = JSON.parse(JSON.stringify(user_categories, null, 4));

        for (let index = 0; index < user_categories.length; index++) {
            const user_category = user_categories[index];

            for (let index = 0; index < user_category.rules.length; index++) {
                const rule = user_category.rules[index];

                for (let index = 0; index < rule.contents.length; index++) {
                    const rule_content = rule.contents[index];

                    if (rule_content.cityId != null ? rule_content.cityId == service.address.cityId : false && rule_content.countryId != null ? rule_content.countryId == service.address.countryId : false && rule_content.stateId != null ? rule_content.stateId == service.address.stateId : false) {

                        for (let index = 0; index < rule_content.calendars.length; index++) {
                            const calendar = rule_content.calendars[index];

                            if (calendar.startDate != null ? calendar.startDate == service.calendar.startDate : false && calendar.endDate != null ? calendar.endDate == service.calendar.endDate : false && calendar.dayOfWeek != null ? calendar.dayOfWeek == service.calendar.dayOfWeek : false && calendar.startHour != null ? calendar.startHour == service.calendar.startHour : false && calendar.endHour != null ? calendar.endHour <= service.calendar.endHour : false && rule.minServicePrice != null ? rule.minServicePrice <= service.price : null && rule.maxServicePrice != null ? rule.maxServicePrice >= service.price : false) {

                                var newOffer = await models.Offer.create(
                                    serviceId = args.serviceId,
                                    price = rule.makeOfferPrice,
                                    userId = user_category.userId
                                );
                                // TODO bildirim atılmalı
                            }
                        }
                    }
                }
            }
        }

        return true;

    } catch (error) {
        return error;

    }


};