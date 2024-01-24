import { Request, Response } from 'express';
import { param } from 'express-validator';
import asyncHandler from 'express-async-handler';
import { success } from '../../Helpers/ResponseHelpers';
import QuizSessionService from '../../../MusicQuiz/Sessions/QuizSessions/QuizSessionService';

export const ShowParamValidation = param('id')
    .exists()
    .isNumeric()
    .not()
    .isEmpty()
    .withMessage('ID is not provided.');

export const Show = asyncHandler(async (req: Request, res: Response) => {
    const quiz = await QuizSessionService.findSession(Number(req.query.session_id));
    // const question = QuestionsService.get(Number(req.params.id), quiz);

    success(quiz, res);
});
