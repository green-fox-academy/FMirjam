import express from 'express';
import mysql from 'mysql';
export const app = express();
const port = 3002;

app.use(express.json());

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
});

databaseConnection.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Database Connection is OK');
});

app.get('/rocket', (req, res) => {
  res.status(200).send({
    caliber25: 0,
    caliber30: 0,
    caliber50: 0,
    shipstatus: 'empty',
    ready: false,
  });
});

app.get('/rocket/fill', (req, res) => {
  let caliber = req.query.caliber;
  let amount = req.query.amount;
  let response = {};
  let maximumAmount = 12500;

  function shipStatus(amount, maximumAmount) {
    let ratio = amount / maximumAmount;
    let ratioInPercentage = ratio * 100;
    if (ratio === 0) {
      return 'empty';
    } else if (ratio === 1) {
      return 'full';
    } else if (ratio > 1) {
      return 'overloaded';
    } else {
      return `${ratioInPercentage}%`;
    }
  }
  function ready(amount, maximumAmount) {
    let ratio = amount / maximumAmount;
    if (ratio === 1) {
      return true;
    } else {
      return false;
    }
  }
  if (caliber && amount) {
    response = {
      received: `${caliber}`,
      amount: `${amount}`,
      shipstatus: shipStatus(amount, maximumAmount),
      ready: ready(amount, maximumAmount),
    };
    res.status(200).send(response);
    console.log(response);
  }
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
