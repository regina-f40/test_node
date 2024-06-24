const express = require('express');
const router = express.Router();
const pool = require('../db');
const axios = require('axios');

const ACTION_HISTORY_URL = 'http://localhost:3001/actions';

router.post('/', async (req, res) => {
    const { name, email } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
            [name, email]
        );
        await axios.post(ACTION_HISTORY_URL, { userId: result.rows[0].id, action: 'CREATE' });
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const result = await pool.query(
            'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
            [name, email, id]
        );
        await axios.post(ACTION_HISTORY_URL, { userId: id, action: 'UPDATE' });
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
