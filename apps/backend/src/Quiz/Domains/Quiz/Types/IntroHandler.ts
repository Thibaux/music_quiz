import { HomeCardType } from '../../../../../../../lib/Types/Domains/Home/Types';
import { getRandomItemsFromArray, randomNum } from '../../../Helpers/Helpers';
import { SpotifyClient } from '../../../../Core/Http/SpotifyClient';
import { Spotify } from '../../../../Config/Spotify';
import { SongManager } from '../../../Song/Manager/SongMananger';
import { SongMapper } from '../../../Song/Mappers/SongMapper';
import { BaseQuizHandlerType } from '../Base/BaseQuizHandlerType';
import prisma from '../../../../Core/Prisma/Prisma';

const intro = {
    id: randomNum(),
    title: "Intro's",
    description:
        'Guess songs based on the first 30 seconds of the song. This quiz will consist of 9 songs.',
    rules: 'Every correctly guessed song earns you 1 point.',
    url: '/quiz/intros',
};

export const IntroHandler = (): BaseQuizHandlerType => {
    const asIndex = (): HomeCardType => {
        return {
            ...intro,
            icon: 'startArrow',
        };
    };

    const asDetails = async (id: any) => {
        const quiz = await prisma.quizzes.findFirst(id);

        return {
            ...intro,
            quiz,
        };
    };

    const handle = async () => {
        if (SongManager.songs.length === 0) {
            const data = await SpotifyClient().get(
                `playlists/${Spotify.playlistsIds.radioVeronica}`
            );

            const tracks = getRandomItemsFromArray(data.data.tracks.items, 9);
            SongManager.songs = tracks.map((t) => SongMapper().handle(t.track));
        }

        // activate some kind of song handler
        // where in we generate options for the user
        // play the intro of the song
        // maybe fetch extra data

        // multiple choice options service
        // should be able to chose amount of options
        // amount of options that are from the same artist

        return {
            id: intro.id,
            title: intro.title,
            songs: SongManager.songs,
        };
    };

    return { asIndex, asDetails, handle };
};
