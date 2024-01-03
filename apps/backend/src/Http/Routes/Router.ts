import express from "express";
import UserRouter from "./User/User";
import HealthRouter from "./Health/Health";
import AuthRouter from "./Auth/Auth";

const Router = express.Router();

Router.use(HealthRouter);
Router.use(AuthRouter);
Router.use('/user', UserRouter);

export default Router;