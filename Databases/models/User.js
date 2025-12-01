const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
}, { 
    timestamps: true // add auto 'createdAt' or 'updatedAt'
});
module.exports = mongoose.model('User', UserSchema);