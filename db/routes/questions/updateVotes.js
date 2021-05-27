const express = require('express');
const db = require('../../index');
const upvoteQuestionsRouter = express.Router();

// root router for questions
upvoteQuestionsRouter.put('/upvote/:question_id', (req, res) => {
  let question_id = req.params.question_id;
  let { upvote } = req.body;
  upvote = parseInt(upvote);
  db.query(`UPDATE questions SET upvotes = upvotes + ${upvote} WHERE questionid = '${question_id}'`)
    .then((data) => res.sendStatus(204));
});

upvoteQuestionsRouter.put('/downvote/:question_id', (req, res) => {
  let question_id = req.params.question_id;
  let { downvote } = req.body;
  downvote = Math.abs(parseInt(downvote));
  db.query(`UPDATE questions SET downvotes = downvotes + ${downvote} WHERE questionid = '${question_id}'`)
    .then((data) => res.sendStatus(204));
});

module.exports = upvoteQuestionsRouter;
