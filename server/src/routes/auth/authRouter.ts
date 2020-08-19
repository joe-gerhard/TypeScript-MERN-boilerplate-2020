import express from 'express';
import authController from '../../controllers/auth/authController';

const authRouter = express.Router();

authRouter.get('/logout', authController.logout);

authRouter.get('/facebook', authController.facebookAuth);
authRouter.get('/facebook/callback', authController.facebookCallback);

authRouter.get('/google', authController.googleAuth);
authRouter.get('/google/callback', authController.googleCallback);

authRouter.get('/linkedin', authController.linkedInAuth);
authRouter.get('/linkedin/callback', authController.linkedInCallback);

export default authRouter;
