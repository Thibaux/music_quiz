import { getRandomItemsFromArray, randomNum } from '../../../Helpers/Helpers';
import { SpotifyClient } from '../../../../Core/Http/SpotifyClient';
import { Spotify } from '../../../../Config/Spotify';
import { BaseQuizHandlerType } from '../Base/BaseQuizHandlerType';
import { HomeCardType } from '../../../../../../../lib/Types/Domains/Home/Types';
import { prisma } from '../../../../Core/Prisma/Prisma';

const chorus = {
    id: randomNum(),
    title: 'Chorus',
    description: 'Guess songs based on chorus. This quiz will consist of 9 songs.',
    rules: 'Every correctly guessed song earns you 1 point.',
    url: '/quiz/chorus',
};

export const ChorusHandler = (): BaseQuizHandlerType => {
    const asIndex = (): HomeCardType => {
        return {
            ...chorus,
            icon: 'startArrow',
        };
    };

    const asDetails = async (id: any) => {
        const quiz = await prisma.quiz_sessions.findFirst(id);

        return {
            ...chorus,
            quiz,
        };
    };

    const handle = async (quizID: number) => {
        const data = await SpotifyClient().get(`playlists/${Spotify.playlistsIds.radioVeronica}`);

        const tracks = getRandomItemsFromArray(data.data.tracks.items, 9);

        tracks.map(async (t: any) => {
            await prisma.songs.createMany({
                data: {
                    quiz_session_id: quizID,
                    spotify_id: t.track.id,
                    title: t.track.name,
                    chorus_url: t.track.preview_url,
                },
            });
        });

        await prisma.songs.findMany();

        // activate some kind of song handler
        // where in we generate options for the user
        // play the intro of the song
        // maybe fetch extra data

        // multiple choice options service
        // should be able to chose amount of options
        // amount of options that are from the same artist
    };

    return { asIndex, asDetails, handle };
};
