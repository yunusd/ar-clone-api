"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Documents", [
      {       
        id: 10000,
        user_categoryId: 10001,
        url: "",
        name: "Test Document - 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {       
        id: 10001,
        user_categoryId: 10001,
        url: "",
        name: "Test Document - 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Documents", null, {});
  },
};
