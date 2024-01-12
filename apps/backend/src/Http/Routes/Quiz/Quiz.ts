import express from 'express';
import { Index, Show, ShowValidation } from '../../Controllers/Quiz/QuizController';
import { validate } from '../../Validation/Validation';

const QuizRouter = express.Router();

QuizRouter.get('', Index);
QuizRouter.get('/:type', validate([ShowValidation]), Show);

export default QuizRouter;
