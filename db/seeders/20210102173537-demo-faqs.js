"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Faqs", [{
        id: 10000,
        categoryId: 10001,
        question: "question1",
        answer: "answer1",
        createdAt: new Date(),
        updatedAt: new Date(),

      },
      {
        id: 10001,
        categoryId: 10001,
        question: "question2",
        answer: "answer2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10003,
        categoryId: 10001,
        question: "question3",
        answer: "answer3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10004,
        categoryId: 10002,
        question: "question1",
        answer: "answer1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10005,
        categoryId: 10002,
        question: "question2",
        answer: "answer2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10006,
        categoryId: 10002,
        question: "question3",
        answer: "answer3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10007,
        categoryId: 10003,
        question: "question1",
        answer: "answer1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10008,
        categoryId: 10003,
        question: "question2",
        answer: "answer2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10009,
        categoryId: 10003,
        question: "question3",
        answer: "answer3",
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Faqs", null, {});
  },
};