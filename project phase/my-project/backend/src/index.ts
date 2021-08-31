import app from './app';
import { db } from './data/connection';

const PORT = process.env.PORT || 3001;

db.checkConnection();

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`);
});