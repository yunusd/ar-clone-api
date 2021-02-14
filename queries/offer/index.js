const getOffer = require('./getOffer');
const getOfferByServiceId = require('./getOfferByServiceId');
const getOffersByUserId = require('./getOffersByUserId');

module.exports = {
  Query: {
    getOffer,
    getOfferByServiceId,
    getOffersByUserId,
  },
};