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
            res.status(200).json({result: 'New food item has been registered'});
          }
        }
      );
    } else {
      res.status(400).send();
    }
  });
});

app.delete('/drax', (req, res) => {
  const foodName = req.query.food_name;
  let foundFood;
  databaseConnection.query('SELECT * FROM food', (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    } else if (rows.length === 0) {
      res.status(404).send('No data available');
    } else {
      foundFood = rows[0];
      console.log(foundFood);
      if (foundFood.food_name !== foodName) {
        res.status(400).send('Food is not on the list');
      } else {
        databaseConnection.query(
          'DELETE FROM food WHERE food_name = ?',
          [foodName],
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
  });
});

app.put('/drax', (req, res) => {
  const foodName = req.query.food_name;
  let foundFood;
  databaseConnection.query('SELECT * FROM food WHERE food_name = ?', [foodName], (err, rows) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
      return;
    } else if (rows.length === 0) {
      res.status(404).send('No data available');
    } else {
      foundFood = rows[0];
      if (foundFood.food_name !== foodName) {
        res.status(400).send('Food is not on the list');
      } else {
        let modifiedFood = {
          ...foundFood,
          amount: parseInt(req.body.amount),
        };
        databaseConnection.query(
          'UPDATE food SET ? WHERE food_name = ?',
          [modifiedFood, foodName],
          (err, rows) => {
            if (err) {
              res.status(500).json({
                error: err.message,
              });
              return;
            } else {
              res.status(200).send('Successfully modified');
            }
          }
        );
      }
    }
  });
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
