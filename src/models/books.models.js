const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    bookName: {
        type: String,
        required: true,
    },
    bookURL: {

        type: String,
        required: true,
    },

});

const BooksModel = mongoose.model("Books", bookSchema);

module.exports = BooksModel;