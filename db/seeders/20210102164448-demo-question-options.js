"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("QuestionOptions", [{
        id: 10001,
        questionId: 10001,
        text: "option1",
        minPrice: 10,
        maxPrice: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10002,
        questionId: 10001,
        text: "option2",
        minPrice: 10,
        maxPrice: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10003,
        questionId: 10001,
        text: "option3",
        minPrice: 10,
        maxPrice: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10004,
        questionId: 10001,
        text: "option4",
        minPrice: 10,
        maxPrice: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10005,
        questionId: 10001,
        text: "option5",
        minPrice: 10,
        maxPrice: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        id: 10006,
        questionId: 10002,
        text: "option1",
        minPrice: 10,
        maxPrice: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10007,
        questionId: 10002,
        text: "option2",
        minPrice: 10,
        maxPrice: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10008,
        questionId: 10002,
        text: "option3",
        minPrice: 10,
        maxPrice: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10009,
        questionId: 10002,
        text: "option4",
        minPrice: 10,
        maxPrice: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10010,
        questionId: 10002,
        text: "option5",
        minPrice: 10,
        maxPrice: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("QuestionOptions", null, {});
  },
};