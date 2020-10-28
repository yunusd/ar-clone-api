const getOffer = require('./getOffer');
const getOfferByServiceId = require('./getOfferByServiceId');

module.exports = {
  Query: {
    getOffer,
    getOfferByServiceId,
  },
};