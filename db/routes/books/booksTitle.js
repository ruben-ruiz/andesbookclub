const express = require('express');
const axios = require('axios');

const booksTitle = express.Router();

booksTitle.get('/', (req, res) => {
  const index = req.query[0] - 1;
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.baseUrl.slice(7)}&startIndex=${index}`)
    .then((response) => {
      res.json(response.data);
    });
});

module.exports = booksTitle;
