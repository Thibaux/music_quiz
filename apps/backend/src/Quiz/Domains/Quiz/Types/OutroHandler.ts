import { randomNum } from '../../../Helpers/Helpers';
import { HomeCardType } from '../../../../../../../lib/Shared/Types/Domains/Home/Types';

const outro = {
    id: randomNum(),
    title: "Outro's",
    description:
        'Guess songs based on the last 30 seconds of the song. This quiz will consist of 9 songs.',
    rules: 'Every correctly guessed song earns you 1 point.',
    url: '/quiz/outros',
};

export const OutroHandler = () => {
    const handle = () => {
        console.log('handling');
        // fetch playlist
        // get the ids of 9 random songs
    };

    const asIndex = (): HomeCardType => {
        return {
            ...outro,
            icon: 'endArrow',
        };
    };

    const asDetails = (): {} => {
        return {
            id: outro.id,
            title: outro.title,
        };
    };

    return {
        asIndex,
        asDetails,
    };
};
