import express from 'express';
import { Callback, Login, LoginValidation, Refresh } from '../../Controllers/Auth/AuthController';
import { validate } from '../../Validation/Validation';

const AuthRouter = express.Router();

AuthRouter.post('/login', validate([LoginValidation]), Login);
AuthRouter.post('/refresh', Refresh);
AuthRouter.get('/callback', Callback);

export default AuthRouter;
