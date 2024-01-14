import { Request, Response } from 'express';
import { Connect } from 'vite';
import Auth from '../../../Core/Authentication/Auth';
import { unauthorized } from '../../Helpers/ResponseHelpers';
import NextFunction = Connect.NextFunction;

export const AuthenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const result = await Auth.verifyToken(req.headers.authorization);

    if (result.hasFailed()) {
        return unauthorized(res);
    }

    next();
};
