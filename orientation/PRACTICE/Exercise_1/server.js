import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3009;

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'exercise1',
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
  res.sendFile(path.join(path.resolve() + '/public/index.html'));
});

app.get('/', (req, res) => {
  databaseConnection.query('SELECT * FROM tourist', (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
    } else {
      res.status(200).send(rows);
    }
  });
});

app.post('/add', (req, res) => {
  const id = parseInt(req.body.id);

  databaseConnection.query(
    'SELECT * FROM tourist WHERE id = ? ',
    [id],
    (err, rows) => {
      console.log(rows);
      console.log(id);
      const item = {
        id,
        name: req.body.name,
        city: req.body.city,
        price: parseInt(req.body.price),
        latitude: parseFloat(req.body.latitude),
        longitude: parseFloat(req.body.longitude),
        category: req.body.category,
        duration: parseFloat(req.body.duration),
        recommendedAge: req.body.recommendedAge,
      };
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else if (rows[0].id === id) {
        console.log(id);
        console.log(rows[0].id);
        databaseConnection.query(
          'UPDATE tourist SET ? WHERE id = ?',
          [{...item},id],
          (err, rows) => {
            if (err) {
              res.status(500).json({
                error: err.message,
              });
              return;
            } else {
              res.status(200).send('Item updated');
            }
          }
        );
      } else {
        databaseConnection.query(
          'INSERT INTO tourist SET ?',
          [item],
          (err, rows) => {
            if (err) {
              res.status(500).json({
                error: err.message,
              });
            } else {
              res.status(200).send('New item inserted');
            }
          }
        );
      }
    }
  );
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
