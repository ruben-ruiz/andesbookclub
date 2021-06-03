const express = require('express');
const db = require('../../index');
const booksQuestionsRouter = express.Router();

// root router for questions
booksQuestionsRouter.get('/:book_id', (req, res) => {
  let book = req.params.book_id;
  db.query(`SELECT * FROM questions WHERE bookid = '${book}' ORDER BY upvotes DESC`)
    .then((data) => {
      res.status(200).send(data.rows);
    }).catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = booksQuestionsRouter;
