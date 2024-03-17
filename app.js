const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routes/user.routes");
const PostRoute = require("./routes/post.routes");
const app = express();
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json())

app.use("/",UserRoute);

app.use("/",PostRoute);

module.exports = app;