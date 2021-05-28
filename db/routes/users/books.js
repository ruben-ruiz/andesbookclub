const express = require('express');
const db = require('../../index');

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

module.exports = userBooksRouter;
