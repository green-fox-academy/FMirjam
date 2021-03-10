const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');


app.use(express.static('assets'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let input = req.query.input;
  let result;
  if (input !== undefined){
    result = {
      'received': parseInt(input),
      'result': parseInt(input * 2),
    };
  } else {
    result = {
      'error': 'Please provide an input!',
    };
  }
  res.send(result);
});

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;
  let result;
  if (name !== undefined && title !== undefined) {
    result = {
      'welcome_message': `Oh, hi there ${name}, my dear ${title}!`,
    };
  } else if (name === undefined && title === undefined) {
    result = {
      'error': `Please provide name and title!`,
    };
  } else if (name === undefined) {
    result = {
      'error': `Please provide a name!`,
    };
  } else {
    result = {
      'error': `Please provide a title!`,
    };
  }
  res.send(result);
});

app.get('/appenda/:text', (req, res) => {
  let text = req.params.text;
  let result;
  if (text !== undefined) {
    result = {
      'appended': text + 'a',
    };
  } else {
    result = {
      'error': 'Please provide an input!',
    };
  }
  res.send(result);
});

app.post('/dountil/:action', (req, res) => {
  let until = req.body.until;
  let action = req.params.action;
  let result;
  if (action === 'sum') {
    result = {
        'until': until,
        'result': sum(until),
    }
  } else  if (action === 'factor') {
    result = {
        'until': until,
        'result': factor(until),
    }
  } else {
      result = {
    'error': 'Please provide a number!',
    }
  }
    res.send(result);
});

function sum(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i;
  }
  return sum;
}

function factor(number) {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}
