import { BaseQuizHandler } from '../Base/BaseQuizHandler';
import { randomNum } from '../../Helpers/Helpers';
import { QuizzesEnum } from '../QuizzesService';
import { HomeCardType } from '../../../../../../lib/Shared/Types/Domains/Home/Types';

export class OutroHandler extends BaseQuizHandler {
    asResponse = (): HomeCardType => {
        return {
            id: randomNum(),
            title: "Outro's",
            description: 'Guess songs based on the last 30 seconds of the song. This quiz will consist of 9 songs.',
            rules: 'Every correctly guessed song earns you 1 point.',
            icon: 'endArrow',
            url: QuizzesEnum.OUTROS.toLowerCase(),
        };
    };
}
