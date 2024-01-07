import { Request, Response } from 'express';
import { QuizzesEnum, QuizzesService } from '../../../Quiz/Quizzes/QuizzesService';
import { param, validationResult } from 'express-validator';
import { toArray } from '../../../Quiz/Helpers/Helpers';
import { Auth } from '../../../Core/Authentication/TokenDto';

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
    Auth.tokenDTO.access_token = req.headers.authorization;

    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
    }

    const handler = QuizzesService().get(req.params.type as string);

    await handler.handle();

    res.json({ data: handler.asDetails() });
};
