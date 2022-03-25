require('dotenv').config();
const express = require('express');

const config = {
    port: process.env.PORT || 3000,
};

const app = express();

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.status(404).render('error');
});

app.listen(config.port, () => {
    console.log(
        `Server is listening on port ${config.port} (http://localhost:${config.port})`
    );
});
