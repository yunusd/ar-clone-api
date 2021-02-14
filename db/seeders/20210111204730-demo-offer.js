"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Offers", [
      {       
        id: 10000,
        userId: 10001,
        serviceId: 10000,
        price: 555,
        isWinnerOffer : false,       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {       
        id: 10001,
        userId: 10002,
        serviceId: 10000,
        price: 566,
        isWinnerOffer : false,       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {       
        id: 10002,
        userId: 10003,
        serviceId: 10000,
        price: 665,
        isWinnerOffer : true,       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {       
        id: 10003,
        userId: 10002,
        serviceId: 10001,
        price: 543,
        isWinnerOffer : false,       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {       
        id: 10004,
        userId: 10002,
        serviceId: 10001,
        price: 412,
        isWinnerOffer : false,       
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {       
        id: 10005,
        userId: 10003,
        serviceId: 10001,
        price: 765,
        isWinnerOffer : false,       
        createdAt: new Date(),
        updatedAt: new Date(),
      },


    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Offers", null, {});
  },
};

