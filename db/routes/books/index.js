const express = require('express');

const booksRouter = express.Router();

// root router for books
booksRouter.get('/', (req, res) => {
  res.send('books home page');
});

module.exports = booksRouter;
