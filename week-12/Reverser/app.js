const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
import {sith} from './sith.js';

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.use(bodyParser.json())

app.post('/sith', (req, res) =>{
    let text = req.body.text;
    let sith_text;
    if (text === undefined){
        sith_text = {
            'error': 'Feed me some text you have to, padawan young you are. Hmmm.',
        }
    } else {
        sith_text = {
            'sith_text': sith(text),
        }
    }
    res.send(sith_text)
});
