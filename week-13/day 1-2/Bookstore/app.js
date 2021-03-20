import express, { query } from 'express';
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
  let category = req.query.category;
  let publisher = req.query.publisher;
  let plt = req.query.plt;
  let pgt = req.query.pgt;
  let queryFullData =
    'SELECT * FROM book_mast JOIN author ON author.aut_id = book_mast.aut_id JOIN category ON category.cate_id = book_mast.cate_id JOIN publisher ON publisher.pub_id = book_mast.pub_id';
  let queryFilter = queryFullData;

  if (category || publisher || plt || pgt) {
    let isFirstSearchField = true;
    queryFilter = queryFilter + ' WHERE ';
    if (category) {
      queryFilter =
        queryFilter + "category.cate_descrip = " + `'${category}'`;
        isFirstSearchField = false;
    }
    if (publisher) {
      if(!isFirstSearchField){
        queryFilter = queryFilter + ' AND ';
      }
      queryFilter =
        queryFilter + "publisher.pub_name = " + `'${publisher}'`;
        isFirstSearchField = false;
    }
    if (plt) {
      if(!isFirstSearchField){
        queryFilter = queryFilter + ' AND ';
      }
      queryFilter =
        queryFilter + "book_mast.book_price < " + `'${plt}'`;
        isFirstSearchField = false;
    }
    if (pgt) {
      if(!isFirstSearchField){
        queryFilter = queryFilter + ' AND ';
      }
      queryFilter =
        queryFilter + "book_mast.book_price > " + `'${pgt}'`;
        isFirstSearchField = false;
    }
  }

  databaseConnection.query(queryFilter, (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }
    res.json(rows);
  });
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
