import { Request, Response } from 'express';
import { QuizzesService } from '../../../Quiz/Domains/Quiz/QuizzesService';
import { body, param } from 'express-validator';
import { toArray } from '../../../Quiz/Helpers/Helpers';
import { QuizzesEnum } from '../../../Quiz/Domains/Quiz/QuizzesEnum';
import { created, error, success } from '../../Helpers/ResponseHelpers';
import prisma from '../../../Core/Prisma/Prisma';

export const Index = async (req: Request, res: Response) => {
    const response = QuizzesService()
        .all()
        .map((handler) => handler.asIndex());

    return success(response, res);
};

export const ShowValidation = param('type')
    .toUpperCase()
    .isIn(toArray(QuizzesEnum))
    .withMessage('Type is not one of: ' + toArray(QuizzesEnum).toString().toLowerCase());

export const Show = async (req: Request, res: Response) => {
    try {
        const details = await QuizzesService()
            .get(req.params.type as string)
            .asDetails(req.params.id);

        return success(details, res);
    } catch (err) {
        return error(err.message, res);
    }
};

export const CreateValidation = body('type')
    .toUpperCase()
    .isIn(toArray(QuizzesEnum))
    .withMessage('Type is not one of: ' + toArray(QuizzesEnum).toString().toLowerCase());

export const Create = async (req: Request, res: Response) => {
    const quiz = await prisma.quizzes.create({
        data: {
            type: req.body.type,
            users_id: 1,
        },
    });

    if (!quiz) {
        return error('Could not create quiz.', res);
    }

    return created(quiz, res);
};
