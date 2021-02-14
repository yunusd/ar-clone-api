"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Comments", [
      {       
        id: 10000,
        userId: 10003,
        commentOwnerId: 10004,
        serviceId: 10000,
        content: "test comment -1 ",
        point : 5,       
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};

