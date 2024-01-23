import { Request, Response } from 'express';
import { query } from 'express-validator';
import asyncHandler from 'express-async-handler';
import { success } from '../../Helpers/ResponseHelpers';
import QuizStorage from '../../../Quiz/Storage/QuizStorage';

export const IndexValidation = query('session_id')
    .exists()
    .isNumeric()
    .not()
    .isEmpty()
    .withMessage('Session ID is not provided.');

export const Index = asyncHandler(async (req: Request, res: Response) => {
    const questions = await QuizStorage.sessions.get(Number(req.query.session_id));

    success(questions, res);
});
