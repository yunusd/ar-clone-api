const addServiceContent = require('./addServiceContent');
const editServiceContent = require('./editServiceContent');
const deleteServiceContent = require('./deleteServiceContent');

module.exports = {
  Mutation: {
    addServiceContent,
    editServiceContent,
    deleteServiceContent,
  },
};