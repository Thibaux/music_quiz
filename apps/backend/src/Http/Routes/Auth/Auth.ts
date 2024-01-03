import express from "express";
import { callback, login, refresh } from "src/Http/Controllers/Auth/AuthController";

const AuthRouter = express.Router();

AuthRouter.post('/login', login);
AuthRouter.post('/refresh', refresh);
AuthRouter.get('/callback', callback);

export default AuthRouter;