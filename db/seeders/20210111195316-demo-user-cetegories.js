"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("User_Categories", [{
        id: 10000,
        userId: 10001,
        categoryId: 10001,
        status: "approved",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10001,
        userId: 10001,
        categoryId: 10001,
        status: "approved",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10002,
        userId: 10001,
        categoryId: 10002,
        status: "approved",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("User_Categories", null, {});
  },
};