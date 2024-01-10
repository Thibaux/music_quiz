import { HomeCardType } from '../../../../../../lib/Shared/Types/Domains/Home/Types';
import { getRandomItemsFromArray, randomNum } from '../../Helpers/Helpers';
import { SpotifyClient } from '../../../Core/Http/SpotifyClient';
import { Spotify } from '../../../Config/Spotify';
import { SongManager } from '../../Song/Manager/SongMananger';
import { SongMapper } from '../../Song/Mappers/SongMapper';

const chorus = {
    id: randomNum(),
    title: 'Chorus',
    description: 'Guess songs based on chorus. This quiz will consist of 9 songs.',
    rules: 'Every correctly guessed song earns you 1 point.',
    url: '/quiz/chorus',
};

export const ChorusHandler = () => {
    const asIndex = (): HomeCardType => {
        return {
            ...chorus,
            icon: 'startArrow',
        };
    };

    const handle = async () => {
        if (SongManager.songs.length === 0) {
            const data = await SpotifyClient().get(
                `playlists/${Spotify.playlistsIds.radioVeronica}`
            );

            const tracks = getRandomItemsFromArray(data.data.tracks.items, 9);
            SongManager.songs = tracks.map((t) => SongMapper().handle(t.track));

            SongManager.songsIds = SongManager.songs.map((s) => s.spotify_id);
        }

        // activate some kind of song handler
        // where in we generate options for the user
        // play the intro of the song
        // maybe fetch extra data

        // multiple choice options service
        // should be able to chose amount of options
        // amount of options that are from the same artist

        return {
            id: chorus.id,
            title: chorus.title,
            songs: SongManager.songs,
        };
    };

    return { asIndex, handle };
};
