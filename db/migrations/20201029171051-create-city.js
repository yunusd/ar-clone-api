'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      AdressId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Adresses', 
          key: 'id', 
          as: 'adressId'
       }
      },
      CountryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Countries', 
          key: 'id', 
          as: 'countryId'
       }
      },
      StateId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'States', 
          key: 'id', 
          as: 'stateId'
       }
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
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cities');
  }
};