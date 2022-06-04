const mongoose = require('mongoose');
var os = require("os");


const messageSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
   updated_at: {
        type: Date
   } ,
    Comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'commentSchema' }]
})


module.exports = mongoose.model('message', messageSchema)