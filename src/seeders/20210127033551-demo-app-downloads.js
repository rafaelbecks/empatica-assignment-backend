'use strict'
const faker = require('faker')
const GENERATED_DATA_LENGTH = 50

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const timestamps = { createdAt: new Date(), updatedAt: new Date() }

    const [apps] = await queryInterface.sequelize.query(
      'SELECT id FROM Apps'
    )
    const appIds = apps.map(({ id }) => id)

    await queryInterface.bulkInsert('AppDownloads',
      Array.from(Array(GENERATED_DATA_LENGTH).keys()).map((item, index) => ({
        appId: appIds[Math.floor(Math.random() * appIds.length)],
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
        downloadedAt: faker.date.recent(),
        ...timestamps
      }))
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
