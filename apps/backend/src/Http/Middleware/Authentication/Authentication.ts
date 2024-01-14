import { Request, Response } from 'express';
import { Connect } from 'vite';
import { unauthorized } from '../../Helpers/ResponseHelpers';
import Auth from '../../../Core/Authentication/Auth';
import NextFunction = Connect.NextFunction;

export const AuthenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
        return unauthorized(res);
    }

    await Auth.verifyToken(req.headers.authorization);

    next();
};
