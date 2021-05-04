import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3010;

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'exercise2',
});

databaseConnection.connect((err) => {
    if (err) {
      console.error('Cannot connect to the database', err);
      return;
    }
    console.log('Database Connection is OK');
  });
  app.use(cors());
  app.use(express.static('public'));
  app.use(express.json());

  app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve() + '/public/auction.html'));
  });

  process.on('uncaughtException', (err) => {
    console.log('Fatal error occured', err.message);
    process.exit(1);
  });
  
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });