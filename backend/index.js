const express = require('express');
require('./database/Config'); 
const cors = require('cors')
const Contact = require('./database/Contact'); 

const app = express();
app.use(express.json());
app.use(cors(
//     {
//     origin: ['https://arun-kumar-gupta-portfolio.vercel.app'],
//     methods: ["POST","GET"],
//     credentials: true
// }
));

app.get("/", (req, res) => {
    res.send('Server is healthy and working!!!');
});

app.post("/submit", async (req, res) => {
    try {
        console.log('entered try');
        let temp = new Contact(req.body);
        console.log('temp',req.body);
        let result = await temp.save();
        console.log('result',result);
        res.status(201).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "An error occurred while saving the contact" });
    }
});

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});