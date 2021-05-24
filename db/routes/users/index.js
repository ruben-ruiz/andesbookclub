const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const usersRouter = express.Router();

// root router for users
usersRouter.get('/', async (req, res) => {
  res.send('users home page');
});

usersRouter.post('/', (req, res) => {
  const googleAuth = async (token) => {
    const ticket = await client.verifyIdToken({
      idToken: req.body.tokenId,
      audience: process.env.CLIENT_ID
    });
    const { sub, email, name, given_name, family_name, picture } = ticket.getPayload();
    console.log(sub, email, given_name, family_name, name, picture)
  }


  googleAuth(req.body.tokenId)
})

module.exports = usersRouter;
