const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/My_Portfolio');   //local db
mongoose.connect(process.env.DB_URL);   //live db