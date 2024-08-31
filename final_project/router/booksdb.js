let books = {
      1: { "author": "Chinua Achebe", "title": "Things Fall Apart", "reviews": {} },
      2: { "author": "Hans Christian Andersen", "title": "Fairy tales", "reviews": {} },
      3: { "author": "Dante Alighieri", "title": "The Divine Comedy", "reviews": {} },
      4: { "author": "Unknown", "title": "The Epic Of Gilgamesh", "reviews": {} },
      5: { "author": "Unknown", "title": "The Book Of Job", "reviews": {} },
      6: { "author": "Unknown", "title": "One Thousand and One Nights", "reviews": {} },
      7: { "author": "Unknown", "title": "Nj\u00e1l's Saga", "reviews": {} },
      8: { "author": "Jane Austen", "title": "Pride and Prejudice", "reviews": {} },
      9: { "author": "Honor\u00e9 de Balzac", "title": "Le P\u00e8re Goriot", "reviews": {} },
      10: { "author": "Samuel Beckett", "title": "Molloy, Malone Dies, The Unnamable, the trilogy", "reviews": {} }
}

function getBookByIsbn(isbn) {
      return new Promise((resolve, reject) => {
            const book = books[isbn];
            if (book) {
                  resolve(book);
            } else {
                  reject(new Error(`No book found with ISBN: ${isbn}`));
            }
      });
}

function getBooks() {
      return new Promise((resolve, reject) => {
            if (books) {
                  resolve(books);
            } else {
                  reject(new Error('No books found'));
            }
      });
}

function getBooksByAuthor(author) {
      return new Promise((resolve, reject) => {
            const bookArray = Object.values(books);
            const booksByAuthor = bookArray.filter(book => book.author === author);
            if (booksByAuthor.length > 0) {
                  resolve(booksByAuthor);
            } else {
                  reject(new Error(`No books found by author: ${author}`));
            }
      });
}

function getBooksByTitle(title) {
      return new Promise((resolve, reject) => {
            const bookArray = Object.values(books);
            const booksByTitle = bookArray.filter(book => book.title === title);
            if (booksByTitle.length > 0) {
                  resolve(booksByTitle);
            } else {
                  reject(new Error(`No books found with title: ${title}`));
            }
      });
}

module.exports = {
      books,
      getBookByIsbn,
      getBooks,
      getBooksByAuthor,
      getBooksByTitle
};