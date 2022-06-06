const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventDesc: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    creatorName: {
        type: String,
        required: true
    },
    eventLocation: {
        type: String,
        required: false
    },
    eventStart: {
        type: String,
        required: true
    },
    eventEnd: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Event', EventSchema);