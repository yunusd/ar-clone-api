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
        as: "userServiceCategories",
        include: [{
            model: context.models.Status,
            as: "status"
          },
          {
            model: context.models.Document,
            as: "documents"
          }
        ]
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
      {
        model: context.models.Offer,
        as: "offers",
      },
      {
        model: context.models.Comment,
        as: "comments",
      },
    ],
    order: [
      ['id', 'DESC'],
    ],
  }, {
    offset: params.offset,
    limit: params.limit
  });
  users = JSON.parse(JSON.stringify(users, null, 4));
  if (users != null) {
    for (let index = 0; index < users.length; index++) {
      const user = users[index];
      user.profit = 0;
      if (user.offers.length > 0) {
        user.winnerOffers = lodash.filter(user.offers, function (offer) {
          if (offer.isWinnerOffer == true) {
            user.profit += offer.price
            return offer;
          }
        })
      }
      let userTotalRating = 0;
      if (user.comments.length > 0) {
        for (let index = 0; index < user.comments.length; index++) {
          const comment = user.comments[index];
          userTotalRating += comment.point;
        }
        user.rating = userTotalRating / user.comments.length;
      }
    }
  }
  if (params.isServing != null) {
    users = lodash.filter(users, function (x) {
      if (x.catalogId != null && params.isServing == true) {
        return x;
      }
    });
  }

  if (params.statusId != null) {
    users = lodash.filter(users, function (x) {
      if (x.statusId != null) {
        return x.statusId == params.statusId;
      }
    });
  }
  if (params.catalogId != null) {
    users = lodash.filter(users, function (x) {
      if (x.catalogId != null) {
        return x.catalogId == params.catalogId;
      }
    });
  }
  if (params.cityId != null) {
    users = lodash.filter(users, function (x) {
      if (x.address != null) {
        return x.address.cityId == params.cityId;
      }
    });

  }
  if (params.countryId != null) {
    users = lodash.filter(users, function (x) {
      if (x.address != nul) {
        return x.address.countryId == params.countryId
      }
    });
  }
  if (params.stateId != null) {
    users = lodash.filter(users, function (x) {
      if (x.address != null) {
        return x.address.stateId == params.stateId
      }
    });
  }

  return users;

};