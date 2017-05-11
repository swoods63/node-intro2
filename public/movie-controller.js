function MovieController(){
  var movieService = new MovieService()

this.createMovie = function createMovie(event){//in submit fx, the first param will be event
event.preventDefault() //keeps page from reloading
console.log(event)
var movie = {
title: event.target.movietitle.value,
author: event.target.movieauthor.value,
published: event.target.moviepublished.value,
rating: event.target.movierating.value
}

movieService.createMovie(movie, this.drawMovies)

}

this.getMovie = function(){
  movieService.getMovie(this.drawMovies)
}

this.drawMovies = function(movies){
  var list = document.getElementById('movie-list')
  var template = ''
movies.forEach(function(movie){
  template += `<li>${movie.title} - ${movie.author}, ${movie.published}, ${movie.rating}</li>`
})
list.innerHTML = template
}

}