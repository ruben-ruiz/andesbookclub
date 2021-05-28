const express = require('express');
const db = require('../../index');

const userQuizzesRouter = express.Router();

function getUserQuizzes(req) {
  return db.query(`
    SELECT title, thumbnail
    FROM books AS b
    INNER JOIN LATERAL
    (SELECT * AS q
      FROM questions
      WHERE b.id = q.bookid)
    AND userBooks ON userBooks.bookId = questions.bookId
    WHERE userBooks.userId = ${1}
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
