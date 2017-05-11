function BookController(){
  var bookService = new BookService()

this.createBook = function createBook(event){//in submit fx, the first param will be event
event.preventDefault() //keeps page from reloading
console.log(event)
var book = {
title: event.target.booktitle.value,
author: event.target.bookauthor.value,
published: event.target.bookpublished.value,
rating: event.target.bookrating.value
}

bookService.createBook(book, this.drawBooks)

}

this.getBook = function(){
  bookService.getBook(this.drawBooks)
}

this.drawBooks = function(books){
  var list = document.getElementById('book-list')
  var template = ''
books.forEach(function(book){
  template += `<li>${book.title} - ${book.author}, ${book.published}, ${book.rating}</li>`
})
list.innerHTML = template
}

}