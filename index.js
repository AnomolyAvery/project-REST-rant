require('dotenv').config();
const express = require('express');

const config = {
    port: process.env.PORT || 3000,
};

const app = express();

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('*', (req, res) => {
    res.status(404).send('404');
});

app.listen(config.port, () => {
    console.log(
        `Server is listening on port ${config.port} (http://localhost:${config.port})`
    );
});
