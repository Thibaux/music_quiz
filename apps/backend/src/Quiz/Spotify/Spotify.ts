import SpotifyWebApi from 'spotify-web-api-node';
import { SpotifyClient } from '../../Core/Http/SpotifyClient';
import { SpotifyAuth } from '../../Core/Authentication/SpotifyAuth';

const Spotify = {
    config: {
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    },

    async login(code?: string) {
        let data = null;

        if (!code) {
            throw Error('Code is not provided');
        }

        try {
            data = await new SpotifyWebApi(Spotify.config).authorizationCodeGrant(code);
        } catch (err) {
            throw Error('Spotify login error: ' + err.message);
        }

        SpotifyAuth.user = data.body;

        const profile = await SpotifyClient().get(`me`);

        return profile.data;
    },
};

export default Spotify;
