const express = require('express');
const db = require('../../index');

const bookIsCompletedRouter = express.Router();

bookIsCompletedRouter.get('/:bookId', (req, res) => {
  const { bookId } = req.params;
  if (!req.session.userId) {
    res.send(false);
  } else {
    db.query(`
    SELECT isCompleted
    FROM books
    JOIN userBooks ON userBooks.bookId = books.bookId
    WHERE books.bookId = '${bookId}' AND userBooks.userId = ${req.session.userId}`)
      .then((dbRes) => {
        const { iscompleted } = dbRes.rows[0];
        console.log(iscompleted);
        res.send(iscompleted);
      });
  }
  // const { bookId } = req.params;

  // db.query(`
  //   SELECT isCompleted
  //   FROM books
  //   JOIN userBooks ON userBooks.bookId = books.bookId
  //   WHERE books.bookId = '${bookId}' AND userBooks.userId = ${1}`)
  //   .then((dbRes) => {
  //     const { iscompleted } = dbRes.rows[0];
  //     // console.log(dbRes.rows);
  //     res.send(iscompleted);
  //   });
});

module.exports = bookIsCompletedRouter;
