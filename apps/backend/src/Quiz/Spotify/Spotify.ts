import SpotifyWebApi from 'spotify-web-api-node';
import { SpotifyClient } from '../../Core/Http/SpotifyClient';
import { SpotifyAuth } from '../../Core/Authentication/SpotifyAuth';

const Spotify = {
    config: {
        redirectUri: process.env.SPOTIFY_REDIRECT_URI,
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    },

    async login(code: string) {
        if (!code) {
            return;
        }

        const data = await new SpotifyWebApi(Spotify.config).authorizationCodeGrant(code);
        SpotifyAuth.user = data.body;

        const profile = await SpotifyClient().get(`me`);

        return profile.data;
    },
};

export default Spotify;
