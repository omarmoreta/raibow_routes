// require express and dotenv for env variables
require("dotenv").config();
const express = require("express");

// initialize express and create PORT env var
const app = express();
const PORT = process.env.PORT;

// root/home path for the app
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// server is listening for requests on PORT
app.listen(PORT, function () {
  console.log(`Express Server is alive on: ${PORT}`);
});
