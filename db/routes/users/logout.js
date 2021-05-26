const express = require('express');

const userLogoutRouter = express.Router();

userLogoutRouter.delete('/', async (req, res) => {
  await req.session.destroy();
  res.status(200);
  res.send('Logged out successfully');
});

module.exports = userLogoutRouter;
