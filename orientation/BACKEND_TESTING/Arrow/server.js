import express from 'express';
import mysql from 'mysql';
export const app = express();
const port = 3001;

app.use(express.json());

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'groot',
});

databaseConnection.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Database Connection is OK');
});

app.get('/yondu', (req, res) => {
  let distance = req.query.distance;
  let time = req.query.time;
  let speed = distance / time;
  let response = {};
  if (time === '0') {
    response = { error: 'Dividing by zero is not possible' };
    res.status(401).send(response);
  } else if (time && distance) {
    response = { distance: `${distance}`, time: `${time}`, speed: `${speed}` };
    res.status(200).send(response);
  } else {
    res.status(400).send(response);
  }
  res.send(response);
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
