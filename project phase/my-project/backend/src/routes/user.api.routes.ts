import express from 'express';
import { userController } from '../controllers/userController/userController';

export const userRouter = express.Router();

userRouter.route('/register').post(userController.registerUser);
