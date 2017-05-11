var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')


var server = express()
var port = 4000 
var connectionstring = 'mongodb://student:student@ds131099.mlab.com:31099/books'
var connection = mongoose.connection;

mongoose.connect(connectionstring, {
  server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
})
connection.on('error', function (err) {//I am listening any time the event error to happen...
  console.log('There is a connection problem', err)
})
connection.once('open', function () { //I am listening for the event open to happen one time, if it happens I will open one time
  console.log('We are connected...')
  server.listen(port, function () {
    console.log('Working!!', 'http://localhost:' + port)

  })
})

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(cors())
server.use('/', express.static(`${__dirname}/public/`))

//ABOVE THIS LINE MOST STUFF SAME, EXECPT THE CONNECTIONSTRING

var routes = require('./routes');

server.use(routes.router);

server.get('/', function (req, res, next) {
  res.send('create books')
})

server.get('/', function (req, res, next) {
  res.send('create movies')
})



























