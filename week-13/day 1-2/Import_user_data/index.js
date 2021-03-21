import mysql from 'mysql';
import fs from 'fs';

const databaseConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'bookstore',
});

databaseConnection.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Database Connection is OK');
});

try {
  let csvContent = fs.readFileSync('users.csv', 'utf-8');
  let splittedContent = csvContent.split('\n');
  console.log(splittedContent);
  for (let i = 0; i < splittedContent.length; i++) {
    let contentInLines = splittedContent[i].split(';');
    console.log(contentInLines);
    if (i === 0) {
      let columns = contentInLines;
      let tableCreateQuery = `CREATE TABLE IF NOT EXISTS users (
        ${columns[0]}  INT NOT NULL AUTO_INCREMENT,
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
          res.status(500).json({
            error: err.message,
          });
          return;
        }
        res.json();
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
            res.status(500).json({
              erro: err.message,
            });
            return;
          }
          res.json();
        }
      );
    }
  }
} catch (err) {
  console.log(err.message);
}
