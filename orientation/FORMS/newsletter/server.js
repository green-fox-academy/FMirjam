import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('The server is running.');
});

app.post('/signup', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  res.send(`<h1>Thanks ${name}, we will send updates to ${email}</h1>`);
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
