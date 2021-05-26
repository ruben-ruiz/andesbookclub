const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const db = require('../../index');

const usersRouter = express.Router();

function insertUser({ sub, email, name, given_name, family_name, picture }) {
  return db.query(`
  INSERT INTO
  users (
    email,
    firstName,
    lastName,
    profileName,
    profilePhoto
    )
    VALUES (
      '${email}',
      '${given_name}',
      '${family_name}',
      '${name}',
      '${picture}'
      )
    ON CONFLICT DO NOTHING;`);
}

// root router for users
usersRouter.get('/', async (req, res) => {
  res.send('users home page');
});

usersRouter.post('/', (req, res) => {
  const googleAuth = async (token) => {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });
    return ticket.getPayload();
  };

  googleAuth(req.body.tokenId)
    .then((payload) => {
      insertUser(payload)
        .then(() => {
          res.status(200);
          res.send('logged in');
        })
        .catch((err) => {
          res.status(500).send(err);
        });
    });
});

module.exports = usersRouter;
