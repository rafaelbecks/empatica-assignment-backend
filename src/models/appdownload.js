'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class AppDownload extends Model {
    static associate ({ App }) {
      this.belongsTo(App)
    }
  };
  AppDownload.init({
    appId: DataTypes.INTEGER,
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
    downloadedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AppDownload'
  })
  return AppDownload
}
