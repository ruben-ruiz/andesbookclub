const express = require('express');
const booksRouter = express.Router();

const db = require('../../index');
const bookidsRouter = require('./booksId');
const bookTitleRouter = require('./booksTitle');
const bookIsCompletedRouter = require('./bookCompleted');
// root router for books

booksRouter.get('/', (req, res) => {
  db.query(`
    SELECT *
    FROM books
    `)
    .then((dbRes) => {
      res.send(dbRes.rows);
    });
});

// booksRouter.use('/:bookId', bookidsRouter);
booksRouter.use('/:bookTitle', bookTitleRouter);

booksRouter.use('/isCompleted', bookIsCompletedRouter);

module.exports = booksRouter;
