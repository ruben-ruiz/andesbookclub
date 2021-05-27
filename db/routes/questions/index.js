const express = require('express');
const db = require('../../index');

const questionsRouter = express.Router();
const highestQuestionsRouter = require('./highest');
const booksQuestionsRouter = require('./bookQuestions');
const upvoteQuestionsRouter = require('./updateVotes');

const questionsTopUsersRouter = require('./topUsers');
const questionsTopQuestionsRouter = require('./topQuestions');


// root router for questions
questionsRouter.get('/', (req, res) => {
  db.query(`SELECT * FROM questions`)
    .then((data) => res.send(data.rows));
});

// post request to questions
questionsRouter.post('/', (req, res) => {
  // const { body } = req.body;
  console.log('in the post, server side ', req.session.userId);
  const correct = Number(req.body[4]);
  console.log(typeof correct);
  db.query(
    `INSERT INTO questions (createdBy, upvotes, downvotes, questionBody, answer1, answer2, answer3, answer4, correctAnswer, bookId)
    VALUES (${req.session.userId}, 0, 0, ${req.body[5]}, ${req.body[0]}, ${req.body[1]}, ${req.body[2]}, ${req.body[3]}, ${correct}, ${req.body[6]})`,
  )
    .then(() => {
      res.status(200).send('success');
    })
    .catch((error) => {
      res.status(500).send('oopers');
    });
});

questionsRouter.use('/highest', highestQuestionsRouter);
questionsRouter.use('/book', booksQuestionsRouter);
questionsRouter.use('/update', upvoteQuestionsRouter);
questionsRouter.use('/topusers', questionsTopUsersRouter);
questionsRouter.use('/topquestions', questionsTopQuestionsRouter);

module.exports = questionsRouter;
