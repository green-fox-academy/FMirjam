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
  databaseConnection.query('SELECT book_name FROM book_mast', (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }
    res.json(rows);
  });
});

app.get('/fulldata', (req, res) => {
  databaseConnection.query(
    'SELECT * FROM book_mast JOIN author ON author.aut_id = book_mast.aut_id JOIN category ON category.cate_id = book_mast.cate_id JOIN publisher ON publisher.pub_id = book_mast.pub_id;',
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

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
