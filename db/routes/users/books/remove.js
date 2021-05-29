const express = require('express');
const axios = require('axios');
const db = require('../../../index');

const removeBookRouter = express.Router();

removeBookRouter.delete('/:bookId', (req, res) => {
  let bookId = req.params.bookId;
  let userId = req.session.userId;

  db.query(`
    DELETE FROM userBooks
    WHERE userId = ${userId} AND bookId = '${bookId}'
  `)
    .then((dbRes) => {
      res.status(200).send(dbRes);
    }).catch((err) => {
      console.log('end err: ', err);
      res.status(500).send(err);
    });
});

module.exports = removeBookRouter;
