import express from 'express';
import mysql from 'mysql';
export const app = express();

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

app.get('/groot', (req, res) => {
  let message = req.query.message;
  let response = {};
  if (message) {
    response = { received: `${message}`, translated: 'I am Groot!' };
  } else {
    response = { error: 'I am Groot!' };
  }
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});


