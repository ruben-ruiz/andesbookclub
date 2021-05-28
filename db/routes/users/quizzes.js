const express = require('express');
const db = require('../../index');

const userQuizzesRouter = express.Router();

function getUserQuizzes(req) {
  return db.query(`

  SELECT books.title, books.bookId, books.thumbnail, MAX(bookQuestions.answeredAt) as answeredAt
  FROM books
  INNER JOIN(
  SELECT answersPerBook.*
  FROM userBooks
  LEFT JOIN LATERAL (
    SELECT questions.bookId, questions.questionId, MAX(userAnswers.answeredAt) as answeredAt
    FROM questions
    LEFT JOIN userAnswers ON questions.questionId = userAnswers.questionId
  GROUP BY questions.questionId
  ) as answersPerBook ON answersPerBook.bookId = userBooks.bookId
    WHERE userBooks.isCompleted = true AND userBooks.userId = ${req.session.userId}
  ) as bookQuestions ON bookQuestions.bookId = books.bookId
  GROUP BY books.bookId;
  `);
}
userQuizzesRouter.get('/', (req, res) => {
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
