import express, { Request, Response } from 'express';
import pool from '../db';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    const { userId, action } = req.body;
    try {
        await pool.query(
            'INSERT INTO actions (user_id, action) VALUES ($1, $2)',
            [userId, action]
        );
        res.status(201).send('Action recorded');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', async (req: Request, res: Response) => {
    const { userId, page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);

    try {
        const result = await pool.query(
            'SELECT * FROM actions WHERE user_id = $1 LIMIT $2 OFFSET $3',
            [userId, limit, offset]
        );
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json(err);
    }
});

export default router;
