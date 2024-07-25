const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenresSchema = new Schema({
    name: { type: String, min: 3, max: 100 }
})

GenresSchema.virtual('url').get(function () {
    return '/catelog/genres/' + this._id
})

module.exports = mongoose.model('Genres', GenresSchema);