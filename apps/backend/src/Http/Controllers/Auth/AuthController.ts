import SpotifyWebApi from 'spotify-web-api-node';
import { Request, Response } from 'express';
import querystring from 'querystring';
import { Auth } from '../../../Core/Authentication/Auth';
import { success } from '../../Helpers/ResponseHelpers';
import { UserService } from '../../../Quiz/Domains/User/UserService';
import { User } from '../../../Quiz/Domains/User/User';

export const Login = async (req: Request, res: Response) => {
    const { code } = req.body;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    });

    try {
        const { body } = await spotifyApi.authorizationCodeGrant(code);
        Auth.tokenDTO = { ...body };

        const currentUser = await UserService().findOrCreate();
        User.user = currentUser;

        return success({ token: Auth.tokenDTO.access_token }, res);
    } catch (err) {
        return res.status(400).json({ data: err.message });
    }
};

export const Refresh = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
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
        const token = Buffer.from(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET).toString(
            'base64'
        );

        const authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: process.env.REDIRECT_URI,
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
