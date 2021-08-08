// Setup empty JS object to act as endpoint for all routes
projectData = {};

// server port
const port = 8080;

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// post data to server
app.post('postData', (req, res) => {
    projectData = { ...req.body};
    res.send();
});

// get data from server
app.get('getData', (req, res) => {
    res.send(projectData);
});


// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

app.listen(port, () => console.log(`Server is running on port ${port}`));