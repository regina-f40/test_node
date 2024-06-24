import express from 'express';
import bodyParser from 'body-parser';
import actionRoutes from './routes/actions';

const app = express();
app.use(bodyParser.json());
app.use('/actions', actionRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Action History Service is running on port ${PORT}`);
});
