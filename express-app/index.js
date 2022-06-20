const express = require("express");
const axios = require("axios");
// load environment variables from .env file
require("dotenv").config();

const API_KEY = process.env.API_KEY;

const app = express(); // create express app

// add middleware
app.use(express.static("build")); // serve static files from build folder

app.get('/api', async (req, res) => {
    // make request to api service 
    let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`)
    
    // return response from api service
    res.send(result);
})

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});