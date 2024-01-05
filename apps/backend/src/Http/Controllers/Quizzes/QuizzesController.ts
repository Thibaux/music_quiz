import { Request, Response } from 'express';
import { QuizzesService } from '../../../Quiz/Quizzes/QuizzesService';

export const Index = async (req: Request, res: Response) => {
    const { all } = new QuizzesService();

    const mapped = all().map((handler) => handler.asResponse());

    res.json({ quizzes: mapped });
};
