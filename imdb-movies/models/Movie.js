const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    id_movieDb: {
        type: String,
    },
    rating: [
        {
            type: Number,
        }
    ],
    title: {
        type: String,
    },
    poster: {
        type: String,
    },
    release_date: {
        type: String,
    },
    genres: [
        {
            type: String,
        }
    ]
    
})

module.exports =  mongoose.model.MovieSchema || mongoose.model("Movie", MovieSchema);
