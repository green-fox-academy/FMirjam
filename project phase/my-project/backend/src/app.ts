import apiRouter from './routes/api.routes';
import errorHandler from './middlewares/errorHandler/errorHandler';
import express from 'express';

const app = express();

app.use('/api', apiRouter);
app.use(errorHandler);

export default app;
