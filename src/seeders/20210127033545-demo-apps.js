'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const timestamps = { createdAt: new Date(), updatedAt: new Date() }
    await queryInterface.bulkInsert('Apps', [{
      name: 'IOS_MATE',
      displayName: 'Mate App for iOS',
      platform: 'IOS',
      packageName: 'com.ios.mate.app',
      ...timestamps
    },
    {
      name: 'IOS_ALERT',
      displayName: 'Alert App for iOS',
      platform: 'IOS',
      packageName: 'com.io.alert.app',
      ...timestamps
    },
    {
      name: 'ANDROID_ALERT',
      displayName: 'Alert App for Android',
      platform: 'ANDROID',
      packageName: 'com.android.mate.app',
      ...timestamps
    }, {
      name: 'ANDROID_MATE',
      displayName: 'Mate App for Android',
      platform: 'ANDROID',
      packageName: 'com.android.mate.app',
      ...timestamps
    }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
  }
}
