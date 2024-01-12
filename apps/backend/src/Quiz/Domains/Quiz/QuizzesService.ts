import { IntroHandler } from './Types/IntroHandler';
import { OutroHandler } from './Types/OutroHandler';
import { QuizzesEnum } from './QuizzesEnum';
import { ChorusHandler } from './Types/ChorusHandler';

export const QuizzesService = () => {
    const all = () => {
        return [IntroHandler(), OutroHandler(), ChorusHandler()];
    };

    const mapped = () => {
        return {
            [QuizzesEnum.INTROS]: IntroHandler(),
            [QuizzesEnum.OUTROS]: OutroHandler(),
            [QuizzesEnum.CHORUS]: ChorusHandler(),
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
