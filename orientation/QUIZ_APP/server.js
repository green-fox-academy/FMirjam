import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

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

app.get('/game', (req, res) => {});
app.get('/quetions', (req, res) => {});
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
            console.log(rows);
            const questionId = rows.insertId;
            console.log(questionId);
            const newAnswers = [
              {
                question_id: questionId,
                answer: req.body.answer_1,
                is_correct: req.body.is_correct_1,
              },
              {
                question_id: questionId,
                answer: req.body.answer_2,
                is_correct: req.body.is_correct_2,
              },
              {
                question_id: questionId,
                answer: req.body.answer_3,
                is_correct: req.body.is_correct_3,
              },
              {
                question_id: questionId,
                answer: req.body.answer_3,
                is_correct: req.body.is_correct_4,
              },
            ];
            databaseConnection.query(
              'INSERT INTO answers SET ?',
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
            res.status(200).send('New question added');
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
