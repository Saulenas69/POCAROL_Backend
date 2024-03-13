const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routes/user.routes");
const app = express();
const cors = require('cors');

// Use CORS middleware
app.use(cors());

app.use(bodyParser.json())

app.use("/",UserRoute);

module.exports = app;