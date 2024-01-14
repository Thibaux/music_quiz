import express from 'express';
import QuizRouter from './Quiz/Quiz';
import SongRouter from './Song/Song';
import QuizSessionRouter from './QuizSession/QuizSession';

const Router = express.Router();

Router.use('/quiz', QuizRouter);
Router.use('/quiz-session', QuizSessionRouter);
Router.use('/songs', SongRouter);

export default Router;
