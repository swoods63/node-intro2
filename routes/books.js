var router = require('express').Router();
var Book = require('./../models/book');

exports.mountPath = '/book';
exports.router = router;

router.route('/')
    .get(getBooks);

router.route('/')
    .post(createBook);



function getBooks(req, res, next) {
  Book.find({}).then(function (books) {//({})find me anything that is an obj, .then=take what found and run this function, books is what you call the stuff you got back from the ({}), ({}) returns a promise...
    res.send(books)
  })
}

function createBook(req, res, next) {
  var newBook = req.body
  Book.create(newBook).then(function (createdBook) {
    res.send(createdBook)
  })
}