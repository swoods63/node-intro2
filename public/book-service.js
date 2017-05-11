function BookService() {
  var url = "http://localhost:4000/book"
  var service = this
  
  this.createBook = function (book, callback) {
    $.post(url, book).then(function (res) {
      console.log(res)
      service.getBook(callback)
    })
      
  }

  this.getBook = function (callback) {
    $.get(url).then(function (res) {
      console.log(res)
      callback(res)
    })
      
  }
}
