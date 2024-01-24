import { randomNum } from '../../Helpers/Helpers';
import { prisma } from '../../../Core/Prisma/Prisma';
import { QuizzesEnum } from '../QuizzesEnum';

const outro = {
    id: randomNum(),
    type: QuizzesEnum.OUTROS,
    title: "Outro's",
    description:
        'Guess songs based on the last 30 seconds of the song. This quiz will consist of 9 songs.',
    rules: 'Every correctly guessed song earns you 1 point.',
    url: '/quiz/outros',
};

export const OutroHandler = () => {
    const asIndex = () => {
        return {
            ...outro,
            icon: 'endArrow',
        };
    };

    const asDetails = async (id: any) => {
        const quiz = await prisma.quiz_sessions.findFirst(id);

        return {
            ...outro,
            quiz,
        };
    };

    const handle = () => {
        return {
            id: outro.id,
            title: outro.title,
        };
    };

    return { asIndex, asDetails, handle };
};
