import { NextFunction, Request, Response } from 'express';

export const ErrorHandler = (error: any, request: Request, response: Response, next: NextFunction) => {
    console.log(`error ${error.message}`); // log the error
    const status = error.status || 400;

    response.status(status).send(error.message);
};
