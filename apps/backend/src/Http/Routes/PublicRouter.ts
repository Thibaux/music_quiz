import express from 'express';
import HealthRouter from './Health/Health';
import AuthRouter from './Auth/Auth';
import QuizRouter from './Quiz/Quiz';

const PublicRouter = express.Router();

PublicRouter.use(HealthRouter);
PublicRouter.use('/auth', AuthRouter);
PublicRouter.use('/quiz', QuizRouter);

export default PublicRouter;
