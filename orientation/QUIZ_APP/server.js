import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3004;

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'quiz',
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

app.get('/game', (req, res) => {
  res.sendFile(path.join(path.resolve() + '/public/game.html'));
});
app.get('/quetions', (req, res) => {
  res.sendFile(path.join(path.resolve() + '/public/questions.html'));
});
app.get('/api/game/', (req, res) => {
  databaseConnection.query('SELECT * FROM questions', (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    } else if (rows.length === 0) {
      res.status(404).send('Question not found');
    } else {
      const randomNumber = Math.floor(Math.random() * (rows.length + 1));
      const randomQuestion = rows[randomNumber];
      const foundQuestionId = randomQuestion.id;
      databaseConnection.query(
        'SELECT * FROM answers WHERE question_id = ?',
        [foundQuestionId],
        (err, answers) => {
          if (err) {
            res.status(500).json({
              error: err.message,
            });
            return;
          } else {
            const result = {
              id: foundQuestionId,
              question: randomQuestion.question,
              answers,
            };
            res.status(200).send(result);
          }
        }
      );
    }
  });
});

app.get('/api/questions', (req, res) => {
  databaseConnection.query('SELECt * FROM questions', (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    } else {
      res.status(200).send(rows);
    }
  });
});

app.post('/api/questions', (req, res) => {
  databaseConnection.query('SELECT * FROM questions', (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    } else {
      const newQuestion = {
        question: req.body.question,
      };
      databaseConnection.query(
        'INSERT INTO questions SET ?',
        newQuestion,
        (err, rows) => {
          if (err) {
            res.status(500).json({
              error: err.message,
            });
            return;
          } else {
            const questionId = rows.insertId;
            const answers = req.body.answers;
            const newAnswers = [
              questionId,
              answers[0].answer_1,
              answers[0].is_correct,

              questionId,
              answers[1].answer_2,
              answers[1].is_correct,

              questionId,
              answers[2].answer_3,
              answers[2].is_correct,

              questionId,
              answers[3].answer_4,
              answers[3].is_correct,
            ];
            databaseConnection.query(
              'INSERT INTO answers(question_id, answer, is_correct) VALUES(?,?,?),(?,?,?),(?,?,?),(?,?,?)',
              newAnswers,
              (err, rows) => {
                if (err) {
                  res.status(500).json({
                    error: err.message,
                  });
                  return;
                } else {
                  res.status(200).send('Answers registered');
                }
              }
            );
          }
        }
      );
    }
  });
});

app.delete('/api/questions/:id', (req, res) => {
  const id = req.params.id;
  databaseConnection.query(
    'SELECT * FROM questions WHERE id = ?',
    [id],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else if (rows.length === 0) {
        res.status(404).send('Question not found');
      } else {
        databaseConnection.query(
          'DELETE FROm questions WHERE id = ?',
          [id],
          (err, rows) => {
            if (err) {
              res.status(500).json({
                error: err.message,
              });
              return;
            } else {
              res.status(200).send('Selected question is deleted');
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
