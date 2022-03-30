const { Router } = require('express');

const placesRouter = Router();

placesRouter.get('/', (req, res) => {
    let places = [
        {
            name: 'H-Thai-ML',
            city: 'Seattle',
            state: 'WA',
            cuisines: 'Thai, Pan-Asian',
            pic: '/images/jerome-thai-food.jpg',
            picCredits: `Photo by Jerome Jome on Unsplash`,
        },
        {
            name: 'Coding Cat Cafe',
            city: 'Phoenix',
            state: 'AZ',
            cuisines: 'Coffee, Bakery',
            pic: '/images/coding-cafe.jpg',
            picCredits: `Photo by Rod Long on Unsplash`,
        },
    ];

    res.render('places/index', {
        places,
    });
});

placesRouter.get('/new', (req, res) => {
    res.render('places/new');
});

module.exports = placesRouter;
