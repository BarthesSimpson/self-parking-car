/* Connects to postgres and exports a sequelize 
instance */
const Sequelize = require('sequelize')
const db = process.env.DATABASE_NAME
const db_host = process.env.DATABASE_HOST
const db_user = process.env.DATABASE_USER
const db_pwd = process.env.DATABASE_PWD
const sequelize = new Sequelize(db, db_user, db_pwd, {
  host: db_host || 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

module.exports = sequelize
