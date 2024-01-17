import express from 'express';
import SongRouter from './Song/Song';
import QuizSessionRouter from './QuizSession/QuizSession';

const Router = express.Router();

Router.use('/quiz-session', QuizSessionRouter);
Router.use('/songs', SongRouter);

export default Router;
