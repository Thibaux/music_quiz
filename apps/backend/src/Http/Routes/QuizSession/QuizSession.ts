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
import Router from '../Router';

const QuizSessionRouter = express.Router();

QuizSessionRouter.get('/:id', validate([ShowValidation]), Show);
QuizSessionRouter.put('/:id', validate([UpdateValidation]), Update);

Router.use('/:id/questions', QuestionRouter);

QuizSessionRouter.post('', validate([CreateValidation]), Create);

export default QuizSessionRouter;
