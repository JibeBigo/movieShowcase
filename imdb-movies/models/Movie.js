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

export default mongoose.model.MovieSchema || mongoose.model('Movie', MovieSchema);