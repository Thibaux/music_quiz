import { Request, Response } from 'express';
import { param } from 'express-validator';
import { toArray } from '../../../Quiz/Helpers/Helpers';
import Auth from '../../../Core/Authentication/Auth';
import { prisma } from '../../../Core/Prisma/Prisma';
import { QuizzesEnum } from '../../../Quiz/Quiz/QuizzesEnum';
import QuizSessionService from '../../../Quiz/QuizSessions/QuizSessionService';
import ConfigService from '../../../Quiz/QuizSessions/Config/ConfigService';
import { QuizStatus } from '../../../Quiz/QuizSessions/Status';
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
    .withMessage('Quiz session ID is not provided.');

export const CreateValidation = param('type')
    .exists()
    .isIn(toArray(QuizzesEnum))
    .withMessage('Type is not one of: ' + toArray(QuizzesEnum).toString());

export const Show = asyncHandler(async (req: Request, res: Response) => {
    const session = await QuizSessionService.findSession(Number(req.params.id));

    success(session, res);
});

export const Update = asyncHandler(async (req: Request, res: Response) => {
    const user = await Auth.decodeToken(req);

    if (!user) {
        error('Could not update quiz because user is not known.', res);
    }

    const session = await QuizSessionService.findSession(Number(req.params.id));

    const updatedSession = QuizSessionService.updateSession(session);

    success(updatedSession, res);
});

export const Create = asyncHandler(async (req: Request, res: Response) => {
    const user = await Auth.decodeToken(req);

    if (!user) {
        error('Could not create quiz because user is not known.', res);
    }

    const quiz = await prisma.quiz_sessions.create({
        data: {
            host_user: { connect: { id: user.id } },
            type: req.params.type,
            status: QuizStatus.CREATED,
            hash: QuizSessionService.hashGenerator(),
            config: ConfigService.getConfig(),
        },
    });

    if (!quiz) {
        error('Could not create quiz.', res);
    }

    created(quiz, res);
});
