const addUser_Status = require('./addUser_Status');
const editUser_Status = require('./editUser_Status');
const deleteUser_Status = require('./deleteUser_Status');

module.exports = {
  Mutation: {
    addUser_Status,
    editUser_Status,
    deleteUser_Status,
  },
};