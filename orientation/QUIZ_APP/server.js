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
app.get('/api/questions', (req, res) => {});
app.post('/api/questions', (req, res) => {});
app.delete('/api/questions/:id', (req, res) => {});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
