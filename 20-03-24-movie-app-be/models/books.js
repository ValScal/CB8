const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: "no-title", // se non arriva il dato nel db può diventare un valore nullo e rompere tutto
    },
    author: {
        type: String,
        required: true,
        default: "no-author",
    },
    cover: {
        type: String,
        required: true,
        default: "no-cover", 
    },
    genre: {
        type: String,
        required: false,
        default: "no-genre",
      },
    year:  {
        type: Date,
        required: false,
        default: Date.now,
    }, 
    
});

module.exports = mongoose.model("Book", bookSchema);