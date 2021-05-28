const express = require('express');
const db = require('../../index');

const userQuizzesRouter = express.Router();

function getUserQuizzes(req) {
  return db.query(`
    SELECT books.title, books.thumbnail FROM books
    INNER JOIN (
      SELECT * FROM questions
      JOIN userBooks ON userBooks.bookId = questions.bookId
      WHERE userBooks.userId = ${1}
    )
    ON books.id = userBooks.bookId
  `);
}
userQuizzesRouter.get('/', (req, res) => {
  console.log('in the userQuizzesRouter');
  getUserQuizzes(req)
    .then((dbRes) => {
      console.log(dbRes);
      res.status(200).send(dbRes.rows);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = userQuizzesRouter;
