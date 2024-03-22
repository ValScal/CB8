require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Book = require("./models/books");

const app = express();
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());

// Gestione errore tra Server e DB. Rimane in ascolto solo al momento dell'esecuzione di una funzionalità di comunicazione con il DB. Generico.
db.on("error", (err) => console.error(err));
// Applica un listener solo una volta all'evento che viene scatenato. Open = ogni volta che faccio la comunicazione con il DB.
db.once("open", () => console.log("*::__Connection Established__::* "));


// app.get("/books", async (req, res) => {
//     const books = await Book.find();
//     res.json(books);
// })

// Procedo direttamente con l'esercizio avanzato

// Endpoint che gestisce una richiesta GET all'URL "/books" : 
app.get("/books", async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    try {    
        // Faccio una query al DB per trovare i libri e attendo che venga completata prima di procedere:
        const books = await Book.find();
        // limito il numero di documenti restituiti e li salto per avere la giusta paginazione: se sono a pagina 3 e voglio 10 libri per pagina, salto i primi20 e visualizzo i successivi 10:
        .limit(limit * 1);
        .skip((page -1) * limit);
        .sort({
            name: "asc"
        })
        .exec();

        // Conto il numero di libri nel DB:
        const count = await Book.countDocuments();

        // Infine invio una risposta al client con, in ordine, i libri trovati, il numero di pagine necessarie per visualizzare tutti i libri e la pagina corrente:
        res.json({
            books, 
            totalPages: Math.ceil(count / limit),
            currentPAge: page
        });
        // Gestisco eventuali errori:
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: "*::__Server Error__::*" });
    };
});

// ******************* //

// GET //
app.get("/books/:id", async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.status(201).json(book);
    } catch (err) {
      res.status(400).json({ message: err.message });
    };
  });

// POST //
app.post("/books", async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        cover: req.body.cover, 
        genre: req.body.genre,
        year: req.body.year,
    });

    try {
        const newBook = await book.save();
        res.status(201).json({ newBook });
    } catch (err) {
        res.status(400).json({ message: err.message});
    };
});

// DELETE //
app.delete("/books/:id", async (req, res) => {
    try {
        if (req.params.id === "all") {
            await Book.deleteMany();
            res.status(201).json({ message: "*::__All books deleted!__::*"});
        } else {
            await Book.findByIdAndDelete(req.params.id);
            res.status(201).json({ message: "*::__Book deleted!__::*"});
        };
    };
    catch (err) {
        res.satus(400).json({ message: err.message});
    };
})

// PUT //
app.put("/books/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "*::__Book not found__::*"});
        } else {
            const { title, author, cover, genre, year } = req.body;
            if (title && author && cover && genre && year ) {
                book.title = title;
                book.author = author;
                book.cover = cover;
                book.genre = genre;
                book.year = year;                
                await book.save();
                res.status(201).json({ message: "*::__Book updated__::*"});
            };
        };
    } catch (err) {
      res.status(400).json({ message: err.message });
    };
});

app.listen(3001);