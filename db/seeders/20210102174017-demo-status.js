"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Statuses", [
      {
        id:10000,
        name: "active",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10001,
        name: "blocked",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10002,
        name: "suspend",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Statuses", null, {});
  },
};