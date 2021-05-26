/* eslint-disable no-unused-vars */
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASS,
  host: process.env.PGHOST,
  database: process.env.PGDB,
  port: process.env.PGPORT,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 2000,
  max: 100,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = pool;
