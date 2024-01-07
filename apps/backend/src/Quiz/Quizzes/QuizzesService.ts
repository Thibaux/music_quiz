import { IntroHandler } from './Types/IntroHandler';
import { OutroHandler } from './Types/OutroHandler';

export const QuizzesEnum = {
    INTROS: 'INTROS',
    OUTROS: 'OUTROS',
};

export const QuizzesService = () => {
    const all = () => {
        return [IntroHandler(), OutroHandler()];
    };

    const mapped = (): {} => {
        return {
            [QuizzesEnum.INTROS]: IntroHandler(),
            [QuizzesEnum.OUTROS]: OutroHandler(),
        };
    };

    const get = (type: string) => {
        return mapped()[type];
    };

    return {
        all,
        mapped,
        get,
    };
};
