const { Model, DataTypes } = require('sequelize')
const sequelize = require('../database/database')

class User extends Model { }

User.init({
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  uid: {
    type: DataTypes.STRING
  },
  usertype: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'user'
})


module.exports = User