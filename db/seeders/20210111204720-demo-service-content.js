"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("ServiceContents", [
      {       
        id: 10000,
        serviceId: 10001,
        questionId: 10001,
        questionOptionId: 10001,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {       
        id: 10001,
        serviceId: 10001,
        questionId: 10002,
        questionOptionId: 10001,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {       
        id: 10002,
        serviceId: 10001,
        questionId: 10001,
        questionOptionId: 10001,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {       
        id: 10003,
        serviceId: 10001,
        questionId: 10001,
        questionOptionId: 10001,        
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("ServiceContents", null, {});
  },
};

