import express from "express";
import { Callback, Login, Refresh } from "../../Controllers/Auth/AuthController";

const AuthRouter = express.Router();

AuthRouter.post('/login', Login);
AuthRouter.post('/refresh', Refresh);
AuthRouter.get('/callback', Callback);

export default AuthRouter;