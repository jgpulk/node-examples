var mongoose = require('mongoose')

var s3Schema = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
})

s3Schema.set('timestamps',true);
module.exports = mongoose.model('s3storage', s3Schema);