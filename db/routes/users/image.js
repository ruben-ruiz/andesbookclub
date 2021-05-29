const express = require('express');
const db = require('../../index');

const usersImageRouter = express.Router();

usersImageRouter.get('/', (req, res) => {
  db.query(`
    SELECT profilePhoto
    FROM users
    WHERE userId = ${req.session.userId}
  `)
    .then((dbRes) => {
      // console.log(dbRes);
      res.status(200).send(dbRes.rows);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = usersImageRouter;
