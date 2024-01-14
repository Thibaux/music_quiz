import express from 'express';
import { validate } from '../../Validation/Validation';
import {
    Create,
    CreateValidation,
    Show,
    ShowValidation,
} from '../../Controllers/QuizSession/QuizSessionController';

const QuizSessionRouter = express.Router();

QuizSessionRouter.get('/:id', validate([ShowValidation]), Show);
QuizSessionRouter.post('/:type', validate([CreateValidation]), Create);

export default QuizSessionRouter;
