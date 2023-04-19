const express = require('express');
const BooksModel = require('../src/models/books.models')
const port = 8080;

const app = express();

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.get('/views/books', async (req, res) =>{
    const books = await BooksModel.find({});

    res.render('index', { books });

})

app.get('/books', async (req, res) => {

    try{

        const books = await BooksModel.find({});

        res.status(200).json(books);

    } catch (error) {
        res.status(500).send(error.message)

    }

});

app.post('/books', async (req, res) => {

    try {
        const book = await BooksModel.create(req.body);
    
        res.status(201).json(book);
    } catch (error) {
        res.status(500).send(error.message)

    }

})

app.get('/books/:id', async (req, res) => {

    try {

        const id = req.params.id;
        const book = await BooksModel.findById(id);
        res.status(200).json(book);

    } catch (error) {
        res.status(500).send(error.message)
    }

})

app.patch('/books/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const book = await BooksModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(book);

    } catch (error) {
        res.status(500).send(error.message)
    }

})

app.delete('/books/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const book = await BooksModel.findByIdAndRemove(id);
        res.status(200).json(book);

    } catch (error) {
        res.status(500).send(error.message)
    }

})

app.listen(port, ()=> console.log(`O servidor esta on na porta ${port}`));