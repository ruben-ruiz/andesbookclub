const express = require('express');
const db = require('../../index');

const updateReadingRouter = express.Router();

updateReadingRouter.put('/complete/:bookId', (req, res) => {
  const { bookId } = req.params;
  db.query(`
  UPDATE userbooks SET iscompleted = true WHERE userid = ${req.session.userId} AND bookid = '${bookId}'
  `)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch(err => res.sendStatus(404));
});

updateReadingRouter.put('/incomplete/:bookId', (req, res) => {
  const { bookId } = req.params;
  db.query(`
  UPDATE userbooks SET iscompleted = false WHERE userid = ${req.session.userId} AND bookid = '${bookId}'
  `)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch(err => res.sendStatus(404));
});

module.exports = updateReadingRouter;
