const getService = require('./getService');
const getServiceByCategoryId = require('./getServiceByCategoryId');

module.exports = {
  Query: {
    getService,
    getServiceByCategoryId,
  },
};