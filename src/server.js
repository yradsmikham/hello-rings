'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const PATH = '/hello-rings/v1';

// App
const app = express();
app.get(PATH, (req, res) => {
  const ringHeader = req.header('x-ring');

  res.send(`Hello world from the ${ringHeader} ring`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
