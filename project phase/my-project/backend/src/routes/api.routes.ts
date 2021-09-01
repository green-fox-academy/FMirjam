import cors from 'cors';
import express from 'express';
import { userRouter } from './user.api.routes';

const apiRouter = express.Router();
apiRouter.use(cors());
apiRouter.use(express.json());
apiRouter.use('/user', userRouter);

export default apiRouter;