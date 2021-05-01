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
        res.status(200).json({ result: 'Successfully retrieved data' });
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
      console.log(newPlaylistItem)
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

app.delete('/awesome', (req, res) => {
  const title = req.query.title;
  let foundSong;
  databaseConnection.query(
    'SELECT * FROM playlist WHERE title = ?',
    [title],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else if (rows.length === 0) {
        res.status(404).send('No data available');
      } else {
        foundSong = rows[0];
        console.log(foundSong);
        if (foundSong.title !== title) {
          res.status(400).send('Song is not on the list');
        } else {
          databaseConnection.query(
            'DELETE FROM playlist WHERE title = ?',
            [title],
            (err, rows) => {
              if (err) {
                res.status(500).json({
                  error: err.message,
                });
                return;
              } else {
                res.status(200).send('Successfully deleted');
              }
            }
          );
        }
      }
    }
  );
});

app.put('/awesome', (req, res) => {
  const title = req.query.title;
  let foundSong;
  databaseConnection.query(
    'SELECT * FROM playlist WHERE title = ?',
    [title],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else if (rows.length === 0) {
        res.status(404).send('No data available');
      } else {
        foundSong = rows[0];
        if (foundSong.title !== title) {
          res.status(400).send('Song is not on the list');
        } else {
          let modifiedSong = {
            ...foundSong,
            rating: parseInt(req.body.rating),
          };
          databaseConnection.query(
            'UPDATE playlist SET ? WHERE title = ?',
            [modifiedSong, title],
            (err, rows) => {
              if (err) {
                res.status(500).json({
                  error: err.message,
                });
                return;
              } else {
                res.status(200).send('Successfully modified');
              }
            }
          );
        }
      }
    }
  );
});

app.get('/favourites', (req, res) => {
  databaseConnection.query(
    'SELECT * FROM playlist WHERE rating = 1 OR rating = 3 OR rating = 5',
    (err, rows) => {
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
    }
  );
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
