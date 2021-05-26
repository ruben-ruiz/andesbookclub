const express = require('express');

const questionsRouter = express.Router();

const questionsTopUsersRouter = require('./topUsers');
const questionsTopQuestionsRouter = require('./topQuestions');


// root router for questions
questionsRouter.get('/', (req, res) => {
  res.send('questions home page');
});

questionsRouter.use('/topusers', questionsTopUsersRouter);
questionsRouter.use('/topquestions', questionsTopQuestionsRouter);

module.exports = questionsRouter;
