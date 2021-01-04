"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Roles", [
      {
        id:10000,
        name: "user",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10001,
        name: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Roles", null, {});
  },
};