import { Request, Response } from 'express';
import { param } from 'express-validator';
import { toArray } from '../../../Quiz/Helpers/Helpers';
import Auth from '../../../Core/Authentication/Auth';
import { created, error } from '../../Helpers/ResponseHelpers';
import { prisma } from '../../../Core/Prisma/Prisma';
import { QuizzesEnum } from '../../../Quiz/Quiz/QuizzesEnum';
import QuizSessionService from '../../../Quiz/QuizSessions/QuizSessionService';
import ConfigService from '../../../Quiz/QuizSessions/Config/ConfigService';

export const CreateValidation = param('type')
    .isIn(toArray(QuizzesEnum))
    .withMessage('Type is not one of: ' + toArray(QuizzesEnum).toString());

export const Create = async (req: Request, res: Response) => {
    const user = await Auth.decodeToken(req.headers.authorization);

    if (!user) {
        return error('Could not create quiz because user is not known.', res);
    }

    const quizSession = {
        host_user: { connect: { id: user.id } },
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
