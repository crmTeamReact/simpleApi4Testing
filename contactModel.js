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

// Export Contact model
module.exports = mongoose.model('albumModel', albumSchema, 'albumCollection');

// module.exports.get = function (callback, limit) {
//     Contact.find(callback).limit(limit);
// }