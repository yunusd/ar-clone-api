"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("User_Roles", [{
        id: 10000,
        userId: 10000,
        roleId: 10000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10001,
        userId: 10001,
        roleId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("User_Roles", null, {});
  },
};