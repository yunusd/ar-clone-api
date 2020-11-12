const addStatus = require('./addStatus');
const editStatus = require('./editStatus');
const deleteStatus = require('./deleteStatus');

module.exports = {
  Mutation: {
    addStatus,
    editStatus,
    deleteStatus,
  },
};