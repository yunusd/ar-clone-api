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
      }




    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};