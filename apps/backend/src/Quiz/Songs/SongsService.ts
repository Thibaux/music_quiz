import { SpotifyClient } from '../../Core/Http/SpotifyClient';
import { Spotify } from '../../Config/Spotify';
import { getRandomItemsFromArray } from '../Helpers/Helpers';
import prisma from '../../Core/Prisma/Prisma';

export const SongsService = {
    handle: async () => {
        const songs = await SongsService.fetchSongs();

        for (const song of songs) {
            await SongsService.writeSong(song);
        }
    },

    fetchSongs: async () => {
        const data = await SpotifyClient().get(
            `playlists/${Spotify.playlistsIds.radioVeronica}`
        );

        const tracks = getRandomItemsFromArray(data.data.tracks.items, 9);
        return tracks.map((t) => t.track);
    },

    writeSong: async (song: any) => {
        await prisma.song.createMany({
            data: {
                spotify_id: song.id,
                title: song.name,
                chorus_url: song.preview_url,
            },
        });
    },
};
