import { BaseQuizHandler } from '../Base/BaseQuizHandler';
import { randomNum } from '../../Helpers/Helpers';

export class OutroHandler extends BaseQuizHandler {
    asResponse = () => {
        return {
            id: randomNum(),
            title: "Outro's",
            description: 'Guess songs based on the last 30 seconds of the song.',
            rules: 'Every correctly guessed song earns you 1 point.',
            image: 'outro',
        };
    };
}
