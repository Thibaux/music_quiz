import { Request, Response } from 'express';
import { param } from 'express-validator';
import asyncHandler from 'express-async-handler';
import { success } from '../../Helpers/ResponseHelpers';
import QuizSessionService from '../../../MusicQuiz/Sessions/QuizSessions/QuizSessionService';
import Auth from '../../../Core/Authentication/Auth';

export const ShowParamValidation = param('question_id')
    .exists()
    .isNumeric()
    .not()
    .isEmpty()
    .withMessage('Question ID is not provided.');

export const Show = asyncHandler(async (req: Request, res: Response) => {
    const user = await Auth.decodeToken(req);
    const quiz = await QuizSessionService.findSessionByHost(user);
    // const question = QuestionsService.get(Number(req.params.id), quiz);

    success(quiz, res);
});
