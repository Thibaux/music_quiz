import { Request, Response } from 'express';
import { QuizzesService } from '../../../Quiz/Domains/Quiz/QuizzesService';
import { body, param } from 'express-validator';
import { toArray } from '../../../Quiz/Helpers/Helpers';
import { QuizzesEnum } from '../../../Quiz/Domains/Quiz/QuizzesEnum';
import { created, error, success } from '../../Helpers/ResponseHelpers';
import { prisma } from '../../../Core/Prisma/Prisma';
import QuizSessionService from '../../../Quiz/Domains/QuizSessions/QuizSessionService';
import { User } from '../../../Quiz/Domains/User/User';

export const Index = async (req: Request, res: Response) => {
    const response = QuizzesService()
        .all()
        .map((handler) => handler.asIndex());

    return success(response, res);
};

export const ShowValidation = param('type')
    .isIn(toArray(QuizzesEnum))
    .withMessage('Type is not one of: ' + toArray(QuizzesEnum).toString());

export const Show = async (req: Request, res: Response) => {
    try {
        const details = await QuizzesService()
            .get(req.params.type as string)
            .asDetails(req.params.id);

        return success(User.user, res);
    } catch (err) {
        return error(err.message, res);
    }
};

export const CreateValidation = body('type')
    .isIn(toArray(QuizzesEnum))
    .withMessage('Type is not one of: ' + toArray(QuizzesEnum).toString());

export const Create = async (req: Request, res: Response) => {
    const quiz = await prisma.quiz_sessions.create({
        data: {
            host_id: 1,
            type: req.body.type,
            hash: QuizSessionService.hashGenerator(),
            config: {},
        },
    });

    if (!quiz) {
        return error('Could not create quiz.', res);
    }

    return created(quiz, res);
};
