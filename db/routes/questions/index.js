const express = require('express');

const questionsRouter = express.Router();

// root router for questions
questionsRouter.get('/', (req, res) => {
  res.send('questions home page');
});

module.exports = questionsRouter;
