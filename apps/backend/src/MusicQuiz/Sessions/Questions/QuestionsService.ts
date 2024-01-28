import QuizStorage from '../../Storage/QuizStorage';
import { OptionsService } from '../Options/OptionsService';

export const QuestionsService = {
    get: async (question_id: number, session_id: any) => {
        const session = await QuizStorage.sessions.get(session_id);

        const question = QuestionsService.generateQuestion(question_id, session);

        await QuizStorage.sessions.set(session_id, {
            questions: [question, ...session],
        });

        return question;
    },

    generateQuestion: (question_id: number, session: any) => {
        return {
            [question_id]: {
                options: OptionsService.generateOptions(session),
            },
        };
    },
};
