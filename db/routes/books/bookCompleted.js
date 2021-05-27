const express = require('express');
const db = require('../../index');

const bookIsCompletedRouter = express.Router();

bookIsCompletedRouter.get('/:bookId', (req, res) => {
  const { bookId } = req.params;
  db.query(`
  SELECT *
  FROM userbooks WHERE userid = ${1} AND bookid = '${bookId}'
  `)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch(err => res.sendStatus(404));
});

module.exports = bookIsCompletedRouter;
