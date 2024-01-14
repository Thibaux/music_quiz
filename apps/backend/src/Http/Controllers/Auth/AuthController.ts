import { Request, Response } from 'express';
import SpotifyWebApi from 'spotify-web-api-node';
import querystring from 'querystring';
import { success } from '../../Helpers/ResponseHelpers';
import { UserService } from '../../../Quiz/Domains/User/UserService';
import { body } from 'express-validator';
import Auth from '../../../Core/Authentication/Auth';
import QuizStorage from '../../../Quiz/Domains/Storage/QuizStorage';
import Spotify from '../../../Core/Authentication/Spotify';

export const LoginValidation = body('code')
    .exists()
    .isString()
    .not()
    .isEmpty()
    .withMessage('Code not provided.');

export const Login = async (req: Request, res: Response) => {
    const { code } = req.body;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    });

    try {
        const { body } = await spotifyApi.authorizationCodeGrant(code);
        Spotify.auth = body;
        const user = await UserService().findOrCreate();

        const token = Auth.setToken(user);
        await QuizStorage.currentUser.set(user);

        return success({ token: token }, res);
    } catch (err) {
        return res.status(400).json({ data: err.message });
    }
};

export const Refresh = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        refreshToken,
    });

    try {
        const {
            body: { access_token, expires_in },
        } = await spotifyApi.refreshAccessToken();

        res.json({ access_token, expires_in });
    } catch (err) {
        res.sendStatus(400);
    }
};

export const Callback = (req: Request, res: Response) => {
    const code = req.query.code || null;
    const state = req.query.state || null;

    if (state === null) {
        res.redirect(
            '/#' +
                querystring.stringify({
                    error: 'state_mismatch',
                })
        );
    } else {
        const token = Buffer.from(
            process.env.SPOTIFY_SPOTIFY_REDIRECT_URI + ':' + process.env.SPOTIFY_REDIRECT_URI
        ).toString('base64');

        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
                grant_type: 'authorization_code',
            },
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + token,
            },
            json: true,
        };
    }
};
