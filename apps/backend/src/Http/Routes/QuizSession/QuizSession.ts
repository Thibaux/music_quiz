import express from 'express';
import { validate } from '../../Validation/Validation';
import { Create, CreateValidation } from '../../Controllers/QuizSession/QuizSessionController';

const QuizSessionRouter = express.Router();

QuizSessionRouter.post('/:type', validate([CreateValidation]), Create);

export default QuizSessionRouter;
