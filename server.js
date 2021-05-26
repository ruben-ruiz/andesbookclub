const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();
const users = require('./db/routes/users');
const books = require('./db/routes/books');
const questions = require('./db/routes/questions');

app.use(express.json());
app.use(express.static('client/dist'));

// routes
app.use('/users', users);
app.use('/books', books);
app.use('/questions', questions);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${process.env.PORT}`);
});
