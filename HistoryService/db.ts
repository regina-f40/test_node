import { Pool } from 'pg';

const pool = new Pool({
    user: 'regipepi',
    host: 'localhost',
    database: 'test_db',
    password: 'your_password',
    port: 5432,
});

export default pool;
