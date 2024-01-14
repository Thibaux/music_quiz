import { Request, Response } from 'express';
import { param } from 'express-validator';
import { SongsService } from '../../../Quiz/Domains/Songs/SongsService';

export const Index = async (req: Request, res: Response) => {
    try {
        const songs = await SongsService.handle();

        return res.json({ data: songs });
    } catch (err) {
        return res.status(400).json({ data: err.message });
    }
};

export const ShowValidation = param('id').exists();

export const Show = async (req: Request, res: Response) => {
    // return res.json({ data: id });
};
