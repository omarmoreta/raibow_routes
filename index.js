// require express and dotenv for env variables
require("dotenv").config();
const express = require("express");

// initialize express and create PORT env var
const app = express();
const PORT = process.env.PORT;

// root/home path for the app
app.get("/", function (req, res) {
  res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `);
});

// Color Page
app.get("/:color", function (req, res) {
  let myColor = req.params.color;
  let uppercaseColor = myColor.charAt(0).toUpperCase() + myColor.slice(1);
  res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${myColor};">${uppercaseColor} Page</h1>
        </body>
    `);
});

// server is listening for requests on PORT
app.listen(PORT, function () {
  console.log(`Express Server is alive on: ${PORT}`);
});
