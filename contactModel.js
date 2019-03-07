var mongoose = require('mongoose');

// Setup schema
var albumSchema = mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});



module.exports = mongoose.model('albumModel', albumSchema, 'albumCollection');