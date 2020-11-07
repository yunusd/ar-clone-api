const addUser_Role = require('./addUser_Role');
const editUser_Role = require('./editUser_Role');
const deleteUser_Role = require('./deleteUser_Role');

module.exports = {
  Mutation: {
    addUser_Role,
    editUser_Role,
    deleteUser_Role,
  },
};