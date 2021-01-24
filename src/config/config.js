const path = require('path')

module.exports = {
  development: {
    username: 'root',
    password: null,
    storage: path.join(__dirname, '../db/empatica.db'),
    host: '127.0.0.1',
    dialect: 'sqlite'
  }
}
