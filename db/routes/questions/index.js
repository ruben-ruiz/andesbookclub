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

questionsRouter.use('/highest', highestQuestionsRouter);
questionsRouter.use('/book', booksQuestionsRouter);
questionsRouter.use('/update', upvoteQuestionsRouter);
questionsRouter.use('/topusers', questionsTopUsersRouter);
questionsRouter.use('/topquestions', questionsTopQuestionsRouter);

module.exports = questionsRouter;
