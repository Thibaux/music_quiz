import { Request, Response } from 'express';
import { Connect } from 'vite';
import Auth from '../../../Core/Authentication/Auth';
import asyncHandler from 'express-async-handler';
import NextFunction = Connect.NextFunction;

export const AuthenticationMiddleware = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
        await Auth.verifyToken(req.headers.authorization);

        next();
    }
);
