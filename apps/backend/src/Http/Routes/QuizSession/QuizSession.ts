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
import { Index } from '../../Controllers/QuizSession/Config/ConfigController';

const QuizSessionRouter = express.Router();

QuizSessionRouter.get('/:id', validate([ShowValidation]), Show);
QuizSessionRouter.put('/:id', validate([UpdateValidation]), Update);
QuizSessionRouter.post('/:type', validate([CreateValidation]), Create);

QuizSessionRouter.get('/config', Index);

export default QuizSessionRouter;
