var router = require('express').Router();
var Movie = require('./../models/movie');

exports.mountPath = '/movie';
exports.router = router;

router.route('/')
    .get(getMovies);

router.route('/')
    .post(createMovie);



function getMovies(req, res, next) {
  Movie.find({}).then(function (movies) {//({})find me anything that is an obj, .then=take what found and run this function, books is what you call the stuff you got back from the ({}), ({}) returns a promise...
    res.send(movies)
  })   
}

function createMovie(req, res, next) {
  var newMovie = req.body
  Movie.create(newMovie).then(function (createdMovie) {
    res.send(createdMovie)
  })
}