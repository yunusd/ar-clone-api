const addService = require('./addService');
const editService = require('./editService');
const deleteService = require('./deleteService');

module.exports = {
  Mutation: {
    addService,
    editService,
    deleteService,
  },
};