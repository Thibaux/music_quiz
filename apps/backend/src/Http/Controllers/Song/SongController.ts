import { Request, Response } from 'express';
import { param, validationResult } from 'express-validator';
import { Auth } from '../../../Core/Authentication/Auth';
import { SongManager } from '../../../Quiz/Song/Manager/SongMananger';
import { SongsService } from '../../../Quiz/Domains/Songs/SongsService';

export const Index = async (req: Request, res: Response) => {
    Auth.tokenDTO.access_token = req.headers.authorization;

    try {
        const songs = await SongsService.handle();

        return res.json({ data: songs });
    } catch (err) {
        return res.status(400).json({ data: err.message });
    }
};

export const ShowValidation = param('id').exists();

export const Show = async (req: Request, res: Response) => {
    Auth.tokenDTO.access_token = req.headers.authorization;

    if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
    }

    const id = SongManager.get(req.params.id);

    return res.json({ data: id });
};
