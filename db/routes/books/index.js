const express = require('express');
const booksRouter = express.Router();

const db = require('../../index');
const bookidsRouter = require('./booksId');
const bookTitleRouter = require('./booksTitle');
<<<<<<< HEAD
const bookIsCompletedRouter = require('./isCompleted');
=======
const bookIsCompletedRouter = require('./bookCompleted');
const updateReadingRouter = require('./updateReading');
>>>>>>> main
// root router for books

booksRouter.get('/', (req, res) => {
  db.query(`
    SELECT *
    FROM books
    `)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch(err => res.sendStatus(200));
});

// booksRouter.use('/:bookId', bookidsRouter);
booksRouter.use('/:bookTitle', bookTitleRouter);

booksRouter.use('/isCompleted', bookIsCompletedRouter);

booksRouter.use('/readList', updateReadingRouter);

module.exports = booksRouter;
