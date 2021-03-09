const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static('assets'));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
 let input = req.query.input;
 let result;
 
  res.send(result);
});

app.get('/greeter', (req, res) => {
    let name = req.query.name;
    let title = req.query.title;
    let result;
    if(name !== undefined && title !== undefined){
        result = {
            'welcome_message': `Oh, hi there ${name}, my dear ${title}!`
          }
    } else if (name === undefined && title === undefined){
        result = {
            'error': `Please provide ${name} and ${title}!`
        }
    } else if (name !== undefined && title === undefined){
        result = {
            'error': `Please provide title!`
        }
    } else {
        result = {
            'error': `Please provide name!`
        }
    }
    res.send(result);
});