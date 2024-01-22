import { Request, Response } from 'express';
import { body } from 'express-validator';
import asyncHandler from 'express-async-handler';
import { success } from '../../../Helpers/ResponseHelpers';
import Auth from '../../../../Core/Authentication/Auth';

export const UpdateValidation = body('playlist_id')
    .exists()
    .isString()
    .withMessage('Playlist ID is not provided');

export const Update = asyncHandler(async (req: Request, res: Response) => {
    const user = await Auth.decodeToken(req);
    const playlistId = req.body.playlist_idd;

    // get quiz session
    // update config with playlist id

    success({}, res);
});
