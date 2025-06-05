const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    id: Number,
    logo: String,
    live: Boolean,
    name: String,
    link: String,
    award: Boolean,
    technology: String,
    Description: String,
    knowMoreDescription: String
});

module.exports =  mongoose.model('project', projectSchema);