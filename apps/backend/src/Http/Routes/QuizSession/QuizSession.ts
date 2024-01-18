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
import ConfigRouter from './Config/Config';

const QuizSessionRouter = express.Router();

QuizSessionRouter.use(ConfigRouter);

QuizSessionRouter.get('/:id', validate([ShowValidation]), Show);
QuizSessionRouter.put('/:id', validate([UpdateValidation]), Update);
QuizSessionRouter.post('/:type', validate([CreateValidation]), Create);

export default QuizSessionRouter;
