import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3010;

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'exercise2',
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
  res.sendFile(path.join(path.resolve() + '/public/auction.html'));
});

app.get('/api/items', (req, res) => {
  databaseConnection.query('SELECT * FROM items', (err, rows) => {
    console.log(rows);
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

app.post('/api/items/:id/bids', (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const amount = parseInt(req.body.amount);
  let foundItem;
  let baseDate = new Date().toString();
  databaseConnection.query(
    'SELECT * FROM items WHERE id = ?',
    [id],
    (err, rows) => {
      if (err) {
        res.status(500).json({
          error: err.message,
        });
        return;
      } else if (amount < rows[0].highestBid) {
        res.status(400).json({
          message: 'Your bid is below the highest bid!',
        });
        return;
      } else if (baseDate > rows[0].expiryDate) {
        res.status(400).json({
          message: 'The auction is over!',
        });
        return;
      } else {
        foundItem = rows[0];
        const modifiedItem = {
          ...foundItem,
          highestBid: amount,
          highestBiddername: name,
        };
        databaseConnection.query(
          'UPDATE items SET ? WHERE id = ?',
          [modifiedItem, id],
          (err, rows) => {
            if (err) {
              res.status(500).json({
                error: err.message,
              });
            } else {
              res.status(200).json({
                message: 'Successfull!',
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
