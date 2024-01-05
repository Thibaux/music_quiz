import { randomNum } from '../../Helpers/Helpers';

export abstract class BaseQuizHandler {
    static id = randomNum();

    abstract asResponse(): {};
}
