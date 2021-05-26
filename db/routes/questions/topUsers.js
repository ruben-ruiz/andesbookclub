const express = require('express');

const db = require('../../index');

const questionsTopUsersRouter = express.Router();

questionsTopUsersRouter.get('/', (req, res) => {
  db.query(`SELECT users.profileName, count(questions.questionId), sum(questions.relevance) as sum
  FROM users
  JOIN questions ON users.userId = questions.createdBy
  GROUP BY users.userId
  ORDER BY sum DESC
  LIMIT 5;`)
  .then(data => {res.send(data.rows)})
});

module.exports = questionsTopUsersRouter;