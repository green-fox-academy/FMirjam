import express from 'express';
import bodyParser from 'body-parser';
import { sithText } from './sith.js';
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.post('/sith', (req, res) => {
  let text = req.body.text;
  let sith_text;
  if (text === undefined) {
    sith_text = {
      error: 'Feed me some text you have to, padawan young you are. Hmmm.',
    };
  } else {
    sith_text = {
      sith_text: sithText(text),
    };
  }
  res.send(sith_text);
});
