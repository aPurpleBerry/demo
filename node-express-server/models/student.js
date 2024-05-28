const mongoose = require('../config/db.config')

const Schema = mongoose.Schema

const stuType = {
  name: String,
  age: Number
}
const stuModel = mongoose.model('student',new Schema(stuType))

module.exports = stuModel
