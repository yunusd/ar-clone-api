"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Questions", [
      {
        id: 10001,
        name: "Kaç oda? (salon hariç)",
        description:
          "Evi detaylı temizleyip düzenliyoruz. Yer ve cam silme, toz alma, bulaşık yıkama, yatak toplama, çöp boşaltılması dahil. İsteğe bağlı duvar silme, ütü ve yemek yapma ekleyebilirsin.",
        type: "singleChoice",
        categoryId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10002,
        name: "Kaç banyo?",
        description:
          "Banyolar da tertemiz olsun: Küvet, tuvalet, tezgah, lavabo, ayna ve cam silme, yer silme, toz alma, havluların asılması ve çöp boşaltılması dahil aklına gelen her şey.",
        type: "singleChoice",
        categoryId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10003,
        name: "Kaç saat temizlik yapılsın?",
        description:
          "Temizliği bu sürede bitirmeyi hedefleyeceğiz. Extra temizlik, ütü veya yemek istersen, süreyi uzat. Teknolojimiz ve büyüklüğümüz sayesinde hizmetimiz %30-60 oranında daha uygun fiyatlı.",
        type: "singleChoice",
        categoryId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10004,
        name: "Evde köpek veya kedi var mı?",
        description: "",
        categoryId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Questions", null, {});
  },
};
