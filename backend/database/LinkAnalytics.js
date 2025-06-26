const mongoose = require('mongoose');

const linkAnalytics = new mongoose.Schema({
    name : String,
    date : String,
    time : String
})

module.exports =  mongoose.model('linkAnalytics', linkAnalytics);