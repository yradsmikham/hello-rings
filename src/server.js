'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  const ringHeader = req.header('x-ring');

  res.send(`Hello world from the ${ringHeader} ring. This is the best ring ever!`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
