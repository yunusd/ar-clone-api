"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Addresses", [{
        id: 10000,
        name: "Test Address - 1",
        countryId: 10000,
        stateId: 10000,
        cityId: 10000,
        street: "Test Street - 1",
        zipCode: "Test ZipCode - 1",
        deliveryPhoneNumber: "Test Delivery Phone Number - 1",
        addressDirections: "Test Address Directions - 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10001,
        name: "Test Address - 2",
        countryId: 10000,
        stateId: 10001,
        cityId: 10001,
        street: "Test Street - 2",
        zipCode: "Test ZipCode - 2",
        deliveryPhoneNumber: "Test Delivery Phone Number - 2",
        addressDirections: "Test Address Directions - 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Addresses", null, {});
  },
};