import { NextFunction, Request, Response } from 'express';

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

    return res.status(statusCode).json(response);
};
