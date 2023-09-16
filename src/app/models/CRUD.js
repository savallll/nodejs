const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CRUD = new Schema({
    name: {type: String},
    des: {type: String},
    img: {type: String}
})

module.exports = mongoose.model('cruds',CRUD)
