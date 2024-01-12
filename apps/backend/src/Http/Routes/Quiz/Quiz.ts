import express from 'express';
import {
    Create,
    CreateValidation,
    Index,
    Show,
    ShowValidation,
} from '../../Controllers/Quiz/QuizController';
import { validate } from '../../Validation/Validation';

const QuizRouter = express.Router();

QuizRouter.get('', Index);
QuizRouter.get('/:type', validate([ShowValidation]), Show);
QuizRouter.post('', validate([CreateValidation]), Create);

export default QuizRouter;
