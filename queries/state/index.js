const getState = require('./getState');
const getStatesByCountryId = require('./getStatesByCountryId');

module.exports = {
  Query: {
    getState,
    getStatesByCountryId,
  },
};