import { Sequelize } from 'sequelize'
import path from 'path'

export const getSequelizeConnection = () => {
  return new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'empatica.db')
  })
}
