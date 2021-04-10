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

app.post('/posts', (req, res) => {
  //Postman
  const userId = req.headers.userid; //Postman headers key = userid value = 1
  console.log(userId); //1-est kikonzolozza
  databaseConnection.query(
    'SELECT * FROM users WHERE user_id = ?',
    [userId],
    (err, rows) => {
      console.log(rows);
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else if (rows.length !== 0) {
        //ha ezt akarom tesztelni akkor headers-be megadok egy létező userid-t és body-ba egy új tételt címmel és url-lel
        let newPost = {
          title: req.body.title,
          url: req.body.url,
          user_id: userId,
        };

        databaseConnection.query(
          'INSERT INTO posts SET ?',
          newPost,
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
      } else {
        res.status(401).send('Unauthorized user'); //ha rows.length === 0
      }
    }
  );
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

app.put('/posts/:id/upvote', (req, res) => {
  const post_id = req.params.id;
  const userId = parseInt(req.headers.userid);
  let foundPost;
  databaseConnection.query(
    'SELECT * FROM posts WHERE id = ?',
    [post_id],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else {
        if (rows.length === 0) {
          res.status(404).send('Post not found');
        } else {
          foundPost = rows[0];
          if (foundPost.user_id === userId) {
            res.status(400).send('This is your post, you cannot vote on it');
          } else {
            databaseConnection.query(
              'SELECT * FROM votes WHERE post_id = ? AND user_id = ?',
              [post_id, userId],
              (err, rows) => {
                if (err) {
                  res.status(500).json({
                    error: err.message,
                  });
                  return;
                } else {
                  if (
                    (rows.length !== 0 && rows[0].vote === 0) ||
                    (rows.length !== 0 && rows[0].vote === -1)
                  ) {
                    databaseConnection.query(
                      'UPDATE votes SET vote = 1 WHERE post_id = ? AND user_id = ?',
                      [post_id, userId],
                      (err, rows) => {
                        if (err) {
                          res.status(500).json({
                            error: err.message,
                          });
                          return;
                        } else {
                          res.status(200).send('Your vote has been registered');
                        }
                      }
                    );
                  } else if (rows.length !== 0 && rows[0].vote === 1) {
                    databaseConnection.query(
                      'UPDATE votes SET vote = 0 WHERE post_id = ? AND user_id = ?',
                      [post_id, userId],
                      (err, rows) => {
                        if (err) {
                          res.status(500).json({
                            error: err.message,
                          });
                          return;
                        } else {
                          res.status(200).send('Your vote is set to 0');
                        }
                      }
                    );
                  } else {
                    databaseConnection.query(
                      'INSERT INTO votes (post_id, user_id, vote) VALUES (?,?,1)',
                      [post_id, userId],
                      (err, rows) => {
                        if (err) {
                          res.status(500).json({
                            error: err.message,
                          });
                          return;
                        } else {
                          res.status(200).send('Your vote is registered');
                        }
                      }
                    );
                  }
                }
              }
            );
          }
        }
      }
    }
  );
});

app.put('/posts/:id/downvote', (req, res) => {
  const post_id = req.params.id;
  const userId = parseInt(req.headers.userid);
  let foundPost;
  databaseConnection.query(
    'SELECT * FROM posts WHERE id = ?',
    [post_id],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else {
        if (rows.length === 0) {
          res.status(404).send('Post not found');
        } else {
          foundPost = rows[0];
          if (foundPost.user_id === userId) {
            res.status(400).send('This is your post, you cannot vote on it');
          } else {
            databaseConnection.query(
              'SELECT * FROM votes WHERE post_id = ? AND user_id = ?',
              [post_id, userId],
              (err, rows) => {
                if (err) {
                  res.status(500).json({
                    error: err.message,
                  });
                  return;
                } else {
                  if (
                    (rows.length !== 0 && rows[0].vote === 0) ||
                    (rows.length !== 0 && rows[0].vote === 1)
                  ) {
                    databaseConnection.query(
                      'UPDATE votes SET vote = -1 WHERE post_id = ? AND user_id = ?',
                      [post_id, userId],
                      (err, rows) => {
                        if (err) {
                          res.status(500).json({
                            error: err.message,
                          });
                          return;
                        } else {
                          res.status(200).send('Your vote has been registered');
                        }
                      }
                    );
                  } else if (rows.length !== 0 && rows[0].vote === -1) {
                    databaseConnection.query(
                      'UPDATE votes SET vote = 0 WHERE post_id = ? AND user_id = ?',
                      [post_id, userId],
                      (err, rows) => {
                        if (err) {
                          res.status(500).json({
                            error: err.message,
                          });
                          return;
                        } else {
                          res.status(200).send('Your vote is set to 0');
                        }
                      }
                    );
                  } else {
                    databaseConnection.query(
                      'INSERT INTO votes (post_id, user_id, vote) VALUES (?,?,-1)',
                      [post_id, userId],
                      (err, rows) => {
                        if (err) {
                          res.status(500).json({
                            error: err.message,
                          });
                          return;
                        } else {
                          res.status(200).send('Your vote is registered');
                        }
                      }
                    );
                  }
                }
              }
            );
          }
        }
      }
    }
  );
});

app.delete('/posts/:id', (req, res) => {
  const post_id = req.params.id; //POSTMAN tesztelésnél: /posts/2
  const userId = parseInt(req.headers.userid);
  // console.log(userId)
  let foundPost;
  // console.log(post_id);
  databaseConnection.query(
    'SELECT * FROM posts WHERE id = ?',
    [post_id],
    (err, rows) => {
      console.log(rows); //2-es id-hoz tartozó post-ot mutatja ha id = 2
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else if (rows.length === 0) {
        res.status(404).send('Post not found'); //ha id = 20
      } else {
        foundPost = rows[0];
        // console.log(foundPost);
        // console.log(foundPost.user_id);
        // console.log(userId);
        if (foundPost.user_id !== userId) {
          res.status(400).send('The post is not yours idiot');
        } else {
          databaseConnection.query(
            'DELETE FROM posts WHERE id = ?',
            [post_id],
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

app.put('/posts/:id', (req, res) => {});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
