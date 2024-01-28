import { GuessableServices } from '../../Guessables/GuessableServices';

export const QuestionsBuilder = {
    build: async (user: any) => {
        const service = GuessableServices.get(
            user.quizzes[0].config.guessable_type
        );

        return await service.Builder.init(user).build();
    },
};
