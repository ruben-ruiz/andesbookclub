const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();
const session = require('express-session');

const users = require('./db/routes/users');
const books = require('./db/routes/books');
const questions = require('./db/routes/questions');
const answers = require('./db/routes/answers');

app.use(express.json());
app.use(express.static('client/dist'));

// session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));

app.get('/click', (req, res) => {
  if (req.session.page_views) {
    req.session.page_views++;
    console.log(req.session);
    res.send('You visited this page ' + req.session.page_views + ' times' + req.session.userId);
  } else {
    req.session.page_views = 1;
    res.send('Welcome to this page for the first time!');
  }
});

// routes
app.use('/users', users);
app.use('/books', books);
app.use('/questions', questions);
app.use('/answers', answers);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${process.env.PORT}`);
});
