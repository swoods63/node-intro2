
var mongoose = require('mongoose')

var Schema = mongoose.Schema
var BookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  rating: { type: Number, default: 1 },
  published: { type: String }

})

var Book = mongoose.model('Book', BookSchema)
module.exports = Book;