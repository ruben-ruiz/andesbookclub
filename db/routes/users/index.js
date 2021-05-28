/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const express = require('express');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.CLIENT_ID);
const db = require('../../index');

const usersRouter = express.Router();
const userLoginRouter = require('./login');
const userLogoutRouter = require('./logout');
<<<<<<< HEAD
const userStatsRouter = require('./userStats')
=======
const userBooksRouter = require('./books');
>>>>>>> main

// root router for users
usersRouter.get('/', async (req, res) => {
  res.send('users home page');
});
usersRouter.use('/login', userLoginRouter);
usersRouter.use('/logout', userLogoutRouter);
<<<<<<< HEAD
usersRouter.use('/userStats', userStatsRouter);
=======
usersRouter.use('/books', userBooksRouter);
>>>>>>> main

module.exports = usersRouter;
