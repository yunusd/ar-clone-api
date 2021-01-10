"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("States", [
      {
        id:10000,
        name: "Test State - 1",
        countryId: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10001,
        name: "Test State - 2",
        countryId: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("States", null, {});
  },
};