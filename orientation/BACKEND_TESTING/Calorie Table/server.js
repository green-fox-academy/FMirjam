import express from 'express';
import mysql from 'mysql';
export const app = express();
const port = 3003;

app.use(express.json());

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'calories',
});

databaseConnection.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Database Connection is OK');
});

app.get('/drax', (req, res) => {
  databaseConnection.query('SELECT * FROM food', (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    } else {
      if (rows.length === 0) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else {
        res.status(200).json(rows);
      }
    }
  });
});

app.post('/drax', (req, res) => {
  databaseConnection.query('SELECT * FROM food', (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    } else if (rows.length !== 0) {
      let newFood = {
        food_name: req.body.food_name,
        amount: parseInt(req.body.amount),
        calorie: parseInt(req.body.calorie),
      };
      databaseConnection.query(
        'INSERT INTO food SET ?',
        [newFood],
        (err, rows) => {
          if (err) {
            res.status(500).json({
              error: err.message,
            });
            return;
          } else {
            res.status(200).send('New food item has been registered');
          }
        }
      );
    } else {
      res.status(400).send();
    }
  });
});
app.delete('/drax', (req, res) => {});
app.put('/drax', (req, res) => {});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
