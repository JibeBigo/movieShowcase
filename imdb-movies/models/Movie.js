const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    id_movieDb = {
        type: String,
    },
    rating: [
        {
            type: Number,
        }
    ]
})

export default mongoose.models.MovieSchema || mongoose.model('Movie', MovieSchema);