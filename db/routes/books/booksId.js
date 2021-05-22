const express = require('express');

const booksidRouter = express.Router();

booksidRouter.get('/', (req, res) => {
  res.send('books id route');
});

module.exports = booksidRouter;
