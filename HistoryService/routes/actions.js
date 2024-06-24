"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("../db"));
const router = express_1.default.Router();
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, action } = req.body;
    try {
        yield db_1.default.query('INSERT INTO actions (user_id, action) VALUES ($1, $2)', [userId, action]);
        res.status(201).send('Action recorded');
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, page = 1, limit = 10 } = req.query;
    const offset = (Number(page) - 1) * Number(limit);
    try {
        const result = yield db_1.default.query('SELECT * FROM actions WHERE user_id = $1 LIMIT $2 OFFSET $3', [userId, limit, offset]);
        res.status(200).json(result.rows);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
exports.default = router;
