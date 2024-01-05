import { BaseQuizHandler } from '../Base/BaseQuizHandler';
import { randomNum } from '../../Helpers/Helpers';

export class IntroHandler extends BaseQuizHandler {
    asResponse = () => {
        return {
            id: randomNum(),
            title: "Intro's",
            description: 'Guess songs based on the first 30 seconds of the song.',
            rules: 'Every correctly guessed song earns you 1 point.',
            image: 'intro',
        };
    };
}
