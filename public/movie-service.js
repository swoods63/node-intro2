function MovieService() {
  var url = "http://localhost:4000/movie"
  var service = this

  this.createMovie = function (movie, callback) {
    $.post(url, movie).then(function (res) {
      console.log(res)
      service.getMovie(callback)
    })
      
  }

  this.getMovie = function (callback) {
    $.get(url).then(function (res) {
      console.log(res)
      callback(res)
    })
      
  }
}
