import { Request, Response } from 'express';
import { Connect } from 'vite';
import { unauthorized } from '../../Helpers/ResponseHelpers';
import NextFunction = Connect.NextFunction;

export const AuthenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return unauthorized(res);
    }

    next();
};
