import express from 'express';
import { validate } from '../../Validation/Validation';
import {
    Create,
    CreateValidation,
    Show,
    ShowValidation,
    Update,
    UpdateValidation,
} from '../../Controllers/QuizSession/QuizSessionController';
import QuestionRouter from '../Question/Question';

const QuizSessionRouter = express.Router();

QuizSessionRouter.get('/:id', validate([ShowValidation]), Show);
QuizSessionRouter.put('/:id', validate([UpdateValidation]), Update);
QuizSessionRouter.post('', validate([CreateValidation]), Create);

QuizSessionRouter.use('/:id/questions', QuestionRouter);

export default QuizSessionRouter;
