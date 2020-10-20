"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Questions", [
      {
        id: 10001,
        question: "Kaç oda? (salon hariç)",
        description:
          "Evi detaylı temizleyip düzenliyoruz. Yer ve cam silme, toz alma, bulaşık yıkama, yatak toplama, çöp boşaltılması dahil. İsteğe bağlı duvar silme, ütü ve yemek yapma ekleyebilirsin.",
        questionType: "singleChoice",
        CategoryId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10002,
        question: "Kaç banyo?",
        description:
          "Banyolar da tertemiz olsun: Küvet, tuvalet, tezgah, lavabo, ayna ve cam silme, yer silme, toz alma, havluların asılması ve çöp boşaltılması dahil aklına gelen her şey.",
        questionType: "singleChoice",
        CategoryId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10003,
        question: "Kaç saat temizlik yapılsın?",
        description:
          "Temizliği bu sürede bitirmeyi hedefleyeceğiz. Extra temizlik, ütü veya yemek istersen, süreyi uzat. Teknolojimiz ve büyüklüğümüz sayesinde hizmetimiz %30-60 oranında daha uygun fiyatlı.",
        questionType: "singleChoice",
        CategoryId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10004,
        question: "Evde köpek veya kedi var mı?",
        description: "",
        CategoryId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Questions", null, {});
  },
};
