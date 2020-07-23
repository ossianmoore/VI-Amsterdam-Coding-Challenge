const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());

const apiUrl = "https://viamsterdam.dev/coding-challenge/feed.json";

//function for http request, response & callback
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

  //function to begin server on port that was initialised at top of page
  app.listen(PORT, function () {
    console.log('Server is running on Port: ', PORT);
  });