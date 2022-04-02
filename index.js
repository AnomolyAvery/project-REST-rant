require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const connectToDatbase = require('./db');

const config = {
    port: process.env.PORT || 3000,
    mongoDbUri: process.env.MONOGODB_URI,
};

async function main() {
    try {
        await connectToDatbase();

        const app = express();

        app.set('view engine', 'jsx');
        app.engine('jsx', require('express-react-views').createEngine());

        app.use(express.static('public'));
        app.use(express.urlencoded({ extended: true }));
        app.use(methodOverride('_method'));

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
    } catch (err) {
        console.log(err);
    }
}

main();
