import { Request, Response } from 'express';
import SpotifyWebApi from 'spotify-web-api-node';
import querystring from 'querystring';
import { success } from '../../Helpers/ResponseHelpers';
import { body } from 'express-validator';
import Spotify from '../../../Quiz/Spotify/Spotify';
import { UserService } from '../../../Quiz/User/UserService';
import QuizStorage from '../../../Quiz/Storage/QuizStorage';
import Auth from '../../../Core/Authentication/Auth';

export const LoginValidation = body('code')
    .exists()
    .isString()
    .not()
    .isEmpty()
    .withMessage('Code not provided.');

export const Login = async (req: Request, res: Response) => {
    const { code } = req.body;

    const data = await Spotify.login(code);

    const user = await UserService().findOrCreate(data);

    await QuizStorage.currentUser.set(user);

    return success({ token: Auth.setToken(user) }, res);
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
