"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Cities", [{
        id: 10000,
        name: "Test City - 1",
        stateId: 10000,
        countryId: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10001,
        stateId: 10000,
        name: "Test City - 2",
        countryId: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10002,
        name: "Test City - 3",
        countryId: 10000,
        stateId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10003,
        stateId: 10001,
        countryId: 10000,
        name: "Test City - 4",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Cities", null, {});
  },
};