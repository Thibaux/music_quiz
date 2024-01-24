import QuizStorage from '../../Storage/QuizStorage';
import { OptionsService } from '../Options/OptionsService';

export const QuestionsService = {
    get: async (question_id: number, quiz: any) => {
        const session = await QuizStorage.sessions.get(quiz.id);

        const newQuestion = {
            [question_id]: {
                options: OptionsService.generateOptions(quiz),
            },
        };

        await QuizStorage.sessions.set(quiz.id, {
            questions: [newQuestion, ...session],
        });

        return newQuestion;
    },
};
