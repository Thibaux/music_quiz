import { Request, Response } from 'express';
import { param } from 'express-validator';
import { toArray } from '../../../Quiz/Helpers/Helpers';
import { QuizzesEnum } from '../../../Quiz/Domains/Quiz/QuizzesEnum';
import { created, error } from '../../Helpers/ResponseHelpers';
import { prisma } from '../../../Core/Prisma/Prisma';
import QuizSessionService from '../../../Quiz/Domains/QuizSessions/QuizSessionService';
import { CurrentUser } from '../../../Quiz/Domains/User/CurrentUser';
import ConfigService from '../../../Quiz/Domains/QuizSessions/Config/ConfigService';

export const Show = async (req: Request, res: Response) => {
    // try {
    //     const details = await QuizzesService()
    //         .get(req.params.type as string)
    //         .asDetails(req.params.id);
    //
    //     return success(details, res);
    // } catch (err) {
    //     return error(err.message, res);
    // }
};

export const CreateValidation = param('type')
    .isIn(toArray(QuizzesEnum))
    .withMessage('Type is not one of: ' + toArray(QuizzesEnum).toString());

export const Create = async (req: Request, res: Response) => {
    if (!CurrentUser.user.id) {
        return error('Could not create quiz because user is not known.', res);
    }

    const quizSession = {
        host_user: {
            connect: {
                id: CurrentUser.user.id,
            },
        },
        type: req.params.type,
        hash: QuizSessionService.hashGenerator(),
        config: ConfigService.get(),
    };

    const quiz = await prisma.quiz_sessions.create({ data: quizSession });

    if (!quiz) {
        return error('Could not create quiz.', res);
    }

    return created(quiz, res);
};
