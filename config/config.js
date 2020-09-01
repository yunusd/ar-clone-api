// const fs = require('fs');
const {
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_HOSTNAME,
  POSTGRES_PORT,
  POSTGRES_DB,
} = require('./index')

module.exports = {
  development: {
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    host: POSTGRES_HOSTNAME,
    port: POSTGRES_PORT,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  test: {
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    host: POSTGRES_HOSTNAME,
    port: POSTGRES_PORT,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    host: POSTGRES_HOSTNAME,
    port: POSTGRES_PORT,
    dialect: 'postgres',
    dialectOptions: {
      bigNumberStrings: true,
      // ssl: {
      //   ca: fs.readFileSync(__dirname + '/ssl.crt')
      // }
    }
  }
};