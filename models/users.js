'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    numero: DataTypes.STRING,
    password: DataTypes.TEXT,
    profession: DataTypes.STRING,
    image: DataTypes.STRING,
    date_adheration: DataTypes.STRING,
    numero_carte: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};