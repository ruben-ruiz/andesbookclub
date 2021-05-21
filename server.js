const express = require('express');
const bodyparser = require('body-parser');
// const axios = require('axios');
require('dotenv').config();

// const db = require('./db');
const app = express();
const users = require('./db/routes/users');
const books = require('./db/routes/books');
const questions = require('./db/routes/questions');

app.use(bodyparser.json());
app.use(express.static('client/dist'));

app.use('/users', users);
app.use('/books', books);
app.use('/questions', questions);

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

const PORT = 8080;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
