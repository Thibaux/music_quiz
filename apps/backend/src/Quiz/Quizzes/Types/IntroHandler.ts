import { HomeCardType } from '../../../../../../lib/Shared/Types/Domains/Home/Types';
import { getRandomItemsFromArray, randomNum } from '../../Helpers/Helpers';
import { SpotifyClient } from '../../../Core/Http/SpotifyClient';
import { Quiz } from '../../../Config/Quiz';

const intro = {
    id: randomNum(),
    title: "Intro's",
    description:
        'Guess songs based on the first 30 seconds of the song. This quiz will consist of 9 songs.',
    rules: 'Every correctly guessed song earns you 1 point.',
    url: '/quiz/intros',
};

export const IntroHandler = () => {
    let tracks = [];

    const handle = async () => {
        const data = await SpotifyClient().get(
            `playlists/${Quiz.playlistsIds.radioVeronica}`
        );

        tracks = getRandomItemsFromArray(data.data.tracks.items, 9);

        // activate some kind of song handler
        // where in we generate options for the user
        // play the intro of the song
        // maybe fetch extra data

        // multiple choice options service
        // should be able to chose amount of options
        // amount of options that are from the same artist
    };

    const asIndex = (): HomeCardType => {
        return {
            ...intro,
            icon: 'startArrow',
        };
    };

    const asDetails = (): {} => {
        return {
            id: intro.id,
            title: intro.title,
            tracks: tracks,
        };
    };

    return {
        handle,
        asIndex,
        asDetails,
    };
};
