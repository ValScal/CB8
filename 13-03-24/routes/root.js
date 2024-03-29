const express = require("express");
const router = express.Router();
const books = require("../books.json");
const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.send("<h1>Benvenuto nella mia homepage</h1>");
});

router.get("/add-book", (req, res) => {
  res.send(`
    <form action= "/books" method="POST">
    <input type="text" placeholder="Inserisci il titolo libro..." name="title" />
    <input type="text" placeholder="Inserisci l'autore..." name="author" />
    <input type="submit" />
    </form>`);
});

router.post("/books", (req, res) => {
  const { title, author } = req.body;
  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.redirect("/books");
});

router.get("/books", (req, res) => {
  res.send(books);
});

module.exports = router;
