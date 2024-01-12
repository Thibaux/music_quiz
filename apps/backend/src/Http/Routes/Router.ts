import express from 'express';
import HealthRouter from './Health/Health';
import AuthRouter from './Auth/Auth';
import QuizRouter from './Quiz/Quiz';
import SongRouter from './Song/Song';

const Router = express.Router();

Router.use(HealthRouter);
Router.use('/auth', AuthRouter);
Router.use('/quiz', QuizRouter);
Router.use('/songs', SongRouter);

export default Router;
