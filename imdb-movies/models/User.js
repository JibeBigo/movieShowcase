const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'This field is required.'],
        unique: true,
        minlength: [3, 'Username must be at least 3 characters.']
    }, 
    email: {
        type: String,
        required: [true, 'This field is required.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'This field is required.'],
        minlength: [8, 'Password must be at least 8 characters.']
    },
    // rating: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'Rate'
    //     }
    // ],
    favorite_movies: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie'
        }
    ]
})

module.exports = mongoose.model.User || mongoose.model('User', UserSchema);