const express = require('express');
const bodyparser = require('body-parser');
// const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(bodyparser.json());
app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.status(200).send('Request Successful');
});

const PORT = 8080;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${PORT}`);
});
