const mongoose = require('mongoose');
const validator = require('validator');

const Team = mongoose.model('Team', {
    tname: {
        type: String,
        required: true,
        trim: true
    },
    members: {
        type: Number,
        required: true,
        trim: true
    },
    tlead: {
        type: Boolean,
        default: false,
    }
});

module.exports = Team;