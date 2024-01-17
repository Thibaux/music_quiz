import { Request, Response } from 'express';
import { param } from 'express-validator';
import { toArray } from '../../../Quiz/Helpers/Helpers';
import { error, success } from '../../Helpers/ResponseHelpers';
import { QuizzesEnum } from '../../../Quiz/Quiz/QuizzesEnum';
import { QuizzesService } from '../../../Quiz/Quiz/QuizzesService';

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

        return success(details, res);
    } catch (err) {
        return error(err.message, res);
    }
};
