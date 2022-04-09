const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    author: {
        type: String,
        default: 'Anonymous',
    },
    rant: {
        type: Boolean,
        default: false,
    },
    stars: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
        default: '',
    },
});

const CommentModel = model('Comment', commentSchema);

module.exports = CommentModel;
