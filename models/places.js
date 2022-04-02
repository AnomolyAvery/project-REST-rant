const { Schema, model } = require('mongoose');

const placeSchema = new Schema({
    name: { type: String, required: true },
    pic: String,
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: Number,
});

const PlaceModel = model('Place', placeSchema);

module.exports = PlaceModel;
