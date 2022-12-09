// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 8080;

app.listen(port, function () {
  console.log("Server Running");
  console.log(`The localhost is ${port}`);
});

// Respond with JS object when a GET request is made to the homepage
app.get("/all", function (request, respond) {
  respond.send(projectData);
});

// POST method route

app.post("/add", function (request, response) {
  projectData = request.body;
  console.log(projectData);
});
