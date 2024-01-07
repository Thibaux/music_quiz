import express from 'express';
import { Index, Show, ShowValidation } from '../../Controllers/Quiz/QuizController';

const QuizRouter = express.Router();

QuizRouter.get('/', Index);
QuizRouter.get('/:type', ShowValidation, Show);

export default QuizRouter;
