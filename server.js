const express = require('express');
require('dotenv').config();

const app = express();
const users = require('./db/routes/users');
const books = require('./db/routes/books');
const questions = require('./db/routes/questions');
const answers = require('./db/routes/answers');

app.use(express.json());
app.use(express.static('client/dist'));

// routes
app.use('/users', users);
app.use('/books', books);
app.use('/questions', questions);
app.use('/answers', answers);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${process.env.PORT}`);
});
