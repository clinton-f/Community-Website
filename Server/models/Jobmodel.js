const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
    jobName: {
        type: String,
        required: true
    },
    jobDesc: {
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
    jobLocation: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Job', JobSchema);