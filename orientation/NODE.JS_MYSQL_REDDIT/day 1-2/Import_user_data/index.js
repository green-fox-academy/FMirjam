import mysql from 'mysql';
import fs from 'fs';
import express from 'express';

const app = express();
const PORT = 3001;

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'bookstore',
});

databaseConnection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Database Connection is OK');
});

app.use(express.json());

app.get('/', (req, res) => {
  try {
    let csvContent = fs.readFileSync('users.csv', 'utf-8');
    let splittedContent = csvContent.split('\n');
    for (let i = 0; i < splittedContent.length; i++) {
      let contentInLines = splittedContent[i].split(';');
      if (i === 0) {
        let columns = contentInLines;
        let tableCreateQuery = `CREATE TABLE IF NOT EXISTS users (
        ${columns[0]}  INT AUTO_INCREMENT,
        ${columns[1]}  VARCHAR(45) NULL,
        ${columns[2]}  VARCHAR(45) NULL,
        ${columns[3]}  VARCHAR(45) NULL,
        ${columns[4]}  VARCHAR(100) NULL,
        ${columns[5]}  VARCHAR(45) NULL,
        ${columns[6]}  VARCHAR(200) NULL,
        ${columns[7]}  VARCHAR(50) NULL,
        PRIMARY KEY ${columns[0]})`;

        databaseConnection.query(tableCreateQuery, (err, rows) => {
          if (err) {
            console.log(err.message);
            return;
          }
          console.log('Table created');
        });
      } else {
        let values = {
          id: contentInLines[0],
          prefix: contentInLines[1],
          first_name: contentInLines[2],
          last_name: contentInLines[3],
          address: contentInLines[4],
          height: contentInLines[5],
          bitcoin_address: contentInLines[6],
          color_preference: contentInLines[7],
        };
        databaseConnection.query(
          'INSERT INTO users SET ?',
          values,
          (err, rows) => {
            if (err) {
              console.log(err.message);
              return;
            }
            console.log('Data added');
          }
        );
      }
    }
  } catch (err) {
    console.log(err.message);
  }
});

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
