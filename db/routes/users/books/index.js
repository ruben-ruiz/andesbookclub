const express = require('express');
const db = require('../../../index');

const addReadingBookRouter = require('./addReadingBook');

const addCompletedBookRouter = require('./addCompletedBook');

const setReadingRouter = require('./setReading');
const setCompletedRouter = require('./setCompleted');

const removeBookRouter = require('./remove');

const userBooksRouter = express.Router();

// userBooksRouter.use('/:bookId', someRouter);
userBooksRouter.use('/addReadingBook', addReadingBookRouter);
userBooksRouter.use('/addCompletedBook', addCompletedBookRouter);

userBooksRouter.use('/setReading', setReadingRouter);
userBooksRouter.use('/setCompleted', setCompletedRouter);

userBooksRouter.use('/remove', removeBookRouter);

userBooksRouter.get('/', (req, res) => {
  db.query(`
    SELECT books.*, userBooks.isCompleted
    FROM books
    JOIN userBooks ON books.bookId = userBooks.bookId
    WHERE userBooks.userId = ${req.session.userId}
  `).then((dbData) => {
    // console.log(dbData.rows);
    res.status(200).send(dbData.rows);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

module.exports = userBooksRouter;
