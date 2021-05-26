const express = require('express');
// const axios = require('axios');
require('dotenv').config();

// const db = require('./db');
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

const PORT = 8080;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
