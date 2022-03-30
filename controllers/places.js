const { Router } = require('express');
const places = require('../models/places');

const placesRouter = Router();

placesRouter.get('/', (req, res) => {
    res.render('places/index', {
        places,
    });
});

placesRouter.post('/', (req, res) => {
    if (!req.body.name) {
        return res.status(400).send('Name is required');
    }

    if (!req.body.cuisines) {
        return res.status(400).send('Cuisines is required');
    }

    const place = {
        name: req.body.name ? req.body.name : '',
        city: req.body.city ? req.body.city : 'Anytown',
        state: req.body.state ? req.body.state : 'USA',
        cuisines: req.body.cuisines ? req.body.cuisines : '',
        pic: req.body.pic ? req.body.pic : 'https://placekitten.com/400/400',
        picCredits: req.body.picCredits ? req.body.picCredits : '',
    };

    places.push(place);

    return res.status(303).redirect('/places');
});

placesRouter.get('/new', (req, res) => {
    res.render('places/new');
});

placesRouter.get('/:id', (req, res) => {
    const id = req.params.id;

    if (isNaN(id)) {
        return res.status(404).render('error');
    }

    try {
        if (!places[id]) {
            return res.status(404).send('Place not found');
        }

        const place = places[id];

        return res.render('places/show', {
            place,
            index: id,
        });
    } catch (err) {
        return res.status(500).render('error');
    }
});

module.exports = placesRouter;
