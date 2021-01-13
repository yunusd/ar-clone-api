"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Users", [

      {
        id: 10000,
        firstName: "yunus",
        lastName: "demirpolat",
        userName: "admin",
        phoneNumber: "905512758191",
        email: "yunusdemirpolatt@gmail.com",
        posterPath: "",
        status: "active",
        addressId: 1,
        catalogId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10001,
        firstName: "test user - 1",
        lastName: "test user - 1",
        userName: "testUser1",
        phoneNumber: "905555555555",
        email: "testUser1@gmail.com",
        posterPath: "",
        status: "active",
        addressId: 1,
        catalogId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10002,
        firstName: "test user - 2",
        lastName: "test user - 2",
        userName: "testUser2",
        phoneNumber: "905555555555",
        email: "testUser2@gmail.com",
        posterPath: "",
        status: "active",
        addressId: 1,
        catalogId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10003,
        firstName: "test user -3",
        lastName: "test user -3",
        userName: "testUser3",
        phoneNumber: "905555555555",
        email: "testUser3@gmail.com",
        posterPath: "",
        status: "active",
        addressId: 1,
        catalogId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10004,
        firstName: "test user - 4",
        lastName: "test user - 4",
        userName: "testUser4",
        phoneNumber: "905555555555",
        email: "testUser4@gmail.com",
        posterPath: "",
        status: "active",
        addressId: 1,
        catalogId: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      }



    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};