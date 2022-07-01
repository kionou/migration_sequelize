'use strict';
const {
  Model
} = require('sequelize');
const categorie = require('./categorie');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
  
    static associate(models) {
      
    }
  }
  users.init({
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    numero:{
      type:DataTypes.STRING,
      unique:{
        args:true,
        msg:"numero unique"
      }
    }
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};