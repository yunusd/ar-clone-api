const lodash = require('lodash');
const user = require('../../db/models/user');

module.exports = async (...args) => {
  const [, params, context, ] = args;
  let users = await context.models.User.findAll({
    include: [{
        model: context.models.Address,
        as: "address",
        include: [{
            model: context.models.City,
            as: "city"
          },
          {
            model: context.models.State,
            as: "state"
          },
          {
            model: context.models.Country,
            as: "country"
          }
        ]
      },
      {
        model: context.models.Catalog,
        as: "userServiceCatalog"
      },
      {
        model: context.models.User_Category,
        as: "userServiceCategories"
      },
      {
        model: context.models.Status,
        as: "status"
      },
      {
        model: context.models.User_Role,
        as: "user_roles",
        include: {
          model: context.models.Role,
          as: "role"
        }
      },
    ],
    order: [
      ['id', 'DESC'],
    ],
  }, {
    offset: params.offset,
    limit: params.limit
  });

  if (params.statusId != null) {
    users = lodash.filter(users, function (x) {
      if (x.dataValues.statusId != null) {
        return x.dataValues.statusId == params.statusId;
      }
    });
  }
  if (params.catalogId != null) {
    users = lodash.filter(users, function (x) {
      if (x.dataValues.catalogId != null) {
        return x.dataValues.catalogId == params.catalogId;
      }
    });
  }
  if (params.cityId != null) {
    users = lodash.filter(users, function (x) {
      if (x.dataValues.address != null && x.dataValues.address.dataValues != null) {
        return x.dataValues.address.dataValues.cityId == params.cityId;
      }
    });

  }
  if (params.countryId != null) {
    users = lodash.filter(users, function (x) {
      if (x.dataValues.address != null && x.dataValues.address.dataValues != null) {
        return x.dataValues.address.countryId == params.countryId
      }
    });
  }
  if (params.stateId != null) {
    users = lodash.filter(users, function (x) {
      if (x.dataValues.address != null && x.dataValues.address.dataValues != null) {
        return x.dataValues.address.stateId == params.stateId
      }
    });
  }

  return users;

};