const express = require('express');
const port = 1245;
const hostname = 'localhost';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, hostname, () => {
  console.log('...');
});

module.exports = app;
