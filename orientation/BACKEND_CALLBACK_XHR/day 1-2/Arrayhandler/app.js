const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.use(bodyParser.json())

app.post('/arrays', (req, res) => {
  let what = req.body.what;
  let numbers = req.body.numbers;
  let result;
  if (what === 'sum') {
    result = {
      'result': sum([numbers]),
    };
  } else if (what === 'multiply') {
    result = {
      'result': multiply([numbers]),
    };
  } else if (what === 'double') {
    result = {
      'result': double(numbers),
    };
  } else {
    result = {
      'error': 'Please provide what to do with the numbers!',
    };
  }
  res.send(result);
});

function sum([array]) {
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];    
}
  return sum;
}

function multiply([array]) {
let multiplication = 1;
for (let i = 0; i < array.length; i++) {
    multiplication *= array[i];
}
  return multiplication;
}

function double(array) {
    return array.map(element => element * 2)
}
