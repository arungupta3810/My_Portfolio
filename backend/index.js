const express = require('express');
require('./database/Config'); 
const cors = require('cors');
const Contact = require('./database/Contact'); 
const Project = require('./database/Project');
const LinkAnalytics = require('./database/LinkAnalytics');

const app = express();
app.use(express.json());

app.use(cors({
    origin: ['https://arun-gupta-portfolio.vercel.app', 'http://localhost:3000','https://arun-gupta.vercel.app'],
    methods: ["POST", "GET"],
    credentials: true
}));

app.get("/", (req, res) => {
    res.send('Server is healthy and working!!!');
});

app.post("/submit", async (req, res) => {
    try {
        let contact = new Contact(req.body);
        let result = await contact.save();
        res.status(201).send({ message: "Contact saved successfully", status: true, data: result });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).send({ message: "An error occurred while saving the data", status: false, data: null });
    }
});

app.post("/submit-project", async (req, res) => {
    try {
        let contact = new Project(req.body);
        let result = await contact.save();
        res.status(201).send({ message: "Contact saved successfully", status: true, data: result });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).send({ message: "An error occurred while saving the data", status: false, data: null });
    }
});

app.get("/projects", async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).send({ message: "Projects retrieved successfully", status: true, data: projects });
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).send({ message: "An error occurred while fetching projects", status: false, data: null });
    }
});

app.post("/link-analytics",async (req,res) => {
    try {
        let linkReq = new LinkAnalytics(req.body);
        let result = await linkReq.save();
        res.status(201).send({ message: null, status: true, data: result });
    } catch (error) {
        console.error('Error saving Link analytics:', error);
        res.status(500).send({ message: "An error occurred while saving the data", status: false, data: null });
    }
});

const PORT = process.env.PORT || 5005
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
