import express from 'express';
import mysql from 'mysql';
export const app = express();
const port = 3001;

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

app.get('/rocket', (req,res) => {

})

app.get('/rocket/fill', (req,res) => {

})

process.on('uncaughtException', (err) => {
  console.log('Fatal error occured', err.message);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
