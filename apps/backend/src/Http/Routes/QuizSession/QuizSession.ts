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

const QuizSessionRouter = express.Router();

QuizSessionRouter.get('/:id', validate([ShowValidation]), Show);
QuizSessionRouter.put('/:id', validate([UpdateValidation]), Update);
QuizSessionRouter.post('', validate([CreateValidation]), Create);

export default QuizSessionRouter;
