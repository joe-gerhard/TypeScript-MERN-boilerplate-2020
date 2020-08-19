import express from 'express';
import userController from '../../controllers/user/userController';

const userRouter = express.Router();

userRouter.get('/', userController.getUser);

export default userRouter;
