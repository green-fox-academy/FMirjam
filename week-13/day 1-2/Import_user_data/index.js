import mysql from 'mysql';
import fs from 'fs'

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
  for(let i = 0; i < splittedContent.length; i++){
      let contentInLines = splittedContent[i].split(';')
      console.log(contentInLines)
      // if(i === 0){
      //     columns = contentInLines;

      // }
  }
} catch (err) {
  console.log(err.message);
}
