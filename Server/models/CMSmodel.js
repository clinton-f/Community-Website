const mongoose = require('mongoose');

const CMSSchema = mongoose.Schema({
    intro: {
        type: String,
        required: false
    },
    sitedesc: {
        type: String,
        required: false
    },
    imgdesc: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('CMS', CMSSchema);