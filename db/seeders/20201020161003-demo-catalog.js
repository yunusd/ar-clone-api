"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Catalogs", [
      {
        id: 10001,
        name: "Temizlik",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10002,
        name: "Tadilat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10003,
        name: "Nakliyat",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10004,
        name: "Tamir",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10005,
        name: "Özel Ders",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10006,
        name: "Sağlık",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10007,
        name: "Düğün",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10008,
        name: "Kurumsal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10009,
        name: "Organizasyon",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10010,
        name: "Evcil Hayvanlar",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Catalogs", null, {});
  },
};
