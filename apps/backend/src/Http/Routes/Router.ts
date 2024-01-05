import express from 'express';
import UserRouter from './User/User';
import HealthRouter from './Health/Health';
import AuthRouter from './Auth/Auth';
import QuizzesRouter from './Quizzes/Quizzes';

const Router = express.Router();

Router.use(HealthRouter);
Router.use(AuthRouter);
Router.use('/user', UserRouter);
Router.use('/quizzes', QuizzesRouter);

export default Router;
