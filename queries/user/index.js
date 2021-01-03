const getUser = require('./getUser');
const getUsers = require('./getUsers');
const getCurrentUser = require('./getCurrentUser');

module.exports = {
  Query: {
    getUser,
    getUsers,
    getCurrentUser
  },
};