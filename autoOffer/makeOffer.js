// const models = require('../db/models');

// module.exports = async (args) => {


//   // TODO burada rulelara uygun bir durum oluşursa offer atılacak. servis create de çağıralacak

//   const service = await models.Service.findByPk(params.id, {
//     include: {
//       model: context.models.Address,
//       as: "address"
//     },
//     include: {
//       model: context.models.ServiceContent,
//       as: "serviceContents"
//     }
//   });

//   const user_categories = await models.User_Category.findAll({
//     where : {
//       categoryId: service.categoryId
//     },
//     include: {
//       model: models.Status,
//       as: "status"
//     },
//     include: {
//       model: models.Rule,
//       as: "rule",
//       include: {
//         model: models.RuleContent,
//         as: "contents",
//         where: {
//           questionId: "",
//           questionOptionId: "",
//         },
//         include: {
//           model: models.Calendar,
//           as: "calendars"
//         },
//         include: {
//           model: models.Address,
//           as: "address",
//           where: {
//             cityId : service.address.cityId,
//             stateId: service.address.stateId,
//             countryId: service.address.countryId,
//           }
//         }
//       }
//     }
//   });


//   if (service.serviceContents.count > 0) {
//     //TODO burada rule a göre sorgu gelecek

//   }



// };