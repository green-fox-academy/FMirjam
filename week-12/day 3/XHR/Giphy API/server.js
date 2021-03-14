import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 3000;

app.use(express.static('assets'));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'index.html');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
