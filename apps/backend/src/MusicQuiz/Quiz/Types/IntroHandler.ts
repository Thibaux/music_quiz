import { BaseQuizHandlerType } from '../Base/BaseQuizHandlerType';
import { randomNum } from '../../Helpers/Helpers';
import { HomeCardType } from '../../../../../../lib/Types/Domains/Home/Types';
import { QuizzesEnum } from '../QuizzesEnum';

const intro = {
    id: randomNum(),
    type: QuizzesEnum.INTROS,
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
        return { intro };

        // try {
        //     const quiz = await prisma.quiz_sessions.findFirstOrThrow(id);
        //     return { ...intro, quiz };
        // } catch (e) {
        //     return { message: 'MusicQuiz not found.' };
        // }
    };

    const handle = async () => {
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
        };
    };

    return { asIndex, asDetails, handle };
};
