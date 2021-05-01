import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
const PORT = 3008;

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'foxplayer',
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

app.get('/playlists', (req, res) => {
  databaseConnection.query('SELECT * FROM playlists', (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    } else {
      res.status(200).send(rows);
    }
  });
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
