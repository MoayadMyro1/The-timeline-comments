const mongoose = require('mongoose');
var os = require("os");

const commentSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        default: os.hostname()
    },
    comment: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('commentSchema', commentSchema)