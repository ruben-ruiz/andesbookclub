const express = require('express');
const db = require('../../index');

const bookIsCompletedRouter = express.Router();

bookIsCompletedRouter.get('/:bookId', (req, res) => {
  const { bookId } = req.params;
  // if (!req.session.userId) {
  //   res.send(false);
  // } else {
  //   db.query(`
  //   SELECT isCompleted
  //   FROM books
  //   JOIN userBooks ON userBooks.bookId = books.bookId
  //   WHERE books.bookId = '${bookId}' AND userBooks.userId = ${req.session.userId}`)
  //     .then((dbRes) => {
  //       const { iscompleted } = dbRes.rows[0];
  //       console.log(iscompleted);
  //       res.send(iscompleted);
  //     });
  // }
  db.query(`
  SELECT *
  FROM userbooks WHERE userid = ${1} AND bookid = '${bookId}'
  `)
    .then((dbRes) => {
      res.send(dbRes.rows);
    });
});

module.exports = bookIsCompletedRouter;
