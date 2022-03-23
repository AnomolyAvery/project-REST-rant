const { Router } = require('express');

const placesRouter = Router();

placesRouter.get('/', (req, res) => {
    res.send('GET /places');
});

module.exports = placesRouter;
