import express from 'express';
import mysql from 'mysql';
export const app = express();
const port = 3004;

app.use(express.json());

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'songs',
});

databaseConnection.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Database Connection is OK');
});

app.get('/awesome', (req, res) => {
  databaseConnection.query('SELECT * FROM playlist', (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    } else {
      if (rows.length === 0) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else {
        res.status(200).json(rows);
      }
    }
  });
});

app.post('/awesome', (req, res) => {
  databaseConnection.query('SELECT * FROM playlist', (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    } else if (rows.length !== 0) {
      let newPlaylistItem = {
        author_name: req.body.author,
        title: req.body.title,
        genre: req.body.genre,
        year: parseInt(req.body.year),
        rating: parseInt(req.body.rating),
      };
      databaseConnection.query(
        'INSERT INTO playlist SET ?',
        [newPlaylistItem],
        (err, rows) => {
          if (err) {
            res.status(500).json({
              error: err.message,
            });
            return;
          } else {
            res.status(200).json({ result: 'New song has been registered' });
          }
        }
      );
    } else {
      res.status(400).send();
    }
  });
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
