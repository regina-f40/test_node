const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();
app.use(bodyParser.json());
app.use('/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
});
