const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.get('/down', (req, res) => {
  res.status(500).send('ERROR');
});

app.get('/slow', (req, res) => {
  setTimeout(() => {
    res.send('SLOW RESPONSE');
  }, 10000);
});

app.listen(3000, () => console.log('Server running'));
