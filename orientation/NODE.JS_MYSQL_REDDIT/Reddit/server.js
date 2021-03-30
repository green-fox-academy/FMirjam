import express from 'express';
import mysql from 'mysql';

const app = express();
const PORT = 3000;

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'reddit',
});

databaseConnection.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Database Connection is OK');
});

app.use(express.static('public'));
app.use(express.json());










process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});