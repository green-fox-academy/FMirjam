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

app.get('/posts', (req, res) => {
  let getPosts  //SELECT...
  databaseConnection.query(getPosts, (err, rows) => { 
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }
    res.json(rows);
  });
});

app.post('/posts', (req, res) => {
  let newPost = {
    title: JSON.parse(req.body).title,
    url: JSON.parse(req.body).url,
  };

  databaseConnection.query('INSERT INTO posts SET ?', newPost, (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }
    res.json(rows);
  });
});


app.put('/posts/:id/upvote', (req, res) => {});
app.put('/posts/:id/downvote', (req, res) => {});
app.delete('/posts/:id', (req, res) => {});
app.put('/posts/:id', (req, res) => {});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
