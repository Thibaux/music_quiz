import express from 'express';
import {
    Create,
    CreateValidation,
    Index,
    Show,
    ShowValidation,
} from '../../Controllers/Quiz/QuizController';

const QuizRouter = express.Router();

QuizRouter.get('/', Index);
QuizRouter.get('/:type', ShowValidation, Show);
QuizRouter.post('/:type', CreateValidation, Create);

export default QuizRouter;
