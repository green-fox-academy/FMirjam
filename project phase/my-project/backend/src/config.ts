import dotenv from 'dotenv';

dotenv.config();

export default {
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  },
  jwt: {
    secretKey: process.env.JWT_SERVICE,
  },
  bcyrpt: {
    numberOfSaltRounds: 8,
  },
};
