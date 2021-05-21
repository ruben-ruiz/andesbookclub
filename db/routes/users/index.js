const express = require('express');

const usersRouter = express.Router();

// root router for users
usersRouter.get('/', (req, res) => {
  res.send('users home page');
});

module.exports = usersRouter;
