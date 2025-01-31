const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,   //{ type: String, required: true },
    email: String,    //{ type: String, required: true },
    messages: String,   //{ type: String, required: true },
    date: String,  //{ type: String, required: true },
    time: String //{ type: String, required: true }
});

module.exports =  mongoose.model('contact', contactSchema);