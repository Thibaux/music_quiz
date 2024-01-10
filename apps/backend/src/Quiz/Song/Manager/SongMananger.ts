import { Type as SongType } from '../DTO/SongDTO';

export const SongManager = {
    songs: [] as SongType[],
    songsIds: [] as string[],

    get: (id: string) => {
        for (const songId of SongManager.songsIds) {
            if (songId === id) {
                return songId;
            }
        }

        // return SongManager.songsIds.map((songsId: string) => id === id);

        // if (SongManager.songs.length === 0) {
        //     return null;
        // }
        //
        // SongManager.songs.forEach((element) => {
        //     console.log(element);
        //
        //     if (element.spotify_id == id) {
        //         return element;
        //     }
        // });
    },
};
