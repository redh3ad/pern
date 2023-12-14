const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'matyas2000',
  host: 'localhost',
  port: 5432,
  database: 'perntodo',
});

module.exports = pool;
