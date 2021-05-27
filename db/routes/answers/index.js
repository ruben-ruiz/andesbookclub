const express = require('express');
const db = require('../../index');

const answerRouter = express.Router();

answerRouter.get('/', (req, res) => {

});
answerRouter.post('/', (req, res) => {
  const { body } = req;
  console.log(req.session);
  body.answers.forEach((answer) => {
    db.query(`
    INSERT INTO
    userAnswers (
      userId,
      questionId,
      isCorrect,
      selectedAnswer,
      userRating
      )
      VALUES (
        '${req.session.userId}',
        '${answer.questionId}',
        '${answer.isCorrect}',
        '${answer.selectedAnswer}',
        '${answer.userRating}'
        );`);
  });
  res.send('Success!');
});

module.exports = answerRouter;
