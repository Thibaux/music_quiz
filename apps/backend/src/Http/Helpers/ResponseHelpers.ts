import { Response } from 'express';

export const error = (message: string, res: Response) => {
    return res.status(400).json({ data: message });
};

export const success = (payload: any, res: Response) => {
    return res.status(200).json({ data: payload });
};

export const created = (payload: object, res: Response) => {
    return res.status(201).json({ data: payload });
};
