import { Request, Response } from 'express';
import { body } from 'express-validator';
import asyncHandler from 'express-async-handler';

export const UpdateValidation = body('playlist_id')
    .exists()
    .isString()
    .withMessage('Playlist ID is not provided');

export const Index = asyncHandler(async (req: Request, res: Response) => {
    // get playlists
});
