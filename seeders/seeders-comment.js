require('dotenv').config();
const connectToDatbase = require('../db');
const PlaceModel = require('../models/places');
const CommentModel = require('../models/comment');

(async () => {
    await connectToDatbase();
    let place = await PlaceModel.findOne({
        name: 'H-Thai-ML',
    });

    let comment = await CommentModel.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended',
    });

    place.comments.push(comment);

    await place.save();

    process.exit();
})();
