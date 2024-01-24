import { Request, Response } from 'express';
import { body, param } from 'express-validator';
import { toArray } from '../../../MusicQuiz/Helpers/Helpers';
import Auth from '../../../Core/Authentication/Auth';
import { QuizzesEnum } from '../../../MusicQuiz/Quiz/QuizzesEnum';
import QuizSessionService from '../../../MusicQuiz/Sessions/QuizSessions/QuizSessionService';
import asyncHandler from 'express-async-handler';
import { created, error, success } from '../../Helpers/ResponseHelpers';

export const ShowValidation = param('id')
    .exists()
    .isNumeric()
    .not()
    .isEmpty()
    .withMessage('ID not provided');

export const UpdateValidation = param('id')
    .exists()
    .isNumeric()
    .withMessage('MusicQuiz session ID is not provided.');

export const CreateValidation = body('type')
    .exists()
    .isIn(toArray(QuizzesEnum))
    .withMessage('Type is not one of: ' + toArray(QuizzesEnum).toString());

export const Show = asyncHandler(async (req: Request, res: Response) => {
    const session = await QuizSessionService.findSession(Number(req.params.id));

    success(session, res);
});

export const Update = asyncHandler(async (req: Request, res: Response) => {
    const user = await Auth.decodeToken(req);
    if (!user) error('Could not update quiz because user is not known.', res);

    const session = await QuizSessionService.findSession(Number(req.params.id));
    const updatedSession = QuizSessionService.updateSession(session);

    success(updatedSession, res);
});

export const Create = asyncHandler(async (req: Request, res: Response) => {
    const user = await Auth.decodeToken(req);
    if (!user) error('Could not create quiz because user is not known.', res);

    const quiz = await QuizSessionService.createSession(user, req.body.type, req.body.playlist);

    created(quiz, res);
});
