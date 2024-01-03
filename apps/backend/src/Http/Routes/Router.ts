import express from "express";
import AuthRouter from "src/Http/Routes/Auth/Auth";
import UserRouter from "src/Http/Routes/User/User";
import HealthRouter from "src/Http/Routes/Health/Health";

const Router = express.Router();

Router.use(HealthRouter);
Router.use(AuthRouter);
Router.use('/user', UserRouter);

export default Router;