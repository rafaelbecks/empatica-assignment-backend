'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AppDownloads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      appId: {
        type: Sequelize.INTEGER,
        allowNull: false

      },
      latitude: {
        type: Sequelize.DOUBLE,
        allowNull: false

      },
      longitude: {
        type: Sequelize.DOUBLE,
        allowNull: false

      },
      downloadedAt: { type: Sequelize.DATE, allowNull: false },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AppDownloads')
  }
}
