const getService = require('./getService');
const getServices = require('./getServices');
const getServiceByCategoryId = require('./getServiceByCategoryId');
const getServicesByUserId = require('./getServicesByUserId');

module.exports = {
  Query: {
    getService,
    getServiceByCategoryId,
    getServices,
    getServicesByUserId
  },
};