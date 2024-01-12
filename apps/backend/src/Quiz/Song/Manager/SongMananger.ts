import { SongType } from '../../../../../../lib/Types/Domains/Quiz/Types';

export const SongManager = {
    songs: [] as SongType[],
    songsIds: [] as string[],

    get: (id: string) => {
        for (const songId of SongManager.songsIds) {
            if (songId === id) {
                return songId;
            }
        }
    },
};
