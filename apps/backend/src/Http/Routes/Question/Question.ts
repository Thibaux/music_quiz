import express from 'express';
import { Show, ShowParamValidation } from '../../Controllers/Question/QuestionController';
import { validate } from '../../Validation/Validation';

const QuestionRouter = express.Router();

QuestionRouter.get('/:id', validate([ShowParamValidation]), Show);

export default QuestionRouter;
