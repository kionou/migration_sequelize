'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'nom',
        'nom',
        {
          type: Sequelize.DataTypes.STRING,
        },
        { transaction }
      );
      await queryInterface.addIndex(
        'nom',
        'nom',
        {
          fields: 'nom',
          allowNull:false,
          validate: {
          len: {
             args:[2, 10],
             msg:'votre nom doit comporter au moins 2 lettre',
      },
        notEmpty: {msg:'Ce champs ne doit pas etre vide'},

      
      },
          transaction,
        }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('nom', 'nom', { transaction });
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }
};
