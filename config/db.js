const { Sequelize } = require('sequelize');
const {
    NODE_ENV,
    POSTGRES_USERNAME,
    POSTGRES_PASSWORD,
    POSTGRES_HOSTNAME,
    POSTGRES_PORT,
    POSTGRES_DB,
  } = require('./index')
/**
 * Database configuration
 */
const sequelize = new Sequelize(POSTGRES_DB, POSTGRES_USERNAME, POSTGRES_PASSWORD, {
    host: POSTGRES_HOSTNAME,
    dialect: POSTGRES_DB
});

  

module.exports = sequelize;