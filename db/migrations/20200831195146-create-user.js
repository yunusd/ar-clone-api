'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      posterPath: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      userName: {
        type: Sequelize.STRING
      },  
      phoneNumber: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM(
          'active','blocked','suspend'
        ),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
          type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};