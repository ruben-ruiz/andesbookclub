const express = require('express');
const db = require('../../index');
const highestQuestionsRouter = express.Router();

// root router for questions
highestQuestionsRouter.get('/', (req, res) => {
  db.query(`SELECT * FROM questions ORDER BY upvotes DESC`)
    .then((data) => res.send(data.rows));
});

module.exports = highestQuestionsRouter;