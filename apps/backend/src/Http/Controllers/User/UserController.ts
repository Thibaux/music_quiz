import SpotifyWebApi from 'spotify-web-api-node';
import { Request, Response } from 'express';

export const SetDetails = async (req: Request, res: Response) => {
    const { code } = req.body;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    });

    try {
        const { body } = await spotifyApi.authorizationCodeGrant(code);

        res.json({ ...body });
    } catch (err) {
        res.sendStatus(400);
    }
};
