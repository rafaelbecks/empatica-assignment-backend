'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class AppDownload extends Model {
    static associate (models) {
    }
  };
  AppDownload.init({
    name: DataTypes.STRING,
    displayName: DataTypes.STRING,
    platform: DataTypes.ENUM('IOS', 'ANDROID'),
    packageName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'App'
  })
  return AppDownload
}
