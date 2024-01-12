import express from 'express';
import { validate } from '../../Validation/Validation';
import {
    Create,
    CreateValidation,
    Show,
} from '../../Controllers/QuizSession/QuizSessionController';

const QuizSessionRouter = express.Router();

QuizSessionRouter.get('/:id', Show);
QuizSessionRouter.post('/:type', validate([CreateValidation]), Create);

export default QuizSessionRouter;
