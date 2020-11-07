const addRole = require('./addRole');
const editRole = require('./editRole');
const deleteRole = require('./deleteRole');

module.exports = {
  Mutation: {
    addRole,
    editRole,
    deleteRole,
  },
};