import { Request, Response } from 'express';
import { QuizzesService } from '../../../Quiz/Domains/Quiz/QuizzesService';
import { body, param } from 'express-validator';
import { toArray } from '../../../Quiz/Helpers/Helpers';
import { QuizzesEnum } from '../../../Quiz/Domains/Quiz/QuizzesEnum';
import prisma from '../../../Core/Prisma/Prisma';

export const Index = async (req: Request, res: Response) => {
    const response = QuizzesService()
        .all()
        .map((handler) => handler.asIndex());

    res.json({ data: response });
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

        return res.json({ data: details });
    } catch (err) {
        return res.status(400).json({ data: err.message });
    }
};

export const CreateValidation = body('type')
    .isIn(toArray(QuizzesEnum))
    .withMessage('Type is not one of: ' + toArray(QuizzesEnum).toString().toLowerCase());

export const Create = async (req: Request, res: Response) => {
    try {
        const quiz = await prisma.quizzes.create({
            data: {
                type: req.body.type,
                users_id: 11,
            },
        });

        return res.json({ data: quiz });
    } catch (err) {
        return res.status(400).json({ data: err.message });
    }
};
