const express = require('express');

const userStatsRouter = express.Router();

userStatsRouter.get('/', (req, res) => {
  res.send(req.session.userId)
})

module.exports = userStatsRouter;