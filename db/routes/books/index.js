const express = require('express');

const booksRouter = express.Router();

const bookTitleRouter = require('./booksTitle');
const bookIsCompletedRouter = require('./isCompleted');
// root router for books

booksRouter.get('/', (req, res) => {
  res.send('books home page');
});

// booksRouter.use('/:bookId', bookidsRouter);
booksRouter.use('/:bookTitle', bookTitleRouter);

booksRouter.use('/isCompleted', bookIsCompletedRouter);

module.exports = booksRouter;
