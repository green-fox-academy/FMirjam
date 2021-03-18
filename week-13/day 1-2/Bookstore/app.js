import express from 'express';
import mysql from 'mysql';

const app = express();
const PORT = 3000;

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'bookstore',
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

app.get('/booktitles', (req, res) => {
  databaseConnection.query(
    'SELECT book_name FROM bookstore.book_mast;',
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      }
      res.json(rows);
    }
  );
});

app.get('/fulldata', (req, res) => {
  databaseConnection.query(
    'SELECT book_name, aut_id, cate_id, pub_id, book_price FROM bookstore.book_mast;',
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      }
      res.json(rows);
    }
  );
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
