const getOffer_Content = require('./getOffer_Content');
const getOffer_ContentByOfferId = require('./getOffer_ContentByOfferId');

module.exports = {
    Query: {
        getOffer_Content,
        getOffer_ContentByOfferId,
    },
};