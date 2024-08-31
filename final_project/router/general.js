const express = require('express');
let { books, getBooks, getBookByIsbn, getBooksByAuthor } = require('./booksdb.js');
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required" });
    }

    // Check if username already exists
    const userArray = Object.values(users);
    const existingUser = userArray.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
    }

    // Add new user
    const newUser = { username, password };
    users.push(newUser);
    return res.status(200).json({ message: "User registered successfully" });
});

public_users.get('/', function (req, res) {
    getBooks()
        .then(books => res.status(200).json(books))
        .catch(error => res.status(500).json({ error: error.toString() }));
});

public_users.get('/isbn/:isbn', function (req, res) {
    const isbn = req.params.isbn;
    getBookByIsbn(isbn)
        .then(book => res.status(200).json(book))
        .catch(error => res.status(500).json({ error: error.toString() }));
});

public_users.get('/author/:author', function (req, res) {
    const author = req.params.author;
    getBooksByAuthor(author)
        .then(booksByAuthor => res.status(200).json(booksByAuthor))
        .catch(error => res.status(500).json({ error: error.toString() }));
});

public_users.get('/title/:title', function (req, res) {
    const title = req.params.title;
    getBooksByTitle(title)
        .then(booksByTitle => res.status(200).json(booksByTitle))
        .catch(error => res.status(500).json({ error: error.toString() }));
});


public_users.get('/review/:isbn', function (req, res) {
    const isbn = req.params.isbn;
    const book = books[isbn];
    return res.status(200).json(book ? book.reviews : []);
});

module.exports.general = public_users;