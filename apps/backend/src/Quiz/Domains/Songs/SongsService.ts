import { SpotifyClient } from '../../../Core/Http/SpotifyClient';
import { Spotify } from '../../../Config/Spotify';
import { getRandomItemsFromArray } from '../../Helpers/Helpers';
import { Songs } from './Songs';

export const SongsService = {
    handle: async () => {
        const data = await SpotifyClient().get(
            `playlists/${Spotify.playlistsIds.radioVeronica}`
        );

        const tracks = getRandomItemsFromArray(data.data.tracks.items, 9);
        const songs = tracks.map((t) => t.track);

        return new Songs().withSongs(songs).build();
    },
};
