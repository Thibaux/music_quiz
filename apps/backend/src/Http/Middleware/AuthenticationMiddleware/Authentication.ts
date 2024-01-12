import { Request, Response } from 'express';
import { Connect } from 'vite';
import { Auth } from '../../../Core/Authentication/Auth';
import NextFunction = Connect.NextFunction;

export const AuthenticationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    Auth.tokenDTO.access_token = req.headers.authorization;

    next();
};
