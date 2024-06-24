"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: 'regipepi',
    host: 'localhost',
    database: 'test_db',
    password: 'your_password',
    port: 5432,
});
exports.default = pool;
