import { Request, Response } from 'express';
import { Connect } from 'vite';
import { validationResult } from 'express-validator';
import NextFunction = Connect.NextFunction;

export const ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
    }

    next();
};
