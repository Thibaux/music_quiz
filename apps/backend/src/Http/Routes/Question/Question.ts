import express from 'express';
import { Index, IndexValidation } from '../../Controllers/Question/QuestionController';
import { validate } from '../../Validation/Validation';

const QuestionRouter = express.Router();

QuestionRouter.get('', validate([IndexValidation]), Index);

export default QuestionRouter;
