const { Router } = require('express');
const { isValidObjectId } = require('mongoose');
const PlaceModel = require('../models/places');

const placesRouter = Router();

placesRouter.get('/', async (req, res) => {
    const places = await PlaceModel.find();

    res.render('places/index', {
        places,
    });
});

placesRouter.post('/', async (req, res) => {
    const { name, cuisines, city, state, founded, pic } = req.body;

    if (!name || !cuisines) {
        return res.status(400).send('Name and cuisines are required');
    }

    const place = new PlaceModel({
        name,
        cuisines,
    });

    if (pic) {
        place.pic = pic;
    }

    if (city) {
        place.city = city;
    }

    if (state) {
        place.state = state;
    }

    if (founded) {
        place.founded = founded;
    }

    await place.save();

    return res.status(303).redirect('/places');
});

placesRouter.get('/new', (req, res) => {
    res.render('places/new');
});

placesRouter.get('/:id', async (req, res) => {
    const id = req.params.id;

    if (!isValidObjectId(id)) {
        return res.status(404).render('error');
    }

    try {
        const place = await PlaceModel.findById(id);

        return res.render('places/show', {
            place,
        });
    } catch (err) {
        return res.status(500).render('error');
    }
});

placesRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;

    if (!isValidObjectId(id)) {
        return res.status(404).render('error');
    }

    try {
        const place = await PlaceModel.findById(id);

        if (!place) {
            return res.status(404).render('error');
        }

        await PlaceModel.findByIdAndDelete(id);

        return res.status(303).redirect('/places');
    } catch (err) {
        return res.status(500).render('error');
    }
});

placesRouter.get('/:id/edit', async (req, res) => {
    const id = req.params.id;

    if (!isValidObjectId(id)) {
        return res.status(404).render('error');
    }

    try {
        const place = await PlaceModel.findById(id);

        if (!place) {
            return res.status(404).render('error');
        }

        return res.render('places/edit', {
            place,
        });
    } catch (err) {
        return res.status(500).render('error');
    }
});

placesRouter.put('/:id', async (req, res) => {
    const id = req.params.id;

    if (!isValidObjectId(id)) {
        return res.status(404).render('error');
    }

    try {
        const place = await PlaceModel.findById(id);

        place.name = req.body.name ? req.body.name : place.name;
        place.city = req.body.city ? req.body.city : place.city;
        place.state = req.body.state ? req.body.state : place.state;
        place.cuisines = req.body.cuisines ? req.body.cuisines : place.cuisines;
        place.pic = req.body.pic ? req.body.pic : place.pic;
        place.picCredits = req.body.picCredits
            ? req.body.picCredits
            : place.picCredits;
        place.founded = req.body.founded ? req.body.founded : place.founded;

        await place.save();

        return res.status(303).redirect(`/places/${id}`);
    } catch (err) {
        return res.status(500).render('error');
    }
});

module.exports = placesRouter;
