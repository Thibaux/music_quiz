import { Response } from 'express';

export const unauthorized = (res: Response) => {
    return res.status(401).json({ data: 'User is not authorized' });
};

export const error = (message: string, res: Response) => {
    return res.status(400).json({ data: message });
};

export const success = (payload: any, res: Response) => {
    return res.status(200).json({ data: payload });
};

export const created = (payload: object, res: Response) => {
    return res.status(201).json({ data: payload });
};
