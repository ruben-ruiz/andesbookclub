const express = require('express');
const db = require('../../index');
const booksQuestionsRouter = express.Router();

// root router for questions
booksQuestionsRouter.get('/:book_id', (req, res) => {
  let book = req.params.book_id;
  // res.send('hi');
  db.query(`SELECT * FROM questions WHERE bookid = '${book}' ORDER BY upvotes DESC`)
    .then((data) => res.send(data.rows));
});

module.exports = booksQuestionsRouter;