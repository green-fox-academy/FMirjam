import express from 'express';
import mysql from 'mysql';

const app = express();
const PORT = 3001;

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

app.get('/hello', (req, res) => {
  const user = req.headers.user;
  if (user === undefined) {
    res.send('hello world');
  } else {
    res.send(`hello ${user}`);
  }
});

app.get('/posts', (req, res) => {
  databaseConnection.query('SELECT * from posts', (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }
    res.status(200).json(rows);
  });
});

app.post('/posts', (req, res) => { //Postman
  let newPost = {
    title: req.body.title,
    url: req.body.url,
  };

  databaseConnection.query('INSERT INTO posts SET ?', newPost, (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    }
    res.status(200).json(rows);
  });
});

app.get('/posts/:id', (req, res) => {
  const id = req.params.id;
  databaseConnection.query(
    'SELECT * FROM posts WHERE posts.id = ?',
    [id],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      }
      res.status(200).json(rows);
    }
  );
});

app.put('/posts/:id/upvote', (req, res) => { //Postman
  let id = req.params.id;
  databaseConnection.query(
    'UPDATE posts SET score = score + 1 WHERE id = ?',
    [id],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      }
      res.status(200).json(rows);
    }
  );
});

app.put('/posts/:id/downvote', (req, res) => { //Postman
  const id = req.params.id;
  console.log(id);
  databaseConnection.query(
    'UPDATE posts SET score = score - 1 WHERE id = ?',
    [id],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      }
      res.status(200).json(rows);
    }
  );
});

app.delete('/posts/:id', (req, res) => {});
app.put('/posts/:id', (req, res) => {});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
