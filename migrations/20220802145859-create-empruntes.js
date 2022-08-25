'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('empruntes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date_emprunt: {
        type: Sequelize.STRING,
         allowNull: false,
      },
      date_retour: {
        type: Sequelize.STRING,
         allowNull: false,
      },
      id_user: {
        type: Sequelize.INTEGER,
         allowNull: false,
      },
      id_livre: {
        type: Sequelize.INTEGER,
         allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
         defaultValue:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('empruntes');
  }
};