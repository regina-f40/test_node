"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const actions_1 = __importDefault(require("./routes/actions"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/actions', actions_1.default);
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Action History Service is running on port ${PORT}`);
});
