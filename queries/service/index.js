const getService = require('./getService');
const getServices = require('./getServices');
const getServiceByCategoryId = require('./getServiceByCategoryId');

module.exports = {
  Query: {
    getService,
    getServiceByCategoryId,
    getServices
  },
};