import { Request, Response } from 'express';
import { query } from 'express-validator';
import asyncHandler from 'express-async-handler';
import Auth from '../../../Core/Authentication/Auth';
import { SpotifyClient } from '../../../Core/Http/SpotifyClient';
import { success } from '../../Helpers/ResponseHelpers';

export const SearchValidation = query('term')
    .exists()
    .isString()
    .withMessage('Search term is not provided');

export const Search = asyncHandler(async (req: Request, res: Response) => {
    const user = await Auth.decodeToken(req);
    const term = req.query.term;

    const data = await SpotifyClient.init(user).get(`search?q=${term}&type=playlist`);

    const playlists = data.playlists.items.map((playlist: any) => {
        return {
            id: playlist.id,
            title: playlist.name,
            image: playlist.images[0].url,
            total_amount_tracks: playlist.tracks.total,
            spotify_url: playlist.external_urls.spotify,
        };
    });

    success(playlists, res);
});
