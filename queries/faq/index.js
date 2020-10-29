const getFaq = require('./getFaq');
const getFaqsByCategoryId = require('./getFaqsByCategoryId');

module.exports = {
  Query: {
    getFaq,
    getFaqsByCategoryId,
  },
};