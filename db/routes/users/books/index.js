const express = require('express');
const db = require('../../../index');

const addReadingBookRouter = require('./addReadingBook');
const userBooksRouter = express.Router();

userBooksRouter.get('/', (req, res) => {
  db.query(`
    SELECT books.*, userBooks.isCompleted
    FROM books
    JOIN userBooks ON books.bookId = userBooks.bookId
    WHERE userBooks.userId = ${req.session.userId}
  `).then((dbData) => {
    console.log(dbData.rows);
    res.status(200).send(dbData.rows);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

// userBooksRouter.use('/:bookId', someRouter);
userBooksRouter.use('/addReadingBook', addReadingBookRouter);

module.exports = userBooksRouter;
