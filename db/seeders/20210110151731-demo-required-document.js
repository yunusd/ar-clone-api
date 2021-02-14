"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("RequiredDocuments", [{
        id: 10000,
        name: "Test Required Document Name - 1",
        description: "Test Required Document Description - 1",
        categoryId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10001,
        name: "Test Required Document Name - 2",
        description: "Test Required Document Description - 2",
        categoryId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("RequiredDocuments", null, {});
  },
};