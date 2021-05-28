const express = require('express');

const db = require('../../index');

const userStatsRouter = express.Router();

userStatsRouter.get('/', (req, res) => {
  console.log(req.session.userId)
  var responseObj = {}
  db.query(`select count(CASE WHEN userBooks.isCompleted THEN 1 END) from userBooks where userId = ${req.session.userId}`)


  // BOOKS COMPLETED `select count(CASE WHEN userBooks.isCompleted THEN 1 END) from userBooks where userId = 1`

  // QUESTIONS SUBMITTED `SELECT count(questions.questionId) FROM questions JOIN users on users.userId = questions.createdBy WHERE users.userId = ${req.session.userId}`

  // AVERAGE SCORE `SELECT count(userQuestions.isCorrect) FROM userQuestions JOIN users on users.userId = userQuestions.userId WHERE users.userID = 1`

  // TOP QUESTION SUBMITTED `SELECT questions.questionBody FROM questions JOIN users on questions.createdBy = users.userId WHERE users.userId = ${req.session.userId} ORDER by upvotes DESC LIMIT 1`



  // `SELECT count(questions.questionId), count(CASE WHEN userBooks.isCompleted THEN 1 END) FROM questions JOIN users on users.userId = questions.createdBy JOIN userBooks on users.userId = userBooks.userId WHERE users.userId = ${req.session.userId}`

  .then(data => {res.send(data.rows)})

})

module.exports = userStatsRouter;