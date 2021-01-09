const getUser = require('./getUser');
const getUsers = require('./getUsers');
const getCurrentUser = require('./getCurrentUser');
const getUsersStatistics = require('./getUsersStatistics');

module.exports = {
  Query: {
    getUser,
    getUsers,
    getCurrentUser,
    getUsersStatistics
  },
};