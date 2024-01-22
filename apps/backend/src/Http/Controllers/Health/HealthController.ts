import { Request, Response } from 'express';

export const Show = async (req: Request, res: Response) => {
    const body = {
        data: {
            message: 'Healthy',
        },
    };

    res.json(body);
};
