/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const express = require('express');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.CLIENT_ID);
const db = require('../../index');

const usersRouter = express.Router();
const userLoginRouter = require('./login');
const userLogoutRouter = require('./logout');
const userBooksRouter = require('./books');

// root router for users
usersRouter.get('/', async (req, res) => {
  res.send('users home page');
});
usersRouter.use('/login', userLoginRouter);
usersRouter.use('/logout', userLogoutRouter);
usersRouter.use('/books', userBooksRouter);

module.exports = usersRouter;
