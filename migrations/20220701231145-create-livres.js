'use strict';


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('livres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },
      dateApparution: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categories_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
          references:{
          models:'categories',
          key:'id'
     },

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
    await queryInterface.dropTable('livres');
  }
};