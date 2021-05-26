const express = require('express');
const db = require('../../index');

const answerRouter = express.Router();

// function insertUser({
//   sub, email, name, given_name, family_name, picture,
// }) {
//   return db.query(`
//   INSERT INTO
//   users (
//     email,
//     firstName,
//     lastName,
//     profileName,
//     profilePhoto
//     )
//     VALUES (
//       '${email}',
//       '${given_name}',
//       '${family_name}',
//       '${name}',
//       '${picture}'
//       )
//     ON CONFLICT DO NOTHING;`);
// }

// app.use(express.json());
answerRouter.get('/', (req, res) => {

});
answerRouter.post('/', (req, res) => {
  let body = req.body;
  console.log(body);
  res.sendStatus(204);
  // db.query(`
  // INSERT INTO
  // userAnswers (
  //   userId,
  //   questionId,
  //   isCorrect,
  //   selectedAnswer,
  //   userRating
  //   )
  //   VALUES (
  //     '${body.userId}',
  //     '${body.questionId}',
  //     '${body.isCorrect}',
  //     '${body.selectedAnswer}',
  //     '${body.userRating}'
  //     );`);
});

module.exports = answerRouter;
