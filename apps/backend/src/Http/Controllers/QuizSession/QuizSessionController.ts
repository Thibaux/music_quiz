import { Request, Response } from 'express';
import { param } from 'express-validator';
import { toArray } from '../../../Quiz/Helpers/Helpers';
import Auth from '../../../Core/Authentication/Auth';
import { created, error, success } from '../../Helpers/ResponseHelpers';
import { prisma } from '../../../Core/Prisma/Prisma';
import { QuizzesEnum } from '../../../Quiz/Quiz/QuizzesEnum';
import QuizSessionService from '../../../Quiz/QuizSessions/QuizSessionService';
import ConfigService from '../../../Quiz/QuizSessions/Config/ConfigService';

export const ShowValidation = param('id')
    .exists()
    .isNumeric()
    .not()
    .isEmpty()
    .withMessage('Id not provided');

export const Show = async (req: Request, res: Response) => {
    const quiz = await prisma.quiz_sessions.findUnique({
        where: {
            id: Number(req.params.id),
        },
    });

    if (!quiz) {
        return error('Could not find quiz.', res);
    }

    return success(quiz, res);
};

export const CreateValidation = param('type')
    .exists()
    .isIn(toArray(QuizzesEnum))
    .withMessage('Type is not one of: ' + toArray(QuizzesEnum).toString());

export const Create = async (req: Request, res: Response) => {
    const user = await Auth.decodeToken(req.headers.authorization);

    if (!user) {
        return error('Could not create quiz because user is not known.', res);
    }

    const quiz = await prisma.quiz_sessions.create({
        data: {
            host_user: { connect: { id: user.id } },
            type: req.params.type,
            hash: QuizSessionService.hashGenerator(),
            config: ConfigService.get(),
        },
    });

    if (!quiz) {
        return error('Could not create quiz.', res);
    }

    return created(quiz, res);
};
