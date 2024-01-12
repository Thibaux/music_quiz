import { NextFunction, Request, Response } from 'express';
import { AuthenticationMiddleware } from './AuthenticationMiddleware/Authentication';
import { ValidationMiddleware } from './ValidationMiddleware/Validation';

export const Middleware = (req: Request, res: Response, next: NextFunction) => {
    AuthenticationMiddleware(req, res, next);
    ValidationMiddleware(req, res, next);
};
