import { IntroHandler } from './Types/IntroHandler';
import { OutroHandler } from './Types/OutroHandler';

export const QuizzesEnum = {
    INTROS: 'INTROS',
    OUTROS: 'OUTROS',
};

export class QuizzesService {
    all = () => {
        return [new IntroHandler(), new OutroHandler()];
    };

    mapped = (): {} => {
        return {
            [QuizzesEnum.INTROS]: new IntroHandler(),
            [QuizzesEnum.OUTROS]: new OutroHandler(),
        };
    };

    get = () => {};
}
