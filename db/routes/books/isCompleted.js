const express = require('express');
const db = require('../../index');

const bookIsCompletedRouter = express.Router();

bookIsCompletedRouter.get('/:bookId', (req, res) => {
  const { bookId } = req.params;
<<<<<<< HEAD:db/routes/books/isCompleted.js
  if (!req.session.userId) {
    res.send(false);
  } else {
    db.query(`
    SELECT isCompleted
    FROM books
    JOIN userBooks ON userBooks.bookId = books.bookId
    WHERE books.bookId = '${bookId}' AND userBooks.userId = ${req.session.userId}`)
      .then((dbRes) => {
        if (dbRes.rows.length === 0) {
          res.status(200).send('available');
        } else {
          const { iscompleted } = dbRes.rows[0];
          res.send(iscompleted);
        }
      });
  }
=======
  db.query(`
  SELECT *
  FROM userbooks WHERE userid = ${1} AND bookid = '${bookId}'
  `)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch(err => res.sendStatus(404));
>>>>>>> main:db/routes/books/bookCompleted.js
});

module.exports = bookIsCompletedRouter;
