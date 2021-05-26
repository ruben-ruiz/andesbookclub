const express = require('express');

const booksRouter = express.Router();

// const bookidsRouter = require('./booksId');
const bookTitleRouter = require('./booksTitle');
// root router for books

booksRouter.get('/', (req, res) => {
  res.send('books home page');
});

// booksRouter.use('/:bookId', bookidsRouter);
booksRouter.use('/:bookTitle', bookTitleRouter);

module.exports = booksRouter;
