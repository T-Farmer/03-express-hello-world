'use strict'

const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send(`<h1>'Hello World!'</h1>`);
});

const requestTime = (req, res, next) => {
  req.requestedTime = Date.now();
  next();
}

app.use(requestTime);

//set the port
let PORT = process.env.port || 8080;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})

app.listen(8080);
