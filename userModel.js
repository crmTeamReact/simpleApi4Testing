const mongoose = require('mongoose');

// Setup schema
const userSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});



module.exports = mongoose.model('userModel', userSchema, 'creds');