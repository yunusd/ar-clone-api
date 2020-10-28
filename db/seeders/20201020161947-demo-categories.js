"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Categories", [
      {
        id:10001,
        name: "Ev Temizliği",
        minPrice: 100,
        maxPrice: 350,
        isPriceRange: true,
        catalogId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10002,
        name: "Dezenfeksiyon",
        minPrice: 235,
        maxPrice: 480,
        isPriceRange: true,
        catalogId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10003,
        name: "Koltuk Yıkama",
        minPrice: 100,
        maxPrice: 600,
        isPriceRange: true,
        catalogId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10004,
        name: "Haşere İlaçlama",
        minPrice: 175,
        maxPrice: 800,
        isPriceRange: true,
        catalogId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10005,
        name: "İnşaat Sonrası Temizlik",
        minPrice: 165,
        maxPrice: 350,
        isPriceRange: true,
        catalogId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10006,
        name: "Petek Temizliği",
        minPrice: 180,
        maxPrice: 550,
        isPriceRange: true,
        catalogId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10007,
        name: "Apartman Temizliği",
        minPrice: 220,
        maxPrice: 850,
        isPriceRange: true,
        catalogId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10008,
        name: "Halı Yıkama",
        minPrice: 80,
        maxPrice: 350,
        isPriceRange: true,
        catalogId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10009,
        name: "Boya Badana",
        minPrice: 800,
        maxPrice: 4500,
        isPriceRange: true,
        catalogId: 10002,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10010,
        name: "Ev Tadilatı",
        minPrice: 250,
        maxPrice: 12500,
        isPriceRange: true,
        catalogId: 10002,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10011,
        name: "Cam Balkon",
        minPrice: 1200,
        maxPrice: 6500,
        isPriceRange: true,
        catalogId: 10002,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10012,
        name: "Koltuk Döşeme",
        minPrice: 245,
        maxPrice: 900,
        isPriceRange: true,
        catalogId: 10002,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10013,
        name: "Fayans Döşeme",
        minPrice: 75,
        maxPrice: 350,
        isPriceRange: true,
        catalogId: 10002,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10014,
        name: "İç Mimar",
        minPrice: 875,
        maxPrice: 2350,
        isPriceRange: true,
        catalogId: 10002,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10015,
        name: "Mantolama",
        minPrice: 11000,
        maxPrice: 38000,
        isPriceRange: true,
        catalogId: 10002,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10016,
        name: "Mutfak Dolabı Yapımı",
        minPrice: 1240,
        maxPrice: 3600,
        isPriceRange: true,
        catalogId: 10002,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10017,
        name: "Parke Döşeme",
        minPrice: 1240,
        maxPrice: 3600,
        isPriceRange: true,
        catalogId: 10002,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id:10018,
        name: "Banyo Tadilatı",
        minPrice: 900,
        maxPrice: 9600,
        isPriceRange: true,
        catalogId: 10002,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
