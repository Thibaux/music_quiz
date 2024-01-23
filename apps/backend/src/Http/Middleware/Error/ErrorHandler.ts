import { NextFunction, Request, Response } from 'express';
import Logger from '../../../Core/Logger/Logger';

type Error = {
    status?: number;
    message?: string;
};

export const ErrorHandler = (error: Error, req: Request, res: Response, _next: NextFunction) => {
    const statusCode = error.status || 500;

    const response = {
        data: {
            message: error.message,
        },
    };

    Logger.log().info(error.message);

    return res.status(statusCode).json(response);
};
