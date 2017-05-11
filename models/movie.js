
var mongoose = require('mongoose')

var Schema = mongoose.Schema
var MovieSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  rating: { type: Number, default: 1 },
  published: { type: String }

})

var Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie;