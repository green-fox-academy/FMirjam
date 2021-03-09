const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('assets'));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
