const { Pool } = require('pg');

const pool = new Pool({
    user: 'regipepi',
    host: 'localhost',
    database: 'test_db',
    password: 'Password',
    port: 5432,
});

module.exports = pool;
