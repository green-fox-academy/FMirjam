import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3011;

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'ratemymentor',
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

app.get('/error', (req, res) => {
  res.sendFile(path.join(path.resolve() + '/public/error.html'));
});

app.get('/error2', (req, res) => {
  res.sendFile(path.join(path.resolve() + '/public/error2.html'));
});

app.post('/mentor', (req, res) => {
  const name = req.body.name;
  const className = req.body.className;
  databaseConnection.query(
    'SELECT * FROM mentors WHERE name = ?',
    [name],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else if (rows.length !== 0) {
        res.redirect('http://localhost:3011/error');
      } else {
        databaseConnection.query(
          'INSERT INTO mentors SET name = ?, className = ?',
          [name, className],
          (err, rows) => {
            if (err) {
              res.status(500).json({
                error: err.message,
              });
              return;
            } else {
              res.status(200).json({
                message: 'Successfull!y inserted', //redirect to get/mentor/:id endpoint
              });
            }
          }
        );
      }
    }
  );
});

app.get('/mentor/:id', (req, res) => {
  const id = req.params.id;
  databaseConnection.query(
    'SELECT name, className FROM mentors WHERE id = ?',
    [id],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else if (rows.length === 0) {
        res.redirect('http://localhost:3011/error2');
      } else {
        res.status(200).send(rows);
      }
    }
  );
});

app.get('/api/mentors', (req, res) => {
  const className = req.body.className;
  databaseConnection.query(
    'SELECT name FROM mentors WHERE className = ?',
    [className],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else if (rows.length === 0) {
        res.status(404).json({
          message: 'Class does not have mentors',
        });
      } else {
        res.status(200).send(rows);
      }
    }
  );
});

app.put('/api/mentors/:mentorId', (req, res) => {
  const mentorId = req.params.mentorId;
  const name = req.body.name;
  const className = req.body.className;
  databaseConnection.query(
    'SELECT * FROM mentors WHERE id = ?',
    [mentorId],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else if (rows.length === 0) {
        res.status(404).json({
          message: 'No mentor exists for the given id',
        });
      }
      //   else if (rows.length !== 0 && rows[0].className !== className) {
      //     res.status(400).json({
      //       message: 'Invalid class name',
      //     });
      //   }
      else {
        databaseConnection.query(
          'UPDATE mentors SET name = ?, className = ? WHERE id = ?',
          [name, className, mentorId],
          (err, rows) => {
            if (err) {
              res.status(500).json({
                error: err.message,
              });
            } else {
              res.status(200).json({
                message: 'Successfully updated',
              });
            }
          }
        );
      }
    }
  );
});

app.delete('/api/mentors/:mentorId', (req, res) => {
  const mentorId = req.params.mentorId;
  databaseConnection.query(
    'SELECT * FROM mentors WHERE id = ?',
    [mentorId],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else if (rows.length === 0) {
        res.status(404).json({
          message: 'No mentor exists for the given id',
        });
      } else {
        databaseConnection.query(
          'DELETE FROM mentors WHERE id = ?',
          [mentorId],
          (err, rows) => {
            if (err) {
              res.status(500).json({
                error: err.message,
              });
            } else {
              res.status(200).json({
                message: 'Successfully deleted',
              });
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
