const express = require('express');

const booksRouter = express.Router();

const bookidsRouter = require('./booksId');
const bookIsCompletedRouter = require('./bookCompleted');
// root router for books

booksRouter.get('/', (req, res) => {
  res.send('books home page');
});

booksRouter.use('/:bookId', bookidsRouter);

booksRouter.use('/isCompleted', bookIsCompletedRouter);

module.exports = booksRouter;
