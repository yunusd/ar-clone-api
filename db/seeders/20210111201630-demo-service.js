"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Services", [
      {       
        id: 10000,
        addressId: 10001,
        userId: 10001,
        categoryId: 10001,
        calendarId: null,
        description: "Test Service - 1",
        posterPath: "",
        price: 1502,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {       
        id: 10001,
        addressId: 10001,
        userId: 10001,
        categoryId: 10001,
        calendarId: null,
        description: "Test Service - 2",
        posterPath: "",
        price: 441,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Services", null, {});
  },
};

