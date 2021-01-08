const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, 'This field is required.'],
        maxlength: [200, 'Your comment cannot be more than 200 characters.']
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    movie_id: {
        type: String,
    }
})

module.exports = mongoose.model.Comment || mongoose.model('Comment', CommentSchema);