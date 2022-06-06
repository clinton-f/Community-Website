const mongoose = require('mongoose');

const BusinessCardSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: false
    },
    bName: {
        type: String,
        required: true
    },
    bServ: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('BusinessCard', BusinessCardSchema);