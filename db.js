const Pool = require('pg').Pool;

//Connect your database
const pool = new Pool({
  user: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: 5432,
  database: 'map_coordinates',
  password: 'login123!',
});

module.exports = pool;
