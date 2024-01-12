import { HomeCardType } from '../../../../../../../lib/Types/Domains/Home/Types';

export type BaseQuizHandlerType = {
    asIndex: () => HomeCardType;
    asDetails: (id: any) => any;
    handle: (quizID: number) => any;
};
