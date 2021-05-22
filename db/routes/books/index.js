const express = require('express');

const booksRouter = express.Router();

const bookidsRouter = require('./booksId');
// root router for books

booksRouter.get('/', (req, res) => {
  res.send('books home page');
});

booksRouter.use('/:bookId', bookidsRouter);

module.exports = booksRouter;
