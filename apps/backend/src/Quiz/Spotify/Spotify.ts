import SpotifyWebApi from 'spotify-web-api-node';
import { SpotifyClient } from '../../Core/Http/SpotifyClient';
import { serializeToken } from '../Helpers/Helpers';

const Spotify = {
    config: {
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    },

    async login(code?: string) {
        if (!code) {
            throw Error('Code is not provided');
        }

        const data = await new SpotifyWebApi(Spotify.config).authorizationCodeGrant(code);

        const profile = await SpotifyClient.init({
            spotify_token: serializeToken(data.body.access_token),
        }).get(`me`);

        return {
            spotifyUser: profile,
            spotifyToken: serializeToken(data.body.access_token),
        };
    },
};

export default Spotify;
