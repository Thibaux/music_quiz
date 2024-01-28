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

        const data = await new SpotifyWebApi(
            Spotify.config
        ).authorizationCodeGrant(code);

        const profile = await SpotifyClient.init({
            spotify_token: serializeToken(data.body.access_token),
        }).get(`me`);

        return {
            ...profile,
            spotify_token: serializeToken(data.body.access_token),
        };
    },

    async fetchPlaylist(user: any, playlistId: string) {
        if (!playlistId) {
            throw Error('Playlist ID is not provided');
        }

        const params = new URLSearchParams({
            fields: 'id,name,external_urls,images,tracks(total,next,items(track(href,name,preview_url,artists(name,images)))',
        });

        const cleanParams = params.toString().replace(/\%2C/g, ',');

        const result = await SpotifyClient.init(user).get(
            `playlists/${playlistId}?${cleanParams}`
        );

        const playlist = {
            id: result.id,
            name: result.name,
            image: result.images[0],
            spotify_url: result.external_urls.spotify,
            number_of_tracks: result.tracks.total,
            tracks_next_url: result.tracks.next,
            tracks: result.tracks.items.map((item: any) => item.track),
        };

        return { playlist };
    },
};

export default Spotify;
