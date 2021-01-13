"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Countries", [{
        id: 10000,
        name: "Test Country - 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10001,
        name: "Test Country - 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Countries", null, {});
  },
};