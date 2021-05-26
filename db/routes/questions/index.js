const express = require('express');

const questionsRouter = express.Router();

const questionsTopUsersRouter = require('/topusers');

// root router for questions
questionsRouter.get('/', (req, res) => {
  res.send('questions home page');
});

questionsRouter.use('/topusers', questionsTopUsersRouter);

module.exports = questionsRouter;
