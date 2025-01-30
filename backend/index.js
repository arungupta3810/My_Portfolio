const express = require('express');
require('./database/Config'); 
const cors = require('cors');
const Contact = require('./database/Contact'); 

const app = express();
app.use(express.json());

// Corrected CORS Configuration
app.use(cors({
    origin: ['https://arun-gupta-portfolio.vercel.app', 'http://localhost:3000'],
    methods: ["POST", "GET"],
    credentials: true
}));

app.get("/", (req, res) => {
    res.send('Server is healthy and working!!!');
});

app.post("/submit", async (req, res) => {
    try {
        console.log('Received request body:', req.body);
        
        let contact = new Contact(req.body);
        let result = await contact.save();
        
        console.log('Saved contact:', result);
        res.status(201).send(result);
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).send({ error: "An error occurred while saving the contact" });
    }
});

const PORT = process.env.PORT || 5005
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
