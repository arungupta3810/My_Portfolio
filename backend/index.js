const express = require('express');
require('./database/Config'); 
const cors = require('cors')
const Contact = require('./database/Contact'); 

const app = express();
app.use(express.json());
app.use(cors({
    origin: ['https://arun-kumar-gupta-portfolio.vercel.app','https://arun-kumar-gupta-portfolio.vercel.app/'],
    methods: ["POST","GET"],
    credentials: true
}));

app.get("/", (req, res) => {
    res.send('Server is healthy and working!!!');
});

app.post("/submit", async (req, res) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        let temp = new Contact(req.body);
        let result = await temp.save();
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
