const getCity = require('./getCity');
const getCitiesByCountryId = require('./getCitiesByCountryId');
const getCitiesByStateId = require('./getCitiesByStateId');

module.exports = {
  Query: {
    getCity,
    getCitiesByCountryId,
    getCitiesByStateId,
  },
};