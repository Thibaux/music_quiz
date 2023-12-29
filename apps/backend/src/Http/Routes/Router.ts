import express from "express";
import AuthRouter from "src/Http/Routes/Auth/Auth";
import UserRouter from "src/Http/Routes/User/User";

const Router = express.Router();

Router.use(AuthRouter);
Router.use('/user', UserRouter);

export default Router;