const express = require('express');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.CLIENT_ID);
const db = require('../../index');

const userLoginRouter = express.Router();

function insertUser({ email, name, given_name, family_name, picture }) {
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
      ON CONFLICT (email) DO UPDATE SET
      firstName = EXCLUDED.firstName,
      lastName = EXCLUDED.lastName,
      profileName = EXCLUDED.profileName,
      profilePhoto = EXCLUDED.profilePhoto
      RETURNING userId`);
}

userLoginRouter.post('/', (req, res) => {
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
        .then((dbData) => {
          res.status(200);
          req.session.userId = dbData.rows[0].userid;
          res.send(dbData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).send(err);
        });
    });
});

module.exports = userLoginRouter;
