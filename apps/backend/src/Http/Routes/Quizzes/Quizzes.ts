import express from 'express';
import { Index } from '../../Controllers/Quizzes/QuizzesController';

const QuizzesRouter = express.Router();

QuizzesRouter.get('/', Index);

export default QuizzesRouter;
