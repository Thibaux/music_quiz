import { BaseQuizHandler } from '../Base/BaseQuizHandler';
import { randomNum } from '../../Helpers/Helpers';
import { QuizzesEnum } from '../QuizzesService';
import { HomeCardType } from '../../../../../../lib/Shared/Types/Domains/Home/Types';

export class IntroHandler extends BaseQuizHandler {
    asResponse = (): HomeCardType => {
        return {
            id: randomNum(),
            title: "Intro's",
            description: 'Guess songs based on the first 30 seconds of the song. This quiz will consist of 9 songs.',
            rules: 'Every correctly guessed song earns you 1 point.',
            icon: 'startArrow',
            url: QuizzesEnum.INTROS.toLowerCase(),
        };
    };
}
